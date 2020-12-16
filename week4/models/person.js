module.exports = class Person {
    constructor(name,id,posts=[],apps=[]) {
      this.posts = posts
      this.name = name
      this.apps = apps
      this.id = id
    
    }
    like(Likedpost) {
        this.likes.push(Likedpost)
        console.log(this.name, "just liked this: ", Likedpost)
    }
    post(tweet) {
        this.posts.push(tweet)
        console.log(this.name,"just posted this:", tweet)
    }
    showTweets() {
        this.posts.forEach(post => console.log(this.name,"'s post: ", post))
    }
    static create({name,id,posts,apps}) { 
        return new Person(name,id,posts,apps);
    }
  }