document.addEventListener('DOMContentLoaded', function() {
    VANTA.RINGS({
        el: "#hero-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x18864b,
        color: 0x18864b
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.background-video');
    const playButton = document.querySelector('.play-button');
    const videoOverlay = document.querySelector('.video-overlay');
  
    playButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoOverlay.style.background = 'none';
            playButton.style.display = 'none';
        } else {
            video.pause();
            videoOverlay.style.background = 'rgba(0, 0, 0, 0.4)';
            playButton.style.display = 'block';
        }
    });
  
    video.addEventListener('ended', function() {
        videoOverlay.style.background = 'rgba(0, 0, 0, 0.4)';
        playButton.style.display = 'block';
    });
});

// Language Switching Script
document.addEventListener('DOMContentLoaded', function() {
    // Default to German
    switchLanguage(localStorage.getItem('language') || 'de');

    // Add language switcher event listeners
    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.addEventListener('click', function() {
            switchLanguage(this.textContent.toLowerCase());
        });
    });
});

function switchLanguage(lang) {
    // Store language preference
    localStorage.setItem('language', lang);

    // Update HTML language attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-en and data-de attributes
    document.querySelectorAll('[data-en][data-de]').forEach(element => {
        const content = element.getAttribute(`data-${lang}`);
        if (content) {
            element.innerHTML = content; // Use innerHTML to render <br> tags properly
        }
    });

    // Update alt texts for images
    document.querySelectorAll('img[alt]').forEach(img => {
        const originalAlt = img.getAttribute('alt');
        const translations = {
            'en': {
                'Geburtsort Icon': 'Birth Place Icon',
                'Geburtsdatum Icon': 'Birth Date Icon',
                'Gewicht Icon': 'Weight Icon',
                'Höhe Icon': 'Height Icon',
                'Biografie Icon': 'Biography Icon',
                'Statistiken Icon': 'Stats Icon',
                'Vereine Icon': 'Clubs Icon',
                'Spieler Bild': 'Player Image',
                'Galerie Bild': 'Gallery Image'
            },
            'de': {
                'Birth Place Icon': 'Geburtsort Icon',
                'Birth Date Icon': 'Geburtsdatum Icon',
                'Weight Icon': 'Gewicht Icon',
                'Height Icon': 'Höhe Icon',
                'Biography Icon': 'Biografie Icon',
                'Stats Icon': 'Statistiken Icon',
                'Clubs Icon': 'Vereine Icon',
                'Player Image': 'Spieler Bild',
                'Gallery Image': 'Galerie Bild'
            }
        };

        const translatedAlt = translations[lang] && translations[lang][originalAlt] 
            ? translations[lang][originalAlt] 
            : originalAlt;
        
        img.setAttribute('alt', translatedAlt);
    });

    // Highlight active language button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
}
