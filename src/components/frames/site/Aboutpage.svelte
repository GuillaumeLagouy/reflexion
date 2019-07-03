<script>
    import {onMount} from 'svelte';
    import {activeSceneNb} from '../../../stores/scenesStore';

    let lang = "fr", textArray, textArrayEn;
    let strongClass;
    const textArrayFr = [];

    onMount(() => {
        strongClass = document.querySelector('strong').classList[0];
        textArrayEn = [
            "About",
            "<strong class='" + strongClass + "'>Puberty</strong> is a difficult period in a teenager's life in which the youngster can easily feel uncomfortable because of the way he considers his physical appearance.",
            "<strong class='" + strongClass + "'>\"Réflexion\"</strong> is an interactive story which tells you about an average middle schooler day lived by a monster who will feel affected by their <strong class='" + strongClass + "'>difference</strong> with others.",
            "Our goal is that the user sees themself through the monster, in order to bring them some reflection to help them take a step back about their complexes and accept themself.",
            "Finally, we wish to bring help to teenagers by leading them without judgement to an associative plateform in which they'll be able to express their thoughts.",
            "Start the experience",
            "Team",
            "Developer",
            "Developer",
            "This website was created to showcase a student project"
        ];
        textArray = document.querySelectorAll('.lang');
        textArray.forEach((text) => { textArrayFr.push(text.innerHTML); });
    });

    function switchLanguage(e) {
        if(lang === e.currentTarget.innerHTML.toLocaleLowerCase()) return;
        if(lang === "fr") lang = "en";
        else lang = "fr";
        document.querySelector('.active').classList.remove('active');
        e.currentTarget.classList.add('active');
        document.documentElement.lang = lang;
        textArray.forEach((text, index) => textArray[index].innerHTML = lang === "en"?textArrayEn[index]:textArrayFr[index]);
    }

    function start() {
        /*if(screen.width < 1366 && screen.width > 700) { // condition tablette
                    activeSceneNb.update((value => value = 1));
                    // TODO : Go to first scene
                }
                else {
                    const parent = this.parentNode;
                    this.remove();
                    parent.style.top = "50vh";
                    const img = document.createElement('img');
                    const p = document.createElement('p');
                    p.innerHTML = 'Cette expérience se joue sur tablette';
                    img.src = './assets/png/homepage/pad.png';
                    parent.appendChild(img);
                    parent.appendChild(p);
                }*/
                activeSceneNb.update((value => value = 1));
                // TODO : Go to first scene
    }

