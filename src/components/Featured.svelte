<script>
	export let publications;
	let featuredPublications = publications?.filter((pub) => pub.featured);
</script>

<div class="featured">
	{#each featuredPublications as featuredPublication}
		<a href={featuredPublication?.url} target="_blank">
			<img class="featured-image" src={featuredPublication?.cover?.url} alt="cover" />
		</a>
		<div class="caption">{featuredPublication?.cover?.description}</div>
	{/each}
</div>

<style>
	.featured-image {
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		max-width: 500px;
		margin-top: 25px;
	}

	.caption {
		font-style: italic;
		text-align: center;
		padding: 5px;
		margin-bottom: 20px;
	}
</style>
