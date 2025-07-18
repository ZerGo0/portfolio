<script lang="ts">
  import { convertNamedToHexColor, type NamedColor } from '$lib/utils/colors';
  import { changeColorOpacity, isHexColor } from '@riadh-adrani/utils';
  import type { MouseEventHandler } from 'svelte/elements';

  let el: HTMLElement | undefined = $state();

  interface Props {
    color?: string;
    margin?: string;
    tiltDegree?: number;
    classes?: Array<string>;
    href?: undefined | string;
    bgImg?: string | undefined;
    bgImgBlack?: boolean;
    children?: import('svelte').Snippet;
  }

  let {
    color = '#ffffff00',
    margin = '0px',
    tiltDegree = 5,
    classes = [],
    href = undefined,
    bgImg = undefined,
    bgImgBlack = false,
    children
  }: Props = $props();

  let computedColor = $derived(
    isHexColor(color) ? color : convertNamedToHexColor(color as NamedColor)
  );
  let borderColor = $derived(changeColorOpacity(computedColor, 0.5));
  let dropColor = $derived(changeColorOpacity(computedColor, 0.15));
  let bgColor = $derived(changeColorOpacity(computedColor, 0.01));

  $effect(() => {
    if (el) {
      el.style.setProperty('--border-color', borderColor);
      el.style.setProperty('--drop-color', dropColor);
      el.style.setProperty('--bg-color', bgColor);
    }
  });

  // svelte typing is broken...
  const onHover: MouseEventHandler<HTMLElement> = (ev) => {
    const target = ev.currentTarget;

    const rect = target.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    el?.style.setProperty('--drop-x', `${x}px`);
    el?.style.setProperty('--drop-y', `${y}px`);

    const width = el?.offsetWidth ?? 0;
    const height = el?.offsetHeight ?? 0;

    const cX = rect.x + width / 2;
    const cY = rect.y + height / 2;

    const mX = ev.clientX - cX;
    const mY = ev.clientY - cY;

    const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
    const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);

    el?.style.setProperty('--rot-x', `${rX}deg`);
    el?.style.setProperty('--rot-y', `${rY}deg`);
  };

  $effect(() => {
    if (el) {
      el.style.setProperty('margin', margin);
      el.style.setProperty('--bg-img', bgImg ? `url(${bgImg})` : '');
    }
  });
</script>

{#if href}
  <a
    {href}
    bind:this={el}
    onmousemove={onHover}
    class={`card ${bgImgBlack ? 'card-black-bg' : ''} text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(
      ' '
    )}`}
  >
    <div class="card-bg-img flex-1 flex flex-col p-25px rounded-15px">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </a>
{:else}
  <div
    bind:this={el}
    onmousemove={onHover}
    role="article"
    tabindex="-1"
    class={`card ${bgImgBlack ? 'card-black-bg' : ''} text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(
      ' '
    )}`}
  >
    <div class="card-bg-img flex-1 flex flex-col p-25px rounded-15px">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  .card {
    --border-color: transparent;
    --bg-color: transparent;
    --drop-color: transparent;

    --bg-img: url();

    --drop-x: 0;
    --drop-y: 0;

    --rot-x: 0;
    --rot-y: 0;

    background:
      linear-gradient(90deg, var(--main) 0%, var(--main) 60%, var(--main-60) 100%),
      no-repeat right 40% / 40% var(--bg-img);

    &-bg-img {
      &:hover {
        background-color: var(--bg-color);
        background-image: radial-gradient(
          circle at var(--drop-x) var(--drop-y),
          var(--drop-color),
          transparent
        );
      }
    }

    &:hover {
      transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
      border-color: var(--border-hover);
    }
  }

  :global(:root[data-theme='dark']) .card-black-bg {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: no-repeat right 40% / 40% var(--bg-img);
      filter: brightness(0) invert(1);
      opacity: 0.4;
      z-index: 0;
      pointer-events: none;
      border-radius: 15px;
    }

    .card-bg-img {
      position: relative;
      z-index: 1;
    }
  }
</style>
