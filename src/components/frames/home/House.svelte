<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    import {frameNumberHome} from '../../../stores/frameStore';

    let src = './assets/png/home/S7_House_Monster.png';

    onMount(() => {
        let monster = document.getElementById('monster-house');

        frameNumberHome.subscribe(value => {
            if(value !== 4) return;
            TweenMax.to(monster, 1, {x: '-=10px', scale: 0.9, opacity: 0, delay: 1, onComplete: () => {
                frameNumberHome.update(n => n + 1);
            }});
        });
    });

</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url("./assets/png/home/S7_House.png");
        background-position: center center;
        background-size: 110%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
    }
    img{
        height: 100%;
        width: auto;
        margin: auto 0;
    }
</style>

<div class="frame-container">
    <img id="monster-house" {src} alt="">
</div>
