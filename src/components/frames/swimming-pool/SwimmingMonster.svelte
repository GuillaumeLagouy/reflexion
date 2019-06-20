<script>
    import { onMount } from 'svelte';
    import TweenMax from 'gsap';
    import TimelineMax from 'gsap/TimelineMax';

    let monsterSrc = "./assets/png/swimming-pool/swimming-monster.png";
    let fogSrc = "./assets/png/swimming-pool/vapeur.png";

    onMount(() => {
        const fog = document.getElementById('fog');

        const tl = new TimelineMax({repeat: -1});
        TweenMax.to(fog, 1, {y: -10, repeat: -1, yoyo: true, yoyoEase: true});
    });
</script>

<style>
    img::selection {
        background: none;
    }

    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    #pool {
        background-image: url("./assets/png/Swimming-pool/piscine.png");
        background-size: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right;
    }

    #swimming-monster {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
    }

    #water {
        background-image: url("./assets/png/Swimming-pool/Eau.png");
        height: 100%;
        background-position: 0 bottom;
        width: 100%;
        background-repeat: repeat-x;
        position: absolute;
        bottom: -23%;
        background-size: 220%;
    }

    #fog {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
    }
</style>

<div id="pool">
    <img id="fog" src={fogSrc} alt=""/>
    <img id="swimming-monster" src={monsterSrc} alt=""/>
    <div id="water"></div>
</div>