import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = {
    'en': {
        random: 'Random',
        photos: 'Photos',
        favorites: 'Favorites',
        poweredBy: 'Powered by',
        search: 'Search...',
        download: 'Download',
    },
    'es': {
        random: 'Random',
        photos: 'Fotos',
        favorites: 'Favoritos',
        poweredBy: 'Proporcionado por',
        search: 'Buscar...',
        download: 'Descargar',
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale maybe a functuon to detect the browser language
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;
