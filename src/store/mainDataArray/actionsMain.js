// left-sidebar component
import ACTION_FLAG_BTN_LEFT_SIDEBAR from '@/store/components/left-sidebar/actions.js'
// template-card-wine-mini component
import ACTION_ADD_FAVORITES from '@/store/components/template-card-wine-mini/actions.js'

import ACTION_MUTATION_SEARCH_WINE from '@/store/components/main-search/actions.js'

// TEST
// import ACTION_PAGINATION_WINE from '@/store/components/pagination/actions.js'
const actions = {
    ACTION_FLAG_BTN_LEFT_SIDEBAR,
    ...ACTION_ADD_FAVORITES,
    ACTION_MUTATION_SEARCH_WINE,
    // ACTION_PAGINATION_WINE
}

export default actions