<template>
  <div id="app" class="px-2 relative">
    <h1>Unpix</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="query" placeholder="Search..." />
    </form>
    <button @click="onReset">x</button>
    <button @click="onRandom">random</button>
    <span v-if="isLoading">Loading</span>
    <SelectedPhoto
      :photo="selectedPhoto"
      v-if="selectedPhoto"
      @close="selectedPhoto = null"
    />
    <TopBar :tab="tab" @select="onTab" />
    <PhotosGrid :photos="photos" @select="onSelect" />
  </div>
</template>

<script>
import unplash from './api/unplash';
import PhotosGrid from './components/PhotosGrid.vue';
import SelectedPhoto from './components/SelectedPhoto.vue';
import TopBar from './components/TopBar.vue';
import seed from './seed';
export default {
  name: 'App',
  data: () => ({
    query: '',
    page: 1,
    per_page: 50,
    isLoading: false,
    photos: [],
    selectedPhoto: null,
    tab: 'photos',
  }),
  components: {
    PhotosGrid,
    SelectedPhoto,
    TopBar,
  },
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
    onTab(data) {
      this.tab = data;
    },
    onSelect(photo) {
      this.selectedPhoto = photo;
    },
    onSubmit() {
      this.isLoading = true;
      this.photos = [];
      this.fetchFotos();
    },
    onReset() {
      this.photos = [];
      this.query = '';
      this.page = 1;
      this.isLoading = false;
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
      // const query = `query=${this.query}&page=${this.page}&per_page=${this.per_page}`;
      // try {
      //   const data = await unplash.search(query);
      //   if (data.error) {
      //     throw new Error(data.error.message)
      //   }
      //   this.photos = this.photos.concat(
      //     data.results.map((photo) => {
      //       return {
      //         id: photo.id,
      //         alt: photo.alt_description,
      //         likes: photo.likes,
      //         url: photo.urls.raw,
      //         ratio: photo.width / photo.height,
      //         color: photo.color,
      //         user: {
      //           name: photo.user.name,
      //           instagram: photo.user.instagram_username,
      //           twitter: photo.user.twitter_username,
      //           portfolio: photo.user.portfolio_url,
      //         },
      //       };
      //     })
      //   );
      //   this.isLoading = false;
      // } catch (error) {
      //   console.error(error.message);
      //   this.isLoading = false
      // }
      this.photos = seed;
      this.isLoading = false;
    },
    async onRandom() {
      this.isLoading = true;
      const data = await unplash.random();
      if (data) {
        const photo = {
          id: data.id,
          alt: data.alt_description,
          likes: data.likes,
          url: data.urls.raw + '&w=150&dpr=2',
          ratio: data.width / data.height,
          color: data.color,
          user: {
            name: data.user.name,
            instagram: data.user.instagram_username,
            twitter: data.user.twitter_username,
            portfolio: data.user.portfolio_url,
          }
        };
        this.photos = [photo];
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
