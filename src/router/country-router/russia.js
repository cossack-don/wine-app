
const routes = [

    {
        path: '/russia',
        name: 'russia',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Russia.vue')

    },
    {
        path: '/russia/:id',
        name: 'russia-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
