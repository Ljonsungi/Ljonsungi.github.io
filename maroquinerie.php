<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maroquinerie - Portfolio Lionel G. - Creative Octopus</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
</head>
<body>
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp4.png" alt="Illustration créative">
            </div>
            <div class="hero-content">
                <h1>👜 Maroquinerie</h1>
        <p>Créations artisanales d'articles uniques en cuir tannage végétal</p>
            </div>
        </div>
    </section>
    <section class="domain-intro">
        <div class="domain-intro-container">
            <div class="domain-acdl-icon"><img src="assets/images/projets/infographie/IV/logoUP2.jpg" alt="Au Cuir Du Lion Logo" height="100%"></div>
            <div class="domain-intro-content">
                <h2>La Maroquinerie, ma passion manuelle</h2>
            <p>Auto-entrepreneur en maroquinerie, depuis plus de 10 ans avec Au Cuir Du Lion (ACDL), je crée des pièces uniques entièrement 
                faites main : sacs, portefeuilles, ceintures, fourreaux, accessoires personnalisés etc. 
                Chaque création allie savoir-faire artisanal, matériaux de qualité et design 
                contemporain. 
				<br/>Poser un pont entre ce qui a été fait par le passé et ce que nous pouvons créer aujourd'hui. 
Favoriser la qualité à la quantité et le contact humain. Voilà comment s'anime mon travail, avec comme ligne de conduite l'éthique, le respect de la nature et de l'humain.
J'utilise et affectionne tout particulièrement le cuir bovin, ovin ou caprin en tannage végétal d'origine France. J'utilise aussi une gamme de teinture, peinture et  produits de finition à base aqueuse, donc sans solvant, de la marque EcoFlo,
 ainsi que la quincaillerie sans nickel. Et d'autres produits d'origine naturel comme la graisse ou la cire d'abeille. Garantissant l'absence,
 autant que faire ce peut, d'allergènes et de polluants. Ce qui, éthiquement parlant, me convient et me correspond totalement.<br /> Au milieu d'un monde où la quantité jetable prévaut bien trop souvent à la qualité robuste, 
 je m'inscris dans une optique de qualité. En effet, j'ai toujours été soucieux du travail bien fait, peaufiné. Et par le travail du cuir, j'apporte aussi à cette attention des matériaux de qualité.<br/>
N'hésitez pas à me contacter pour vos projets sur-mesure.
                </p>
            </div>
        </div>
    </section>
    <section class="skills-section">
        <h2 class="section-title">Mes Compétences</h2>
        <div class="skills-grid" id="skillsGrid"></div>
    </section>
    <section class="projects-section">
        <h2 class="section-title">Mes Créations</h2>
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
        displayProjects('maroquinerie');
        displaySkills('maroquinerie');
    });
</script>
</body>
</html>