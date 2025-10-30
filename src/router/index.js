import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import SignupPage from "../components/SignupPage.vue";
import Dashboard from "../components/Dashboard.vue";
import TicketManagement from "../components/TicketManagement.vue";

function requireAuth(to, from, next) {
  const session = localStorage.getItem("ticketapp_session");
  if (!session) next("/login");
  else next();
}

const routes = [
  { path: "/", component: LandingPage},
  { path: "/signup", component: SignupPage},
  { path: "/dashboard", component: Dashboard, beforeEnter: requireAuth },
  { path: "/tickets", component: TicketManagement, beforeEnter: requireAuth },
   { path: "/:pathMatch(.*)*", component: LandingPage} 
];

const router = createRouter({
  history: createWebHistory('/TicketApp-Vue/'),
  routes,
});

export default router;
