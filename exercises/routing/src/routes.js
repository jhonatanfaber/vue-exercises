// import User from "./components/user/User.vue"
// import UserEdit from "./components/user/UserEdit.vue"
// import UserStart from "./components/user/UserStart.vue"
// import UserDetail from "./components/user/UserDetail.vue"
// import Home from "./components/Home.vue"
// import Hello from "./components/Hello.vue"
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require("./components/user/User.vue"))
  })
}
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require("./components/user/UserEdit.vue"))
  })
}
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require("./components/user/UserStart.vue"))
  })
}
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require("./components/user/UserDetail.vue"))
  })
}
const Home = resolve => {
  require.ensure(['./components/Home.vue'], () => {
    resolve(require("./components/Home.vue"))
  })
}
const Hello = resolve => {
  require.ensure(['./components/Hello.vue'], () => {
    resolve(require("./components/Hello.vue"))
  })
}



function dynamicPropsFn (route) {
    const now = new Date()
    // this 'name' Im refering
    return {
      name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
  }

export const routes = [
    {path : '/', component: Home },
    {path : '/static', component: Hello, props: { name: 'world' }}, //static value
    {path : '/hello/:name', component: Hello, props: true}, // Pass route.params to props
    {path: '/dynamic/:years', component: Hello, props: dynamicPropsFn },// custom logic
    {path : '/user', component: User, beforeEnter: (to, from, next) => {
        console.log("inside component- beforeEnter");
        next() //locally
      },children: [
        {path: "/", component: UserStart},
        {path: ":id", component: UserDetail, props: true},
        {path: ":id/edit", component: UserEdit},
    ]},
    {path: "/redirect-me", redirect: "/user"},
    {path: "/*", redirect: "/"},
]