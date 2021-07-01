
import allItemsAllCountry from '@/store/mainDataArray/country/index.js'

export default function MUTATION_SEARCH_WINE(state, value) {

    // ПОИСК НЕ ДОДЕЛАЛ
    if (value) {

        allItemsAllCountry.allItemsAllCountry.forEach(item => {
            // https://github.com/cossack-don/it-words/blob/main/src/store/mutatuins/mutatuins.js
            console.log(item.name.toLowerCase().includes(state.mainSearchValue.trim().toLowerCase()))
            // state.testArraySearch.push(item.name.toLowerCase().includes(state.mainSearchValue.trim().toLowerCase()))
        })
    }
}