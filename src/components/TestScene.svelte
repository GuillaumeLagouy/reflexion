<script >
    import { Frame } from '../common/Frame';
    import { onMount } from 'svelte';

    onMount(() => {
        const container = document.getElementById('scene-container');
        const frame1 = new Frame('frame1', 0, 0, 200, 100).create();
        container.append(frame1);
    });

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
