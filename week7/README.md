## Vue CLI 

CLI stands for command-line interface.

install ``vetur`` package for nice highlight.

In order to use pug files we created for backend, we need some special packages. Beacse vue, by default doesnt understand pug files.

``npm install -D pug pug-plain-loader``


![alt text](https://github.com/bilgedemirkaya/WTMBerlin/blob/main/week7/images/state.JPG)


Our view ( component) is able to read data from the state and display it. If we want to change (mutate) the state based on user interactions, we will need to call actions. Actions called with a special word ``dispatch``.So in order to change a state from view component, we will dispatch an action will later change the state. After changing the state, our component will update automatically.

![alt text](https://github.com/bilgedemirkaya/WTMBerlin/blob/main/week7/images/statemanagement.JPG)

In this detailed chart we see that there is one thing btw state and actions which guards unnesessary changes. In our actions we cannot change states directly. So developers need to came up with an entity called ``mutation``. Mutation is just a simple function and this is the only function that have direct access to the state.

**actions** is the only place cause mutations.
**mutations** is the one spesific place where the state is changing.

In order to access the state in our components 

``import {mapState} vuex``

it's a special function that comes with vuex library.This func will help us to read from the store. To use the state in views, we need to use a special property called computed which is an object, and call the ``...mapState()`` inside of it. We need to pass an object inside of it like, 
``...mapState({
counter: (state) => state.counter
})``

So now we can display our state and modify it with dispatching actions. AFter creating actions and mutation functions, we need to use another helper function tht comes with the vuex library ``mapActions``. we need to use a special property called methods which is an object, and call the ``...mapActions()`` inside of it. We need to pass an object inside of it like, 
``
...mapActions({
incrementCounter: 'incrementCounter'
})
``

in reality call of this function can happen as a recation to the user interaction(pressing a button etc) but we can also call this as soon as the component is created. To do that,
we need a method called created and call the action function inside of it ``created(){this.incrementCounter()}``.

So we call the action funct for a change, action funct goes to mutations and change the state, our compnent updated automatically.

we can also simplify the syntax above by ``...mapActions(['incrementCounter'])``. We changed to property into array, and put property in it.

our counter state would look like this at the end in the views;

``
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter
    }) 
  },
  methods: {
    ...mapActions({
      incrementCounter: 'incrementCounter'
    })
  },
  created() {
    this.incrementCounter()
  }
}
``
in our store index file is;

``
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter : 0
  },
  mutations: {
    SET_COUNTER(state,newCount) {
      state.counter = newCount
    }
  },
  actions: {
    incrementCounter({commit, state}) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount) //name the mutation
    }
  },
  modules: {
  }
})``

Now back our real application, to be able to display data fro our database,
first install ``npm i axios``.
To fetch data from backend, after importing axios, create a new action which u are connecting to the database and getting the data in json format.
 
 Once added, most likely we can see this error;

 `` Access to XMLHttpRequest at 'http://localhost:3000/person/all/json' from origin 'http://localhost:8081' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.``

 that means backend is not accepting any request for giving data for security reasons. In the backend we need to allow it first by using ``cors`` package in backend server. And we need to require and use it in app.js
- Check out for cors configurations [here](https://www.npmjs.com/package/cors)

## Component Decomposition

in template we can show list of names like this 
``div(v-for="person in people") {{person.name}}``

But if we create a component card, it will happen inside of the component

``people-card(v-for="person in people",:people="people")``

Vue component demonstration I found except from the course.

![alt text](https://github.com/bilgedemirkaya/WTMBerlin/blob/main/week7/images/component.png)


## Some notes

- scoped attribute in css is for only applying the style in that spesific component.
- prefer semantic element which will clearly describes its meaning to both the browser and the developer. Use article, nav, table,form, main etc instead of div,span. So we can make our application way more accesable.
- to make the app mobile responsive, we can use toggle device tool
