
const routes = [

    {
        path: '/argentina',
        name: 'argentina',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Argentina.vue')

    },
    {
        path: '/argentina/:id',
        name: 'argentina-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
