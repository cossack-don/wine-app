
const routes = [

    {
        path: '/germany',
        name: 'germany',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pages/countries-of-the-world/Germany.vue')

    },
    {
        path: '/germany/:id',
        name: 'germany-item-vine',
        component: () => import(/* webpackChunkName: "about" */ '@/components/template-card-wine/TemplateItemWineFullInfo.vue')
    },

];


export default routes;
