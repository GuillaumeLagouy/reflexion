<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    function handleClick(){
        //TweenMax.to('#s7-remember', 0.4, {y: '+=5px', scale: 0.99})
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
