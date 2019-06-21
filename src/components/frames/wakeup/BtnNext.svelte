<script>
    import {onMount} from 'svelte';

    import {activeSceneNb} from '../../../stores/scenesStore';

    function nextScene(){
        activeSceneNb.update(n => n + 1);
    }

</script>

<style>
    button{
        width: 100%;
        height: 100%;
    }
</style>

<button on:click={nextScene}>Next</button>
