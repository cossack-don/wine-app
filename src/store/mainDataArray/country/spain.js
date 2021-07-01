export default {
    country: 'Испания',
    pathPage: 'spain',
    urlImageFlagCountry: require('@/assets/flags/ispaniya.png'),
    urlImageMapCountry: require('@/assets/maps/ispaniya.png'),
    items: [
        {
            id: 1,
            urlImageWineItem: require('@/assets/item-test.png'),
            name: 'Pinot Noir. 1500. Pago del Mare Nostrum2',
            sugar: 'Cухое',
            capacity: '0.75',
            colorWine: 'Красное',
            // избранное
            flagFavoritesWine: false,
            countryInItem: "Испания"
        },
        {
            id: 2,
            name: 'wine-2',
            sugar: 'сухое',
            flagFavoritesWine: true,
            countryInItem: "Испания"
        },
        {
            id: 3,
            name: 'wine-3',
            sugar: 'сухое',
            flagFavoritesWine: false,
            countryInItem: "Испания"
        },
        {
            id: 4,
            name: 'wine-4',
            sugar: 'сухое',
            flagFavoritesWine: false,
            countryInItem: "Испания"
        },
        {
            id: 5,
            name: 'wine-5',
            sugar: 'сухое',
            flagFavoritesWine: false,
            countryInItem: "Испания"
        },
    ]
}