import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// РАЗДЕЛАИТЬ КОМПОНЕНТЫ НА МОДУЛИ СТОРА
// import gettersMainSliderCountry from '../store/components/main-slider-country/getters'
export default new Vuex.Store({
  state: {
    arrayItems: [
      {
        country: 'Франция',
        pathPage: 'france',
        urlImageFlagCountry: require('../assets/flags/franciya.png'),

        items: [
          {
            id: 1,
            urlImageWineItem: require('../assets/item-test.png'),
            name: 'Pinot Noir. 1500. Pago del Mare Nostrum',
            sugar: 'Cухое',
            capacity: '0.75',
            colorWine: 'Красное',
            // избранное
            flagLikeWine: true
          },
          {
            id: 2,
            name: 'wine-2',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 3,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 4,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 5,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 6,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 7,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          }
        ]
      },
      {
        country: 'Испания',
        pathPage: 'spain',
        urlImageFlagCountry: require('../assets/flags/ispaniya.png'),
        items: [
          {
            id: 1,
            name: 'wine-1',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 2,
            name: 'wine-2',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 3,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 4,
            name: 'wine-4',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 5,
            name: 'wine-5',
            sugar: 'сухое',
            flagLikeWine: false
          },
        ]
      },
      {
        country: 'Италия',
        pathPage: 'italy ',
        urlImageFlagCountry: require('../assets/flags/italiya.png'),
        items: [
          {
            id: 1,
            name: 'wine-1',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 2,
            name: 'wine-2',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 3,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 4,
            name: 'wine-4',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 5,
            name: 'wine-5',
            sugar: 'сухое',
            flagLikeWine: false
          },
        ]
      },
      {
        country: 'Грузия',
        pathPage: 'georgia ',
        urlImageFlagCountry: require('../assets/flags/gryziya.png'),
        items: [
          {
            id: 1,
            name: 'wine-1',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 2,
            name: 'wine-2',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 3,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 4,
            name: 'wine-4',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 5,
            name: 'wine-5',
            sugar: 'сухое',
            flagLikeWine: false
          },
        ]
      },
      {
        country: 'Германия',
        pathPage: 'germany ',
        urlImageFlagCountry: require('../assets/flags/germaniya.png'),
        items: [
          {
            id: 1,
            name: 'wine-1',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 2,
            name: 'wine-2',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 3,
            name: 'wine-3',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 4,
            name: 'wine-4',
            sugar: 'сухое',
            flagLikeWine: false
          },
          {
            id: 5,
            name: 'wine-5',
            sugar: 'сухое',
            flagLikeWine: false
          },
        ]
      }
    ],

    flagForBar: false,
    arrayForFavorites: []

  },
  mutations: {
    MUTATION_FLAG_FOR_BAR(state) {
      state.flagForBar = !state.flagForBar
    },
    MUTATION_LIKE(state, { itemIdWine, nameCountry }) {
      // console.log(itemIdWine, nameCountry)
      state.arrayItems.find(item => {
        if (item.country === nameCountry) {

          item.items.find(item => {
            if (item.id === itemIdWine) {
              // console.log(item.flagLikeWine = !item.flagLikeWine, 'id')
              item.flagLikeWine = !item.flagLikeWine

              // if (item.flagLikeWine) {
              //   console.log(3)
              //   this.flagActiveLikeWine = !this.flagActiveLikeWine
              // }
            }
          })
        }
        // itemIdWine
        // console.log(item.items.find())
      })
    },
    // MUTATION_RETURN_ALL_FAVORITES(state) {
    //   state.arrayItems[0].items.forEach(item => {

    //     if (item.flagLikeWine) {
    //       state.arrayForFavorites.push(item)
    //       console.log(item)
    //     }


    //   })
    // }
  },
  actions: {
    ACTION_LIKE({ commit }, { itemIdWine, nameCountry }) {
      // console.log(itemIdWine, nameCountry)

      // делать проверку если страна франция и id == в array , то ставлю лайк
      commit('MUTATION_LIKE', { itemIdWine, nameCountry })
    },

    ACTION_FLAG_FOR_BAR({ commit }) {
      commit('MUTATION_FLAG_FOR_BAR')
    },

    // ACTION_RETURN_ALL_FAVORITES({ commit }) {
    //   commit('MUTATION_RETURN_ALL_FAVORITES')
    // }
  },
  getters: {
    GETTER_FLAG_FOR_BAR(state) {
      // console.log(state.flagForBar)
      return state.flagForBar
    },

    GETTER_RETURN_MAIN_ARRAY_FOR_SLIDER_COUNTRY(state) {
      return state.arrayItems
    },
    GETTER_RETURN_ARRAY_WITH_TRUE_FAVORITES(state) {
      let arrayItemWineWithTrueFavorites = []
      state.arrayItems.forEach(item => {

        item.items.forEach(item => {

          if (item.flagLikeWine) {

            arrayItemWineWithTrueFavorites.push(item)

          }
        })
      })
      // state.arrayItems[0].items.forEach(item => {
      //   // console.log(item)
      //   if (item.flagLikeWine) {

      //     arr.push(item)

      //   }


      // })

      return arrayItemWineWithTrueFavorites


    }

    // TEST(state) {
    //   let arr = []
    //   state.arrayItems.find(item => {
    //     if (item.country === 'Франция') {

    //       return item.items.map(itemT => {
    //         // if (+this.$route.params.id === item.id) {
    //         arr.push(itemT)
    //         //   return itemT;
    //         // }
    //         console.log(itemT)


    //       })

    //     }

    //   })
    //   return arr

    // },
  }
})
