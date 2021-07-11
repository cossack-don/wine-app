
const routes = [

    {
        path: '/france',
        name: 'france',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/France.vue')

    },
    {
        path: '/france/:id',
        name: 'france-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
