<script lang="ts">
  import type { Experience } from '$lib/types';
  import { computeExactDuration, getMonthName } from '$lib/utils/helpers';
  import Card from '../Card/Card.svelte';
  import CardLogo from '../Card/CardLogo.svelte';
  import CardTitle from '../Card/CardTitle.svelte';
  import ChipIcon from '../Chip/ChipIcon.svelte';
  import { getAssetURL, isBlackAsset } from '$lib/data/assets';
  import { base } from '$app/paths';
  import UIcon from '../Icon/UIcon.svelte';
  import Chip from '../Chip/Chip.svelte';
  import CardDivider from '../Card/CardDivider.svelte';

  interface Props {
    experience: Experience;
  }

  let { experience }: Props = $props();

  // const months = getTimeDiff(experience.period.from, experience.period.to);
  const exactDuration = computeExactDuration(experience.period.from, experience.period.to);

  const from = `${getMonthName(
    experience.period.from.getMonth()
  )} ${experience.period.from.getFullYear()}`;
  const to = experience.period.to
    ? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
    : 'Present';

  const period = `${from} - ${to}`;

  let info = $derived([
    { label: experience.company, icon: 'i-carbon-building' },
    { label: experience.location, icon: 'i-carbon-location' },
    { label: experience.contract, icon: 'i-carbon-hourglass' }
  ] as const);
</script>

<Card
  margin="0px 0px 20px 0px"
  tiltDegree={2}
  href={`${base}/experience/${experience.slug}`}
  color={experience.color}
>
  <div class="col md:flex-row items-start gap-5 md:gap-1">
    <CardLogo
      src={getAssetURL(experience.logo)}
      alt={experience.company}
      size={55}
      black={isBlackAsset(experience.logo)}
    />
    <div class="col ml-0 md:ml-[20px] gap-3 w-full">
      <div class="col">
        <div
          class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
        >
          <CardTitle title={`${experience.name}`} />
        </div>
        <div class="row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300">
          {#each info as item (item.label)}
            <Chip>
              <UIcon icon={item.icon} />
              <span class="m-l-1">{item.label}</span>
            </Chip>
          {/each}
        </div>
      </div>
      <div class="text-[var(--text)] text-[0.9em]">
        <div class="row items-center gap-2">
          <UIcon icon="i-carbon-calendar" classes="text-1.25em" />
          {period}
        </div>
        <CardDivider />
        <div class="row items-center gap-2">
          <UIcon icon="i-carbon-time" classes="text-1.25em" />
          {exactDuration}
        </div>
        <CardDivider />
      </div>
      <div class="experience-description text-[0.9em]">{experience.shortDescription}</div>
      <div class="flex flex-row flex-wrap mt-5">
        {#each experience.skills as skill (skill.name)}
          <ChipIcon
            logo={getAssetURL(skill.logo)}
            name={skill.name}
            black={isBlackAsset(skill.logo)}
          />
        {/each}
      </div>
    </div>
  </div>
</Card>
