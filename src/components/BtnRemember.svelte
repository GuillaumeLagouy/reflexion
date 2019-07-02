<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    import {activeSceneNb} from '../stores/scenesStore';

    function handleClick(e){
        activeSceneNb.update(n => n + 1);
    }

    function handleTouchstart(e) {
        console.log(e);
    }

</script>

<style>
    #s7-remember{
        border: 7px solid white;
        border-image: url('/assets/png/FrameBorder.png') 50 stretch;
        -webkit-border-image: url('/assets/png/FrameBorder.png') 50 stretch;
        width: 100%;
        height: 100%;
        background-color: white;
        font-family: MikadoBold, sans-serif;
        font-size: 30px;
        user-select: none;
    }
    #circle{
        background-color: blue;
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 100%;
        z-index: 7;
        opacity: .3;
        top: 0;
        left: 50%;
        transform: translateX(-50px);
        pointer-events: none;
    }
</style>

<div id="s7-remember" on:click={handleClick} on:touchstart={handleTouchstart}>SE SOUVENIR</div>
<!--<div id="circle"></div>-->
