<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
  import '$lib/index.scss';
  import { onHydrated, theme } from '$lib/stores/theme';
  import 'uno.css';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  $effect(() => onHydrated());

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
  <NavMenu />
  <div class="content container">{@render children?.()}</div>
</div>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 0px;
  }

  .body {
    margin: 0px;
    background-color: var(--main);
    color: var(--main-text);
    font-family: var(--text-f);
    display: flex;
    flex-direction: column;
    transition-duration: 200ms;

    letter-spacing: 1px;

    min-height: 100vh;
  }

  :global(p) {
    margin: 0px;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 5px 0px;
  }
</style>
