<script lang="ts">
  import { theme } from '$lib/stores/theme';

  interface Props {
    name?: string;
    logo?: string;
    inverted?: boolean;
    grayscale?: boolean;
    href?: string | undefined;
    children?: import('svelte').Snippet;
    black?: boolean;
  }

  let {
    name = '',
    logo = '',
    inverted = false,
    grayscale = true,
    href = undefined,
    children,
    black = false
  }: Props = $props();
</script>

{#if href}
  <a
    {href}
    class={`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 cursor-pointer ${grayscale ? 'grayscale-65 hover:grayscale-0' : ''}`}
    data-help={name}
  >
    {#if children}
      {@render children?.()}
    {:else}
      <img
        class={`w-15px h-15px ${inverted ? 'invert-100' : ''} ${black ? 'black-logo' : ''}`}
        class:chip-icon-logo-inverted={$theme && inverted}
        src={logo}
        alt={name}
      />
    {/if}
  </a>
{:else}
  <div
    class={`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 cursor-help ${grayscale ? 'grayscale-65 hover:grayscale-0' : ''}`}
    data-help={name}
  >
    {#if children}
      {@render children?.()}
    {:else}
      <img
        class={`w-15px h-15px ${inverted ? 'invert-100' : ''} ${black ? 'black-logo' : ''}`}
        class:chip-icon-logo-inverted={$theme && inverted}
        src={logo}
        alt={name}
      />
    {/if}
  </div>
{/if}

<style lang="scss">
  .chip-icon {
    &:hover {
      border-color: var(--border-hover);

      &:hover:after {
        content: attr(data-help);
        display: inline-block;
        position: absolute;
        width: max-content;
        background-color: var(--secondary);
        padding: 5px 10px;
        left: 10px;
        top: calc(100% + 0px);
        border: 1px solid var(--border);
        border-radius: 15px;
      }
    }

    &-logo {
      height: 15px;
      width: 15px;

      &-inverted {
        filter: invert(100);
      }
    }
  }
</style>
