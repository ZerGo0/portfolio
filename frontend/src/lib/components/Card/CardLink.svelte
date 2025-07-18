<script lang="ts">
  import UIcon from '../Icon/UIcon.svelte';

  interface Props {
    label: string;
    to: string;
  }

  let { label, to }: Props = $props();
</script>

<span
  class="card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit cursor-pointer"
  title={label}
  data-help={label}
  onclick={(e) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(to, '_blank', 'noreferrer');
  }}
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      e.preventDefault();
      window.open(to, '_blank', 'noreferrer');
    }
  }}
  role="link"
  tabindex="0"
>
  <UIcon icon="i-carbon-link" classes="text-[var(--secondary-text)]" />
</span>

<style lang="scss">
  .card-link {
    &:hover {
      border-color: var(--border-hover);

      &:after {
        content: attr(data-help);
        display: inline-block;
        position: absolute;
        width: max-content;
        background-color: var(--secondary);
        padding: 5px 10px;
        right: 40%;
        top: calc(100% + 5px);
        border: 1px solid var(--border);
        border-radius: 15px;
        z-index: 10;
      }
    }
  }
</style>
