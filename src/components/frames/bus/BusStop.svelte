<script>
    import {onMount} from 'svelte';
    import {frameNumberBus} from '../../../stores/frameStore';

    onMount(() => {
        frameNumberBus.subscribe(value => {
            if(value !== 1) return;
            TweenMax.to('#waiting_monster', 0, {autoAlpha: 0, delay: 4});
            TweenMax.to('#clouds', 1, {y: -5, repeat: -1, yoyo: true, yoyoEase: true});
            TweenMax.from('#bus-container', 2, {left: '100%', delay: 1});
            TweenMax.to('#bus-container', 2, {left: '-110%', delay: 5, onComplete: () => {
                frameNumberBus.update(n => n = 2);
            }});
            TweenMax.to('#bus-container', 0.2, {y: -3, repeat: -1, yoyo: true, yoyoEase: true});
            TweenMax.staggerTo('#s2-front-wheel, #s2-rear-wheel', 0.5, {rotation: 720, repeat: -1});
        });
    });
</script>

<style>
    #clouds {
        max-width: 100%;
    }

    #waiting_monster {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 200px;
    }

    #bus_stop {
        position: absolute;
        width: 150px;
        top: 20%;
        left: 60%;
    }

    #s2-bus {
        width: 100%;
        position: absolute;
        top: 20%;
    }

    #s2-front-wheel, #s2-rear-wheel {
        position: absolute;
        width: 12.5%;
    }

    #s2-front-wheel {
        left: 5%;
        top: 110.5%;
    }

    #s2-rear-wheel {
        left: 74%;
        top: 112%;
    }

    #bus-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -20%;
    }
</style>

<div>
    <img id="clouds" src="/assets/png/bus/S2_Clouds.png" alt=""/>
    <img id="waiting_monster" src="/assets/png/bus/S2_WaitingMonster.png" alt=""/>
    <img id="bus_stop" src="/assets/png/bus/S2_BusStop.png" alt=""/>
    <div id="bus-container">
        <img id="s2-bus" src="/assets/png/bus/S2_Bus.png" alt=""/>
        <img id="s2-rear-wheel" src="/assets/png/bus/S2_RearWheel.png" alt=""/>
        <img id="s2-front-wheel" src="/assets/png/bus/S2_FrontWheel.png" alt=""/>
    </div>
</div>