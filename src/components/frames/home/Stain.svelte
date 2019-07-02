<script>
    import {onMount} from 'svelte';
    import TimelineMax from 'gsap/TimelineMax';

    onMount(() => {
        const stain = document.getElementById('stain');

        const tl = new TimelineMax({repeat: -1, yoyo: true, yoyoEase: true});
        tl.to(stain, 3, {
            scale: 0.98,
            rotation: '+=1deg',
            ease:  Power2.easeIn,
        }).to(stain, 3, {
            scale: 1.04,
            rotation: '-=2deg',
            ease:  Power2.easeIn,
        });
    })
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url("./assets/svg/S7_Stain.svg");
        background-repeat: no-repeat;
        background-size: 75%;
        background-position: center center;
    }
</style>

<div id="stain" class="frame-container"></div>
