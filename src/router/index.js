import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import DetailsPage from './../view/DetailsPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: HomePage },
        { path: '/details', view: DetailsPage },
        { path: '/detail/:id', component: Liste }
    ]
})