import Vue from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue";

createInertiaApp({
    resolve: (name) => import(`./pages/${name}`),
    setup({ el, App, props, plugin }) {
        Vue.use(plugin);

        new Vue({
            render: (h) => h(App, props),
        }).$mount(el);
    },
});
