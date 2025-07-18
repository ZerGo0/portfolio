<script lang="ts">
  let el: HTMLElement | undefined = $state();

  interface Props {
    active?: boolean;
    size?: string;
    classes?: string;
    href?: string;
    onclick?: () => void;
    children?: import('svelte').Snippet;
  }

  let {
    active = false,
    size = 'auto',
    classes = '',
    href = '',
    onclick,
    children
  }: Props = $props();

  let className = $derived(
    `row-center cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms] font-light  ${
      active
        ? 'bg-[var(--accent)] hover:bg-[var(--accent-hover)]'
        : 'bg-transparent hover:bg-[var(--main-hover)]'
    } ${classes}`
  );

  $effect(() => {
    if (el) {
      el.style.setProperty('--size', size);
    }
  });
</script>

{#if href}
  <a
    {href}
    bind:this={el}
    class={className}
    {onclick}
    onkeydown={undefined}
    onkeypress={undefined}
    onkeyup={undefined}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={el}
    class={className}
    {onclick}
    onkeydown={undefined}
    onkeypress={undefined}
    onkeyup={undefined}
  >
    {@render children?.()}
  </button>
{/if}