</script>
<style>
    * {
        font-family: "Mikado", sans-serif;
        font-size: 22px;
        color: black;
    }

    #about {
        width: 60%;
        margin: auto;
        margin-top: 22vh;
    }

    strong {
        font-family: "MikadoBold", sans-serif;
        text-transform: uppercase;
    }

    #about p {
        margin-top: 25px;
    }

    #illustrations {
        width: 80%;
        margin-left: 22%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #illustration-tache {
        position: absolute;
        right: -50px;
        z-index: -1;
    }

    h2 {
        font-family: "MikadoBold", sans-serif;
        text-transform: uppercase;
        font-size: 30px;
    }

    h1 {
        width: 100%;
        background-image: url("./assets/png/about-page/header.png");
        background-size: 100%;
        background-position: -575px -650px;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
        top: 0;
        min-height: 40vh;
        z-index: -1;
    }

    h1:after {
        content: "";
        background-image: url("./assets/png/about-page/logo.png");
        position: absolute;
        top: 10%;
        left: 2.5%;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }

    header nav {
        display: flex;
        margin-top: 20px;
        margin-right: 20px;
        width: 50%;
        justify-content: flex-end;
        right: 0;
        position: absolute;
    }

    header a {
        color: black;
    }

    header a:hover {
        text-decoration: none;
    }

    .language-links a:first-of-type:after {
        content: '/';
        position: absolute;
        right: -17.5px;
    }

    .language-links a {
        margin: 0 10px;
        cursor: pointer;
    }

    header a.inactive {
        font-weight: bold;
        margin-left: 5%;
        cursor: default;
    }

    header a:not(.inactive) {
        position: relative;
    }

    header a:not(.inactive):before {
        content: "";
        width: 100%;
        height: 2px;
        background: black;
        transition: all 0.2s ease-in-out;
        position: absolute;
        bottom: -5px;
    }

    header a:not(.active):before {
        transform: scaleX(0);
        width: 100%;
    }

    header a:not(.active):hover:before {
        transform: scaleX(1);
    }

    #about #start2 {
        text-align: center;
        margin-top: 100px;
    }

    #start2 button {
        background: none;
        text-transform: uppercase;
        border: 2px solid black;
        padding: 15px 20px;
        font-family: "MikadoBold", sans-serif;
        cursor: pointer;
    }

    #team {
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
    }

    .team-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 25%;
    }

    h3, h4 {
        text-align: center;
        margin: 10px 0;
        font-size: 28px;
    }

    h3 {
        font-family: "MikadoBold", sans-serif;
    }

    h4 {
        font-family: "Verveine", sans-serif;
    }

    .illustration-container {
        margin: auto;
    }

    #team-presentation {
        margin: auto;
        width: 90%;
        margin-top: 100px;
    }

    footer {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        min-height: 40vh;
    }

    footer div:first-of-type {
        background-image: url("./assets/png/about-page/footer.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 80%;
        background-position-y: -10vh;
        background-position-x: -40vh;
        position: relative;
    }

    footer div:first-of-type p {
        position: absolute;
        bottom: 15%;
        left: 5%;
    }

    footer div:last-of-type {
        align-self: flex-end;
        margin-right: 5%;
        margin-bottom: 2.5%;
    }

    footer div:last-of-type img {
        display: block;
        margin: 10% auto;
    }

</style>


<header>
    <h1></h1>
    <nav>
        <div class="language-links">
            <a on:click={switchLanguage} class="active">FR</a>
            <a on:click={switchLanguage}>EN</a>
        </div>
        <a href="#" class="inactive lang">À propos</a>
    </nav>
</header>
<section>
    <article id="about">
        <p class="lang">La <strong>puberté</strong> est une période difficile dans la vie d’un jeune adolescent. Durant cette période, le jeune peut facilement tomber dans un mal être à cause de son rapport avec lui-même et son apparence physique.</p>
        <p class="lang"><strong>Réflexion</strong> est une histoire interactive contant la journée de collégien d’un jeune monstre dont sa <strong>différence</strong> avec les autres va l’affecter.</p>
        <p class="lang">Notre objectif est ainsi de projeter l’utilisateur au travers du monstre, afin de lui apporter des pistes de reflexion pouvant l’aider à prendre du recul sur ses complexes et s’accepter pour tout ce qu’il est.</p>
        <p class="lang">Enfin, nous souhaitons apporter une aide aux adolescents en les guidant sans jugement vers une plateforme associative vers laquelle ils pourront s’exprimer.</p>
        <p id="start2">
            <button class="lang" on:click={start}>Jouer l'expérience</button>
        </p>
    </article>
    <article id="illustrations">
        <img src="./assets/png/about-page/monstre.png" alt="monstre"/>
        <img src="./assets/png/about-page/people.png" alt="humains"/>
        <img src="./assets/png/about-page/illustration.png" id="illustration-tache" alt="Tache bleue"/>
    </article>
    <article id="team-presentation">
        <h2 class="lang">Équipe</h2>
        <div id="team">
            <div class="team-container">
                <div class="illustration-container">
                    <img src="./assets/png/about-page/sandra.png" alt="sandra"/>
                </div>
                <h3>Sandra PEREIRA</h3>
                <h4>Designer</h4>
            </div>
            <div class="team-container">
                <div class="illustration-container">
                    <img src="./assets/png/about-page/sulyvan.png" alt="sulyvan"/>
                </div>
                <h3>Sulyvan BATT</h3>
                <h4>Designer</h4>
            </div>
            <div class="team-container">
                <div class="illustration-container">
                    <img src="./assets/png/about-page/guillaume.png" alt="guillaume"/>
                </div>
                <h3>Guillaume LAGOUY</h3>
                <h4 class="lang">Développeur</h4>
            </div>
            <div class="team-container">
                <div class="illustration-container">
                    <img src="./assets/png/about-page/sonia.png" alt="sonia"/>
                </div>
                <h3>Sonia ROUABHI</h3>
                <h4 class="lang">Développeur</h4>
            </div>
        </div>
    </article>
</section>
<footer>
    <div><p class="lang">Site réalisé dans le cadre d'un projet étudiant</p></div>
    <div>
        <img src="./assets/png/about-page/gobelins.png" alt="gobelins"/>
        <img src="./assets/png/about-page/cci.png" alt="cci"/>
    </div>
</footer>