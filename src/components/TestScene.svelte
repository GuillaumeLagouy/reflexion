<script >
    import CustomFrame from './CustomFrame.svelte';

    const frame1Config = {
        id: 'frame1',
        x: 0,
        y: 0,
        width: 200,
        height: 100
    };

    const frame2Config = {
        id: 'frame2',
        x: 0,
        y: 0,
        width: 400,
        height: 300
    };

</script>

<style>
    #scene-container {
        border: solid 1px gray;
        height: 98vh;
    }
</style>

<div id="scene-container">
    <CustomFrame config={frame1Config}>
        Frame content here.
    </CustomFrame>

    <CustomFrame config={frame2Config}>
        Frame content here. Another frame.
    </CustomFrame>
</div>

