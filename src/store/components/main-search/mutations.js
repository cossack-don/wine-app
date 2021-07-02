
import arrayNamesItemsAllCoyntry from '@/store/mainDataArray/country/index.js'
// import allItemsAllCountry from '@/store/mainDataArray/country/index.js'

export default function MUTATION_SEARCH_WINE(state, value) {


    state.mainSearchValue = value


    state.ArrayWithNameWineInSearch = arrayNamesItemsAllCoyntry.arrayNamesItemsAllCoyntry.
        filter(name => {
            // console.log('includ-filter', name.toLowerCase().includes(state.mainSearchValue.toLowerCase()))
            return name.toLowerCase().includes(state.mainSearchValue.toLowerCase())
        })


    // console.log('array-name', state.ArrayWithNameWineInSearch)
    // console.log('all-items', allItemsAllCountry.allItemsAllCountry)

    // console.log(state.arrayItems)
    state.arrayResultSearchItemsWine = []
    state.ArrayWithNameWineInSearch.forEach(itemWord => {

        state.arrayItems.forEach(itemObj => {
            itemObj.items.filter(itemWine => {
                if (itemWord === itemWine.name) {
                    state.arrayResultSearchItemsWine.push(itemWine)
                    // console.log(itemWine)
                }
            })
        })
    })
    console.log(state.arrayResultSearchItemsWine)


}