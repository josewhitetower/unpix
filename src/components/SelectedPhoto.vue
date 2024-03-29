<template>
  <div
    class="fixed bg-back inset-0 px-4 py-12 z-10 text-gray-800"
    @click="onClick"
  >
    <!--Art Directions -->
    <div
      class="flex flex-col items-center w-full max-w-2xl mx-auto relative animate-zoom-in border-4 border-white dark:border-gray-700"
      :style="{backgroundColor: photo.color}"
    >
      <picture
        :class="{blur: isLoading}"
        class="bg-cover"
        :style="{'background-image': `url(${thumbSrc}`}"
      >
        <source
          media="(max-width: 640px)"
          :srcset="`${photo.url}&w=${photo.ratio * 250}&dpr=2`"
        />
        <source
          media="(min-width: 641px)"
          :srcset="`${photo.url}&w=${photo.ratio * 500}&dpr=2`"
        />
        <img
          :src="`${photo.url}&w=${photo.ratio * 500}&dpr=2`"
          :alt="photo.alt"
          loading="lazy"
          :width="photo.ratio * 500"
          :height="500"
          :class="{'opacity-100': !isLoading}"
          class="transition-opacity duration-500 ease-in-out opacity-0"
          @load="isLoading = false"
        />
      </picture>
      <div
        class="py-8 bg-white dark:bg-gray-700 px-4 flex flex-wrap-reverse justify-around items-center w-full"
      >
        <div>
          <a
            :href="photo.download"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-xs mr-2"
          >
            <v-icon name="download" class="h-4 w-4 mr-2"></v-icon>
            <span>{{ $t('download') }}</span>
          </a>
          <button
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-xs"
            @click="$emit('favorite', photo)"
          >
            <v-icon
              name="heart"
              class="h-4 w-4 mr-2"
              :class="{'text-red-600': isFavorite}"
            ></v-icon>
            <span> {{ $t('favorites') }}</span>
          </button>
        </div>
        <div class="mb-4 dark:text-gray-300">
          <span class="uppercase text-xs">©️ {{ photo.user.name }}</span>
          <div class="flex justify-around mt-2">
            <a
              :href="`http://twitter.com/${photo.user.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
              v-if="photo.user.twitter"
              :title="photo.user.name"
              class="mr-2"
            >
              <v-icon name="twitter" class="h-4 w-4"></v-icon>
            </a>
            <a
              :href="`http://instagram.com/${photo.user.instagram}`"
              target="_blank"
              rel="noopener noreferrer"
              v-if="photo.user.instagram"
              :title="photo.user.name"
              class="mr-2"
            >
              <v-icon name="instagram" class="h-4 w-4"></v-icon>
            </a>
            <a
              :href="photo.user.portfolio"
              target="_blank"
              rel="noopener noreferrer"
              v-if="photo.user.portfolio"
              :title="photo.user.name"
              class="mr-2"
            >
              <v-icon name="link" class="h-4 w-4"></v-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedPhoto',
  props: {
    photo: {
      required: true,
      default: () => ({}),
    },
    isFavorite: {
      required: false,
      default: () => false,
    },
  },
  data: () => ({
    isLoading: true,
  }),
  computed: {
    thumbSrc() {
      return this.photo.url + '?q=75&fm=jpg&w=50&fit=max';
    },
  },
  methods: {
    onClick(e) {
      if (e.target.classList.contains('fixed')) {
        this.$emit('close');
      }
    },
    onKeyDown(e) {
      if (e.key === 'Escape' || e.keyCode === 27 || e.key === 'Esc') {
        this.$emit('close');
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  beforeDestroy(){
    window.removeEventListener('keydown', this.onKeyDown)
  }
};
</script>

<style></style>
