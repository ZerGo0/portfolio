<script lang="ts">
  import CommonPage from './CommonPage.svelte';
  import Input from './Input/Input.svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { SvelteURLSearchParams } from 'svelte/reactivity';

  interface Props {
    title?: string;
    search?: string;
    children?: import('svelte').Snippet;
    onsearch?: (search: string) => void;
  }

  let { title = 'Title', search = $bindable(''), children, onsearch }: Props = $props();
  let searchInput: Input | undefined = $state();

  let mounted = $state(false);

  $effect(() => {
    onsearch?.(search.trim().toLowerCase());
  });

  $effect(() => {
    if (browser && mounted) {
      let searchParams = new SvelteURLSearchParams(window.location.search);

      searchParams.set('q', search);

      const url = `${window.location.protocol}//${window.location.host}${
        window.location.pathname
      }?${searchParams.toString()}`;

      const state = window.history.state;

      window.history.replaceState(state, '', url);

      if ($page.url.pathname.startsWith(`${base}/search`)) {
        searchInput?.focus();
      }
    }
  });

  $effect(() => {
    let searchParams = new SvelteURLSearchParams(window.location.search);

    search = searchParams.get('q') ?? '';
    mounted = true;
  });
</script>

<CommonPage {title}>
  <div class="w-100% row">
    <Input bind:this={searchInput} bind:value={search} placeholder="Search..." />
  </div>
  <div class="w-100% col flex-1">
    {@render children?.()}
  </div>
</CommonPage>
