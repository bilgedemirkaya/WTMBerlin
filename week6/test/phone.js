import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new phone', async t => {
  t.plan(3)
  const newlyCreatedphone = {
    name: 'iphone',
    user : "pupu",
    apps: []
  }

  const res = await request(app)
    .post('/phone')
    .send(newlyCreatedphone)

  t.is(res.status, 200)
  t.is(res.body.name, newlyCreatedphone.name)
  
  t.deepEqual(res.body.apps, newlyCreatedphone.apps)
})

test('Fetch a phone', async t => {
  t.plan(3)
  const newlyCreatedphone = {
    name: 'pupusphone',
    user : "pupu",
    apps: []
  }

  // first create a phone
  const Mimisphone = (await request(app)
    .post('/phone')
    .send(newlyCreatedphone)).body

  // fetch the phone
  const fetchRes = await request(app).get(`/phone/${Mimisphone._id}`)
  
  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/phone/${Mimisphone._id}/json`)

  t.is(fetchResJson.status, 200)

  // compare two
  const MimisFetched = fetchResJson.body
  t.deepEqual(MimisFetched, Mimisphone)
})

test('Delete a phone', async t => {
  t.plan(4)

  const newlyCreatedphone = {
    name: 'lalassphone',
    user : "lala",
    apps: []
  }
  // add to database  
  const lalaphone = (await request(app)
    .post('/phone')
    .send(newlyCreatedphone)).body

  // delete the phone
  const deleteRes = await request(app).delete(`/phone/${lalaphone._id}`)
  
  // status check
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  // expect status 404
  const notFound = await request(app).get(`/phone/${lalaphone._id}`)
  t.is(notFound.status, 404)

  
  const nFoundJson = await request(app).get(`/phone/${lalaphone._id}/json`)
  t.is(nFoundJson.status, 404)
})

test('Get list of phones', async t => {
  t.plan(4)
  
  const res = await request(app).get('/phone/all')
  t.is(res.status, 200)

  // Json
  const jsonRes = await request(app).get('/phone/all/json')
  t.is(jsonRes.status, 200)

  t.true(Array.isArray(jsonRes.body), 'is array?')
  t.true(jsonRes.body.length > 0)
})

 // download an app
test('Download an app', async t => {
  t.plan(3)
  const newlyCreatedphone = {
    name: 'lalassphone',
    user : "lala",
    apps: []
  }
  // add to database  
  const lalaphone = (await request(app)
    .post('/phone')
    .send(newlyCreatedphone)).body
  
  // create an app
  const newlyCreatedapp = {
      name: 'pinterest',
      users: [],
      posts: []
    }

  const pinterest = (await request(app)
    .post('/platform')
    .send(newlyCreatedapp)).body

  const downloadApp = await request(app)
    .post(`/phone/${lalaphone._id}/download`)
    .send( {app: pinterest._id} )
  
    // check the server response success
    t.is(downloadApp.status, 200)

 
  const lala = await request(app).get(`/phone/${lalaphone._id}`)
 // console.log(lala)
  
 // check if pinterest is added in lala's apps list
  t.is(lala.body.apps[0]._id, pinterest._id)
  t.notDeepEqual(lala, lalaphone)
}) 
