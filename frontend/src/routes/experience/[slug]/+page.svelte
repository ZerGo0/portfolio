<script lang="ts">
  import { base } from '$app/paths';
  import { getAssetURL } from '$lib/data/assets';
  import { title } from '@data/experience';

  import type { Experience } from '$lib/types';

  import Banner from '$lib/components/Banner/Banner.svelte';
  import CardDivider from '$lib/components/Card/CardDivider.svelte';
  import CardLogo from '$lib/components/Card/CardLogo.svelte';
  import Chip from '$lib/components/Chip/Chip.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';
  import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
  import Markdown from '$lib/components/Markdown.svelte';
  import TabTitle from '$lib/components/TabTitle.svelte';
  import { computeExactDuration } from '$lib/utils/helpers';

  interface Props {
    data: { experience?: Experience };
  }

  let { data }: Props = $props();

  let computedTitle = $derived(data.experience ? `${data.experience.name} - ${title}` : title);
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
  {#if data.experience === undefined}
    <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
      <UIcon icon="i-carbon-cube" classes="text-3.5em" />
      <p class="font-300">Could not load experience data...</p>
    </div>
  {:else}
    <div class="flex flex-col items-center overflow-x-hidden">
      <Banner img={getAssetURL(data.experience.logo)}>
        <div class="col-center p-y-20">
          <div class="text-0.9em">
            <MainTitle>{data.experience.name}</MainTitle>
          </div>
          <p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center">
            {data.experience.company} · {data.experience.location} · {data.experience.type}
          </p>
          <p class="font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center">
            {computeExactDuration(data.experience.period.from, data.experience.period.to)}
          </p>
          <div class="w-75%">
            <CardDivider />
          </div>
          <div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
            {#each data.experience.links as item (item.label)}
              <Chip href={item.to}>
                <div class="row-center gap-2">
                  <UIcon icon="i-carbon-link" />
                  <span>{item.label}</span>
                </div>
              </Chip>
            {/each}
          </div>
          <div class="row-center flex-wrap m-b-2">
            {#each data.experience.skills as item (item.slug)}
              <Chip
                classes="inline-flex flex-row items-center justify-center"
                href={`${base}/skills/${item.slug}`}
              >
                <CardLogo
                  src={getAssetURL(item.logo)}
                  alt={item.name}
                  radius="0px"
                  size={15}
                  classes="mr-2"
                />
                <span class="text-[0.9em]">{item.name}</span>
              </Chip>
            {/each}
          </div>
        </div>
      </Banner>
      <div class="pt-3 pb-1 overflow-x-hidden w-full">
        <div class="px-10px m-y-5">
          {#if data.experience.description}
            <Markdown
              content={data.experience.description ?? 'This place is yet to be filled...'}
            />
          {:else}
            <div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
              <UIcon icon="i-carbon-text-font" classes="text-3.5em" />
              <p class="font-300">No description...</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
