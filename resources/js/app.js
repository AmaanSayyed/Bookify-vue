import './bootstrap';
import { createApp } from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './routes';

const app = createApp(App);
app.use(router);
app.use(VueAxios,axios)
app.mount('#app');