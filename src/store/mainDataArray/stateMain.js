// массив со всеми странами вин
import arrayItems from '@/store/mainDataArray/country/index.js'


import flagBtnLeftSidebar from '@/store/components/left-sidebar/state.js'

import arrayForFavorites from '@/store/components/template-card-wine-mini/state.js'



const state = () => ({

    ...arrayItems,
    ...flagBtnLeftSidebar,
    ...arrayForFavorites,

    // ------------------------------
    ArrayWithNameWineInSearch: [],
    mainSearchValue: '',
    arrayResultSearchItemsWine: [],
    // import objectStateMainSearchHeader from '@/store/components/main-search/state.js'
    // objectStateMainSearchHeader,
    // ------------------------------

    // pagination-component -test page
    perPage: 2,
    pagination: {},

})

export default state