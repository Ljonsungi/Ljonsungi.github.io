/* ============================================
   CONFIGURATION GLOBALE
   ============================================ */
const config = {
    contactEmail: "votre.email@exemple.com" // ⚠️ MODIFIEZ CETTE ADRESSE
};
/* ============================================
   DONNÉES DES COMPÉTENCES PAR CATÉGORIE
   ============================================ */
const skillsData = {
    infographie: [
        { name: "Adobe Photoshop", level: "master", logo: "assets/images/logo/toshop.png", category: "Langages" },
        { name: "Blender", level: "master", logo: "assets/images/logo/blender.png", category: "Langages" },
        { name: "Figma", level: "good", logo: "assets/images/logo/Figma.png", category: "Langages"  },
        { name: "Adobe After Effects", level: "good", logo: "assets/images/logo/aftereffect.png", category: "Langages"  },
        { name: "Adobe Premiere Pro", level: "good", logo: "assets/images/logo/premiere.png", category: "Langages"  },
		{ name: "AutoCAD", level: "average", logo: "assets/images/logo/autocad.png", category: "Langages"  },
		{ name: "Adobe InDesign", level: "average", logo: "📄", category: "Langages"  },
		// COMPÉTENCES MÉTIER (avec détails)
        { 
            name: "Mod&eacute;lisation 3D", 
            level: "master", 
            logo: "🧊", 
            category: "Competences",
            details: [
                "Mod&eacute;lisation polygonale",
                "Texturing et UV mapping",
                "Eclairage et rendu",
                "Animation basique",
                "Export moteurs 3D"
            ]
        },
        { 
            name: "Cr&eacute;ation Identit&eacute; Visuelle", 
            level: "master", 
            logo: "🏷️", 
            category: "Competences",
            details: [
                "Recherche concept visuel",
                "Cr&eacute;ation logo et d&eacute;clinaisons",
                "Charte graphique complète",
                "Palette couleurs corporate",
                "Guide utilisation marque"
            ]
        },
		{ 
        name: "Retouche Photo", 
        level: "master", 
        logo: "📷", 
        category: "Competences",
        details: [
            "Correction colorimetrique",
            "Retouche beaute portrait",
            "Suppression &eacute;lements indesirables",
            "Photomontage r&eacute;aliste",
            "Optimisation web et print"
        ]
    },
		{ 
        name: "Illustration", 
        level: "good", 
        logo: "🖌️", 
        category: "Competences",
        details: [
            "Illustration vectorielle",
            "Illustration digitale painting",
            "Character design",
            "Cr&eacute;ation pictogrammes icones",
            "Illustrations editoriales"
        ]
    },
	{ 
        name: "CAO/DAO", 
        level: "good", 
        logo: "📐", 
        category: "Competences",
        details: [
            "Dessin technique precis 2D",
            "Plans et schemas cotes",
            "Modelisation objets 3D",
            "Export formats standards (DWG, DXF)",
            "Mise en plan et documentation"
        ]
    },
    { 
        name: "Montage Video", 
        level: "average", 
        logo: "🎬", 
        category: "Competences",
        details: [
            "Decoupage et assemblage sequences",
            "Transitions et effets visuels",
            "Etalonnage colorimetrique",
            "Habillage graphique et titrage",
            "Export formats web et broadcast"
        ]
    }
    ],
    gamedesign: [
       
        { name: "Blender", level: "master", logo: "assets/images/logo/blender.png", category: "Langages"  },
		{ name: "C#", level: "good", logo: "assets/images/logo/csharp.png", category: "Langages"  },
		{ name: "Figma", level: "good", logo: "assets/images/logo/Figma.png", category: "Langages"  },
		{ name: "Ableton", level: "good", logo: "assets/images/logo/ableton.jpg", category: "Langages"  },
        { name: "Unreal Engine", level: "good", logo: "assets/images/logo/Unreal.png", category: "Langages"  },
		{ name: "Unity", level: "average", logo: "assets/images/logo/Unity.png", category: "Langages"  },
  
		// COMP&eacute;TENCES M&eacute;TIER
        { 
            name: "Prototypage", 
            level: "master", 
            logo: "⚡", 
            category: "Competences",
            details: [
                "Conception rapide gameplay",
                "Tests it&eacute;ratifs m&eacute;caniques",
                "Validation concept jouabilite",
                "Paper prototyping",
                "Prototypes jouables Unity / Unreal"
            ]
        },
        { 
            name: "Level Design", 
            level: "master", 
            logo: "🗺️", 
            category: "Competences",
            details: [
                "Architecture niveaux",
                "Gestion rythme et difficult&eacute;",
                "Placement ennemis et items",
                "Flow et guidage joueur",
                "Tests et &eacute;quilibrage"
            ]
        },
        { 
            name: "Game Design Document", 
            level: "master", 
            logo: "📋", 
            category: "Competences",
            details: [
                "R&eacute;daction GDD complet",
                "Documentation m&eacute;caniques",
                "Sp&eacute;cifications techniques",
                "Diagrammes et flowcharts",
                "Mise a jour it&eacute;rative"
            ]
        },
        { 
            name: "Collaboration Equipe", 
            level: "good", 
            logo: "🤝", 
            category: "Competences",
            details: [
                "Communication designer/dev",
                "Sp&eacute;cifications claires",
                "Gestion feedback &eacute;quipe",
                "Adaptation contraintes tech",
                "Suivi impl&eacute;mentation"
            ]
        },
        { 
            name: "Ergonomie Jeu", 
            level: "good", 
            logo: "🎯", 
            category: "Competences",
            details: [
                "Analyse UX joueur",
                "Interface intuitive",
                "Courbe apprentissage",
                "Accessibilit&eacute; gameplay",
                "Tests utilisateurs"
            ]
        },
		{ 
            name: "Etude Marketing Jeu", 
            level: "average", 
            logo: "📊", 
            category: "Competences",
            details: [
                "Analyse march&eacute; et concurrence",
                "D&eacute;finition cible joueurs",
                "Etude tendances gaming",
                "Benchmark jeux similaires",
                "Positionnement produit"
            ]
        }
    ],
    renovation: [
        { name: "AutoCAD", level: "average", logo: "assets/images/logo/autocad.png", category: "Langages"  },
		// COMPÉTENCES MÉTIER
        { 
            name: "R&eacute;novation Murs", 
            level: "master", 
            logo: "🧱", 
            category: "Competences",
            details: [
                "Pr&eacute;paration surfaces",
                "Application enduit rebouchage",
                "Ponçage et lissage",
                "Traitement fissures",
                "Finition avant peinture"
            ]
        },
        { 
            name: "Peinture Int&eacute;rieure", 
            level: "master", 
            logo: "🖌️", 
            category: "Competences",
            details: [
                "Pr&eacute;paration supports",
                "Application sous-couche",
                "Peinture murs et plafonds",
                "Finitions angles et bordures",
                "Nettoyage et protection"
            ]
        },
		{ 
            name: "Electricit&eacute; et Installation", 
            level: "good", 
            logo: "💡", 
            category: "Competences",
            details: [
                "Installation prises et interrupteurs",
                "Tirage cables et gaines",
                "Raccordement tableau electrique",
                "Pose luminaires et spots",
                "V&eacute;rification conformit&eacute; normes"
            ]
        },
        
        { 
            name: "Pose Parquet", 
            level: "good", 
            logo: "🪵", 
            category: "Competences",
            details: [
                "Pr&eacute;paration sol support",
                "Pose sous-couche isolation",
                "Installation lames parquet",
                "D&eacute;coupes et ajustements",
                "Pose plinthes finition"
            ]
        },
        { 
            name: "Pose Carrelage", 
            level: "good", 
            logo: "⬜", 
            category: "Competences",
            details: [
                "Pr&eacute;paration surface et traçage",
                "Application mortier colle",
                "Pose carreaux et niveau",
                "D&eacute;coupes pr&eacute;cises",
                "Joints et nettoyage"
            ]
        }
    ],
    maroquinerie: [
		// COMPÉTENCES MÉTIER
        { 
            name: "Gestion stand march&eacute;", 
            level: "master", 
            logo: "&#127914;", 
            category: "Competences",
            details: [
				"Installation et mise en sc&egrave;ne stand",
				"Pr&eacute;sentation produits attractive",
				"Gestion stock et r&eacute;approvisionnement",
				"Relation client et conseil vente",
				"Encaissement et gestion caisse"
			]
        },
		{ 
            name: "D&eacute;coupe Cuir", 
            level: "master", 
            logo: "✂️", 
            category: "Competences",
            details: [
                "S&eacute;lection et lecture du cuir",
                "Traçage patron sur cuir",
                "D&eacute;coupe pr&eacute;cise au cutter",
                "Optimisation chutes",
                "Pr&eacute;paration pièces assemblage"
            ]
        },
        { 
            name: "Couture Artisanale", 
            level: "master", 
            logo: "🪡", 
            category: "Competences",
            details: [
                "Couture main sellier",
                "Point sellier traditionnel",
                "Gestion tension fil",
                "Assemblage pièces cuir",
                "Coutures d&eacute;coratives"
            ]
        },
        { 
            name: "Teinture et Patine", 
            level: "master", 
            logo: "🎨", 
            category: "Competences",
            details: [
                "Pr&eacute;paration surface cuir",
                "Application teinture uniforme",
                "Technique patine nuanc&eacute;e",
                "Fixation couleur",
                "Protection finition"
            ]
        },
        { 
            name: "Finitions Qualit&eacute;", 
            level: "master", 
            logo: "✨", 
            category: "Competences",
            details: [
                "Ponçage tranches cuir",
                "Application cire bordures",
                "Polissage et lustrage",
                "Pose accessoires m&eacute;tal",
                "Contrôle qualit&eacute; final"
            ]
        },
        { 
            name: "Confection Complète", 
            level: "master", 
            logo: "👜", 
            category: "Competences",
            details: [
                "Cr&eacute;ation patron sur-mesure",
                "S&eacute;lection cuir adapt&eacute;",
                "Assemblage toutes &eacute;tapes",
                "Gestion contraintes techniques",
                "Livraison produit fini"
            ]
        }
    ],
    progra: [
		// LANGAGES et logiciel
        { name: "HTML", level: "master", logo: "assets/images/logo/html.png", category: "Langages" },
        { name: "CSS", level: "master", logo: "assets/images/logo/css.png", category: "Langages" },
		{ name: "Adobe Dreamweaver", level: "master", logo: "assets/images/logo/dreamweaver.jpg", category: "Langages" },
		{ name: "Notepad ++", level: "master", logo: "assets/images/logo/notepad.png", category: "Langages" },
		{ name: "SQL / BDD", level: "master", logo: "assets/images/logo/sql.jpg", category: "Langages" },
        { name: "PHP", level: "good", logo: "assets/images/logo/php.png", category: "Langages" },
		{ name: "JavaScript", level: "good", logo: "assets/images/logo/php.png", category: "Langages" },
        { name: "C++", level: "average", logo: "assets/images/logo/c++.png", category: "Langages" },
        { name: "Python", level: "average", logo: "assets/images/logo/python.png", category: "Langages" },

		// COMPÉTENCES MÉTIER
        { 
            name: "D&eacute;veloppement Site Web", 
            level: "master", 
            logo: "🌍", 
            category: "Competences",
            details: [
                "Structure HTML s&eacute;mantique",
                "Styling CSS responsive",
                "JavaScript/PHP/SQL int&eacute;ractif",
                "Optimisation performances",
                "Compatibilit&eacute; navigateurs"
            ]
        },
        { 
            name: "D&eacute;veloppement Application", 
            level: "good", 
            logo: "📱", 
            category: "Competences",
            details: [
                "Architecture logicielle",
                "Gestion donn&eacute;es locales",
                "Interface utilisateur",
                "Gestion erreurs et logs",
                "Tests et debugging"
            ]
        },
        { 
            name: "Scripts Unity C#", 
            level: "good", 
            logo: "🎮", 
            category: "Competences",
            details: [
                "M&eacute;caniques gameplay",
                "Système &eacute;vènements",
                "Gestion collisions",
                "Optimisation performances",
                "Int&eacute;gration assets"
            ]
        },
        { 
            name: "Automatisation Python", 
            level: "average", 
            logo: "⚙️", 
            category: "Competences",
            details: [
                "Scripts traitement fichiers",
                "Automatisation tâches",
                "Web scraping",
                "Manipulation donnees",
                "Planification executions"
            ]
        }
    ]
};

