// массив со всеми странами вин
import arrayItems from '@/store/mainDataArray/country/index.js'


import flagBtnLeftSidebar from '@/store/components/left-sidebar/state.js'

import arrayForFavorites from '@/store/components/template-card-wine-mini/state.js'


const state = () => ({

    arrayItems,
    ...flagBtnLeftSidebar,
    ...arrayForFavorites

})

export default state