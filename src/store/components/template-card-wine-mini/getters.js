const GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES = (state) => {

    state.arrayForFavorites = []

    state.arrayItems.forEach(itemObj => {

        itemObj.items.forEach(item => {

            if (item.flagFavoritesWine) {
                if (item.countryInItem === itemObj.country) {
                    // получаю путь страны из родителя, добавляю в карточку
                    item.pathPage = itemObj.pathPage
                }

                state.arrayForFavorites.push(item)

            }
        })
    })

    return state.arrayForFavorites

}

export default GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES