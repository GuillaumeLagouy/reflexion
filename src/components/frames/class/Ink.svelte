<script>
    import {onMount} from 'svelte';

    onMount(() => {
        const ink = document.getElementById('ink');
        const step = 960;
        let value = 0;
        for(let i = 1; i <= 27; i++){
            setTimeout(() => {
                value = value - step;
                ink.style.backgroundPositionX = `${value}px`;
            }, i * 100);
        }

    });
</script>

<style>
    .frame-container{
        border: solid 1px red;
        width: 100%;
        height: 100%;
        background-image: url("./assets/png/classroom/S6-Ink-Sprites.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<div id="ink" class="frame-container" style="background-position: 0 0">

</div>
