<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Publications from './Publications.svelte';
	import Bio from './Bio.svelte';
	import Featured from './Featured.svelte';
	export let publications;
	export let author;
	export const prerender = true;
</script>

<div class="app">
	<Header {author} />
	<div class="primary">
		<Publications {publications} />
	</div>
	<div class="secondary">
		<Featured {publications} />
		<Bio {author} />
	</div>
	<Footer />
</div>
