<script lang="ts">
  import { title } from '@data/search';
  import { filterItemsByQuery, type ItemOrSkill } from '$lib/utils/helpers';
  import { base } from '$app/paths';
  import * as experiences from '@data/experience';
  import * as projects from '@data/projects';
  import * as skills from '@data/skills';

  import type { Icon, Item, Skill } from '$lib/types';

  import SearchPage from '$lib/components/SearchPage.svelte';
  import Chip from '$lib/components/Chip/Chip.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';

  type SearchResultItem = {
    icon: Icon;
    name: string;
    data: Item | Skill;
    to: string;
  };

  let query = $state('');
  let result: Array<SearchResultItem> = $state([]);

  $effect(() => {
    const projectResults = filterItemsByQuery(projects.items, query).map<SearchResultItem>(
      (data) => ({
        data,
        icon: 'i-carbon-cube',
        name: data.name,
        to: `projects/${data.slug}`
      })
    );

    const skillResults = filterItemsByQuery(
      skills.items as unknown as Array<ItemOrSkill>,
      query
    ).map<SearchResultItem>((data) => ({
      data,
      icon: 'i-carbon-software-resource-cluster',
      name: data.name,
      to: `skills/${data.slug}`
    }));

    const experienceResults = filterItemsByQuery(experiences.items, query).map<SearchResultItem>(
      (data) => ({
        data,
        icon: 'i-carbon-development',
        name: `${data.name} @ ${data.company}`,
        to: `experience/${data.slug}`
      })
    );

    // Replace the entire array instead of mutating it
    result = [...projectResults, ...skillResults, ...experienceResults];
  });
</script>

<SearchPage {title} bind:search={query}>
  <div class="flex flex-col items-stretch gap-10 p-2"></div>
  {#if !query}
    <div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
      <UIcon icon="i-carbon-search-locate-mirror" classes="text-2em" />
      <span> Try typing something... </span>
    </div>
  {:else}
    <div>
      {#if result.length === 0}
        <div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
          <UIcon icon="i-carbon-cube" classes="text-2em" />
          <span> Oops ! nothing to show ! </span>
        </div>
      {:else}
        <div class="flex flex-row flex-wrap gap-1">
          {#each result as item (item.to)}
            <Chip href={`${base}/${item.to}`} classes="flex flex-row items-center gap-2">
              <UIcon icon={item.icon} />
              <span>{item.name}</span>
            </Chip>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</SearchPage>
