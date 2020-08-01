<template>
  <div
    class="border-t max-w-3xl mx-auto flex justify-center text-gray-600 text-sm"
  >
    <div
      :class="{'border-t border-current text-gray-800': tab === 'photos'}"
      class="border-t mr-8 flex items-center justify-center cursor-pointer px-2 py-4 -mt-px"
      @click="tab = 'photos'"
    >
      <v-icon name="grid" class="h-4 w-4"></v-icon>
      <span class="ml-2">Photos</span>
    </div>
    <div
      :class="{'border-current text-gray-800': tab === 'favorites'}"
      class="border-t flex items-center justify-center cursor-pointer px-2 py-4 -mt-px"
      @click="tab = 'favorites'"
    >
      <v-icon name="heart" class="h-4 w-4"></v-icon>
      <span class="ml-2">Favorites</span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 'photos',
  }),
};
</script>

<style></style>
