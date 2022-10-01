<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const publications = data;

	import App from '../components/App.svelte';
	import '../style/global.css';

	export const prerender = true;
</script>

<App {publications} />
