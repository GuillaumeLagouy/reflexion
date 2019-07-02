<script>
    import { onMount } from 'svelte';
    import Draggable from 'gsap/Draggable';
    import { frameNumberBathroom } from '../../../stores/frameStore';

    let tapBlueSrc = '/assets/png/bathroom/S1_TapBlue.png';
    let tapYellowSrc = '/assets/png/bathroom/S1_TapYellow.png';

    onMount(() => {
        const dragTap = (id) => {
            Draggable.create(id, {
                type:"rotation",
                bounds:{
                    minRotation: 300,
                    maxRotation: 0
                },
                throwProps: true,
                onDrag: function(){
                    const water = document.getElementById("water");
                    const fog = document.getElementById("fog");
                    let rotationAgl = Math.round(Draggable.get(id).rotation);
                    const percentage = 1 - (rotationAgl / 300);

                    water.style.opacity = percentage.toFixed(2);
                    fog.style.opacity = percentage.toFixed(2);

                    if(rotationAgl >= 300){
                        Draggable.get(id).disable();

                        frameNumberBathroom.update(n => n + 1)
                    }
                }
            });
        };

        dragTap('#tap-blue');
        dragTap('#tap-yellow');
    });
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url("./assets/png/bathroom/S1_TapBase.png");
        background-position: center center;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    img{
        position: absolute;
        height: 80%;
        width: auto;
        top: 10%;
    }
    #tap-blue{
        left: 5%;
    }
    #tap-yellow{
        right: 5%;
    }

</style>

<div class="frame-container">
    <img id="tap-blue" class="tap" src={tapBlueSrc} alt="">
    <img id="tap-yellow" class="tap" src={tapYellowSrc} alt="">
</div>
