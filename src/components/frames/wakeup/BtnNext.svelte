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
        font-family: 'MikadoBold', sans-serif;
        font-size: 30px;
        background-color: white;
        border: none;
    }
</style>

<button on:click={nextScene}>SUIVANT</button>
