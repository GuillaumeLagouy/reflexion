<script>
    import {frameNumber, gender} from "../../../stores/frameStore";

    function selectDoor(e) {
        const frame = document.querySelector('#scene2-frame1');
        const changingRooms = document.querySelector('#changing-rooms');
        if (e.currentTarget.id === "girls-room") {
            gender.update(n => n = "female");
            changingRooms.style.backgroundImage = 'url("./assets/png/Swimming-pool/Porte_filles_ouverte.png")';
        } else {
            changingRooms.style.backgroundImage = 'url("./assets/png/Swimming-pool/Porte_garçons_ouverte.png")';
            gender.update(n => n = "male");
        }
        Object.assign(changingRooms.style, {
            height: changingRooms.offsetHeight + "px",
            width: changingRooms.offsetWidth + "px"
        });
        let w, h, x, y;
        y = this.offsetTop;
        x = this.offsetLeft;
        w = this.offsetWidth;
        h = this.offsetHeight;
        changingRooms.style.backgroundPosition = (-x) + "px " + (-y) + "px";
        TweenMax.to(frame, 1, {left: x + frame.offsetLeft, top: y + frame.offsetTop, width: w, height:h});
        frameNumber.update(n => n + 1);
    }
</script>

<style>
    img::selection {
        background: none;
    }
    .frame-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    #changing-rooms {
        background-image: url("./assets/png/Swimming-pool/Vestiaires_portes_final.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        transition: all 1s;
    }

    .door {
        position: absolute;
        top: 27%;
        height: 34%;
        width: 16%;
        cursor: pointer;
    }

    #girls-room {
        left: 27%;
    }

    #boys-room {
        left: 59%;
    }
</style>

<div class="door" id="girls-room" on:click={selectDoor}></div>
<div class="door" id="boys-room" on:click={selectDoor}></div>
<div id="changing-rooms"></div>