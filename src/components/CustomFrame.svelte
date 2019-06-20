<script>
    import { onMount } from 'svelte';
    import CustomFrameHelper from '../helpers/CustomFrameHelper'

    export let config;

    let style = '';

    $: style = validConfig() ? `
    width:${config.width}px;
    height:${config.height}px;
    border: 8px solid transparent;
    border-image: url('/assets/png/FrameBorder.png') 50 stretch;
    overflow:hidden;
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

<div class="frame" id={config.id} style="{style}">
    <slot/>
</div>
