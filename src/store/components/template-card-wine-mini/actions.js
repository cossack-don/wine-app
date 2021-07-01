
const ACTION_ADD_FAVORITES = ({ commit }, { itemIdWine, nameCountry }) => {

    commit('MUTATION_ADD_FAVORITES', { itemIdWine, nameCountry })
}
const ACTION_DELETE_ITEM_FROM_FAVORITES = ({ commit }, { idWine, nameCauntry }) => {

    commit('MUTATION_DELETE_ITEM_FROM_FAVORITES', { idWine, nameCauntry })
}
export default { ACTION_ADD_FAVORITES, ACTION_DELETE_ITEM_FROM_FAVORITES }