<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Portfolio Lionel G. - Creative Designer</title>
    <link rel="stylesheet" href="assets/css/portfolio.css">
</head>
<body>
    <!-- HEADER -->
    <header>
        <?PHP include('./assets/include/header.html'); ?>
    </header>
 
    <!-- HERO -->
    <section class="hero">
        <div class="hero-container image-left">
            <div class="hero-image">
                <img src="assets/images/Poulpi/pp1.png" alt="Illustration créative">
            </div>
            <div class="hero-content">
               <h1>Me Contacter</h1>
    <p>Une question ? Une offre d'emploi ? Un projet ? Discutons-en ensemble</p>
            </div>
        </div>
    </section>

<!-- SECTION PRÉSENTATION CONTACT -->
<section class="domain-intro">
    <div class="domain-intro-container">
        <div class="domain-intro-icon">💬</div>
        <div class="domain-intro-content">
            <h2>Échangeons sur vos projets et opportunités</h2>
            <p>
                Vous avez une opportunité professionnelle, un projet créatif ou simplement 
                envie d'échanger ? Je suis disponible pour discuter de toute collaboration, 
                mission freelance ou poste correspondant à mon profil. Vous pouvez me joindre 
                par email via le formulaire ci-dessous ou directement par téléphone au 
                <strong style="color: var(--color-secondary);">06 20 96 85 26</strong>.
            </p>
        </div>
    </div>
</section>

    <!-- FORMULAIRE DE CONTACT -->
    <section class="contact-section">
        <form id="contactForm" class="contact-form">
            <!-- Nom Prénom -->
            <div class="form-group">
                <label for="name">Nom & Prénom *</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    maxlength="50" 
                    required
                    pattern="[A-Za-zÀ-ÿ\s\-']+"
                    title="Lettres uniquement (50 caractères max)"
                >
                <span class="char-count" id="nameCount">0/50</span>
            </div>

            <!-- Motif de contact -->
            <div class="form-group">
                <label for="subject">Motif de contact *</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    maxlength="80" 
                    required
                    pattern="[A-Za-zÀ-ÿ\s\-']+"
                    title="Lettres uniquement (80 caractères max)"
                >
                <span class="char-count" id="subjectCount">0/80</span>
            </div>

            <!-- Email expéditeur -->
            <div class="form-group">
                <label for="email">Votre email *</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    title="Adresse email valide requise"
                    placeholder="exemple@email.com"
                >
            </div>

            <!-- Téléphone -->
            <div class="form-group">
                <label for="phone">Téléphone *</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    pattern="[0-9]{10}"
                    maxlength="10"
                    title="10 chiffres uniquement (sans espaces)"
                    placeholder="0612345678"
                >
                <span class="char-count" id="phoneCount">0/10</span>
            </div>

            <!-- Message -->
            <div class="form-group">
                <label for="message">Votre message *</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    maxlength="600" 
                    required
                ></textarea>
                <span class="char-count" id="messageCount">0/600</span>
            </div>

            <!-- CAPTCHA Anti-bot -->
            <div class="form-group captcha-group">
                <label>Vérification anti-bot *</label>
                <div class="captcha-box">
                    <span id="captchaQuestion"></span>
                    <input 
                        type="number" 
                        id="captchaAnswer" 
                        name="captcha" 
                        required
                        placeholder="Réponse"
                    >
                    <button type="button" onclick="generateCaptcha()" class="captcha-refresh">🔄</button>
                </div>
            </div>

            <!-- Message de statut -->
            <div id="formStatus" class="form-status"></div>

            <!-- Bouton d'envoi -->
            <button type="submit" class="submit-btn">Envoyer le message</button>
        </form>
    </section>

    <!-- FOOTER -->
    <footer>
    	<?PHP include('./assets/include/footer.php'); ?>
    </footer>

    <script charset="utf-8" src="assets/js/portfolio.js"></script>
</body>
</html>