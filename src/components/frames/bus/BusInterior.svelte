<script>
    import {frameNumberBus} from '../../../stores/frameStore';
    import {onMount} from 'svelte';

    onMount(() => {
        frameNumberBus.subscribe( value => {
            if(value !== 2) return;
            TweenMax.to('#bus-interior', 4, { yPercent: 45, onComplete: () => frameNumberBus.update(n => n = 3) });
        });
    });
</script>

<style>
    #bus-interior {
        width: 100%;
        height: 100%;
        background-color: white;
    }

    div img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    #bus-floor {
        bottom: 24%;
        width: 18%;
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
    <img id="bus-bg" src="/assets/png/bus/S2_BusBg.png" alt=""/>
    <img id="bus-floor" src="/assets/png/bus/S2_Floor.png" alt=""/>
    <img id="bus-row-7" src="/assets/png/bus/S2_Row7.png" alt=""/>
    <img id="bus-row-6" src="/assets/png/bus/S2_Row6.png" alt=""/>
    <img id="bus-row-5" src="/assets/png/bus/S2_Row5.png" alt=""/>
    <img id="bus-row-4" src="/assets/png/bus/S2_Row4.png" alt=""/>
    <img id="bus-row-3" src="/assets/png/bus/S2_Row3.png" alt=""/>
    <img id="bus-row-2" src="/assets/png/bus/S2_Row2.png" alt=""/>
    <img id="bus-row-1" src="/assets/png/bus/S2_Row1.png" alt=""/>
    <img id="bus-row-0" src="/assets/png/bus/S2_Row0.png" alt=""/>
</div>