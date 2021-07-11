
const routes = [

    {
        path: '/italy',
        name: 'italy',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Italy.vue')

    },
    {
        path: '/italy/:id',
        name: 'italy-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
