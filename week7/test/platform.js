import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new platform', async t => {
  t.plan(3)
  const newlyCreatedplatform = {
    name: 'iplatform',
    users : [],
    posts: []
  }

  const res = await request(app)
    .post('/platform')
    .send(newlyCreatedplatform)

  t.is(res.status, 200)
  t.is(res.body.name, newlyCreatedplatform.name)
  
  t.deepEqual(res.body.apps, newlyCreatedplatform.apps)
})

test('Fetch a platform', async t => {
  t.plan(3)
  const newlyCreatedplatform = {
    name: 'iplatform',
    users : [],
    posts: []
  }

  // first create a platform
  const Mimisplatform = (await request(app)
    .post('/platform')
    .send(newlyCreatedplatform)).body

  // fetch the platform
  const fetchRes = await request(app).get(`/platform/${Mimisplatform._id}`)
  
  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/platform/${Mimisplatform._id}/json`)

  t.is(fetchResJson.status, 200)

  // compare two
  const MimisFetched = fetchResJson.body
  t.deepEqual(MimisFetched, Mimisplatform)
})

test('Delete a platform', async t => {
  t.plan(3)

  const newlyCreatedplatform = {
    name: 'iplatform',
    users : [],
    posts: []
  }
  // add to database  
  const lalaplatform = (await request(app)
    .post('/platform')
    .send(newlyCreatedplatform)).body

  // delete the platform
  const deleteRes = await request(app).delete(`/platform/${lalaplatform._id}`)
  
  // status check
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  // expect status 404
  const notFound = await request(app).get(`/platform/${lalaplatform._id}`)
  t.is(notFound.status, 404)

})

test('Get list of platforms', async t => {
  t.plan(4)
  
  const res = await request(app).get('/platform/all')
  t.is(res.status, 200)

  // Json
  const jsonRes = await request(app).get('/platform/all/json')
  t.is(jsonRes.status, 200)

  t.true(Array.isArray(jsonRes.body), 'is array?')
  t.true(jsonRes.body.length > 0)
})