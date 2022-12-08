import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
export const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'admin',
            component: () =>
                import ('../page/Admin')
        },
    ],
    mode: "history"
})