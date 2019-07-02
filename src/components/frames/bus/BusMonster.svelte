<script>
    import {frameNumberBus} from '../../../stores/frameStore';
    import {onMount} from 'svelte';

    onMount(() => {
        const tl = new TimelineMax({repeat:-1});
        tl.to('#infinite-bg', 20,{
          backgroundPosition: '2683px 0px',
          ease: Linear.easeNone
        });
        frameNumberBus.subscribe( (value) => {
            if(value !== 3) return;
            TweenMax.to('.scene-container', 4, { height: '150vh', onComplete: () => {
                frameNumberBus.update(n => n = 4);
            }});
        });
    });
</script>

<style>
    #infinite-bg {
        width: 110%;
        height: 100%;
        position: absolute;
        background-image: url("/assets/png/bus/S2_BackgroundLoop.png");
        transform: rotate(-12deg);
        top: -3%;
        left: -5%;
        background-repeat: repeat-x;
        background-size: 100%;
    }

    #bus-int {
        background-size: 100%;
        background-image: url("/assets/png/bus/S2_BusIntBg.png");
        width: 100%;
        height: 100%;
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>

<div id="infinite-bg"></div>
<div id="bus-int"></div>