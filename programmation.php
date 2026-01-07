<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programmation - Portfolio Lionel G. - Creative Octopus</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
</head>
<body>
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp6.png" alt="Illustration créative">
            </div>
            <div class="hero-content">
                <h1>💻 Programmation</h1>
				<p>Création d'applications, scripts et sites Web</p>
            </div>
        </div>
    </section>
    <section class="domain-intro">
        <div class="domain-intro-container">
            <div class="domain-intro-icon">💻</div>
            <div class="domain-intro-content">
                <h2>Programmation, ma passion logique</h2>
            <p>
                Diplomé d'un BTS en Informatique Industriel (IRIS), j'ai été formé à la programmation (P. Objet, gestion BDD, P. Web).
				Puis au travers de plusieurs emplois dans ce domaine, dont 5 ans en tant que Développeur Web/WebDesigner, ainsi que des projets personnels et des formations en autodidacte, j'ai pu acquérir de nombreuses compétences et savoir-faire.
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
            displayProjects('progra');
			displaySkills('progra');
        });
    </script>
</body>
</html>