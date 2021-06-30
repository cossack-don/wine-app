const GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES = (state) => {

    let arrayItemWineWithTrueFavorites = []

    state.arrayItems.forEach(item => {

        item.items.forEach(item => {

            if (item.flagFavoritesWine) {

                arrayItemWineWithTrueFavorites.push(item)

            }
        })
    })

    return arrayItemWineWithTrueFavorites

}

export default GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES