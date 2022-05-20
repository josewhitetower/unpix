<template>
    <div class="absolute right-8 top-8">
        <select v-model="selected">
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    </div>
</template>

<script>
export default {
    mounted() {
        this.selected = this.$i18n.locale ?? 'en';
    },
    data: () => ({
        selected: '',
    }),
    watch: {
        selected(newValue) {
            this.$i18n.locale = newValue;
        }
    }
}
</script>

<style>

</style>