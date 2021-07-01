
import arrayNamesItemsAllCoyntry from '@/store/mainDataArray/country/index.js'
import allItemsAllCountry from '@/store/mainDataArray/country/index.js'

export default function MUTATION_SEARCH_WINE(state, value) {
    allItemsAllCountry
    // if (value === '') {
    //     state.T = []
    //     return false
    // }
    state.mainSearchValue = value
    // console.log(arrayNamesItemsAllCoyntry.arrayNamesItemsAllCoyntry)

    state.testArraySearch = arrayNamesItemsAllCoyntry.arrayNamesItemsAllCoyntry.
        filter(name => {

            return name.toLowerCase().includes(state.mainSearchValue.toLowerCase())
        })


    console.log(state.testArraySearch)
    console.log(allItemsAllCountry.allItemsAllCountry)

    state.testArraySearch.forEach(nameWineSearch => {
        allItemsAllCountry.allItemsAllCountry.find(item => {

            // if (state.T.includes(item)) {
            //     console.log(99)
            //     return
            // }
            // if (state.testArraySearch.length < 1) {
            //     return false
            // }
            if (nameWineSearch === item.name) {


                state.T.push(item)
            }
        })
    })

}