<script>
    import { onMount } from 'svelte';
    import CustomFrameHelper from '../helpers/CustomFrameHelper'

    export let config;

    const dataId = Math.random().toString(36).substr(2, 9);
    let style = '';

    $: style = validConfig() ? `
    width:${config.width}px;
    height:${config.height}px;
    border:solid 2px black;
    left:${config.x}px;
    top:${config.y}px;
    ` : '';

    function validConfig() {
      return CustomFrameHelper.isValidConfig(config)
    }
</script>

<style>
    .frame{
        position: absolute;
    }
</style>

{#if validConfig()}
<div class="frame" id={config.id} data-id={dataId} style="{style}">
    <slot/>
</div>
{/if}
