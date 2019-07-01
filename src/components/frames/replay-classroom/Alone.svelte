<script>
    import TweenMax from 'gsap';
    import TimelineMax from 'gsap/TimelineMax';
    import {onMount} from 'svelte';
    import Hammer from 'hammerjs';

    import {frameNumberReplayClass} from '../../../stores/frameStore';

    onMount(() => {
        const alone = document.getElementById('alone');
        const hammer = new Hammer(alone);

        // Pinchout indication
        const tl = new TimelineMax({repeat: -1, repeatDelay: 1});
        tl.from('#circle1', 1, {y: '-=150px', opacity: .5}, 0);
        tl.from('#circle2', 1, {y: '+=150px', opacity: .5}, 0);

        hammer.get('pinch').set({ enable: true });
        hammer.on('pinchend', e => {
            if(e.additionalEvent === 'pinchout') return;
            TweenMax.to(alone, .5, {scale: .7});
            console.log('test');
            frameNumberReplayClass.update(n => n + 1);
        });
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url("./assets/png/replay-class/S10-Alone-Monster.png");
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
    }
    .circle-container{
        transform: rotate(45deg);
        position: absolute;
        top: 33%;
        left: 50%;

    }
    .circle{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #9FBBFF;
        opacity: 0;
    }
</style>

<div id="alone" class="frame-container" style="background-size: 180%;">
    <div class="circle-container">
        <div id="circle1" class="circle"></div>
        <div id="circle2" class="circle"></div>
    </div>
</div>
