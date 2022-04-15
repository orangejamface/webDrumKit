function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // const kick = document.querySelector(`.kickKey[data-key="${e.keyCode}"]`)
    // console.log(sound);
    if (!sound) return; //stop the function if no audio 
    sound.currentTime = 0; // enable multiple play of each key
    sound.play();
    
    if (e.keyCode == "65" ) key.classList.add('playingClap'); //clap style change
    if (e.keyCode == "87" ) key.classList.add('playingHat'); //hihat style change
    if (e.keyCode == "67" ) key.classList.add('playingKick'); //kick style change
    if (e.keyCode == "81" ) key.classList.add('playingOpenHat'); //openhat style change
    if (e.keyCode == "66" ) key.classList.add('playingBoom'); //boom style change
    if (e.keyCode == "85" ) key.classList.add('playingRide'); //ride style change
    if (e.keyCode == "68" ) key.classList.add('playingSnare'); //snare style change
    if (e.keyCode == "75" ) key.classList.add('playingTom'); //tom style change
    if (e.keyCode == "73" ) key.classList.add('playingTink'); //tink style change
    if (e.keyCode == "69" ) key.classList.add('playingRim'); //rimshot style change
    if (e.keyCode == "84" ) key.classList.add('playingCrash'); //tink style change
    if (e.keyCode == "89" ) key.classList.add('playingTom'); //rimshot style change
  };
  

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return;}
    console.log(e.propertyName);
    this.classList.remove('playingClap', 'playingHat', 'playingKick', 'playingOpenHat',
     'playingBoom', 'playingRide', 'playingSnare', 'playingTom', 'playingTink', 'playingRim', 'playingCrash' );
  }
    
  window.addEventListener('keydown', playSound); 

  const keys = document.querySelectorAll('.key');

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  
  