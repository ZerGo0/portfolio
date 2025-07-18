<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';
  import SearchPage from '$lib/components/SearchPage.svelte';
  import type { Experience } from '$lib/types';
  import { items, title } from '@data/experience';
  import { isBlank } from '@riadh-adrani/utils';

  let search = $state('');
  let result: Array<Experience> = $derived.by(() => {
    const query = search.trim().toLowerCase();

    if (isBlank(query)) {
      return items;
    }

    return items.filter(
      (it) =>
        it.name.toLowerCase().includes(query) ||
        it.company.toLowerCase().includes(query) ||
        it.description.toLowerCase().includes(query)
    );
  });
</script>

<SearchPage {title} bind:search>
  <div class="col items-center relative mt-10 flex-1">
    {#if result.length === 0}
      <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
        <UIcon icon="i-carbon-development" classes="text-3.5em" />
        <p class="font-300">Could not find anything...</p>
      </div>
    {:else}
      <div
        class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
      ></div>
      {#each result as job, index (job.slug)}
        <div
          class={`flex ${
            index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
          } relative items-center w-full my-[10px]`}
        >
          <div class="flex-1 hidden lg:flex"></div>
          <div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
            <UIcon icon="i-carbon-condition-point" classes="" />
          </div>
          <div class="flex-1 col items-stretch">
            <ExperienceCard experience={job} />
          </div>
        </div>
      {/each}
    {/if}
  </div>
</SearchPage>
