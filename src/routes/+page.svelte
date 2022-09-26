<script>
	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data?.a); // 'a'
	console.log(data?.b); // 'b'
	console.log(data); // `Promise {...}`

	import App from '../components/App.svelte';
	import '../style/global.css';
</script>

<App />
