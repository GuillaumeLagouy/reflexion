<style>
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

    .opened-door {
        width:100%;
        height:100%;
        top: 0;
        left: 0;
    }
</style>

<div class="door" id="girls-room"></div>
<div class="door" id="boys-room"></div>
<div id="changing-rooms"></div>