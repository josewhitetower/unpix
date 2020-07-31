<template>
  <div class="mx-auto opacity-100 hover:opacity-75 cursor-pointer overflow-hidden rounded-sm">
    <!-- Desktop Images -->
    <img
      class="hidden md:block object-cover h-64 w-64"
      :src="getPhotoURLw242"
      :alt="photo.alt"
      loading="lazy"
    />
    <!-- Mobile Images -->
    <img
      class="md:hidden object-cover h-40 w-40"
      :src="getPhotoURLw128"
      :alt="photo.alt"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: {
    photo: {
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    getPhotoURLw242() {
      return this.photo.url + '&w=242&dpr=2';
    },
    getPhotoURLw128() {
      return this.photo.url + '&w=128&dpr=2';
    },
  },
};
</script>

<style></style>
