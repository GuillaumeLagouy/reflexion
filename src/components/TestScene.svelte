<script >
    import CustomFrame from './CustomFrame.svelte';
    import { onMount } from 'svelte';
    import TestSceneConfig from '../configs/testSceneConfig';
    import Frame from '../entities/Frame';

    export const frames = [];

    onMount(() => {
        const container = document.getElementById('scene-container');
        TestSceneConfig.forEach(config => {
            frames[frames.length] = new Frame(config, container);
        });
    });
</script>

<style>
    #scene-container {
        border: solid 1px gray;
        height: 98vh;
        position: relative;
        overflow: hidden;
    }
</style>

<div id="scene-container">
    {#each frames as frame}
        <CustomFrame config={frame.config}>
            Frame content here.
        </CustomFrame>
    {/each}
</div>
