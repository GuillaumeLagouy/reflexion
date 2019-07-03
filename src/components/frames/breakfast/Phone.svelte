<script>
    import TweenMax from 'gsap';
    import {onMount} from 'svelte';

    import {frameNumberBreakfast} from '../../../stores/frameStore';

    let phoneSrc = "/assets/png/breakfast/phone/S1_Phone.png";
    let homeSrc  = "/assets/png/breakfast/phone/S1_PhoneHome.png";
    let calendarSrc = "/assets/png/breakfast/phone/S1_PhoneCalendar.png";
    let calendarSelectSrc = "/assets/png/breakfast/phone/S1_PhoneCalendarSelect.png";

    function goToCalendar(){
        const appCircle = document.getElementById('app-circle');
        appCircle.style.display = 'none';
        const calendarElm = document.getElementById('calendar');
        calendarElm.style.zIndex = '1';
        document.getElementById('calendar-circle').style.display = 'block';
        TweenMax.to('#calendar-circle', 1, { scale: 1.2, opacity: 0, repeat: -1});
    }

    function select(){
        const calendarSelectElm = document.getElementById('calendarSelect');
        calendarSelectElm.style.zIndex = '2';
        nextScene();
    }

    function nextScene() {
        frameNumberBreakfast.update(n => n + 1);
    }

    onMount(() => {
        TweenMax.to('#app-circle', 1, { scale: 1.2, opacity: 0, repeat: -1});
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: transparent;
    }
    img{
        height: 100%;
        position: absolute;
        background: none;
    }
    #phone{
        pointer-events: none;
        z-index: 2;
    }
    .circle{
        position: absolute;
        z-index: 3;
        width: 50px;
        height: 50px;
        background-color: #9FBBFF;
        border-radius: 100%;
        opacity: .7;
        pointer-events: none;
    }
    #app-circle{
        left: 38%;
        top: 18%;
    }
    #calendar-circle{
        left: 42%;
        top: 36%;
        background-color: #FFF084;
        display: none;
    }
</style>

<div class="frame-container">
    <div id="app-circle" class="circle"></div>
    <div id="calendar-circle" class="circle"></div>
    <img id="calendar" src={calendarSrc} on:click={select} alt="">
    <img id="calendarSelect" src={calendarSelectSrc} alt="">
    <img src={homeSrc} alt="" on:click={goToCalendar}>
    <img id="phone" src={phoneSrc} alt="">
</div>
