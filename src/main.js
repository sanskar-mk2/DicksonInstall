import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";

const routes = [
    { path: "/projects", component: () => import("./pages/Projects.vue") },
    { path: "/", redirect: "/projects" },
    { path: "/photos", component: () => import("./pages/Photos.vue") },
    { path: "/users", component: () => import("./pages/Users.vue") },
    { path: "/groups", component: () => import("./pages/Groups.vue") },
    { path: "/reports", component: () => import("./pages/Reports.vue") },
    { path: "/checklists", component: () => import("./pages/Checklists.vue") },
    { path: "/map", component: () => import("./pages/Map.vue") },
    { path: "/showcases", component: () => import("./pages/Showcases.vue") },
    {
        path: "/integrations",
        component: () => import("./pages/Integrations.vue"),
    },
    { path: "/templates", component: () => import("./pages/Templates.vue") },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
