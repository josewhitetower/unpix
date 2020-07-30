<template>
  <div id="app">
    <h1>Unpix</h1>
    <form @submit.prevent="onSumbit">
      <input type="text" v-model="query" />
    </form>
    <button @click="onReset">x</button>
    <button @click="onRandom">random</button>
    <span v-if="isLoading">Loading</span>
    <img
      v-for="photo in photos"
      :key="photo.id"
      :src="photo.url"
      :alt="photo.alt"
    />
  </div>
</template>

<script>
import unplash from './api/unplash';
export default {
  name: 'App',
  data: () => ({
    query: '',
    page: 1,
    per_page: 50,
    isLoading: false,
    photos: [],
  }),
  components: {},
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  watch: {
    page() {
      if (this.query) {
        this.fetchFotos();
      }
    },
  },
  methods: {
    onSumbit() {
      this.isLoading = true;
      this.photos = [];
      this.fetchFotos()
    },
    onReset() {
      this.photos = [];
      this.query = '';
      this.page = 1;
    },
    onScroll() {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        !this.isLoading
      ) {
        let currentPage = this.page;
        currentPage = currentPage + 1;
        this.isLoading = true;
        this.page = currentPage;
      }
    },
    async fetchFotos() {
      const query = `query=${this.query}&page=${this.page}&per_page=${this.per_page}`;
      const data = await unplash.search(query);
      if (data) {
        this.photos = this.photos.concat(
          data.results.map((photo) => {
            return {
              id: photo.id,
              alt: photo.alt_description,
              likes: photo.likes,
              url: photo.urls.raw + '&w=150&dpr=2',
            };
          })
        );
        this.isLoading = false;
      }
    },
    async onRandom() {
      const data = await unplash.random();
      if (data) {
        const photo = {
          id: data.id,
          alt: data.alt_description,
          likes: data.likes,
          url: data.urls.raw + '&w=150&dpr=2',

        };
        this.photos = [photo];
      }
    },
  },
};
</script>

<style></style>
