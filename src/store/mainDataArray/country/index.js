// все страны
import objectCountryFrance from '@/store/mainDataArray/country/france.js'
import objectCountrySpain from '@/store/mainDataArray/country/spain.js'
import objectCountryItaly from '@/store/mainDataArray/country/italy.js'
import objectCountryGeorgia from '@/store/mainDataArray/country/georgia.js'
import objectCountryGermany from '@/store/mainDataArray/country/germany.js'

// передаю все объекты стран в обертке массива (в стор)
const arrayItems = [
    objectCountryFrance,
    objectCountrySpain,
    objectCountryItaly,
    objectCountryGeorgia,
    objectCountryGermany
]

// console.log(objectCountryGermany.items)
// можно использовать для поиска по массиву, добавляем все товары в массив и ищем по имени
const allItemsAllCountry = [
    ...objectCountrySpain.items,
    ...objectCountryFrance.items,
    ...objectCountryItaly.items,
    ...objectCountryGeorgia.items,
    ...objectCountryGermany.items
]

export default { arrayItems, allItemsAllCountry }