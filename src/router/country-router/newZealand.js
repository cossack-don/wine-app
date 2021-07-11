
const routes = [

    {
        path: '/new-zealand',
        name: 'new-zealand',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/NewZealand.vue')

    },
    {
        path: '/new-zealand/:id',
        name: 'new-zealand-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
