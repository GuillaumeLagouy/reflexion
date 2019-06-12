<script>
    import { onMount } from 'svelte';
    import CustomFrameHelper from '../helpers/CustomFrameHelper'

    export let config;

    let el;
    const dataId = Math.random().toString(36).substr(2, 9);

    onMount(() => {
        if (!validConfig()) return;

        el = document.querySelector(`div[data-id="${dataId}"]`);

        CustomFrameHelper.setFrameStyle(el, config);
    });

    function validConfig() {
      return CustomFrameHelper.isValidConfig(config)
    }
</script>

{#if validConfig()}
<div class="frame" id={config.id} data-id={dataId}>
    <slot/>
</div>
{/if}
