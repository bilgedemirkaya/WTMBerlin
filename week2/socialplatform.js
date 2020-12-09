module.exports = class SocialPlatform {
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