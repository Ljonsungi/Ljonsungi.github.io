<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Lionel G. - Creative Octopus</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
</head>
<body>
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp2.png" alt="Mascotte du portfolio">
            </div>
            <div class="hero-content">
                <h1>Lionel G. </h1><h2>Designer • Développeur • Artisan</h2>
				<p>Du pixel au cuir, une expertise pour chaque tentacule pour un poulpe créatif.</p>
            </div>
        </div>
    </section>
    <section class="domain-intro">
        <div class="domain-intro-container">
            <div class="domain-acdl-icon"><img src="assets/images/Poulpi/pp3.png" alt="Mascotte du portfolio" height="100%"></div>
            <div class="domain-intro-content">
                <h2>Bienvenue</h2>
                <p>Je suis Lionel G., designer créatif en constante évolution. Curieux et passionné, j'ai plusieurs cordes à mon arc : l'infographie 2D/3D, le game design, la rénovation d'habitat et l'artisanat du cuir (activité en auto-entreprise).<br/>
					Fort de 15 ans d'expérience en développement web et en infographie 2D/3D et d'une certification 
    Game Design (2025) et cette polyvalence me permettent d'apporter une vision unique à chaque projet.<br/>Je suis actuellement à la recherche d'opportunités professionnelles où je pourrais mettre mes compétences à profit, que ce soit en CDI, CDD, missions freelance ou collaborations créatives.<br/>
					Découvrez mes réalisations et n'hésitez pas à me contacter pour toute offre professionnelle ou projet créatif.</p>
            </div>
        </div>
    </section>
    <section class="categories">
        <h2 class="section-title">Mes Domaines d'Expertise</h2>
        <div class="category-grid">
            <a href="infographie.php" class="category-card">
                <div class="category-image"><img src="./assets/images/projets/infographie/3D/poulpi.JPG" alt="Infographie" width="100%" height="100%"></div>
                <div class="category-content">
                    <h3>🎨 Infographie</h3>
                    <p>Modélisation 3D, Design graphique, identité visuelle, illustrations...</p>
                </div>
            </a>
            <a href="programmation.php" class="category-card">
                <div class="category-image"><img src="./assets/images/logo/csharp.png" alt="Programmation" height="100%"></div>
                <div class="category-content">
                    <h3>💻 Programmation</h3>
        			<p>Développement d'applications, site Web, scripts et solutions logicielles...</p>
                </div>
            </a>
            <a href="gamedesign.php" class="category-card">
                <div class="category-image"><img src="./assets/images/logo/unreal.png" alt="Gamedesign" height="100%"></div>
                <div class="category-content">
                    <h3>🎮 Game Design</h3>
                    <p>Conception de jeux, level design, game mechanics, monétisation...</p>
                </div>
            </a>
			<a href="maroquinerie.php" class="category-card">
                <div class="category-image"><img src="./assets/images/projets/cuir/SAM_6134.JPG" alt="Maroquinerie" width="100%" height="100%"></div>
                <div class="category-content">
                    <h3>👜 Maroquinerie</h3>
                    <p>Création artisanale, accessoires en cuir, teinture et finition...</p>
                </div>
            </a>
            <a href="renovation.php" class="category-card">
                <div class="category-image"><img src="./assets/images/projets/renov/sdb/me1.jpg" alt="Renovation" width="100%" height="100%"></div>
                <div class="category-content">
                    <h3>🏠 Rénovation Intérieur</h3>
                    <p>Restauration de murs, rénovation électricité, parquet / Carrelage...</p>
                </div>
            </a>
        </div>
    </section>
    <footer>
    	<?PHP include('./assets/include/footer.php'); ?>
    </footer>
    <script charset="utf-8" src="assets/js/portfolio.js"></script>
</body>
</html>