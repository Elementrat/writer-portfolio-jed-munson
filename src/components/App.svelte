<script>
	export const prerender = true;
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Publications from './Publications.svelte';
	import Bio from './Bio.svelte';
	export let publications;
</script>

<div class="app">
	<Header />
	<div class="primary">
		<Publications {publications} />
	</div>
	<div class="secondary">
		<Bio />
	</div>
	<Footer />
</div>
