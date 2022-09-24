<script>
</script>

<div class="bio">
	<!-- svelte-ignore a11y-missing-content -->
	<a href="https://abovegroundpress.blogspot.com/" target="_blank" class="featured-image silts" />

	<div class="caption">Design by Kyuwon Kim</div>

	<!-- svelte-ignore a11y-missing-content -->
	<a
		href="https://uglyducklingpresse.org/publications/newsflash-under-fire-over-the-shoulder/"
		target="_blank"
		class="featured-image"
	/>
	<div class="caption">
		Design by
		<a href="" target="_blank"> Ainee Jeong </a>
	</div>

	<div class="bio-image" alt="Jed Munson Profile" />
	<div class="caption">
		Photo by
		<a href="" target="_blank"> Keumji Son </a>
	</div>
	<div class="bio-text">
		I'm a Korean American writer and editor from Wisconsin. I graduated from Wesleyan in 2019 and
		did a Fulbright in South Korea in 2021. Right now I'm a fellow at the Library of America and a
		student at Brooklyn College, where I help with <a
			href="https://www.bkreview.org/category/poetry/"
			target="_blank">The Brooklyn Review.</a
		>

		Always open to collaborations!
	</div>
</div>

<style>
	.bio {
		display: flex;
	}
	.bio-image {
		background-image: url('../img/jed_munson_profile.jpeg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 100%;
		height: 300px;
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
		background-image: url('../img/newsflash-cover.jpg');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		height: 470px;
		max-width: 500px;
		margin-top: 25px;
	}

	.silts {
		background-image: url('../img/silts.png');
	}

	.caption {
		font-style: italic;
		text-align: center;
		padding: 5px;
		margin-bottom: 20px;
	}
</style>
