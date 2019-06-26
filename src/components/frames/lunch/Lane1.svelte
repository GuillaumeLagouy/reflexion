<script>
    import Hammer from 'hammerjs';
    import {onMount} from 'svelte';
    import TweenMax from 'gsap'
    import {frameNumberLunch} from '../../../stores/frameStore';

    onMount(() => {
        const frameContainer = document.getElementById('lane1');
        const mc = new Hammer(frameContainer);

        mc.on('swipeleft', () => {
            TweenMax.to(frameContainer, .5, {backgroundPositionX: '1vw', onComplete: () => {
                  frameNumberLunch.update(n => n + 1);
            }});
        });
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
    }
    #lane1{
        background-image: url("./assets/png/lunch/S5-Lane-1.png");
        background-repeat: no-repeat;
        background-size: auto 100%;
    }
</style>

<div id="lane1" class="frame-container"
     style="background-position: 25vw 40px;">
</div>
