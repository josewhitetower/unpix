<template>
  <div class="grid grid-cols-3 gap-1 md:gap-5 max-w-3xl mx-auto">
    <!-- Desktop Images -->
    <img
      class="hidden md:block mx-auto opacity-100 hover:opacity-75 cursor-pointer h-40 w-full md:h-64 md:w-64 overflow-hidden object-cover rounded-sm"
      v-for="photo in photos"
      :key="getPhotoURLw242(photo.url)"
      :src="getPhotoURLw242(photo.url)"
      :alt="photo.alt"
      loading="lazy"
    />

    <!-- Mobile Images -->
    <img
      class="md:hidden mx-auto opacity-100 hover:opacity-75 cursor-pointer h-40 w-full md:h-64 md:w-64 overflow-hidden object-cover rounded-sm"
      v-for="photo in photos"
      :key="getPhotoURLw128(photo.url)"
      :src="getPhotoURLw128(photo.url)"
      :alt="photo.alt"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  props: {
    photos: {
      required: true,
      default: () => [],
    },
  },
  methods: {
    getPhotoURLw242(url) {
      return url + '&w=242&dpr=2';
    },
    getPhotoURLw128(url) {
      return url + '&w=128&dpr=2';
    },
  },
};
</script>

<style></style>
