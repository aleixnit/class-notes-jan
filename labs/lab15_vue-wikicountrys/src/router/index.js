
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import CountriesListComponent from "../components/CountriesListComponent.vue";  
import CountryDetailsComponent from "../components/CountryDetailsComponent.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes: [
    {
      path: '/',
      name: "Countries List",
      component: CountriesListComponent,
      children: [
        {
          path: "/country/:alpha3Code",
          name: "Country Details",
          component: CountryDetailsComponent,
        },
      ],
    },   
  ],
});

export default router