<script lang="ts">
  import { getAssetURL, isBlackAsset } from '$lib/data/assets';
  import type { Skill } from '$lib/types';
  import UIcon from '../Icon/UIcon.svelte';

  interface Props {
    items?: Array<Skill>;
  }

  let { items = [] }: Props = $props();
  const delay = 2000;

  let element: HTMLElement | undefined = $state();

  let timeout: unknown;
  let index = $state(0);
  let toRight = true;

  $effect(() => {
    if (element) {
      element.scroll({
        left: index * 150,
        behavior: 'smooth'
      });
    }
  });

  const slide = (right: boolean) => {
    if (right) {
      if (index < items.length - 1) {
        index = index + 1;
      } else {
        index = index - 1;
        toRight = false;
      }
    } else {
      if (index > 0) {
        index = index - 1;
      } else {
        index = index + 1;
        toRight = true;
      }
    }
  };

  const toggle = (right: boolean) => {
    clearTimeout(timeout as number);

    timeout = setTimeout(() => {
      slide(right);

      toggle(toRight);
    }, delay);
  };

  const toggleLeft = () => {
    clearTimeout(timeout as number);
    toRight = false;
    slide(false);
    toggle(toRight);
  };

  const toggleRight = () => {
    clearTimeout(timeout as number);
    toRight = true;
    slide(true);
    toggle(toRight);
  };

  $effect(() => {
    toggle(true);
  });
</script>

<div class="carrousel flex-[0.5] row-center">
  <button
    class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
    onclick={toggleLeft}
  >
    <UIcon icon="i-carbon-chevron-left" />
  </button>

  <div bind:this={element} class="row overflow-hidden box-content w-150px">
    {#each items as item (item.name)}
      <div class="box-content w-150px p-15px col-center">
        <img
          class={`w-120px h-120px aspect-square ${isBlackAsset(item.logo) ? 'black-logo' : ''}`}
          src={getAssetURL(item.logo)}
          alt={item.name}
        />
        <span class="text-center m-t-20px">{item.name}</span>
      </div>
    {/each}
  </div>

  <button
    class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
    onclick={toggleRight}
  >
    <UIcon icon="i-carbon-chevron-right" />
  </button>
</div>
