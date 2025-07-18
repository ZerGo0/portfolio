<script lang="ts">
  import { base } from '$app/paths';
  import { getAssetURL } from '$lib/data/assets';
  import type { Project } from '$lib/types';
  import { computeExactDuration, getMonthName } from '$lib/utils/helpers';
  import Card from '../Card/Card.svelte';
  import CardDivider from '../Card/CardDivider.svelte';
  import CardLink from '../Card/CardLink.svelte';
  import CardTitle from '../Card/CardTitle.svelte';
  import Chip from '../Chip/Chip.svelte';
  import ChipIcon from '../Chip/ChipIcon.svelte';
  import UIcon from '../Icon/UIcon.svelte';

  interface Props {
    project: Project;
  }

  let { project }: Props = $props();
  // $: period = `${months} month${months > 1 ? 's' : ''}`;
  // $: period = `${getTimeDiff(
  // 	project.period.from,
  // 	project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
  // )}`;
  let period = $derived(computeExactDuration(project.period.from, project.period.to));
  let from = $derived(
    `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`
  );
  let to = $derived(
    project.period.to
      ? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
      : 'now'
  );
</script>

<Card color={project.color} href={`${base}/projects/${project.slug}`}>
  <div class="m-t-20px row justify-between items-center">
    <CardTitle title={project.name} />
    <div class="row">
      {#each project.links as link (link.to)}
        <CardLink label={link.label ?? ''} to={link.to} />
      {/each}
    </div>
  </div>
  <CardDivider />
  <div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
    <div class="row items-center gap-2">
      <UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
      <p>{project.type}</p>
    </div>
    <CardDivider />
    <div class="row items-center gap-2">
      <UIcon icon="i-carbon-time" classes="text-1.25em" />
      <p>{period}</p>
    </div>
    <CardDivider />
  </div>
  <div class="col sm:h-100px md:h-160px">
    <p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
      {project.shortDescription}
    </p>
  </div>
  <div class="row justify-between text-0.8em font-400">
    <Chip>{from}</Chip>
    {#if from !== to}
      <Chip>{to}</Chip>
    {/if}
  </div>
  <CardDivider />
  <div class="row flex-wrap">
    {#each project.skills as tech (tech.name)}
      <ChipIcon logo={getAssetURL(tech.logo)} name={tech.name} />
    {/each}
  </div>
</Card>
