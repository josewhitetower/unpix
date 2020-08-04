<template>
  <div
    class="mx-auto cursor-pointer overflow-hidden rounded-sm relative"
    :class="{'row-span-2 col-span-2': bigLayout}"
    @click="onClick"
  >
    <!--Art Directions -->
    <picture>
        <source media="(max-width: 640px)" :srcset="photo.url + '&w=160&dpr=2'">
        <source media="(min-width: 641px)" :srcset="imageSrc">
        <img :src="imageSrc" :alt="photo.alt" loading="lazy" class="object-cover w-full h-full"
        :class="{'row-span-2 col-span-2': bigLayout}">
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
    bigLayout: {
      required: false,
      default:() => (false)
    }
  },
  computed: {
    imageSrc() {
      return this.bigLayout ? `${this.photo.url}&w=600&dpr=2` : `${this.photo.url}&w=250&dpr=2`
    }
  },
  methods: {
    onClick() {
      this.$emit('select', this.photo);
    },
  },
};
</script>

<style></style>
