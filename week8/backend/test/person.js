import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new person', async t => {
  t.plan(3)
  const newlyCreatedPerson = {
    name: 'bilge',
    posts : ["something"]
  }

  const res = await request(app)
    .post('/person')
    .send(newlyCreatedPerson)

  t.is(res.status, 200)
  t.is(res.body.name, newlyCreatedPerson.name)
  
  t.deepEqual(res.body.posts, newlyCreatedPerson.posts)
})

test('Fetch a person', async t => {
  t.plan(3)
  const newlyCreatedPerson = {
    name: 'mimis',
    posts: []
  }

  // first create a person
  const MimisPerson = (await request(app)
    .post('/person')
    .send(newlyCreatedPerson)).body

  // fetch the person
  const fetchRes = await request(app).get(`/person/${MimisPerson._id}`)
  
  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/person/${MimisPerson._id}/json`)

  t.is(fetchResJson.status, 200)

  // compare two
  const MimisFetched = fetchResJson.body
  t.deepEqual(MimisFetched, MimisPerson)
})

test('Delete a person', async t => {
  t.plan(4)

  // first create a person
  const newlyCreatedPerson = {
      name: 'lala',
      posts: [] 
    }
  // add to database  
  const lalaPerson = (await request(app)
    .post('/person')
    .send(newlyCreatedPerson)).body

  // delete the person
  const deleteRes = await request(app).delete(`/person/${lalaPerson._id}`)
  
  // status check
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  await request(app).delete(`/person/${lalaPerson._id}`)

  // expect status 404
  const notFound = await request(app).get(`/person/${lalaPerson._id}`)
  t.is(notFound.status, 404)

  
  const nFoundJson = await request(app).get(`/person/${lalaPerson._id}/json`)
  t.is(nFoundJson.status, 404)
})

test('Get list of people', async t => {
  t.plan(4)
  
  const res = await request(app).get('/person/all')
  t.is(res.status, 200)

  // Json
  const jsonRes = await request(app).get('/person/all/json')
  t.is(jsonRes.status, 200)

  t.true(Array.isArray(jsonRes.body), 'is array?')
  t.true(jsonRes.body.length > 0)
})

// share a post from user
test('share a post from user', async t => {
  t.plan(2)
  const newlyCreatedPerson = {
    name: 'postlicak kisi',
    posts: []
  }

  // first create a person
  const pp = (await request(app)
    .post('/person')
    .send(newlyCreatedPerson)).body

  const posted = await request(app)
  .post(`/person/${pp._id}/post`)
  .send( {post: "example"} )

  t.is(posted.status, 200)

  // fetch the person
  const fetchRes = await request(app).get(`/person/${pp._id}`)

  t.is(fetchRes.body.posts[0], "example")

})
