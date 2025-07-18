<script lang="ts">
  import { replaceState } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import CommonPage from './CommonPage.svelte';
  import Input from './Input/Input.svelte';

  interface Props {
    title?: string;
    search?: string;
    children?: import('svelte').Snippet;
    onsearch?: (search: string) => void;
  }

  let { title = 'Title', search = $bindable(''), children, onsearch }: Props = $props();
  let searchInput: Input | undefined = $state();
  let previousSearch: string | undefined;
  let mounted = $state(false);

  // Initialize from URL on mount
  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlQuery = searchParams.get('q') ?? '';
    if (urlQuery) {
      search = urlQuery;
      previousSearch = urlQuery;
    }

    if ($page.url.pathname.startsWith(`${base}/search`)) {
      searchInput?.focus();
    }

    mounted = true;
  });

  // Handle search changes after mount
  $effect(() => {
    if (!mounted) return;

    if (search !== previousSearch) {
      previousSearch = search;

      // Call onsearch if provided
      onsearch?.(search.trim().toLowerCase());

      // Update URL with a small delay to ensure router is ready
      setTimeout(() => {
        const url = new URL(window.location.href);
        if (search) {
          url.searchParams.set('q', search);
        } else {
          url.searchParams.delete('q');
        }
        replaceState(url, window.history.state);
      }, 0);
    }
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
