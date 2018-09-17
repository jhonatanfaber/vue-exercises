import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource);

// Vue.http.options.root = "URL"

/** Interceptors can be defined globally and are used for pre- and postprocessing of a request. **/
//Intercepting requests
// Vue.http.interceptors.push((request,next) => {
//   if(request.method == 'POST'){
//     request.method = 'PUT'
//   }
// Intercepting responses
//   next(res =>{}
//    res.json = () => {return {messague : res.body} }
//    })
// })

// Vue.http.interceptors.push((request, next) => {
//   var accessToken = "xyxyxyx"
//   request.headers.set('x-access-key', accessToken)
//   next()
// })



new Vue({
  el: '#app',
  render: h => h(App)
})
