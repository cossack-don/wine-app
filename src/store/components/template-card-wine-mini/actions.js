
const ACTION_ADD_FAVORITES = ({ commit }, { itemIdWine, nameCountry }) => {
    commit('MUTATION_ADD_FAVORITES', { itemIdWine, nameCountry })
}

export default ACTION_ADD_FAVORITES