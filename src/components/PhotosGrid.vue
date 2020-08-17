<template>
  <div class="grid grid-cols-3 gap-1 md:gap-2 max-w-3xl mx-auto pt-40">
    <PhotoCard
      v-for="(photo, index) in photos"
      :key="photo.id"
      :photo="photo"
      :big-layout="index % 9 === 0 && index !== 0"
      @select="onSelect"
    />
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
    onSelect(photo) {
      this.$emit('select', photo);
    },
  },
};
</script>

<style></style>
