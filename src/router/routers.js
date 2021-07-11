// главный шаблон страницы
import routersFranceCountry from '@/router/country-router/france.js';

// готовые страницы стран
import routersSpainCountry from '@/router/country-router/spain.js';
import routersItalyCountry from '@/router/country-router/italy.js';
import routersArgentinaCountry from '@/router/country-router/argentina.js';
import routersGermanyCountry from '@/router/country-router/germany.js';
// грузия 
import routersGeorgiaCountry from '@/router/country-router/georgia.js';
import routersRussiaCountry from '@/router/country-router/russia.js';
import routersChiliCountry from '@/router/country-router/chili.js';
import routersSerbiaCountry from '@/router/country-router/serbia.js';
import routersNewZealandCountry from '@/router/country-router/newZealand.js';


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
    // search-page
    {
        path: '/search-page',
        name: 'search-page',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/SearchPage.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/TestPage.vue')
    },

];


routersFranceCountry.forEach(item => {
    routes.push(item);
})

routersSpainCountry.forEach(item => {
    routes.push(item);
})
routersArgentinaCountry.forEach(item => {
    routes.push(item);
})
routersGermanyCountry.forEach(item => {
    routes.push(item);
})
routersItalyCountry.forEach(item => {
    routes.push(item);
})
routersGeorgiaCountry.forEach(item => {
    routes.push(item);
})
routersRussiaCountry.forEach(item => {
    routes.push(item);
})
routersChiliCountry.forEach(item => {
    routes.push(item);
})
routersSerbiaCountry.forEach(item => {
    routes.push(item);
})
routersNewZealandCountry.forEach(item => {
    routes.push(item);
})

// Ошибка 404, если страницы такой не существует
routes.push({
    path: '*',
    name: 'not-found-page',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pages/NotFoundPage.vue')

});

export default routes;
