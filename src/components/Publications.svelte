<script>
	let sections = [
		{
			title: 'Chapbook',
			publications: [
				{
					title: `Newsflash Under Fire, Over the Shoulder [Ugly Duckling Presse]`,
					url: `https://uglyducklingpresse.org/publications/newsflash-under-fire-over-the-shoulder/`,
					date: '2020'
				}
			]
		},
		{
			title: 'Poems',
			publications: [
				{
					title: `Leveler [Zone 3, forthcoming]`,
					url: ``,
					date: `2021`
				},
				{
					title: `Six Silts [A)GLIMPSE)OF), forthcoming]`,
					url: ``,
					date: `2021`
				},
				{
					title: `Minesweeper & others [Conjunctions]`,
					url: `http://www.conjunctions.com/online/article/jed-munson-10-20-2021`,
					date: `2021`
				},
				{
					title: `Metallurgy [P-QUEUE]`,
					url: `https://pqueue.wordpress.com/`,
					date: `2021`
				},
				{
					title: `The Bird Confluence / Commentary on the Birds [Entropy]`,
					url: `https://entropymag.org/the-birds-a-poem-28/`,
					date: `2021`
				},
				{
					title: `Ambient Noise in Sharp Relief [Diode Poetry Journal]`,
					url: `http://diodepoetry.com/munson_jed/`,
					date: `2021`
				},
				{
					title: `Newsflash Under Fire, Over the Shoulder [Enclave]`,
					url: `http://enclave.entropymag.org/finalpoem-from-jed-munson/`,
					date: `2021`
				}
			]
		},
		{
			title: 'Essays',
			publications: [
				{
					title: `You Were There [Bat City Review, forthcoming]`,
					url: ``,
					date: `2022`
				},
				{
					title: `Two Views on Encounter and Impasse [Full Stop, forthcoming]`,
					url: ``,
					date: `2021`
				},
				{
					title: `Love in the Korean Demilitarized Zone [Full Stop]`,
					url: `https://www.full-stop.net/2021/07/16/features/essays/jed-munson/love-in-the-korean-demilitarized-zone/`,
					date: `2021`
				}
			]
		},
		{
			title: 'Reviews',
			publications: [
				{
					title: `Tastes Like War by Grace M. Cho [Full Stop]`,
					url: `https://www.full-stop.net/2021/05/28/reviews/jed-munson/tastes-like-war-grace-m-cho/`,
					date: `2021`
				},
				{
					title: `Some Girls Walk into the Country They Are From by Sawako Nakayasu [Full Stop]`,
					url: `https://www.full-stop.net/2021/03/31/reviews/jed-munson/some-girls-walk-into-the-country-they-are-from-sawako-nakayasu/`,
					date: `2021`
				},
				{
					title: `A Bed for the King’s Daughter by Shahla Ujayli, translated by Sawad Hussain [Chicago Review of Books]`,
					url: `https://chireviewofbooks.com/2021/01/21/a-bed-for-the-kings-daughter/`,
					date: `2021`
				},
				{
					title: `Sansei and Sensibility by Karen Tei Yamashita [Full Stop]`,
					url: `https://www.full-stop.net/2020/10/27/reviews/jed-munson/sansei-and-sensibility-karen-tei-yamashita/`,
					date: `2020`
				},
				{
					title: `RENDANG by Will Harris [Entropy]`,
					url: `https://entropymag.org/rendang-will-harris/`,
					date: `2020`
				},
				{
					title: `DMZ Colony by Don Mee Choi [Chicago Review of Books]`,
					url: `https://chireviewofbooks.com/2020/05/04/dmz-colony-don-mee-choi/`,
					date: `2020`
				}
			]
		},
		{
			title: 'Interviews',
			publications: [
				{
					title: `In Conversation with Lewis Freedman [Full Stop, forthcoming]`,
					url: ``,
					date: `2021`
				},
				{
					title: `David Karashima on Who We’re Reading When We’re Reading Murakami [Full Stop]`,
					url: `https://www.full-stop.net/2020/09/02/interviews/jed-munson/david-karashima/`,
					date: `2020`
				},
				{
					title: `Srikanth Reddy on Underworld Lit [Full Stop]`,
					url: `https://www.full-stop.net/2020/07/29/interviews/jed-munson/srikanth-reddy/`,
					date: `2020`
				},
				{
					title: `Percival Everett on Telephone [Full Stop]`,
					url: `https://www.full-stop.net/2020/05/11/interviews/jed-munson/percival-everett/`,
					date: `2020`
				}
			]
		}
	];

	sections = sections.map((section) => {
		const years = section.publications.reduce((acc, cur) => {
			if (!acc[cur.date]) {
				acc[cur.date] = [];
			}
			acc[cur.date].push(cur);
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
		{#each Object.keys(section.years).sort((a, b) => Number(b) - Number(a)) as year}
			<h4>{year}</h4>
			<ul>
				{#each section.years[year] as publication}
					<li>
						<a href={publication.url} target="_blank">{publication.title}</a>
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
