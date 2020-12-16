module.exports = class Phone {
    constructor(name, user, id, apps=[]) {
        this.user = user
        this.apps = apps
        this.id = id
        this.name = name
    }

    downloadApp(app) {
        this.apps.push(app)
       // this.user.apps.push(app)
      console.log(app, "downloaded")
    }
    static create({ name, user, id, apps }) { 
        return new Phone(name,user, id, apps);
    }
}