/* ============================================
   AFFICHAGE DES COMP&eacute;TENCES S&eacute;PARÉES
   ============================================ */
function displaySkills(category) {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const categorySkills = skillsData[category] || [];
    skillsGrid.innerHTML = '';

    if (categorySkills.length === 0) {
        skillsGrid.innerHTML = '<p style="text-align: center; color: var(--color-text-light);">Comp&eacute;tences a venir...</p>';
        return;
    }

    // Séparer en deux groupes principaux
    const logicielsLangages = [];
    const competencesTechniques = [];

    categorySkills.forEach(function(skill) {
        if (skill.category === 'Logiciels' || skill.category === 'Langages') {
            logicielsLangages.push(skill);
        } else if (skill.category === 'Competences') {
            competencesTechniques.push(skill);
        }
    });

    // ========== SECTION 1 : LOGICIELS ET LANGAGES ==========
    if (logicielsLangages.length > 0) {
        const mainSection1 = document.createElement('div');
        mainSection1.className = 'skills-main-section';

        const mainTitle1 = document.createElement('h2');
        mainTitle1.className = 'skills-main-title';
        mainTitle1.textContent = '🔧 Logiciels & Langages';
        mainSection1.appendChild(mainTitle1);

        // Grouper par sous-catégorie (Logiciels / Langages)
        const grouped = {};
        logicielsLangages.forEach(function(skill) {
            const cat = skill.category;
            if (!grouped[cat]) {
                grouped[cat] = [];
            }
            grouped[cat].push(skill);
        });

        // Afficher chaque sous-catégorie
        for (var catName in grouped) {
            const categorySection = document.createElement('div');
            categorySection.className = 'skills-category-section';


            const categoryGrid = document.createElement('div');
            categoryGrid.className = 'skills-category-grid';

            grouped[catName].forEach(function(skillItem) {
                categoryGrid.appendChild(createSkillCard(skillItem));
            });

            categorySection.appendChild(categoryGrid);
            mainSection1.appendChild(categorySection);
        }

        skillsGrid.appendChild(mainSection1);
    }

    // ========== SECTION 2 : COMPÉTENCES TECHNIQUES ==========
    if (competencesTechniques.length > 0) {
        const mainSection2 = document.createElement('div');
        mainSection2.className = 'skills-main-section';

        const mainTitle2 = document.createElement('h2');
        mainTitle2.className = 'skills-main-title';
        mainTitle2.textContent = '💪 Compétences Techniques';
        mainSection2.appendChild(mainTitle2);

        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'skills-category-grid';

        competencesTechniques.forEach(function(skillItem) {
            categoryGrid.appendChild(createSkillCard(skillItem));
        });

        mainSection2.appendChild(categoryGrid);
        skillsGrid.appendChild(mainSection2);
    }
}

