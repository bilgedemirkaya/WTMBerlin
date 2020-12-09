module.exports = class Person {
    constructor(name) {
      this.posts = []
      this.name = name
    }
    like(Likedposts) {
        this.Likedposts = Likedposts
        console.log(this.name, "just liked this: ", Likedposts)
    }
    post(tweet) {
        this.tweet = tweet
        this.posts.push(tweet)
        console.log(this.name,"just posted this:", tweet)
    }
    showTweets() {
        this.posts.forEach(post => console.log(this.name,"'s post: ", post))
    }
  }