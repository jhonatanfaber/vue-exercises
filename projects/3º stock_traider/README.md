# Stock Traider

In this project, I'm using Vuex to centralize state management, Vue router to create a Single-page Application, navigation guards to protect routes and axios to connect to my own API (check out the repository https://github.com/jhonatanfaber/API-SHOP-express).


When a user has loggued in, they will have a token. When this token has expired, they need to sign in again with their credentials.

![description](https://i.gyazo.com/06a8683fbfb72d0b90e34f04b9b881a9.gif "Home & login")

##

![description](https://i.gyazo.com/3bcc9935420ca85bba504ac40abaca8d.gif "token saved in localStorage")


You can sign in as an admin or as a normal user. The admin can manage other users (CRUD)
(Check out the store.js file to see how I manage all the process in the actions and mutations).

![description](https://i.gyazo.com/e72b24c6d07cd96f3e61667ac3c91f7d.gif "Admin Panel")

##

![description](https://i.gyazo.com/ddb0c89eecd3d89c608d5da49d98011d.gif "Add user")

##

![description](https://i.gyazo.com/dd2a7428773f9c9970fb9726873330e1.gif "Edit & Remove user")

As a user, you have an initial amount of funds. Every time you buy a new item, that amount will decrease, or not, depending on your selling and buying.
You can also 'end day' and the price of the items will change. If you wish, you can save your purchase so that you can load it later.
If you want to buy and you do not have funds enough , an error will be shown.

![description](https://i.gyazo.com/492c627b3f12a04593a52db93e3fd75c.gif "Normal user panel")



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
