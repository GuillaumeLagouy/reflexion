<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    import {activeSceneNb} from '../stores/scenesStore';

    function handleClick(){
        activeSceneNb.update(n => n + 1);
    }

</script>

<style>
    button{
        border: 7px solid white;
        border-image: url('/assets/png/FrameBorder.png') 50 stretch;
        -webkit-border-image: url('/assets/png/FrameBorder.png') 50 stretch;
        width: 100%;
        height: 100%;
        background-color: white;
        font-family: MikadoBold, sans-serif;
        font-size: 30px;
    }
</style>

<button id="s7-remember" on:click={handleClick}>SE SOUVENIR</button>
