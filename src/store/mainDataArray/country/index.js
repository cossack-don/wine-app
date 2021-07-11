// все страны
import objectCountryFrance from '@/store/mainDataArray/country/france.js'
import objectCountrySpain from '@/store/mainDataArray/country/spain.js'
import objectCountryItaly from '@/store/mainDataArray/country/italy.js'
import objectCountryGeorgia from '@/store/mainDataArray/country/georgia.js'
import objectCountryGermany from '@/store/mainDataArray/country/germany.js'
import objectCountryArgentina from '@/store/mainDataArray/country/argentina.js'
import objectCountryRussia from '@/store/mainDataArray/country/russia.js'
import objectCountryChili from '@/store/mainDataArray/country/chili.js'
import objectCountrySerbia from '@/store/mainDataArray/country/serbia.js'
import objectCountryNewZealand from '@/store/mainDataArray/country/newZealand.js'
// передаю все объекты стран в обертке массива (в стор)
const arrayItems = [
    objectCountryFrance,
    objectCountrySpain,
    objectCountryItaly,
    objectCountryGeorgia,
    objectCountryGermany,
    objectCountryArgentina,
    objectCountryRussia,
    objectCountryChili,
    objectCountrySerbia,
    objectCountryNewZealand,
]

// console.log(objectCountryGermany.items)
// можно использовать для поиска по массиву, добавляем все товары в массив и ищем по имени
const allItemsAllCountry = [
    ...objectCountrySpain.items,
    ...objectCountryFrance.items,
    ...objectCountryItaly.items,
    ...objectCountryGeorgia.items,
    ...objectCountryGermany.items,
    ...objectCountryArgentina.items,
    ...objectCountryRussia.items,
    ...objectCountryChili.items,
    ...objectCountrySerbia.items,
    ...objectCountryNewZealand.items,
]

const arrayNamesItemsAllCoyntry = allItemsAllCountry.map(item => {
    return item.name
})

export default { arrayItems, arrayNamesItemsAllCoyntry, allItemsAllCountry }