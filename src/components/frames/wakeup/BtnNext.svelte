<script>
    import {onMount} from 'svelte';

    function nextScene(){
        const nextScene = document.getElementById("bathroom-scene");
        nextScene.scrollIntoView({behavior:"instant", block: "start"})

    }

</script>

<style>
    button{
        width: 100%;
        height: 100%;
    }
</style>

<button on:click={nextScene}>Next</button>
