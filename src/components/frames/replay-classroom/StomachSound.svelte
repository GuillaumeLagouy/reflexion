<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';


    import {frameNumberReplayClass} from '../../../stores/frameStore';

    onMount(() => {
        const stomach = document.getElementById('stomach');
        const src = './assets/gif/replay-classroom/stomach2.gif';

        TweenMax.to(stomach, .2, {backgroundImage: 'url('+src+')', delay: 4.3,
            onComplete: () => {
                frameNumberReplayClass.update(n => n + 1);
            },
        });

    })
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        background-image: url("./assets/gif/replay-classroom/stomach-one-time.gif");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 238%;
    }
</style>

<div id="stomach" class="frame-container"></div>
