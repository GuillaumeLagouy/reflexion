<script>
    import {get} from 'svelte/store';
    import TweenMax from 'gsap';

    import {frameNumberEnd} from '../../../stores/frameStore';
    import {gender} from '../../../stores/frameStore';

    let genderValue = get(gender);

    frameNumberEnd.subscribe(value => {
        if(value !== 1) return;
        TweenMax.to('#monster', 4, {autoAlpha: 0});
        TweenMax.to('.character', 4, {autoAlpha: 1, ease: Power4.easeIn});
    })
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .end-img{
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 200%;
        background-position: center -10%;
    }
    #mirror{
        background-image: url('./assets/png/end/S11-Mirror.png');
    }
    #monster{
        background-image: url('./assets/png/end/S11-Monster.png');
    }
    #girl{
        background-image: url('./assets/png/end/S11-Girl.png');
    }
    #boy{
        background-image: url('./assets/png/end/S11-Boy.png');
    }
    .character{
        opacity: 0;
        visibility: hidden;
    }
</style>

<div class="frame-container">
    <div id="monster" class="end-img"></div>
    {#if genderValue == 'female'}
        <div id="girl" class="end-img character"></div>
    {:else}
        <div id="boy" class="end-img character"></div>
    {/if}
    <div id="mirror" class="end-img"></div>
</div>
