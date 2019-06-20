<style>
    #changing-room {
        background-image: url("./assets/png/Swimming-pool/Vestiaires_garçons.png");
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
    }

    #mini-bulle-1, #mini-bulle-2, #mini-bulle-3 {
        position: absolute;
    }

    #mini-bulle-1 {
        width: 14px;
        top: 48%;
        left: 57%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }
    #mini-bulle-2 {
        width: 17px;
        top: 44%;
        left: 59.5%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;

    }
    #mini-bulle-3 {
        width: 20px;
        left: 62%;
        top: 40%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
    }

    #nuage {
        background-image: url("./assets/png/Swimming-pool/bulle.png");
        width: 30%;
        height: 30%;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        left: 65%;
        top: 19%;
        transform-origin: bottom left;
        transform: scale(0);
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
    }

    .carousel-container {
         position: absolute;
         top: 3%;
         width: 79%;
         overflow: hidden;
         left: 11%;
         height: 90%;
    }

    ul {
        width: 500%;
        height: 100%;
        display: flex;
        overflow: hidden;
        position: absolute;
        top: 12%;
    }

    li {
        width: 100%;
        height: 71%;
    }

    li img {
        margin-left: 31.5%;
        margin-top: 2%;
        width: 24%;
    }

    .content {
        width: 60%;
        height: 80%;
        position: absolute;
        top: 10%;
        left: 15%;
    }

    .arrow {
        width: 20px;
        position: absolute;
        top: calc(50% - 10px);
        cursor: pointer;
    }

    #right-arrow {
        right: 0;
    }

    #monster-model {
        height: 80%;
        width: auto;
        position: absolute;
        left: calc(50% - 46px);
        top: calc(50% - 59px);
    }

    .cross {
        position: absolute;
        width: 90px;
        left: 19%;
        height: 0;
        background-size: contain;
        background-repeat: no-repeat;
    }

    #left-cross {
         top: 15%;
         background-image: url("./assets/png/Swimming-pool/croix1.png");
    }

    #right-cross {
        bottom: calc(15% + 10px);
        background-image: url("./assets/png/Swimming-pool/croix2.png");
    }

    #mouth {
        position: absolute;
        top: 57%;
        left: calc(50% + 15px);
        width: 17px;
        opacity: 0;
        visibility: hidden;
    }

</style>

<div id="changing-room">
    <img id="mini-bulle-1" src="./assets/png/Swimming-pool/miniBulle1.png"/>
    <img id="mini-bulle-2" src="./assets/png/Swimming-pool/miniBulle2.png"/>
    <img id="mini-bulle-3" src="./assets/png/Swimming-pool/miniBulle3.png"/>
    <img id="mouth" src="./assets/png/Swimming-pool/mouth.png">
    <div id="nuage">
        <div class="content">
            <div id="left-cross" class="cross"></div>
            <div id="right-cross" class="cross"></div>
            <img id="left-arrow" class="arrow" src="./assets/png/Swimming-pool/left_arrow.png"/>
            <div class="carousel-container">
                <ul>
                    <li><img class="male" src="./assets/png/Swimming-pool/m0.png"/></li>
                    <li><img class="male" src="./assets/png/Swimming-pool/m1.png"/></li>
                    <li><img class="male" src="./assets/png/Swimming-pool/m2.png"/></li>
                    <li><img class="male" src="./assets/png/Swimming-pool/m3.png"/></li>
                    <li><img class="male" src="./assets/png/Swimming-pool/m4.png"/></li>
                    <li><img class="female" src="./assets/png/Swimming-pool/f0.png"/></li>
                    <li><img class="female" src="./assets/png/Swimming-pool/f1.png"/></li>
                    <li><img class="female" src="./assets/png/Swimming-pool/f2.png"/></li>
                    <li><img class="female" src="./assets/png/Swimming-pool/f3.png"/></li>
                    <li><img class="female" src="./assets/png/Swimming-pool/f4.png"/></li>
                </ul>
            </div>
            <img id="monster-model" src="./assets/png/Swimming-pool/mc.png"/>
            <img id="right-arrow" class="arrow" src="./assets/png/Swimming-pool/right_arrow.png"/>
        </div>
    </div>
</div>