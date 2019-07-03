<script>
    import {frameNumberPool} from '../../../stores/frameStore';

    function nextFrame(){
        frameNumberPool.update(n => n = 4);
        TweenMax.to('#scene3-frame2, #scene3-frame3', 1, {autoAlpha: 0});
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

<button on:click={nextFrame}>SUIVANT</button>
