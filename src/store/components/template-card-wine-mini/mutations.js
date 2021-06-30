
const MUTATION_ADD_FAVORITES = ({ state }, { itemIdWine, nameCountry }) => {

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

export default MUTATION_ADD_FAVORITES