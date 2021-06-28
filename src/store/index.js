import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// РАЗДЕЛАИТЬ КОМПОНЕНТЫ НА МОДУЛИ СТОРА
// import gettersMainSliderCountry from '../store/components/main-slider-country/getters'

import state from '@/store/mainDataArray/stateMain.js'


export default new Vuex.Store({

  state,

  mutations: {
    MUTATION_FLAG_BTN_LEFT_SIDEBAR(state) {
      state.flagBtnLeftSidebar = !state.flagBtnLeftSidebar
    },
    MUTATION_ADD_FAVORITES(state, { itemIdWine, nameCountry }) {
      // console.log(itemIdWine, nameCountry)
      state.arrayItems.find(item => {
        if (item.country === nameCountry) {

          item.items.find(item => {
            if (item.id === itemIdWine) {
              // console.log(item.flagLikeWine = !item.flagLikeWine, 'id')
              item.flagFavoritesWine = !item.flagFavoritesWine

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
    ACTION_ADD_FAVORITES({ commit }, { itemIdWine, nameCountry }) {
      // console.log(itemIdWine, nameCountry)

      // делать проверку если страна франция и id == в array , то ставлю лайк
      commit('MUTATION_ADD_FAVORITES', { itemIdWine, nameCountry })
    },

    ACTION_FLAG_BTN_LEFT_SIDEBAR({ commit }) {
      commit('MUTATION_FLAG_BTN_LEFT_SIDEBAR')
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

          if (item.flagFavoritesWine) {

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
