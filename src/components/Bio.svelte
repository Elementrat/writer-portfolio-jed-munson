<script>
	export let author;
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	const renderedBio = documentToHtmlString(author.biography.json);
</script>

<div class="bio">
	<!-- svelte-ignore a11y-missing-content -->
	<a href="https://newmichiganpress.com/books.html">
		<img
			target="_blank"
			class="featured-image minesweeper-cover"
			src="/img/minesweeper-cover.jpg"
			alt="minesweeper cover"
		/>
	</a>

	<div class="caption">Design by Ander Monson</div>

	<!-- svelte-ignore a11y-missing-content -->
	<a
		href="https://abovegroundpress.blogspot.com/2022/06/new-from-aboveground-press-silts-by-jed.html"
		target="_blank"
	>
		<img
			target="_blank"
			class="featured-image silts-cover"
			src="/img/silts.png"
			alt="silts cover"
		/>
	</a>

	<div class="caption">Design by Kyuwon Kim</div>

	<!-- svelte-ignore a11y-missing-content -->
	<a
		href="https://uglyducklingpresse.org/publications/newsflash-under-fire-over-the-shoulder/"
		target="_blank"
	>
		<img
			target="_blank"
			class="featured-image silts-cover"
			src="/img/newsflash-cover.jpg"
			alt="silts cover"
		/>
	</a>
	<div class="caption">
		Design by
		<a href="https://aineejeong.com/" target="_blank"> Ainee Jeong </a>
	</div>

	<div class="bio-image" alt="Jed Munson Profile" />
	<div class="caption">
		Photo by
		<a> Keumji Son </a>
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