/* ============================================
   CRÉATION D'UNE CARTE DE COMPÉTENCE
   ============================================ */
function createSkillCard(skillItem) {
    const card = document.createElement('div');
    
    if (skillItem.details && skillItem.details.length > 0) {
        card.className = 'skill-card has-details';
    } else {
        card.className = 'skill-card';
    }
    
    var logoHtml = '';
    if (skillItem.logo && (skillItem.logo.includes('.png') || skillItem.logo.includes('.jpg') || skillItem.logo.includes('.svg'))) {
        logoHtml = '<img src="' + skillItem.logo + '" alt="' + skillItem.name + '">';
    } else {
        logoHtml = skillItem.logo || '';
    }
    
    const levelText = getLevelText(skillItem.level);
    
    // Générer les détails si présents
    var detailsHtml = '';
    if (skillItem.details && skillItem.details.length > 0) {
        detailsHtml = '<div class="skill-details"><ul>';
        skillItem.details.forEach(function(detail) {
            detailsHtml += '<li>' + detail + '</li>';
        });
        detailsHtml += '</ul></div>';
    }
    
    card.innerHTML = 
        '<div class="skill-header">' +
            '<div class="skill-logo">' + logoHtml + '</div>' +
            '<div class="skill-name">' + skillItem.name + '</div>' +
        '</div>' +
        '<div class="skill-level">' +
            '<span class="skill-level-label">' + levelText + '</span>' +
            '<div class="skill-bar">' +
                '<div class="skill-bar-fill ' + skillItem.level + '"></div>' +
            '</div>' +
        '</div>' +
        detailsHtml;
    
    return card;
}

