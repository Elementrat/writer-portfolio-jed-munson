<script>
	export let author;

	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import Featured from './Featured.svelte';
	const renderedBio = documentToHtmlString(author.biography.json);
</script>

<div class="bio">
	<img class="featured-image" src={author?.profilePic?.url} alt="cover" />
	<div class="caption">
		{author?.profilePic?.description || ''}
	</div>
	<div class="bio-text">
		{@html renderedBio}
	</div>
</div>

<style>
	.bio {
		display: flex;
	}
	.bio-image {
		background-image: url('/img/jed_munson_profile.jpeg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 100%;
		height: 301px;
		margin: 10px auto;
		margin-bottom: 10px;
		max-width: 500px;
	}

	.bio-text {
		text-align: start;
	}

	.bio-text a {
		font-style: italic;
	}

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
