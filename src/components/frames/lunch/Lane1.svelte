<script>
    import Hammer from 'hammerjs';
    import {onMount} from 'svelte';
    import TweenMax from 'gsap'
    import {frameNumberLunch} from '../../../stores/frameStore';

    onMount(() => {
        const frameContainer = document.getElementById('lane1');
        const mc = new Hammer(frameContainer);
        const swipeIndication = document.getElementById('swipe-indication');
        TweenMax.to(swipeIndication, 1, {
            x: '-=150px',
            repeat: -1,
            opacity: 0,
            repeatDelay: 1,
            ease: Power2.easeInOut,
        });

        mc.on('swipeleft', () => {
            swipeIndication.style.display = 'none';
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
        position: relative;
    }
    #lane1{
        background-image: url("./assets/png/lunch/S5-Lane-1.png");
        background-repeat: no-repeat;
        background-size: auto 100%;
    }
    #swipe-indication{
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #487DFF;
        opacity: .6;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
    }
</style>

<div id="lane1" class="frame-container"
     style="background-position: 25vw 40px;">
    <div id="swipe-indication"></div>
</div>