function getLevelText(level) {
    const levels = {
        master: 'Ma&icirc;tris&eacute; +++',
        good: 'Bonne connaissance ++',
        average: 'Connaissance moyenne +',
        basic: 'Connaissance avec lacunes +-'
    };
    return levels[level] || 'Non d&eacute;fini';
}
/* ============================================
   DONNÉES DES PROJETS PAR CATÉGORIE
   ============================================ */
const projectsData = {
    infographie: [
        {
            id: 1,
            title: "Identit&eacute; visuelle - Eveil Massage",
            description: "Cr&eacute;ation de l'identit&eacute; visuelle et site web d'une entreprise de massage bien-&ecirc;tre",
            coverImage: "./assets/images/projets/infographie/IV/site-web-massage-V2.png",
            images: [
                { src: "./assets/images/projets/infographie/IV/v2-3-vertical-recto-300dpi.jpg", description: "Carte de visite recto" },
                { src: "./assets/images/projets/infographie/IV/v2-3-vertical-verso-300dpi.jpg", description: "Carte de visite verso" },
				{ src: "./assets/images/projets/infographie/IV/site-web-massage-V2.png", description: "Site web" }
            ]
        },
        {
            id: 2,
            title: "Identit&eacute; visuelle - Au Cuir Du Lion",
            description: "Cr&eacute;ation de l'identit&eacute; visuelle et site web de maroquinerie",
            coverImage: "./assets/images/projets/infographie/IV/logoUP2.jpg",
            images: [
                { src: "./assets/images/projets/infographie/IV/logoUP2.jpg", description: "Logo" },
				{ src: "./assets/images/projets/infographie/IV/carte2HORI7-final.jpg", description: "Carte de visite" },
				{ src: "./assets/images/projets/infographie/IV/profil2.jpg", description: "Banni&egrave;re site web" },
                { src: "./assets/images/projets/infographie/IV/fiche_générale_com_vente.jpg", description: "Fiche communication" }
            ]
        },
        {
            id: 16,
            title: "Mod&eacute;lisation 3D",
            description: "Conception de mod&egrave;les 3D (assets 3D)",
            coverImage: "./assets/images/projets/infographie/3D/ile de paqueUP11.jpg",
            images: [
                { src: "./assets/images/projets/infographie/3D/dread-132.jpg", description: "Dreadnaught Warharmmer" },
				{ src: "./assets/images/projets/infographie/3D/earth+starhome24.jpg", description: "Sc&egrave;ne StarHome" },
				{ src: "./assets/images/projets/infographie/3D/fruitlegumz1-15.jpg", description: "Sc&egrave;ne Cuisine" },
				{ src: "./assets/images/projets/infographie/3D/ile de paqueUP11.jpg", description: "Sc&egrave;ne Ile de Paque" },
				{ src: "./assets/images/projets/infographie/3D/decorpuit.png", description: "Puit low poly" },
				{ src: "./assets/images/projets/infographie/3D/Pitdroid-3.png", description: "Pitdroid Univers Star Wars" },
				{ src: "./assets/images/projets/infographie/3D/scene_dread81.jpg", description: "Canon futuriste" },
				{ src: "./assets/images/projets/infographie/3D/speedracer-38.jpg", description: "Speedracer" },
				{ src: "./assets/images/projets/infographie/3D/speedracer-104-big.jpg", description: "Sc&egrave;ne Speedracer" },
				{ src: "./assets/images/projets/infographie/3D/telescope18.jpg", description: "Telescope 1/3" },
				{ src: "./assets/images/projets/infographie/3D/telescope24.jpg", description: "Telescope 2/3" },
				{ src: "./assets/images/projets/infographie/3D/wire3.jpg", description: "Telescope 3/3" },
                { src: "./assets/images/projets/infographie/3D/tron2.jpg", description: "V&eacute;hicule Tron" }
            ]
        },
        {
            id: 17,
            title: "Poulpi",
            description: "Mascotte de mon portfolio 2025",
            coverImage: "./assets/images/projets/infographie/3D/poulpi.jpg",
            images: [
                { src: "./assets/images/projets/infographie/3D/poulpi.jpg", description: "Poulpi mascotte de mon portfolio 2025" },
				{ src: "./assets/images/projets/infographie/3D/poulpi2.jpg", description: "Sculpting" },
				{ src: "./assets/images/projets/infographie/3D/poulpi3.jpg", description: "Rigging / Armature" }
			
            ]
        },
        {
            id: 21,
            title: "Autres",
            description: "Bandeau, affiche, flyer",
            coverImage: "./assets/images/projets/infographie/other/Logresflyer.jpg",
            images: [
                { src: "./assets/images/projets/infographie/other/Logresflyer.jpg", description: "Flyer pour serveur Scum" }
			
            ]
        }
    ],
    progra: [
    /*{
        id: 18,
        title: "Script Unity - Système de Combat",
        description: "D&eacute;veloppement d'un système de combat modulaire pour jeu Unity",
        coverImage: "https://placehold.co/800x600/6c63ff/ffffff?text=Unity+Script",
        images: [
            { src: "https://placehold.co/1200x800/6c63ff/ffffff?text=Code+Architecture", description: "Architecture du code" },
            { src: "https://placehold.co/1200x800/5a52d5/ffffff?text=Inspector", description: "Paramètres dans Unity" },
            { src: "https://placehold.co/1200x800/4840bb/ffffff?text=Demo", description: "D&eacute;monstration en jeu" }
        ]
    },
    {
        id: 19,
        title: "Outil d'Automatisation Python",
        description: "Script pour automatiser le traitement de fichiers et donn&eacute;es",
        coverImage: "https://placehold.co/800x600/306998/ffffff?text=Python+Tool",
        images: [
            { src: "https://placehold.co/1200x800/306998/ffffff?text=Interface", description: "Interface utilisateur" },
            { src: "https://placehold.co/1200x800/234d6d/ffffff?text=Results", description: "R&eacute;sultats du traitement" }
        ]
    },*/
    {
        id: 20,
        title: "Portfolio Web 2025",
        description: "D&eacute;veloppement de ce portfolio avec HTML, CSS et JavaScript",
        coverImage: "./assets/images/projets/infographie/IV/portfolio2025.jpg",
        images: [
            { src: "https://placehold.co/1200x800/e34c26/ffffff?text=Homepage", description: "Page d'accueil responsive" },
            { src: "https://placehold.co/1200x800/f06529/ffffff?text=JS+Functions", description: "Fonctions JavaScript" },
            { src: "https://placehold.co/1200x800/264de4/ffffff?text=CSS+Styling", description: "Styles CSS" }
        ]
    }
],
	gamedesign: [
        {
            id: 3,
            title: "Prototype Alchemyst v0.1",
            description: "Conception et r&eacute;alisation d'un prototype de jeux vid&eacute;o",
            coverImage: "./assets/images/projets/gamedesign/alchemyst/screen Alchemyst.png",
            images: [
                { src: "./assets/images/projets/gamedesign/alchemyst/gameconcept.jpg", description: "Cr&eacute;ation du game concept" },
                { src: "./assets/images/projets/gamedesign/alchemyst/leveldesign1.jpg", description: "Conception du Level Design" },
                { src: "./assets/images/projets/gamedesign/alchemyst/leveldesignFigma.jpg", description: "Level Design sur Figma" },
                { src: "./assets/images/projets/gamedesign/alchemyst/marketing.jpg", description: "Etude marketing li&eacute;e" },
                { src: "./assets/images/projets/gamedesign/alchemyst/gdd.jpg", description: "Conception du Game Design Document" },
                { src: "./assets/images/projets/gamedesign/alchemyst/Board12.jpg", description: "Conception d'un board atypique" }
            ]
        },
        {
            id: 4,
            title: "Game Design - Hugo Derive",
            description: "Participation à la conception d'un prototype et GDD d'un jeu Infinyte Runner, projet commun",
            coverImage: "./assets/images/projets/gamedesign/hugo/lveldesignhugo.jpg",
            images: [
                { src: "./assets/images/projets/gamedesign/hugo/lveldesignhugo.jpg", description: "Level Design Hugo D&eacute;rive" },
                { src: "./assets/images/projets/gamedesign/hugo/lveldesignhugo.jpg", description: "Prototype Unreal" }
            ]
        },
        {
            id: 25,
            title: "Game Design - Red Dhead Attraction (En cours)",
            description: "Conception et r&eacute;alisation d'un mini jeu - WIP",
            coverImage: "./assets/images/projets/gamedesign/red/cultiste.png",
            images: [
                { src: "./assets/images/projets/gamedesign/red/cultiste.png", description: "Cr&eacute;ation asset sous Blender" },
                { src: "./assets/images/projets/gamedesign/red/lampadaire.png", description: "Cr&eacute;ation asset sous Blender" }
            ]
        },
        {
            id: 26,
            title: "Game Design - Top Down Shooter",
            description: "Conception et r&eacute;alisation d'un mini jeu, mon premier !!",
            coverImage: "./assets/images/projets/gamedesign/topdownshooter/bg-topD.jpg",
            images: [
                { src: "./assets/images/projets/gamedesign/topdownshooter/bg-topD.jpg", description: "Background du lobby" },
                { src: "./assets/images/projets/gamedesign/topdownshooter/bg-topD.jpg", description: "Cr&eacute;ation asset sous Blender" }
            ]
        }
    ],
    renovation: [
        {
            id: 5,
            title: "R&eacute;novation Salle de bain",
            description: "R&eacute;novation d'une salle de bain avec agrandissement",
            coverImage: "./assets/images/projets/renov/sdb/me1.jpg",
            images: [
                { src: "./assets/images/projets/renov/sdb/me1.jpg", description: "Carrelage de salle de bain" },
                { src: "./assets/images/projets/renov/sdb/s1.jpg", description: "Avant / Apr&egrave;s" },
				{ src: "./assets/images/projets/renov/sdb/s2.jpg", description: "Avant / Apr&egrave;s" }
            ]
        },
        {
            id: 6,
            title: "R&eacute;novation chambre 1",
            description: "R&eacute;novation de murs anciens",
            coverImage: "./assets/images/projets/renov/p1/p11.jpg",
            images: [
                { src: "./assets/images/projets/renov/p1/wip2.jpg", description: "Enduit et lisage des murs" },
                { src: "./assets/images/projets/renov/p1/wip3.jpg", description: "Peinture plafond et murs, finition des coins, pr&eacute;paration sol" },
                { src: "./assets/images/projets/renov/p1/wip4.jpg", description: "Parquet en cours de r&eacute;alisation" },
                { src: "./assets/images/projets/renov/p1/wip5.jpg", description: "Pose des plinthes et finition parquet" },
                { src: "./assets/images/projets/renov/p1/p11.jpg", description: "Avant / Apr&egrave;s" }
            ]
        },
		 {
            id: 22,
            title: "R&eacute;novation chambre 2",
            description: "R&eacute;novation de murs anciens",
            coverImage: "./assets/images/projets/renov/p2/p21.jpg",
            images: [
                { src: "./assets/images/projets/renov/p2/wip1.jpg", description: "Pose parquet flottant" },
                { src: "./assets/images/projets/renov/p2/p21.jpg", description: "Avant / Apr&egrave;s murs / portes" },
                { src: "./assets/images/projets/renov/p2/p22.jpg", description: "Avant / Apr&egrave;s parquet" }
            ]
        },
		 {
            id: 23,
            title: "R&eacute;novation couloir",
            description: "R&eacute;novation de murs anciens",
            coverImage: "./assets/images/projets/renov/p3/p31.jpg",
            images: [
                { src: "./assets/images/projets/renov/p3/p31.jpg", description: "R&eacute;novation murs, &eacute;lectricit&eacute;, luminaire" }
            ]
        },
		{
            id: 24,
            title: "R&eacute;novation chambre 3",
            description: "R&eacute;novation de murs anciens et parquet",
            coverImage: "./assets/images/projets/renov/p4/p41.jpg",
            images: [
                { src: "./assets/images/projets/renov/p4/wip1.jpg", description: "R&eacute;novation murs et &eacute;lectricit&eacute;" },
                { src: "./assets/images/projets/renov/p4/wip2.jpg", description: "Parquet en cours de r&eacute;alisation" },
                { src: "./assets/images/projets/renov/p4/wip3.jpg", description: "Parquet flottant" },
                { src: "./assets/images/projets/renov/p4/p41.jpg", description: "Avant / Apr&egrave;s" },
                { src: "./assets/images/projets/renov/p4/p42.jpg", description: "Avant / Apr&egrave;s" }
            ]
        },
		{
            id: 14,
            title: "R&eacute;novation escalier",
            description: "R&eacute;novation de murs anciens dans un escalier",
            coverImage: "./assets/images/projets/renov/p5/p51.jpg",
            images: [
                { src: "./assets/images/projets/renov/p5/p51.jpg", description: "R&eacute;novation murs et &eacute;lectricit&eacute;" }
            ]
        },
        {
            id: 15,
            title: "Peinture D&eacute;coration",
            description: "R&eacute;alisation de peinture d'art sur mur en int&eacute;rieur, repr&eacute;sentant Yggdrasil, arbre monde de la culture nordique",
            coverImage: "./assets/images/projets/renov/arbre/arbre1.jpg",
            images: [
                { src: "./assets/images/projets/renov/arbre/wip1.JPG", description: "Vue d'ensemble en cours de r&eacute;alisation" },
                { src: "./assets/images/projets/renov/arbre/arbre1.jpg", description: "Arbre Yggdrasil dans un escalier" }
            ]
        }
    ],
    maroquinerie: [
        {
            id: 7,
            title: "Tabac",
            description: "Blague &agrave; tabac, &eacute;tui &agrave; paquet de cigarette",
            coverImage: "./assets/images/projets/cuir/tabac/6.jpg",
            images: [
				{ src: "./assets/images/projets/cuir/tabac/5.jpg", description: "Blague &agrave; tabac" },
				{ src: "./assets/images/projets/cuir/tabac/7.jpg", description: "Blague &agrave; tabac" },
                { src: "./assets/images/projets/cuir/tabac/9.jpg", description: "Etui &agrave; paquet de cigarette" },
				{ src: "./assets/images/projets/cuir/tabac/6.jpg", description: "Blague &agrave; tabac" },
				{ src: "./assets/images/projets/cuir/tabac/10.jpg", description: "Etui &agrave; paquet de cigarette" },
                { src: "./assets/images/projets/cuir/tabac/8.jpg", description: "Etui &agrave; paquet de cigarette" }
            ]
        },
        {
            id: 8,
            title: "Fourreau Couteau",
            description: "Confection de fourreau pour couteau",
            coverImage: "./assets/images/projets/cuir/four/2.jpg",
            images: [
                { src: "./assets/images/projets/cuir/four/2.jpg", description: "Plusieurs fourreaux a couteau" },
				{ src: "./assets/images/projets/cuir/four/5.jpg", description: "Fourreau couteau" },
				{ src: "./assets/images/projets/cuir/four/6.jpg", description: "Fourreau couteau" },
				{ src: "./assets/images/projets/cuir/four/7.jpg", description: "Fourreau couteau" },
				{ src: "./assets/images/projets/cuir/four/8.jpg", description: "Porte multi tool" },
				{ src: "./assets/images/projets/cuir/four/9.jpg", description: "Fourreau couteau" },
				{ src: "./assets/images/projets/cuir/four/1111.jpg", description: "Refection d'un foureau" }
            ]
        },
		{
            id: 9,
            title: "M&eacute;di&eacute;val",
            description: "Maroquinerie d'inspiration m&eacute;di&eacute;vale. Besace, porte corne, bourse",
            coverImage: "./assets/images/projets/cuir/medie/18.jpg",
            images: [
                { src: "./assets/images/projets/cuir/medie/2.jpg", description: "Bracelet avant bras" },
                { src: "./assets/images/projets/cuir/medie/6.jpg", description: "Porte corne" },
				{ src: "./assets/images/projets/cuir/medie/4.jpg", description: "Escarcelle" },
				{ src: "./assets/images/projets/cuir/medie/18.jpg", description: "Besace" },
				{ src: "./assets/images/projets/cuir/medie/15.jpg", description: "Besace" },
				{ src: "./assets/images/projets/cuir/medie/17.jpg", description: "Besace" }
            ]
        },
		{
            id: 10,
            title: "Sac",
            description: "Design et fabrication de sac &agrave; main, sacoche",
            coverImage: "./assets/images/projets/cuir/sac/9.jpg",
            images: [
                { src: "./assets/images/projets/cuir/sac/4.jpg", description: "Sac &agrave; main" },
                { src: "./assets/images/projets/cuir/sac/5.jpg", description: "Trousse de toilette" },
				{ src: "./assets/images/projets/cuir/sac/7.jpg", description: "Pochette" },
				{ src: "./assets/images/projets/cuir/sac/8.jpg", description: "Sac &agrave; main" },	
				{ src: "./assets/images/projets/cuir/sac/1254.jpg", description: "Sacoche banane" },
				{ src: "./assets/images/projets/cuir/sac/9.jpg", description: "Sac &agrave; main" }
            ]
        },
		{
            id: 11,
            title: "Accessoires",
            description: "Bracelet, bague, ceinture, bretelles",
            coverImage: "./assets/images/projets/cuir/access/10.jpg",
            images: [
                { src: "./assets/images/projets/cuir/access/3.jpg", description: "Bracelet de force" },
				{ src: "./assets/images/projets/cuir/access/4.jpg", description: "Porte cl&eacute;" },
				{ src: "./assets/images/projets/cuir/access/5.jpg", description: "Bracelet" },
                { src: "./assets/images/projets/cuir/access/7.jpg", description: "Bracelet" },
				{ src: "./assets/images/projets/cuir/access/10.jpg", description: "Bracelet de force" },
				{ src: "./assets/images/projets/cuir/access/11.jpg", description: "Bretelles" },
				{ src: "./assets/images/projets/cuir/access/13.jpg", description: "Ceinture" }
            ]
        },
		{
            id: 12,
            title: "Porte monnaie",
            description: "Porte feuille, porte carte, porte monnaie",
            coverImage: "./assets/images/projets/cuir/money/1.jpg",
            images: [
                { src: "./assets/images/projets/cuir/money/1.jpg", description: "Porte feuille homme" },
				{ src: "./assets/images/projets/cuir/money/3.jpg", description: "Porte papier auto" },
				{ src: "./assets/images/projets/cuir/money/4.jpg", description: "Porte carte" },
				{ src: "./assets/images/projets/cuir/money/9.jpg", description: "Porte carte" },
				{ src: "./assets/images/projets/cuir/money/10.jpg", description: "Porte feuille femme" },
				{ src: "./assets/images/projets/cuir/money/12.jpg", description: "Porte papier auto" },
				{ src: "./assets/images/projets/cuir/money/11.jpg", description: "Porte carte" }
            ]
        },
		{
            id: 13,
            title: "Autres",
            description: "Bracelet, bague, ceinture, bretelles",
            coverImage: "./assets/images/projets/cuir/autre/46541.jpg",
            images: [
                { src: "./assets/images/projets/cuir/autre/1.jpg", description: "Sangle de guitare" },
				{ src: "./assets/images/projets/cuir/autre/2.jpg", description: "Sangle appareil photo" },
				{ src: "./assets/images/projets/cuir/autre/3.jpg", description: "Etui pour objectif d'appareil photo" },
                { src: "./assets/images/projets/cuir/autre/7.jpg", description: "Couverture de carnet" },
				{ src: "./assets/images/projets/cuir/autre/8.jpg", description: "Marque page" },
				{ src: "./assets/images/projets/cuir/autre/154.jpg", description: "Jeu d'echec" },
				{ src: "./assets/images/projets/cuir/autre/15443.jpg", description: "Tapis de souris" },
				{ src: "./assets/images/projets/cuir/autre/46541.jpg", description: "Tapis de souris" },
				{ src: "./assets/images/projets/cuir/autre/48572.jpg", description: "Tapis de souris" },
				{ src: "./assets/images/projets/cuir/autre/1231.jpg", description: "Sangle de guitare" },
				{ src: "./assets/images/projets/cuir/autre/1323.jpg", description: "Chaussure m&eacute;di&eacute;vale viking" },
				{ src: "./assets/images/projets/cuir/autre/3336.jpg", description: "Collier pour chien" }
            ]
        }
    ]
};

