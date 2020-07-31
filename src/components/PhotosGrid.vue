<template>
  <div class="grid grid-cols-3 gap-1 md:gap-2 max-w-3xl mx-auto">
    <PhotoCard
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
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
