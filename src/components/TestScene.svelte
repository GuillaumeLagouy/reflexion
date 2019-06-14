<script >
    import CustomFrame from './CustomFrame.svelte';
    import { onMount } from 'svelte';
    import TweenMax from 'gsap';

    const frames = [];

    onMount(() => {
        const container = document.getElementById('scene-container');
        const getPositionX = (value) => (value * container.offsetWidth) / 100;
        const getPositionY = (value) => (value * container.offsetHeight) / 100;

        frames[frames.length] = {
            id: 'frame1',
            x: getPositionX(0),
            y: getPositionY(20),
            width: 400,
            height: 400
        };

        frames[frames.length] = {
            id: 'frame2',
            x: getPositionX(20),
            y: getPositionY(40),
            width: 400,
            height: 400,
            callback: (id) => {
                const el = document.querySelector(`#${id}`);
                el.style.background = '#dcc0ff';
                TweenMax.to(el, 2, {width: 200, height: 200, top: getPositionY(0), left: getPositionX(0)});
            }
        }
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
    {#each frames as frameConfig}
        <CustomFrame config={frameConfig}>
            Frame content here.
        </CustomFrame>
    {/each}
</div>