/* ============================================
   MENU DÉROULANT MOBILE
   ============================================ */
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// Gestion du dropdown sur mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    
    if (dropdownToggle && window.innerWidth <= 768) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
});

/* ============================================
   AFFICHAGE DES PROJETS
   ============================================ */
function displayProjects(category) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const categoryProjects = projectsData[category] || [];
    projectsGrid.innerHTML = '';

    if (categoryProjects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: var(--color-text-light);">Aucun projet disponible pour le moment.</p>';
        return;
    }

    categoryProjects.forEach(function(projectItem) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = function() {
            openProjectGallery(projectItem);
        };
        
        const imageCount = projectItem.images ? projectItem.images.length : 0;
        const plural = imageCount > 1 ? 's' : '';
        
        card.innerHTML = 
            '<div class="project-image">' +
                '<img src="' + projectItem.coverImage + '" alt="' + projectItem.title + '">' +
            '</div>' +
            '<div class="project-info">' +
                '<h3>' + projectItem.title + '</h3>' +
                '<p>' + projectItem.description + '</p>' +
                '<p style="margin-top: 0.5rem; color: var(--color-secondary); font-weight: 600;">' +
                    imageCount + ' image' + plural + ' →' +
                '</p>' +
            '</div>';
            
        projectsGrid.appendChild(card);
    });
}

