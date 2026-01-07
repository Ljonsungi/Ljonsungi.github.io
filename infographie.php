<!DOCTYPE html>
<html lang="fr">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infographie - Portfolio Lionel G. - Creative Octopus</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp2.png" alt="Illustration créative">
            </div>
            <div class="hero-content">
                <h1>🎨 Infographie</h1>
				<p>Modélisation 3D, Design graphique, CAO/DAO</p>
            </div>
        </div>
    </section>
    <section class="domain-intro">
        <div class="domain-intro-container">
            <div class="domain-intro-icon">🎨</div>
            <div class="domain-intro-content">
                <h2>Infographie, ma passion graphique</h2>
                <p>
				Autodidacte passionné, je me suis formé à l'infographie depuis plus de 15 ans. 
				J'ai pu arpenter les sentier de la retouche photo, du montage vidéo, du, webdesign, de la création d'identités visuelles, de la modélisation 3D et de la CAO/DAO.
				Durant ce temps, j'ai pu acquérir des expériences et de la maitrise. Et je continue à évoluer en me formant à de nouvelles techniques et de nouveaux logiciels.
				Puis en croisant ce domaine avec le domaine du game design et de la programmation, j'ai pu développer mes compétences et une vision d'ensemble sur un projet.
				<br/>
				N'hésitez pas à regarder mes projets et compétences ci-après.
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
            displayProjects('infographie');
			displaySkills('infographie');
        });
    </script>
</body>
</html>