<style>
    #pool {
        background-image: url("./assets/png/Swimming-pool/piscine.png");
        background-size: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right;
    }

    #swimming-monster {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
    }

    #water {
        background-image: url("./assets/png/Swimming-pool/Eau.png");
        height: 100%;
        background-position: 0 bottom;
        width: 100%;
        background-repeat: repeat-x;
        position: absolute;
        bottom: -23%;
        background-size: 220%;
    }


</style>

<div id="pool">
    <img id="swimming-monster" src="./assets/png/swimming-pool/swimming-monster.png"/>
    <div id="water"></div>
</div>