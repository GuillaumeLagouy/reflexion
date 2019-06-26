<script >
    import CustomFrame from './CustomFrame.svelte';
    import { onMount } from 'svelte';
    import Frame from '../entities/Frame';

    export let framesConfig;
    export let id;
    export let sequence;
    export let config;

    const frames = [];

    onMount(() => {
        const container = document.querySelector('.scene-container');
        framesConfig.reverse().forEach(config => {
            frames[frames.length] = new Frame(config, container);
        });
        if(config.callback){
            config.callback(id);
        }
    });
</script>

<style>
    .scene-container {
        -border: solid 1px red;
        height: 100vh;
        position: relative;
        overflow: hidden;

    }

    :global(body){
        padding: 0;
    }
</style>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</svelte:head>

<div id={id} class="scene-container" data-sequence={sequence}>
    {#each frames as frame}
        <CustomFrame config={frame.config}>
            <svelte:component this={frame.config.content} />
        </CustomFrame>
    {/each}
</div>
