<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    import {frameNumberHome} from '../../../stores/frameStore';

    let src = './assets/png/home/S7_Bathroom_Monster.png';

    onMount(() => {
        frameNumberHome.subscribe(value => {
            if(value !== 6) return;
            TweenMax.to('#monster-bathroom', 1, {x: '+=10px', opacity: 0, delay: 1, onComplete: () => {
                    frameNumberHome.update(n => n + 1);
            }});
        })

    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url('./assets/png/home/S7_Bathroom.png');
        background-position: center center;
        background-size: 90%;
        background-repeat: no-repeat;

    }
    img{
        height: 100%;
        width: auto;
    }
</style>

<div class="frame-container">
    <img id="monster-bathroom" {src} alt="">
</div>
