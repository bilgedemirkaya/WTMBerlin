module.exports = class SocialPlatform {
    constructor(name, users = [], posts =[], id) {
        this.name = name
        this.users = users
        this.posts = posts
        this.id = id
    }
    register (person) {
        this.users.push(person.name)
        console.log(person.name, "registered to", this.name)
    }
    share (person, post) {
        this.posts.push(post)
        person.posts.push(post)
        console.log(person.name, "just posted", post )
    }
    showUsers() {
      this.users.forEach(user => console.log(user.name))
    }
    static create({ name,users,posts, id }) { 
        return new SocialPlatform(name,users,posts,id);
    }
}