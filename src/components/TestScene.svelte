<script >
    import CustomFrame from './CustomFrame.svelte';

    const frameConfig = {
        id: 'frame1',
        x: 0,
        y: 0,
        width: 200,
        height: 100
    };

</script>

<style>
    #scene-container {
        border: solid 1px gray;
        height: 98vh;
    }
    .frame { border: solid 1px black; }
</style>

<div id="scene-container">
    <!--  Force unused css class -->
    <template class="frame"></template>
</div>

<CustomFrame config={frameConfig}>
Frame content here.
</CustomFrame>