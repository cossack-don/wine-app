
const routes = [

    {
        path: '/chili',
        name: 'chili',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Chili.vue')

    },
    {
        path: '/chili/:id',
        name: 'chili-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
