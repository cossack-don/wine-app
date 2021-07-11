
// import lodashFunction_range from "lodash/range";
// import lodashFunction_slice from "lodash/slice";

// const MUTATION_PAGINATION_WINE = (state) => {
//     const paginator = (totalItems, currentPage) => {
//         var startIndex = (currentPage - 1) * state.perPage,
//             endIndex = Math.min(startIndex + state.perPage - 1, totalItems - 1);
//         return {
//             currentPage: currentPage,
//             startIndex: startIndex,
//             endIndex: endIndex,
//             pages: lodashFunction_range(
//                 1,
//                 Math.ceil(totalItems / state.perPage) + 1
//             ),
//         };
//     },

//     const paginate = (data) => {
//         return lodashFunction_slice(
//             data,
//             state.pagination.startIndex,
//             state.pagination.endIndex + 1
//         );
//     },

//     const setPage = (page, arrayItemslength) => {
//         state.pagination = paginator(arrayItemslength, page);
//     },




// }

// export default MUTATION_PAGINATION_WINE