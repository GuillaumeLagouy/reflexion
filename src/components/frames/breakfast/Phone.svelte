<script>
    let phoneSrc = "/assets/png/breakfast/phone/S1_Phone.png";
    let homeSrc  = "/assets/png/breakfast/phone/S1_PhoneHome.png";
    let calendarSrc = "/assets/png/breakfast/phone/S1_PhoneCalendar.png";
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

</style>

<div class="frame-container">
    <img src={calendarSrc} alt="">
    <img src={homeSrc} alt="">
    <img id="phone" src={phoneSrc} alt="">
</div>
