<script>
    import { onMount } from 'svelte';
    import CustomFrameHelper from '../helpers/CustomFrameHelper';

    import Title from '../components/Title.svelte';

    export let config;

    let style = '';

    $: style = validConfig() ? `
    width:${config.width}px;
    height:${config.height}px;
    border: 8px solid transparent;
    border-image: url('/assets/png/FrameBorder.png') 50 stretch;
    -webkit-border-image: url('/assets/png/FrameBorder.png') 50 stretch;
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
    {#if config.title}
        <Title>
            {config.title}
        </Title>
    {:else}
        <slot/>
    {/if}
</div>
