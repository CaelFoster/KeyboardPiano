/*FAILURES BUT REFRENCED

//const groupR = document.getElementById("R");
//const originalFillColor = groupR.querySelector('rect').getAttribute('fill');
//const groupT = document.getElementById("T");
const J = document.getElementById("J");
const style = document.getElementById('J').style.display;
if keyDown('j'){
  if(style==="none")
    document.getElementById("J").style.display = "block";
  else
    document.getElementById("J").style.display="none";
}
/*const playSound = e => {
      let keyCode;
      if (e.type === 'keydown') {
        keyCode = e.keyCode;
      } else {
        keyCode = e.target.getAttribute('data-key') || e.target.parentNode.getAttribute('data-key');
      }
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`div[data-key="${keyCode}"]`);

      if (!audio) return;

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    const removeTransition = e => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => {
      key.addEventListener('transitionend', removeTransition)
    });

    window.addEventListener('keydown', playSound);
    window.addEventListener('touchstart', playSound);
    window.addEventListener('click', playSound);
    
    window.addEventListener("keydown",(event) => {
   if (event.key === 't') {
    
    groupT.querySelector('rect').setAttribute("fill","red");
    groupR.querySelector('rect').removeAttribute('fill');
  }
});  

/*
for (const key in keys){
  const button = keys[key];
  const originalFillColor = button.querySelector('rect').getAttribute('fill');
 
  window.addEventListener("keydown", (event)=>{
    if(event.key.toUpperCase() === key){
      console.log(`key ${key} pressed`);
      button.querySelector('rect').setAttribute("fill","red");
    }
  });
  button.addEventListener("keyup", (event) => {
    // Change the background color of the button back to the original color
    button.querySelector('rect').setAttribute("fill",originalFillColor);
   
  });
}



/*
window.addEventListener("keydown", (event) => {
 
  //if (event.key === "r") {
   
    keys.R.querySelector("rect").setAttribute("fill", "red");
    //groupT.querySelector('rect').removeAttribute('fill');
    console.log("r");
  //}
});
window.addEventListener("keyup", (event) => {
 
 // if (event.key === "r") {
   
    const fadeOut = keys.R.querySelector("rect").animate(
      [
        { opacity: 1 },
        { opacity: 0 },
      ],
      {
        duration: 50,
        easing: "linear",
      }
    );
    fadeOut.addEventListener("finish", () => {
      keys.R.querySelector("rect").setAttribute("fill", originalFillColor);
      console.log("r release");
    });
  //}
});

                   

*/
 

const keys = {
  KeyA: document.getElementById("A"),
  KeyB: document.getElementById("B"),
  KeyC: document.getElementById("C"),
  KeyD: document.getElementById("D"),
  KeyE: document.getElementById("E"),
  KeyF: document.getElementById("F"),
  KeyG: document.getElementById("G"),
  KeyH: document.getElementById("H"),
  KeyI: document.getElementById("I"),
  KeyJ: document.getElementById("J"),
  KeyK: document.getElementById("K"),
  KeyL: document.getElementById("L"),
  KeyM: document.getElementById("M"),
  KeyN: document.getElementById("N"),
  KeyO: document.getElementById("O"),
  KeyP: document.getElementById("P"),
  KeyQ: document.getElementById("Q"),
  KeyR: document.getElementById("R"),
  KeyS: document.getElementById("S"),
  KeyT: document.getElementById("T"),
  KeyU: document.getElementById("U"),
  KeyV: document.getElementById("V"),
  KeyW: document.getElementById("W"),
  KeyX: document.getElementById("X"),
  KeyY: document.getElementById("Y"),
  KeyZ: document.getElementById("Z"),
  Equal: document.getElementById("plus"),
  Minus: document.getElementById("minus"),
  Enter: document.getElementById("enter"),
  Digit0: document.getElementById("zero"),
  Digit1: document.getElementById("one"),
  Digit2: document.getElementById("two"),
  Digit3: document.getElementById("three"),
  Digit4: document.getElementById("four"),
  Digit5: document.getElementById("five"),
  Digit6: document.getElementById("six"),
  Digit7: document.getElementById("seven"),
  Digit8: document.getElementById("eight"),
  Digit9: document.getElementById("nine"),
  Backquote: document.getElementById("tilde"),
  ShiftLeft: document.getElementById("shift"),
  Comma: document.getElementById("comma"),
  Period: document.getElementById("period"),
  ShiftRight: document.getElementById("shift2"),
  Slash: document.getElementById("fSlash"),
  Quote: document.getElementById("quote"),
  Semicolon: document.getElementById("semiColon"),
  CapsLock: document.getElementById("caps"),
  Backslash: document.getElementById("bSlash"),
  BracketRight: document.getElementById("cBracket"),
  BracketLeft: document.getElementById("oBracket"),
  Tab: document.getElementById("tab"),
  Backspace: document.getElementById("BackSpace")
};


for (const key in keys) {
  const button = keys[key];
  const originalFillColor = button.querySelector("rect").getAttribute("fill");
  window.addEventListener("keydown", (event) => {
    if(event.code === "Tab"){
         event.preventDefault();                 
    }
    if (event.code === key) {
      console.log(`key ${key} pressed`);
      button.querySelector("rect").setAttribute("fill", "red");
    }
  });
  window.addEventListener("keyup", (event) => {
    // Change the fill color of the button's rectangle back to the original color
    if (event.code === key || event.key === key || event.code === "Tab") {
      button.querySelector("rect").setAttribute("fill", originalFillColor);
    }
  });
}

