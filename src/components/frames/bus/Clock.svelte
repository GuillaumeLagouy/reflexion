<script>
    import {frameNumberBus} from '../../../stores/frameStore';
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';
    import TimelineMax from 'gsap';

    let dialSrc = './assets/png/bus/S2_ClockDial.png';
    let hourHandSrc = './assets/png/bus/S2_HourHand.png';
    let minuteHandSrc = './assets/png/bus/S2_MinuteHand.png';
    let secondHandSrc = './assets/png/bus/S2_SecondHand.png';

    onMount( () => {
        TweenMax.from('#hour-hand', 1, {rotation: 15, delay: 3});
        TweenMax.from('#minute-hand', 0.5, {rotation: -180, delay: 3});
        TweenMax.from('#second-hand', 1, {rotation: -5400, delay: 3});
        TweenMax.to('#scene2-frame1', 1, {top: "0", autoAlpha: 0, delay: 5});
        TweenMax.to('#hour-hand', 1, {rotation: 25, delay: 3});
        TweenMax.to('#minute-hand', 0.5, {rotation: -80, delay: 3});
        frameNumberBus.update(n => n = 1);
    });
</script>

<style>
    #clock {
        background-image: url("./assets/png/bus/S2_Clock.png");
        background-size: 80%;
        background-position: calc(50% + 12px) center;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }

    #dial {
        position: absolute;
        top: calc(50% - 21px);
        width: 27px;
        left: calc(50% - 12px);
    }

    #hour-hand {
        width: 38px;
        transform-origin: top right;
        position: absolute;
        top: calc(50% - 13px);
        left: calc(50% - 35px);
    }

    #minute-hand {
        position: absolute;
        transform-origin: top center;
        width: 5%;
        top: calc(50% - 12px);
        left: calc(50% - 8px);
    }

    #second-hand {
        transform-origin: bottom center;
        position: absolute;
        width: 4%;
        left: calc(50% - 6px);
        top: calc(50% - 84px);
    }
</style>

<div id="clock">
    <img id="minute-hand" src={minuteHandSrc} alt=""/>
    <img id="second-hand" src={secondHandSrc} alt=""/>
    <img id="hour-hand" src={hourHandSrc} alt=""/>
    <img id="dial" src={dialSrc} alt=""/>
</div>