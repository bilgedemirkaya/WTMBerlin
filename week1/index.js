Phone = class {
    constructor(user) {
        this.user = user
        this.apps = []
    }

    downloadApp(app) {
        this.apps.push(app)
        console.log(app, "downloaded to",this.user,"'s phone.")
    }
}


SocialPlatform = class {
    constructor(name) {
        this.name = name
        this.users = []
    }
    register (person) {
        this.person = person
        this.users.push(person)
        console.log(person, "registered to", this.name)
    }
    showUsers() {
        this.users.forEach(user => console.log(user.name))
    }
}

twitter = new SocialPlatform("twitter")
instagram = new SocialPlatform("instagram")


Person = class {
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

bilge = new Person("bilge")
myphone = new Phone("bilge")
myphone.downloadApp("twitter")
twitter.register(bilge)
bilge.post("whats up")
bilge.post("just shared this")
bilge.like("hey there")
bilge.showTweets()

mimi = new Person("mimi")
mimisPhone = new Phone("mimi")
mimisPhone.downloadApp("twitter")
mimisPhone.downloadApp("instagram")
twitter.register(mimi)
instagram.register(mimi)

twitter.showUsers()
instagram.showUsers()