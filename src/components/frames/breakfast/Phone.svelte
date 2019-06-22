<script>
    import {frameNumberBreakfast} from '../../../stores/frameStore';

    let phoneSrc = "/assets/png/breakfast/phone/S1_Phone.png";
    let homeSrc  = "/assets/png/breakfast/phone/S1_PhoneHome.png";
    let calendarSrc = "/assets/png/breakfast/phone/S1_PhoneCalendar.png";
    let calendarSelectSrc = "/assets/png/breakfast/phone/S1_PhoneCalendarSelect.png";

    function goToCalendar(){
        const calendarElm = document.getElementById('calendar');
        calendarElm.style.zIndex = '1';
    }

    function select(){
        const calendarSelectElm = document.getElementById('calendarSelect');
        calendarSelectElm.style.zIndex = '2';
    }

    function nextScene() {
        frameNumberBreakfast.update(n => n + 1);
    }
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
</style>

<div class="frame-container">
    <img id="calendar" src={calendarSrc} on:click={select} alt="">
    <img id="calendarSelect" src={calendarSelectSrc} on:click={nextScene} alt="">
    <img src={homeSrc} alt="" on:click={goToCalendar}>
    <img id="phone" src={phoneSrc} alt="">
</div>
