<script lang="ts">
  import { base } from '$app/paths';
  import { getAssetURL, isBlackAsset } from '$lib/data/assets';
  import { groupByCategory, title } from '@data/skills';

  import Card from '$lib/components/Card/Card.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';
  import SearchPage from '$lib/components/SearchPage.svelte';

  let search = $state('');
  let result = $derived(groupByCategory(search.trim().toLowerCase()));
</script>

<SearchPage {title} bind:search>
  {#if result.length === 0}
    <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
      <UIcon icon="i-carbon-cube" classes="text-3.5em" />
      <p class="font-300">Could not find anything...</p>
    </div>
  {:else}
    <div class="col mt-5 gap-7">
      {#each result as group (group.category.slug)}
        <div class="col gap-5 mb-7">
          <div class="row items-center gap-5">
            <div class="bg-[var(--main-hover)] h-[1px] w-[20px]"></div>
            <p class="text-[var(--main-close)]">{group.category.name}</p>
            <div class="flex-1 bg-[var(--main-hover)] h-[1px]"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
            {#each group.items as skill (skill.slug)}
              <Card
                classes={['cursor-pointer decoration-none']}
                tiltDegree={1}
                href={`${base}/skills/${skill.slug}`}
                bgImg={getAssetURL(skill.logo)}
                bgImgBlack={isBlackAsset(skill.logo)}
                color={skill.color}
              >
                <p class="text-[var(--tertiary-text)]">{skill.name}</p>
              </Card>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</SearchPage>
