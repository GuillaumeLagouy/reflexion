<script>
    import TweenMax from 'gsap';
    import {onMount} from 'svelte';

    import {frameNumberHome} from '../../../stores/frameStore';

    let src = './assets/png/home/S7_School_Monster.png';

    onMount(() => {
        let monster = document.getElementById('monster-school');
        frameNumberHome.subscribe(value => {
            if(value !== 2) return;
            TweenMax.to(monster, 1.5, {opacity: 0, x: '+=20px', delay: 1.5, onComplete: () => {
                frameNumberHome.update(n => n + 1);
            }});
        });
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url("./assets/png/home/S7_School.png");
        background-position: center center;
        background-size: 120%;
        background-repeat: no-repeat;
    }
    img{
        height: 100%;
        width: auto;
    }
</style>

<div class="frame-container">
    <img id="monster-school" {src} alt="">
</div>
