<script lang="ts">
  import { title } from '@data/skills';
  import * as projects from '@data/projects';
  import * as experiences from '@data/experience';

  import { base } from '$app/paths';
  import { getAssetURL, isBlackAsset } from '$lib/data/assets';
  import type { Asset } from '$lib/types';

  import type { Skill } from '$lib/types';

  import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
  import CardDivider from '$lib/components/Card/CardDivider.svelte';
  import CardLogo from '$lib/components/Card/CardLogo.svelte';
  import Markdown from '$lib/components/Markdown.svelte';
  import TabTitle from '$lib/components/TabTitle.svelte';
  import Chip from '$lib/components/Chip/Chip.svelte';
  import Banner from '$lib/components/Banner/Banner.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';

  type Related = {
    display: string;
    name: string;
    img: string;
    logo: Asset;
    type: 'projects' | 'experience';
    url: string;
  };

  interface Props {
    data: { skill?: Skill };
  }

  let { data }: Props = $props();

  const getRelatedProjects = (): Array<Related> => {
    const out: Array<Related> = [];

    const skill = data.skill;

    if (!skill) {
      return [];
    }

    projects.items.forEach((item) => {
      if (item.skills.some((tech) => tech.slug === skill.slug)) {
        out.push({
          img: getAssetURL(item.logo),
          logo: item.logo,
          display: `${item.name} (${item.type})`,
          name: item.name,
          type: 'projects',
          url: `/projects/${item.slug}`
        });
      }
    });

    experiences.items.forEach((item) => {
      if (item.skills.some((tech) => tech.slug === skill.slug)) {
        out.push({
          img: getAssetURL(item.logo),
          logo: item.logo,
          display: `${item.name} @ ${item.company}`,
          name: item.name,
          type: 'experience',
          url: `/experience/${item.slug}`
        });
      }
    });

    return out;
  };

  let computedTitle = $derived(data.skill ? `${data.skill.name} - ${title}` : title);

  let related = $derived(data.skill ? getRelatedProjects() : []);
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
  {#if data.skill === undefined}
    <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
      <UIcon icon="i-carbon-software-resource-cluster" classes="text-3.5em" />
      <p class="font-300">Could not load skill data.</p>
    </div>
  {:else}
    <div class="flex flex-col items-center overflow-x-hidden">
      <Banner img={getAssetURL(data.skill.logo)} imgBlack={isBlackAsset(data.skill.logo)}>
        <MainTitle>{data.skill.name}</MainTitle>
      </Banner>
      <div class="pt-3 pb-1 overflow-x-hidden w-full">
        <div class="px-10px m-y-5">
          {#if data.skill.description}
            <Markdown content={data.skill.description ?? 'This place is yet to be filled...'} />
          {:else}
            <div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
              <UIcon icon="i-carbon-text-font" classes="text-3.5em" />
              <p class="font-300">No description</p>
            </div>
          {/if}
        </div>
      </div>
      <div class="self-stretch mb-2">
        <CardDivider />
      </div>
      <div class="flex flex-row gap-1 self-stretch flex-wrap">
        <div class="px-10px">
          {#each related as item (item.url)}
            <Chip
              classes="inline-flex flex-row items-center justify-center"
              href={`${base}${item.url}`}
            >
              <CardLogo
                src={item.img}
                alt={item.name}
                radius="0px"
                size={15}
                classes="mr-2"
                black={isBlackAsset(item.logo)}
              />
              <span class="text-[0.9em]">{item.display}</span>
            </Chip>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>
