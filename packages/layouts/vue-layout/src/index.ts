import { createApp } from 'vue';
import './index.css';
import App from './views/App.vue';

export const run = () => {
	const instance = createApp(App);
	instance.mount('#vue-layout');

	return instance;
};

export default run;
