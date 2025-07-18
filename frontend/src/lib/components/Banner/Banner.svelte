<script lang="ts">
  interface Props {
    img?: string;
    imgBlack?: boolean;
    useDefaultDimensions?: boolean;
    classes?: string;
    children?: import('svelte').Snippet;
  }

  let {
    img = '',
    imgBlack = false,
    useDefaultDimensions = true,
    classes = '',
    children
  }: Props = $props();
</script>

<div
  style={`--bg-img:url(${img})`}
  class={`row w-[100%] ${
    useDefaultDimensions
      ? 'min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] px-4 md:px-10'
      : ''
  } items-center skill-cover ${imgBlack ? 'banner-black-bg' : ''} ${classes}`}
>
  <div class="p-x-2 col flex-1">
    {@render children?.()}
  </div>
</div>

<style lang="scss">
  .skill-cover {
    background:
      linear-gradient(90deg, var(--main) 0%, var(--main) 55%, var(--main-60) 130%),
      no-repeat 110% 45% / 50% var(--bg-img);

    border-block-end: 1px solid var(--border);
  }

  :global(:root[data-theme='dark']) .banner-black-bg {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: no-repeat 110% 45% / 50% var(--bg-img);
      filter: brightness(0) invert(1);
      opacity: 0.4;
      z-index: 0;
      pointer-events: none;
    }

    > * {
      position: relative;
      z-index: 1;
    }
  }
</style>
