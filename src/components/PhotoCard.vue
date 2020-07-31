<template>
  <div
    class="mx-auto cursor-pointer overflow-hidden rounded-sm relative"
    @click="onClick"
  >
    <!--Art Directions -->
    <picture>
        <source media="(max-width: 640px)" :srcset="photo.url + '&w=160&dpr=2'">
        <source media="(min-width: 641px)" :srcset="photo.url + '&w=250&dpr=2'">
        <img :src="photo.url + '&w=250&dpr=2'" :alt="photo.alt" loading="lazy" class="object-cover h-40 w-40 md:h-64 md:w-64">
    </picture>
    <div
      class="absolute inset-0 flex justify-center items-center hover:bg-back font-bold opacity-0 hover:opacity-100 text-white"
    >
      🤍 {{ photo.likes }}
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
  },
  methods: {
    onClick() {
      this.$emit('select', this.photo);
    },
  },
};
</script>

<style></style>