/* ============================================
   GALERIE DE PROJET (MODAL)
   ============================================ */
let currentProject = null;
let currentImageIndex = 0;

function openProjectGallery(project) {
    currentProject = project;
    currentImageIndex = 0;
    showGalleryImage(0);
    
    const modal = document.getElementById('imageModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showGalleryImage(index) {
    if (!currentProject) return;
    
    const images = currentProject.images;
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modalImg.src = images[index].src;
    modalCaption.innerHTML = `
        <strong>${currentProject.title}</strong><br>
        ${images[index].description}<br>
        <span style="font-size: 0.9rem; opacity: 0.8;">Image ${index + 1}/${images.length}</span>
    `;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentProject = null;
}

function navigateGallery(direction) {
    if (!currentProject) return;
    
    currentImageIndex += direction;
    const totalImages = currentProject.images.length;
    
    if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
    } else if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
    }
    
    showGalleryImage(currentImageIndex);
}

// Navigation clavier
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateGallery(-1);
    if (e.key === 'ArrowRight') navigateGallery(1);
});

// Fermer en cliquant en dehors
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'imageModal') closeModal();
        });
    }
});

/* ============================================
   FORMULAIRE DE CONTACT
   ============================================ */
let captchaAnswer = 0;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = num1 + num2;
    
    const captchaQuestion = document.getElementById('captchaQuestion');
    if (captchaQuestion) {
        captchaQuestion.textContent = 'Combien font ' + num1 + ' + ' + num2 + ' ?';
    }
    
    const captchaAnswerInput = document.getElementById('captchaAnswer');
    if (captchaAnswerInput) {
        captchaAnswerInput.value = '';
    }
}

