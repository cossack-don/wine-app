

<template>
  <div>
    вина ispaniya
    <!-- в цикл потом можно возвращать вместо store.state.arr[1] вот так берем arrItems и в getters или action -->
    <!-- пробигаемся циклом find и сравниваем Франция === Франция, и отдаем этот массив в этот компонент -->
    <div
      class="card"
      v-for="(item, index) in $store.state.arrayItems[1].items"
      :key="index"
    >
      {{ item }}
      <!-- {{ $store.state.arrayItems[0].items }}
      console.log($store.state.arrayItems[0].items) -->

      <router-link :to="`/spain/${item.id}`">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>