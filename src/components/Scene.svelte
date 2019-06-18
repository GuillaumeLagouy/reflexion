<script >
    import CustomFrame from './CustomFrame.svelte';
    import { onMount } from 'svelte';
    import Frame from '../entities/Frame';

    export let framesConfig;
    const frames = [];

    onMount(() => {
        const container = document.querySelector('.scene-container');
        framesConfig.reverse().forEach(config => {
            frames[frames.length] = new Frame(config, container);
        });

        // TODO : Recalculate position and size when window size changes
    });
</script>

<style>
    .scene-container {
        border: solid 1px gray;
        height: 98vh;
        position: relative;
    }
</style>

<div class="scene-container">
    {#each frames as frame}
        <CustomFrame config={frame.config}>
            Frame content here.
        </CustomFrame>
    {/each}
</div>
