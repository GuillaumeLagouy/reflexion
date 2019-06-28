<script>
    import {onMount} from 'svelte';
    import TweenMax from 'gsap';
    import TimelineMax from 'gsap/TimelineMax';
    import Hammer from 'hammerjs';

    import {frameNumberPlaytime} from '../../../stores/frameStore';
    import {addBubble} from './bubble';

    onMount(() => {
        const insult = document.getElementById('insult');
        const insultMonster = document.getElementById('insult_monster');
        const interaction = document.getElementById('s4-swipe-interaction');
        frameNumberPlaytime.subscribe(value => {
           if(value !== 4) return;
           const tl = new TimelineMax({onComplete: startInteraction()});
           tl.to(insult, 0.5, {backgroundImage: 'url(./assets/png/playtime/S4_Insult_1.png)'})
             .to(insult, 0.5, {backgroundImage: 'url(./assets/png/playtime/S4_Insult_2.png)', delay: 0.5})
             .to(insult, 0.5, {backgroundImage: 'url(./assets/png/playtime/S4_Insult_3.png)', delay: 0.5})
             .to(insultMonster, 1, {display: 'block'})
             .to(interaction, 1, {display: 'block'});
        });

        const startInteraction = () => {
            TweenMax.to(interaction, 1, {
                x: '-=150px',
                repeat: -1,
                opacity: 0,
                repeatDelay: 1,
                ease: Power2.easeInOut,
            });

            let mvmt = 10;
            const hammer = new Hammer(insultMonster);
            hammer.on('swipeleft', () => {
                const tl = new TimelineMax();
                tl.to(insultMonster, 0.5, {x: '-='+ mvmt +'px'});
                if(mvmt !== 640 ) {
                    tl.to(insultMonster, 0.5, {x: '+='+ mvmt +'px'});
                    mvmt = mvmt * 4;
                } else {
                    tl.to(insultMonster, 0.2, {display: 'none'});
                    tl.to(interaction, 0.2, {display: 'none', onComplete: () => {
                        revealBubble();
                    }});
                }
            });
        };

        const revealBubble = () => {
            const bubbleContainer = document.getElementById('small-bubble-container');
            addBubble(100, bubbleContainer, 300, 120, 50, () => {
                frameNumberPlaytime.update(n => n + 1);
            });
        };
    });

</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    #insult{
        background-size: 160%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    #insult_monster{
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("./assets/png/playtime/S4_Insult_Monster.png");
        background-size: 160%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    #s4-swipe-interaction{
        display: none;
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: blue;
        opacity: 0.1;
        top: 50%;
        left: 40%;
        margin-top: -25px;
        z-index: 2;
    }
    #small-bubbles{
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    #small-bubble-container{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>

<div id="insult" class="frame-container">
    <div id="insult_monster"></div>
    <div id="s4-swipe-interaction"></div>
    <div id="small-bubbles">
        <div id="small-bubble-container">

        </div>
    </div>
</div>
