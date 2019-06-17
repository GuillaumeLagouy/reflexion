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

    onMount(() => {
        if(!config || !config.callback) return;
        config.callback(config.id);
    })
</script>

<style>
    .frame{
        position: absolute;
    }
</style>

<div class="frame" id={config.id} data-id={dataId} style="{style}">
    <slot/>
</div>
