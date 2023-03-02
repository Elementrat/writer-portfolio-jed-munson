<script>
	export let publications;

	let sections = [
		{ title: 'Collection', type: 'collection', publications: [] },
		{ title: 'Chapbooks', type: 'chapbook', publications: [] },
		{ title: 'Poems', type: 'poem', publications: [] },
		{ title: 'Essays', type: 'essay', publications: [] },
		{ title: 'Reviews', type: 'review', publications: [] },
		{ title: 'Interviews', type: 'interview', publications: [] }
	];

	publications?.forEach((pub) => {
		const { publicationType } = pub;
		let targetPublicationType = sections.find((section) => section.type === publicationType);

		if (targetPublicationType) {
			targetPublicationType.publications.push(pub);
		}
	});

	sections = sections.map((section) => {
		const years = section?.publications?.reduce?.((acc, cur) => {
			const curPubDate = cur?.publishDate && new Date(cur?.publishDate);
			const year = curPubDate?.getFullYear() || new Date(Date.now()).getFullYear();

			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(cur);
			return acc;
		}, {});

		return {
			...section,
			years
		};
	});
</script>

{#each sections as section}
	<section>
		<h3 class="section-title">
			{section.title}
		</h3>
		{#each Object.keys(section.years)?.sort((a, b) => Number(b) - Number(a)) as year}
			<h4>{year}</h4>
			<ul>
				{#each section.years[year] as publication}
					<li>
						<a href={publication.url} target="_blank">
							<span>{publication.title}</span>
							{#if publication.publisherName}
								<span>
									[{publication.published
										? `${publication.publisherName}]`
										: `${publication.publisherName}, forthcoming]`}
								</span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		{/each}
	</section>
{/each}

<style>
	section {
		padding-bottom: 1.5em;
	}
</style>
