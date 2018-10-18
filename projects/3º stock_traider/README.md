



> In this project I'm using Vuex to centralize state management, Vue router to create a Single-page Application and axios to connect to my API.

I have connected my frontend with my own API using axios (check out my API on my github).
When a user has loggued in, they will have a token, when this token has expired, they need to sign in again with their credentials.

You can sign in as an admin or as a normal user. The admin can manage other users (CRUD)
(Check out the store.js file to see how I manage all the process in the actions and mutations).

As a user, you have an initial amount of funds. Every time you buy a new item, that amount will decrease, or not, depending on your selling and buying.
You can also 'end day' and the price of the items will change. If you wish, you can save your purchase so that you can load it later.
If you want to buy and you do not have funds enough , an error will be shown.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
