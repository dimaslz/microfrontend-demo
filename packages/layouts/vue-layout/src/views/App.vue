<script setup lang="ts">
import pubsub from 'event-emitter';
import { ref } from 'vue';

const data = ref<string>('');

const onInputHandler = ($event: Event) => {
	const { value } = $event.target as HTMLInputElement;
  data.value = value;
  // publish message to the application
	pubsub.publish('global', value);
};
</script>

<template>
	<div>
		<h1>Vue layout</h1>
		<div class="logo-container">
			<img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
		</div>
		<div>
			<input @input="onInputHandler" v-model="data" />
		</div>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
