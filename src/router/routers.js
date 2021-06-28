import routersFranceCountry from '@/router/country-router/france.js';
import routersSpainCountry from '@/router/country-router/spain.js';

const routes = [

    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/HomePage.vue')
    },
    {
        // все страны
        path: '/all-country',
        name: 'all-country',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/PageAllCountry.vue')
    },
    {
        // страница избранное
        path: '/favorites',
        name: 'favorites',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Favorites.vue')
    },

];


routersFranceCountry.forEach(item => {
    routes.push(item);
})

routersSpainCountry.forEach(item => {
    routes.push(item);
})

// Ошибка 404, если страницы такой не существует
routes.push({
    path: '*',
    name: 'not-found-page',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pages/NotFoundPage.vue')

});

export default routes;
