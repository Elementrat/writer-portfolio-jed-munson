<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const { author, publications } = data;

	import App from '../components/App.svelte';
	import '../style/global.css';

	export const prerender = true;

	console.log('__DATA', data);
</script>

<App {...data} />
