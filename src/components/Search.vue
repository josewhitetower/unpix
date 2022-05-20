<template>
  <div class="flex items-center justify-center py-4 text-gray-500 dark:text-gray-300 text-sm">
    <span class="flex items-center  mr-2 cursor-pointer" @click="$emit('random')">
      Random <v-icon name="shuffle" class="h-4 w-4 ml-px"></v-icon>
    </span>
    <form @submit.prevent="$emit('submit', term)">
      <div class="relative">
        <input
          type="text"
          :placeholder="$t('search')"
          v-model="term"
          class="border focus:outline-none pl-2 pr-5 py-px dark:text-gray-700"
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
