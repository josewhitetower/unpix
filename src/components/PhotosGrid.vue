<template>
  <div class="grid grid-cols-3 gap-1 md:gap-2 max-w-3xl mx-auto">
    <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script>
import PhotoCard from './PhotoCard';
export default {
  props: {
    photos: {
      required: true,
      default: () => [],
    },
  },
  components: {
    PhotoCard,
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
