// left-sidebar component
import MUTATION_FLAG_BTN_LEFT_SIDEBAR from '@/store/components/left-sidebar/mutations.js'


// template-card-wine-mini
import MUTATION_ADD_FAVORITES from '@/store/components/template-card-wine-mini/mutations.js'

import MUTATION_SEARCH_WINE from '@/store/components/main-search/mutations.js'
const mutations = {
    MUTATION_FLAG_BTN_LEFT_SIDEBAR,
    ...MUTATION_ADD_FAVORITES,
    MUTATION_SEARCH_WINE
}


export default mutations