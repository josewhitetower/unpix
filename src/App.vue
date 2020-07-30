<template>
  <div id="app">
    <h1>Unpix</h1>
    <form @submit.prevent="onSearch">
      <input type="text" v-model="query" />
    </form>
    <button @click="onRandom">random</button>
  </div>
</template>

<script>
import unplash from './api/unplash';
export default {
  name: 'App',
  data: () => ({
    query: '',
    page: 1,
  }),
  components: {},
  methods: {
    async onSearch() {
      const query = `query=${this.query}&page=${this.page}`
      const data = await unplash.search(query);
      if (data) {
        console.log(data);
        this.query = ''
      }
    },
    async onRandom() {
      const data = await unplash.random()
      if (data) {
        console.log(data)
      }
    }
  },
};
</script>

<style></style>
