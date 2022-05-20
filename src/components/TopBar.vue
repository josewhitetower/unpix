<template>
  <div
    class="border-t max-w-3xl mx-auto flex justify-center text-gray-600 dark:text-gray-300 dark:border-gray-600 text-sm"
  >
    <div
      :class="{'border-current text-gray-800 dark:text-gray-300 border-t ': tab === 'photos'}"
      class="mr-8 flex items-center justify-center cursor-pointer px-2 py-4 -mt-px"
      @click="$emit('select', 'photos')"
    >
      <v-icon name="grid" class="h-4 w-4"></v-icon>
      <span class="ml-2"> {{ $t('photos') }}</span>
    </div>
    <div
      :class="{'border-current text-gray-800 dark:text-gray-300 border-t ': tab === 'favorites'}"
      class="flex items-center justify-center cursor-pointer px-2 py-4 -mt-px"
      @click="$emit('select', 'favorites')"
    >
      <v-icon name="heart" class="h-4 w-4"></v-icon>
      <span class="ml-2"> {{ $t('favorites') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      required: true,
      default: () => 'photos',
    },
  },
};
</script>

<style></style>
