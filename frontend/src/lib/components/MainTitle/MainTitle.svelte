<script lang="ts">
  interface Props {
    classes?: string;
    children?: import('svelte').Snippet;
  }

  let { classes = '', children }: Props = $props();
</script>

<h1
  class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`}
  style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
>
  {@render children?.()}
</h1>
