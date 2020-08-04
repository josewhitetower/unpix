<template>
  <div class="flex justify-center items-center text-gray-500">
    <v-icon name="search" class="h-4 w-4 mr-2"></v-icon>
    <form @submit.prevent="$emit('submit', term)">
      <div class="relative">
        <input
          type="text"
          placeholder="Search..."
          v-model="term"
          class="border focus:outline-none pl-2 pr-5 py-px text-sm"
        />
        <v-icon
          name="x"
          class="absolute cursor-pointer h-4 icon icon-x ml-px mr-1 mt-1 right-0 top-0 w-4"
          @click.native="onClick"
          v-if="term"
        ></v-icon>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    term: '',
  }),
  methods: {
    onClick() {
      this.term = '';
      this.$emit('reset');
    },
  },
};
</script>

<style></style>
