<script>
    import {frameNumberBus} from '../../../stores/frameStore';
    import {onMount} from 'svelte';

    let row0Src = './assets/png/bus/S2_Row0.png';
    let row1Src = './assets/png/bus/S2_Row1.png';
    let row2Src = './assets/png/bus/S2_Row2.png';
    let row3Src = './assets/png/bus/S2_Row3.png';
    let row4Src = './assets/png/bus/S2_Row4.png';
    let row5Src = './assets/png/bus/S2_Row5.png';
    let row6Src = './assets/png/bus/S2_Row6.png';
    let row7Src = './assets/png/bus/S2_Row7.png';
    let floorSrc = './assets/png/bus/S2_Floor.png';
    let backgroundSrc = './assets/png/bus/S2_BusBg.png';

    onMount(() => {
        TweenMax.to('#bus-interior', 4, { yPercent: 45, delay: 15 });
        frameNumberBus.update(n => n = 3);
    });
</script>

<style>
    #bus-interior {
        width: 100%;
        height: 100%;
    }

    div img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    #bus-floor {
        bottom: 28%;
        height: 104%;
        width: auto;
        left: 41%;
    }

    #bus-row-1 {
        bottom: 13%;
        width: 95%;
        left: 2.5%;
    }

    #bus-row-2 {
        bottom: 25%;
        width: 90%;
        left: 5%;
    }
    
    #bus-row-3 {
        bottom: 40%;
        width: 85%;
        left: 7.5%;
    }

    #bus-row-4 {
        bottom: 58%;
        width: 80%;
        left: 10%;
    }

    #bus-row-5 {
        bottom: 74%;
        width: 74%;
        left: 12.5%;
    }

    #bus-row-6 {
        bottom: 87%;
        width: 70%;
        left: 15%;
    }

    #bus-row-7 {
        bottom: 91%;
        width: 65%;
        left: 17.5%;
    }

</style>

<div id="bus-interior">
    <img id="bus-bg" src={backgroundSrc} alt=""/>
    <img id="bus-floor" src={floorSrc} alt=""/>
    <img id="bus-row-7" src={row7Src} alt=""/>
    <img id="bus-row-6" src={row6Src} alt=""/>
    <img id="bus-row-5" src={row5Src} alt=""/>
    <img id="bus-row-4" src={row4Src} alt=""/>
    <img id="bus-row-3" src={row3Src} alt=""/>
    <img id="bus-row-2" src={row2Src} alt=""/>
    <img id="bus-row-1" src={row1Src} alt=""/>
    <img id="bus-row-0" src={row0Src} alt=""/>
</div>