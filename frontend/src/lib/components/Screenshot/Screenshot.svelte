<script lang="ts">
  import UIcon from '../Icon/UIcon.svelte';

  interface Props {
    screenshot?: { src: string; label: string } | undefined;
    onClose?: () => void;
  }

  let {
    screenshot = $bindable(undefined),
    onClose = () => {
      screenshot = undefined;
    }
  }: Props = $props();

  let show = $derived(typeof screenshot !== 'undefined');
</script>

{#if show}
  <div
    class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px"
    onclick={(e) => {
      e.stopPropagation();
      onClose();
    }}
    onkeydown={(e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }}
    role="dialog"
    aria-modal="true"
    aria-label="Screenshot modal"
    tabindex="-1"
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
      class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"
      onclick={(e) => e.stopPropagation()}
    >
      <div class="self-end">
        <button
          class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
          onclick={onClose}
        >
          <UIcon icon="i-carbon-close" />
        </button>
      </div>
      <div
        class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"
        style={`background-image: url(${screenshot?.src});`}
      ></div>
      <p
        class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
      >
        {screenshot?.label}
      </p>
    </div>
  </div>
{/if}
