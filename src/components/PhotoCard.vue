<template>
  <div class="mx-auto cursor-pointer overflow-hidden rounded-sm relative">
    <!-- Desktop Images -->
    <img
      class="hidden md:block object-cover h-64 w-64"
      :src="getPhotoURLw250"
      :alt="photo.alt"
      loading="lazy"
    />
    <!-- Mobile Images -->
    <img
      class="md:hidden object-cover h-40 w-40"
      :src="getPhotoURLw160"
      :alt="photo.alt"
      loading="lazy"
    />
    <div class="absolute inset-0 flex justify-center items-center hover:bg-back font-bold opacity-0 hover:opacity-100 text-white">
        🤍 {{photo.likes}}
    </div>
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
    getPhotoURLw250() {
      return this.photo.url + '&w=250&dpr=2';
    },
    getPhotoURLw160() {
      return this.photo.url + '&w=160&dpr=2';
    },
  },
};
</script>

<style></style>
