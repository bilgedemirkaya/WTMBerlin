module.exports = class Phone {
    constructor(user) {
        this.user = user
        this.apps = []
    }

    downloadApp(app) {
        this.apps.push(app)
        console.log(app, "downloaded to",this.user,"'s phone.")
    }
}