function setupCharCounters() {
    const fields = [
        { id: 'name', countId: 'nameCount', max: 50 },
        { id: 'subject', countId: 'subjectCount', max: 80 },
        { id: 'phone', countId: 'phoneCount', max: 10 },
        { id: 'message', countId: 'messageCount', max: 600 }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const counter = document.getElementById(field.countId);
        
        if (input && counter) {
            input.addEventListener('input', () => {
                const length = input.value.length;
                counter.textContent = `${length}/${field.max}`;
                
                if (length > field.max * 0.9) {
                    counter.style.color = 'var(--color-accent)';
                } else {
                    counter.style.color = 'var(--color-text-light)';
                }
            });
        }
    });

    // Validation t&eacute;l&eacute;phone en temps r&eacute;el
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formStatus = document.getElementById('formStatus');
        const userAnswer = parseInt(document.getElementById('captchaAnswer').value);
        
        // V&eacute;rification CAPTCHA
        if (userAnswer !== captchaAnswer) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur : R&eacute;ponse anti-bot incorrecte';
            generateCaptcha();
            return;
        }

        // R&eacute;cup&eacute;ration des donn&eacute;es
        const formData = {
            name: document.getElementById('name').value,
            subject: document.getElementById('subject').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Validations
        const nameRegex = /^[A-Za-zÀ-ÿ\s\-']+$/;
        if (!nameRegex.test(formData.name) || !nameRegex.test(formData.subject)) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur : Seules les lettres sont autoris&eacute;es dans le nom et le motif';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur : Adresse email invalide';
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur : Le t&eacute;l&eacute;phone doit contenir exactement 10 chiffres';
            return;
        }

        // Construction du corps de l'email
        const emailBody = `Nom : ${formData.name}

Email exp&eacute;diteur : ${formData.email}

T&eacute;l&eacute;phone : ${formData.phone}


Message :
${formData.message}`;

        try {
            formStatus.className = 'form-status success';
            formStatus.textContent = '✅ Message envoy&eacute; avec succès ! Je vous r&eacute;pondrai rapidement.';
            
            // MÉTHODE MAILTO (simple)
            const mailtoLink = `mailto:${config.contactEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // D&eacute;commentez pour activer mailto :
            // window.location.href = mailtoLink;
            
            console.log('=== EMAIL À ENVOYER ===');
            console.log('Destinataire:', config.contactEmail);
            console.log('Objet:', formData.subject);
            console.log('Corps:\n', emailBody);
            
            // R&eacute;initialiser
            this.reset();
            setupCharCounters();
            generateCaptcha();
            
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = '❌ Erreur lors de l\'envoi. Veuillez r&eacute;essayer.';
        }
    });
}

/* ============================================
   INITIALISATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();
    setupCharCounters();
    setupContactForm();
});