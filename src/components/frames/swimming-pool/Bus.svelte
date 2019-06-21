<script>
    import { onMount } from 'svelte';
    import TweenMax from 'gsap';
    import {frameNumber} from "../../../stores/frameStore";

    let busSrc = "./assets/png/Swimming-pool/bus.png";
    let roueSrc = "./assets/png/Swimming-pool/roue.png";

    onMount(() => {
        frameNumber.subscribe(value => {
            if (value !== 4) return;
            const bus = document.getElementById('bus');
            const roueAvant = document.getElementById('roue-avant');
            const roueArriere = document.getElementById('roue-arriere');

             TweenMax.to(bus, 4, {left: "100%"});
             TweenMax.to(bus, 0.2, {y: -5, repeat: -1, yoyo: true, yoyoEase: true});
             TweenMax.to(roueAvant, 1, {rotation: 360, repeat: -1});
             TweenMax.to(roueArriere, 1, {rotation: 360, repeat: -1});
        });
    });
</script>

<style>
    .frame-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    #bus {
        height: 100%;
        position: absolute;
        bottom: 10%;
        left: -500%;
    }

    #bus img:first-of-type {
        height: 110%;
    }

    #roue-avant {
        position: absolute;
        left: 82.6%;
        bottom: -20%;
        height: 37%
    }

    #roue-arriere {
        position: absolute;
        left: 13.5%;
        bottom: -21%;
        height: 37%
    }
</style>
<div id="bus">
    <img src={busSrc}/>
    <img id="roue-avant" src={roueSrc}/>
    <img id="roue-arriere" src={roueSrc}/>
</div>