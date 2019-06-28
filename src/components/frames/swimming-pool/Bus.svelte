<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';
    import {frameNumberPool} from '../../../stores/frameStore';
    import {activeSceneNb} from '../../../stores/scenesStore';

    let busSrc = './assets/png/Swimming-pool/S3_Bus.png';
    let wheelSrc = './assets/png/Swimming-pool/S3_Wheel.png';

    onMount(() => {
        frameNumberPool.subscribe(value => {
            if (value !== 4) return;
            TweenMax.to('#bus', 4, {left: '100%', onComplete: goToPlaytimeScene});
            TweenMax.to('#bus', .3, {y: -8, repeat: -1, yoyo: true, yoyoEase: true});
            TweenMax.to('#front-wheel, #rear-wheel', 1, {rotation: 360, repeat: -1});
        });

        function goToPlaytimeScene(){
            activeSceneNb.update(n => n + 1);
        }

    });
</script>

<style>
    #bus {
        height: 100%;
        position: absolute;
        bottom: 10%;
        left: -500%;
    }

    #bus img:first-of-type {
        height: 110%;
    }

    #front-wheel, #rear-wheel {
        position: absolute;
        bottom: -20%;
        height: 37%;
    }

    #front-wheel {
        left: 82.6%;
    }

    #rear-wheel {
        left: 13.5%;
    }
</style>

<div id="bus">
    <img src={busSrc} alt=""/>
    <img id="front-wheel" src={wheelSrc} alt=""/>
    <img id="rear-wheel" src={wheelSrc} alt=""/>
</div>
