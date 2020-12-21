## Why do we need testing? 
- To prevent human errors during development phase
- To provide reliable, stable, high quality & performance products
- Decreasing the maintenance cost, to have early error detection

If you can be sure that you can release new features to the market really fast, this gives you a really big strength. So you need to adapt yourself to release frequently.That's why we need a contunious testing. 

## Test Driven Development

TDD is when you write the test before writing the code based on these tests.

## Unit Testing

 Testing a module or piece of code which has a responsibility of single job.

## Mocking

Faking the data so you can test your functionality. SOmetimes you need to fake an output of external api to test your code as well. Example;
```
test('return sun when it is 35 degrees'), async t => {
    t.context.sinon = sinon.createSandbox()
    t.context.sinon.stub(weatherAPI, 'getTemperature') // instead of caling this 
    .callsFake(async() => { temp: 35}) // is gonna call our fake function
    const weatherEmojiRes = await meetupApp.weatherEmoji()
    t.is)(weatherEmojiRes.body.emoji, 'sun')
})
```

so you need to wait until the summer to test your code. ``sinon`` is used for stubbing, fakin the the API. 