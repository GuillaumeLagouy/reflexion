<script >
    import CustomFrame from './CustomFrame.svelte';
    import { onMount } from 'svelte'

    let frame1Config = null;

    onMount(() => {
        const container = document.getElementById('scene-container');
        const getPositionX = (value) => (value * container.offsetWidth) / 100;
        const getPositionY = (value) => (value * container.offsetHeight) / 100;

        frame1Config = {
            id: 'frame1',
            x: getPositionX(0),
            y: getPositionY(100),
            width: 400,
            height: 400
        };
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
    <CustomFrame config={frame1Config}>
        Frame content here.
    </CustomFrame>
</div>
