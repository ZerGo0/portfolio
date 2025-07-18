<script lang="ts">
  import createSanitizer from 'dompurify';
  import { marked } from 'marked';
  import { gfmHeadingId } from 'marked-gfm-heading-id';
  import { mangle } from 'marked-mangle';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/themes/prism-tomorrow.css';

  let container: HTMLDivElement | undefined = $state();

  interface Props {
    content: string;
  }

  let { content }: Props = $props();

  let sanitizedContent = $state('');

  $effect(() => {
    marked.use(gfmHeadingId());
    marked.use(mangle());

    if (typeof window !== 'undefined') {
      const sanitizer = createSanitizer(window);
      const parsed = marked.parse(content);
      sanitizedContent = sanitizer.sanitize(parsed as string);

      // Use a microtask to ensure DOM is updated before highlighting
      queueMicrotask(() => {
        if (container) {
          Prism.highlightAllUnder(container);
        }
      });
    }
  });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div bind:this={container} class="markdown-container">{@html sanitizedContent}</div>
