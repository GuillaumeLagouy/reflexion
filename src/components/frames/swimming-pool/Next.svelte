<script>
    import {frameNumberPool} from '../../../stores/frameStore';

    function nextFrame(){
        frameNumberPool.update(n => n = 3);
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