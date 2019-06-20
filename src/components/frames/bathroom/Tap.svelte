<script>
    import { onMount } from 'svelte';
    import Draggable from 'gsap/Draggable';
    import { frameNumberBathroom } from '../../../stores/frameStore';

    let tapSrc = '/assets/png/bathroom/S1_Tap.png';
    let tapShadowSrc = '/assets/png/bathroom/S1_TapShadow.png';

    onMount(() => {
        Draggable.create("#tapHandle", {
            type:"rotation",
            throwProps: true,
            onDrag: function(){
                const water = document.getElementById("water");
                const fog = document.getElementById("fog");
                let rotationAgl = Math.round(Draggable.get("#tapHandle").rotation);
                const percentage = 1 - (rotationAgl / 300);

                water.style.opacity = percentage.toFixed(2);
                fog.style.opacity = percentage.toFixed(2);

                if(rotationAgl >= 300){
                    Draggable.get("#tapHandle").disable();

                    frameNumberBathroom.update(n => n + 1)
                }
            }
        });
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .tap-element{
        height: 100%;
        position: absolute;
    }
</style>

<div class="frame-container">
    <img class="tap-element" src={tapShadowSrc} alt="">
    <img id="tapHandle" class="tap-element" src={tapSrc} alt="">
</div>
