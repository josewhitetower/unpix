<template>
  <div
    class="fixed bg-back inset-0 px-4 md:px-64 py-12 z-10 overflow-y-auto overflow-x-hidden text-gray-800"
    @click="onClick"
  >
    <!--Art Directions -->
    <span v-if="isLoading">Loading</span>
    <picture>
      <source media="(max-width: 640px)" :srcset="photo.url + '&w=379&dpr=2'" />
      <source media="(min-width: 641px)" :srcset="photo.url + '&w=620&dpr=2'" />
      <img
        :src="photo.url + '&w=620&dpr=2'"
        :alt="photo.alt"
        loading="lazy"
        class="border-4 border-white w-full"
        @load="isLoading = false"
      />
    </picture>
    <div
      class="py-8 bg-white px-4 flex flex-wrap-reverse justify-around items-center"
    >
      <div>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-xs mr-2"
        >
          <v-icon name="download" class="h-4 w-4 mr-2"></v-icon>
          <span>Download</span>
        </button>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-xs"
        >
          <v-icon name="heart" class="h-4 w-4 mr-2"></v-icon>
          <span>Favorites</span>
        </button>
      </div>
      <div class="mb-4">
        <span class="uppercase text-xs">©️ {{ photo.user.name }}</span>
        <div class="flex justify-around mt-2">
          <a
            :href="`http://twitter.com/${photo.user.twitter}`"
            target="_blank"
            rel="noopener noreferrer"
            v-if="photo.user.twitter"
          >
            <v-icon name="twitter" class="h-4 w-4"></v-icon>
          </a>
          <a
            :href="`http://instagram.com/${photo.user.instagram}`"
            target="_blank"
            rel="noopener noreferrer"
            v-if="photo.user.instagram"
          >
            <v-icon name="instagram" class="h-4 w-4"></v-icon>
          </a>
          <a
            :href="photo.user.portfolio"
            target="_blank"
            rel="noopener noreferrer"
            v-if="photo.user.portfolio"
          >
            <v-icon name="link" class="h-4 w-4"></v-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    isLoading: true,
  }),
  computed: {},
  methods: {
    onClick(e) {
      if (e.target.classList.contains('fixed')) {
        this.$emit('close');
      }
    },
  },
};
</script>

<style></style>
