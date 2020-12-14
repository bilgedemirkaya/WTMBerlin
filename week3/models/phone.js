module.exports = class Phone {
    constructor(user, id, apps=[]) {
        this.user = user
        this.apps = apps
        this.id = id
    }

    downloadApp(app) {
        this.apps.push(app)
        this.user.apps.push(app)
        console.log(app.name, "downloaded to",this.user.name,"'s phone.")
    }
    static create({ user, id }) { 
        return new Phone(user, id);
    }
}