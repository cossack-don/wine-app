
const MUTATION_ADD_FAVORITES = (state, { itemIdWine, nameCountry }) => {

    state.arrayItems.find(item => {
        if (item.country === nameCountry) {

            item.items.find(item => {
                if (item.id === itemIdWine) {

                    item.flagFavoritesWine = !item.flagFavoritesWine

                }
            })
        }

    })
}

const MUTATION_DELETE_ITEM_FROM_FAVORITES = (state, { idWine, nameCauntry }) => {

    state.arrayItems.forEach(itemObj => {

        itemObj.items.forEach(item => {

            if (item.id === idWine && item.countryInItem === nameCauntry) {
                item.flagFavoritesWine = false
            }
            state.arrayForFavorites.push(item)
        })
    })


}
export default { MUTATION_ADD_FAVORITES, MUTATION_DELETE_ITEM_FROM_FAVORITES }