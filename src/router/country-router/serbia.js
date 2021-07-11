
const routes = [

    {
        path: '/serbia',
        name: 'serbia',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Serbia.vue')

    },
    {
        path: '/serbia/:id',
        name: 'serbia-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
