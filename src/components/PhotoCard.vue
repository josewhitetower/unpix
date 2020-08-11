<template>
  <div
    class="mx-auto cursor-pointer overflow-hidden rounded-sm relative"
    :class="{'row-span-2 col-span-2': bigLayout,}"
    @click="onClick"
    :style="{'background-image': `url(${thumbSrc}`}"
  >
    <!--Art Directions -->
    <picture>
      <source media="(max-width: 640px)" :srcset="mobileSrc" />
      <source media="(min-width: 641px)" :srcset="imageSrc" />
      <img
        :src="imageSrc"
        :alt="photo.alt"
        loading="lazy"
        class="object-cover w-full h-full"
        :class="{'row-span-2 col-span-2': bigLayout,  blur: isLoading}"
        @load="isLoading = false"
      />
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
  data: () => ({
    isLoading: true,
  }),
  props: {
    photo: {
      required: true,
      default: () => ({}),
    },
    bigLayout: {
      required: false,
      default: () => false,
    },
  },
  computed: {
    imageSrc() {
      return this.bigLayout
        ? `${this.photo.url}&dpr=2&w=500&h=500&fit=crop`
        : `${this.photo.url}&dpr=2&w=250&h=250&fit=crop`;
    },
    thumbSrc() {
      return this.photo.url + '?q=75&fm=jpg&w=50&fit=crop';
    },
    mobileSrc() {
      return this.photo.url + '&dpr=2&w=500&h=500&fit=crop';
    },
  },
  methods: {
    onClick() {
      this.$emit('select', this.photo);
    },
  },
};
</script>

<style></style>
