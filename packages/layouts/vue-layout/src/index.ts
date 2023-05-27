import { createApp } from 'vue';
import './index.css';
import App from './views/App.vue';

export const run = () => {
	createApp(App).mount('#vue-layout');
};

export default run;
