
const routes = [

    {
        path: '/georgia',
        name: 'georgia',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Georgia.vue')

    },
    {
        path: '/georgia/:id',
        name: 'georgia-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
