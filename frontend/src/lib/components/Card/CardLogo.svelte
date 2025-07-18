<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    size?: number;
    radius?: string;
    classes?: string;
    black?: boolean;
  }

  let { src, alt, size = 50, radius = '15px', classes = '', black = false }: Props = $props();
</script>

<img
  class={`rounded-${radius} ${classes} ${black ? 'black-logo' : ''} aspect-square`}
  {src}
  {alt}
  height={size}
  width={size}
/>
