// массив со всеми странами вин
import arrayItems from '@/store/mainDataArray/country/index.js'
// import flagBtnLeftSidebar from '@/store/components/left-sidebar/state.js'



const state = () => ({

    arrayItems,
    flagBtnLeftSidebar: false,
    arrayForFavorites: []

})

export default state