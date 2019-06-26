<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';

    onMount(() => {
       const round = document.getElementById('round');
       TweenMax.to(round, 1, {
           y: '-=150px',
           repeat: -1,
           opacity: 0,
           repeatDelay: 1,
           ease: Power2.easeInOut,
       })
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    #round{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: blue;
        opacity: .1;

    }
</style>

<div class="frame-container">
    <div id="round"></div>
</div>

