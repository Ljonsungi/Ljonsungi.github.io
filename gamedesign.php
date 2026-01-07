<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Design - Portfolio Lionel G. - Creative Octopus</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
</head>
<body>
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp3.png" alt="Illustration créative">
            </div>
            <div class="hero-content">
                <h1>🎮 Game Design</h1>
				<p>Conception et création de jeux vidéo et applications ludiques</p>
            </div>
        </div>
    </section>
    <section class="domain-intro">
        <div class="domain-intro-container">
            <div class="domain-intro-icon">🎮</div>
            <div class="domain-intro-content">
                <h2>Game Design, ma passion de convergence</h2>
                <p>
                    Grand fan de jeux vidéo, j'ai voulu aller au delà du fait de jouer à un jeu vidéo, j'ai voulu en créer. Formé à Gaming Campus, j'ai acquis de l'expérience et du savoir dans le game design sur des projets personnels et semi professionnel.<br>
De l'idée au gameplay, en passant par le level design, la création d'assets, la narration et la monétisation, j'ai la possibilité d'intervenir à chaque étape d'un projet de jeux vidéo.


Compétences en Unity et Unreal (avec plus d'heure de formation sur Unreal) et prototypage ainsi que l'expérience de travailler en équipe. <br/>
Une passion de convergence, car ce domaine me permet d'exprimer ma passion pour le jeux vidéo, pour la programmation et pour l'infographie 2D/3D, bref un domaine "multi-passionnant" !<br/>Découvrez mes projets et prototypes réalisés avec passion.
                </p>
            </div>
        </div>
    </section>
    <section class="skills-section">
        <h2 class="section-title">Mes Compétences</h2>
        <div class="skills-grid" id="skillsGrid"></div>
    </section>
    <section class="projects-section">
        <h2 class="section-title">Mes Projets</h2>
        <div class="projects-grid" id="projectsGrid">
        </div>
    </section>
    <div id="imageModal" class="modal">
        <span class="modal-close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage">
        <div class="modal-caption" id="modalCaption"></div>
        <button class="modal-nav modal-prev" onclick="navigateGallery(-1)">❮</button>
        <button class="modal-nav modal-next" onclick="navigateGallery(1)">❯</button>
    </div>
    <footer>
    	<?PHP include('./assets/include/footer.php'); ?>
    </footer>
    <script charset="utf-8" src="assets/js/portfolio.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            displayProjects('gamedesign');
			displaySkills('gamedesign');
        });
    </script>
</body>
</html>