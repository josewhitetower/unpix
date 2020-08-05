<template>
  <div
    id="app"
    class="px-2 relative"
    v-infinite-scroll="fetchFotos"
    :infinite-scroll-disabled="!isLoading"
  >
    <h1>Unpix</h1>
    <Search
      :query="query"
      @reset="onReset"
      @submit="onSubmit"
      @random="onRandom"
    />
    <span v-if="isLoading">Loading</span>
    <SelectedPhoto
      :photo="selectedPhoto"
      v-if="selectedPhoto"
      @close="selectedPhoto = null"
      @favorite="onFavorite"
      :is-favorite="isSelectedPhotoFavorite"
    />
    <TopBar :tab="tab" @select="onTab" />
    <PhotosGrid :photos="selectedTab" @select="onSelect" />
  </div>
</template>

<script>
import unplash from './api/unplash';
import PhotosGrid from './components/PhotosGrid.vue';
import SelectedPhoto from './components/SelectedPhoto.vue';
import TopBar from './components/TopBar.vue';
import Search from './components/Search.vue';
// import seed from './seed';
export default {
  name: 'App',
  data: () => ({
    query: '',
    page: 0,
    per_page: 24,
    isLoading: false,
    photos: [],
    selectedPhoto: null,
    tab: 'photos',
    favorites: [],
  }),
  components: {
    PhotosGrid,
    SelectedPhoto,
    TopBar,
    Search,
  },
  mounted() {
    // window.addEventListener('scroll', this.onScroll);
    if (localStorage.favorites) {
      this.favorites = JSON.parse(localStorage.favorites);
    }
  },
  computed: {
    selectedTab() {
      return this.tab === 'photos' ? this.photos : this.favorites;
    },
    isSelectedPhotoFavorite() {
      return !!this.favorites.find((ph) => ph.id === this.selectedPhoto.id);
    },
  },
  watch: {
    favorites() {
      localStorage.favorites = JSON.stringify(this.favorites);
    },
  },
  methods: {
    onFavorite(photo) {
      const includesPhoto = this.favorites.find((ph) => ph.id === photo.id);
      if (!includesPhoto) {
        this.favorites.push(photo);
      } else {
        this.favorites = this.favorites.filter((ph) => ph.id != photo.id);
      }
    },
    onTab(data) {
      this.tab = data;
    },
    onSelect(photo) {
      this.selectedPhoto = photo;
    },
    onSubmit(data) {
      this.query = data;
      this.photos = [];
      this.fetchFotos();
    },
    onReset() {
      this.photos = [];
      this.query = '';
      this.page = 0;
      this.isLoading = false;
    },
    async fetchFotos() {
      if (!this.isLoading && this.tab === 'photos' && this.query) {
        this.page = ++this.page;
        this.isLoading = true;

        const query = `query=${this.query}&page=${this.page}&per_page=${this.per_page}`;
        try {
          const data = await unplash.search(query);
          if (data.error) {
            throw new Error(data.error.message);
          }
          this.photos = this.photos.concat(
            data.results.map((photo) => {
              return {
                id: photo.id,
                alt: photo.alt_description,
                likes: photo.likes,
                url: photo.urls.raw,
                ratio: photo.width / photo.height,
                color: photo.color,
                user: {
                  name: photo.user.name,
                  instagram: photo.user.instagram_username,
                  twitter: photo.user.twitter_username,
                  portfolio: photo.user.portfolio_url,
                },
              };
            })
          );
          this.isLoading = false;
        } catch (error) {
          console.error(error.message);
          this.isLoading = false;
        }
      }

      // this.photos = seed;
      // this.isLoading = false;
    },
    async onRandom() {
      this.isLoading = true;
      try {
        const data = await unplash.random();
        if (data.error) {
          throw new Error(data.error.message);
        }
        if (data) {
          const photo = {
            id: data.id,
            alt: data.alt_description,
            likes: data.likes,
            url: data.urls.raw,
            ratio: data.width / data.height,
            color: data.color,
            user: {
              name: data.user.name,
              instagram: data.user.instagram_username,
              twitter: data.user.twitter_username,
              portfolio: data.user.portfolio_url,
            },
          };
          this.selectedPhoto = photo;
          this.isLoading = false;
        }
      } catch (error) {
        console.error(error.message);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
