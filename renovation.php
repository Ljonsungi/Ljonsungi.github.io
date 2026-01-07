<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rénovation d'intérieur - Portfolio Lionel G. - Creative Octopus</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
</head>
<body>
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp5.png" alt="Illustration créative">
            </div>
            <div class="hero-content">
                <h1>🏠 Rénovation d'intérieur</h1>
				<p>Rénovation d'intérieur, de l'électricité en passant par l'enduit et le carrelage</p>
            </div>
        </div>
    </section>
    <section class="domain-intro">
        <div class="domain-intro-container">
            <div class="domain-intro-icon">🏠</div>
            <div class="domain-intro-content">
                <h2>Rénovation d'intérieure : ma passion de nécessité</h2>
                <p>Formé sur le tas, en autodidacte, j'ai pu acquérir depuis une dizaine d'année de l'expérience en rénovation de logement. Par nécessité car j'ai du, par mes moyens et en apprenant, rénover ma propre demeure, une vieille maison de village. En bricoleur, curieux et débrouillard, j'ai pu réaliser la rénovation des murs, plafonds et sol, du décroutage à la finition.
				La pose de parquet et carrelage n'a plus aucun secret pour moi. Ainsi que toute l'installation électrique d'une maison (sauf tableau électrique), en partant d'une installation avec des fils en tissus ... old school !!</p>
            </div>
        </div>
    </section>
    <section class="skills-section">
        <h2 class="section-title">Mes Compétences</h2>
        <div class="skills-grid" id="skillsGrid"></div>
    </section>
    <section class="projects-section">
        <h2 class="section-title">Mes Réalisations</h2>
        <div class="projects-grid" id="projectsGrid"></div>
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
            displayProjects('renovation');
			displaySkills('renovation');
        });
    </script>
</body>
</html>