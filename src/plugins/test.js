import lodashFunction_range from "lodash/range";
import lodashFunction_slice from "lodash/slice";

export default {
    data() {
        return {
            pagination: {},
            perPage: 2,
        }
    },
    methods: {
        setPage(p) {
            this.pagination = this.paginator(this.objectCountry.items.length, p);
        },
        paginate(data) {
            return lodashFunction_slice(
                data,
                this.pagination.startIndex,
                this.pagination.endIndex + 1
            );
        },

        paginator(totalItems, currentPage) {
            const startIndex = (currentPage - 1) * this.perPage,
                endIndex = Math.min(startIndex + this.perPage - 1, totalItems - 1);

            return {
                currentPage: currentPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: lodashFunction_range(
                    1,
                    Math.ceil(totalItems / this.perPage) + 1
                ),
            };
        },
    },
    computed: {
        collectionItemsFromMixin() {
            // получаем из конкретной страны массив с товарами
            return this.paginate(this.objectCountry.items);
        },
    },
    created() {
        this.setPage(1);
    }
}