<script>
	export let author;
</script>

<svelte:head>
	<title>{author.name}</title>
</svelte:head>

<div class="header">
	<h1 class="name">{author.name}</h1>
</div>

<style>
	.header {
		padding: 1em 1em;
		grid-area: header;
	}
</style>
