
const routes = [

    {
        path: '/spain',
        name: 'spain',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/France.vue')

    },
    {
        path: '/spain/:id',
        name: 'spain-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
