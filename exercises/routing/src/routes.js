import User from "./components/user/User.vue"
import Home from "./components/Home.vue"
import Hello from "./components/Hello.vue"

function dynamicPropsFn (route) {
    const now = new Date()
    // this 'name' Im refering
    return {
      name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
  }

export const routes = [
    {path : '/', component: Home },
    {path : '/user/:id', component: User}, // No props, no nothing
    {path : '/hello/:name', component: Hello, props: true}, // Pass route.params to props
    {path : '/static/', component: Hello, props: { name: 'world' }}, //static value
    {path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }// custom logic
]