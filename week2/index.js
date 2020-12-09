
twitter = new SocialPlatform("twitter")
instagram = new SocialPlatform("instagram")

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