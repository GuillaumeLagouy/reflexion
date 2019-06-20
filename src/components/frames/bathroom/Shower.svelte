<script>
    import { onMount } from 'svelte';
    import TweenMax from 'gsap';
    import TimelineMax from 'gsap/TimelineMax';
    import Draggable from 'gsap/Draggable';

    let fogSrc = '/assets/png/bathroom/S1_Fog.png';
    let showerSrc = '/assets/png/bathroom/S1_Shower.png';
    let waterSrc = '/assets/png/bathroom/S1_Water_3.png';

    onMount(() => {
        let water = document.getElementById('water');
        let a = 1;

        setInterval(() => {
            water.src = `/assets/png/bathroom/S1_Water_${a}.png`;
            a++;
            if(a > 3) a=1;
        }, 100);
    });

    onMount(() => {
        const fog = document.getElementById('fog');

        const tl = new TimelineMax({repeat: -1});
        tl.from(fog, 5, {x: -500, ease: Power0.easeNone});
        tl.to(fog, 5, {x: 500, ease: Power0.easeNone});
        TweenMax.to(fog, 1, {y: -10, repeat: -1, yoyo: true, yoyoEase: true});
    })
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    #fog{
        height: 60%;
        position: absolute;
        bottom: 0;
    }
    .shower-element{
        height: 100%;
        position: absolute;
    }
</style>

<div class="frame-container">
    <img id="water" class="shower-element" src={waterSrc} alt="">
    <img id="shower" class="shower-element" src={showerSrc} alt="">
    <img id="fog" src={fogSrc} alt="">
</div>
