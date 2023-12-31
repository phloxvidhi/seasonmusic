document.addEventListener('DOMContentLoaded', () => {
    let activeSound = null; // Variable to store the currently active sound
  
    const seasons = [
      { name: 'winter', sound: 'winter-winds-7077.mp3', color: '#a8c0ff' },
      { name: 'summer', sound: 'summer_sound.mp3', color: '#f9e063' },
      { name: 'autumn', sound: 'leaves-crunching-6954.mp3', color: '#f39c12' },
      { name: 'spring', sound: 'birds-19624.mp3', color: 'linear-gradient(135deg, #fec8d8, #f9e063)' }
    ];
  
    // Function to play the sound effect
    function playSound(sound) {
      if (activeSound) {
        activeSound.stop();
      }
      activeSound = new Howl({
        src: [sound],
        autoplay: true,
        loop: true,
        volume: 0.5,
      });
    }
  
    // Function to change the background color
    function changeBackgroundColor(color) {
      document.body.style.background = color;
    }
  
    // Attach click event listeners to each season button
    seasons.forEach(season => {
      const btn = document.getElementById(season.name);
      btn.addEventListener('click', () => {
        // Reset active class for all buttons
        seasons.forEach(season => {
          const btn = document.getElementById(season.name);
          btn.classList.remove('active');
        });
  
        // Add active class to the clicked button
        btn.classList.add('active');
  
        // Play sound effect for the selected season
        playSound(season.sound);
  
        // Change background color for the selected season
        changeBackgroundColor(season.color);
      });
    });
  });
  
  
