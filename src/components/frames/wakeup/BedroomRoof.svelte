<script>
    import {frameNumber} from '../../../stores/frameStore'

    let bedroomRoofSrc = '/assets/png/S1_BedroomRoofOff.png';
    const eyeSrc = '/assets/png/eyeFrames/eye_0.png';
    let eyeSrcNb = 0;

    function changeSrc(){
        bedroomRoofSrc = '/assets/png/S1_BedroomRoofON.png';
        frameNumber.update(n => n + 1);
    }

    function openEye() {
        const eye = document.getElementById("eye");
        eyeSrcNb++;
        if(eyeSrcNb < 11) {
            eye.src = `/assets/png/eyeFrames/eye_${eyeSrcNb}.png`;
        } else {
            eye.src = '';
        }
    }
</script>

<style>
    .frame-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    img{
        height: 105%;
        width: auto;
        position: absolute;
        touch-action: manipulation;
    }
</style>

<div class='frame-container'>
    <img src={bedroomRoofSrc} on:click={changeSrc} alt="">
    <img id="eye" src={eyeSrc} on:click={openEye} alt="">
</div>
