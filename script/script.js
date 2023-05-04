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
const svg_data = document.querySelector("#svgData").contentDocument;

const keys = {
  KeyA: svg_data.getElementById("A"),
  KeyB: svg_data.getElementById("B"),
  KeyC: svg_data.getElementById("C"),
  KeyD: svg_data.getElementById("D"),
  KeyE: svg_data.getElementById("E"),
  KeyF: svg_data.getElementById("F"),
  KeyG: svg_data.getElementById("G"),
  KeyH: svg_data.getElementById("H"),
  KeyI: svg_data.getElementById("I"),
  KeyJ: svg_data.getElementById("J"),
  KeyK: svg_data.getElementById("K"),
  KeyL: svg_data.getElementById("L"),
  KeyM: svg_data.getElementById("M"),
  KeyN: svg_data.getElementById("N"),
  KeyO: svg_data.getElementById("O"),
  KeyP: svg_data.getElementById("P"),
  KeyQ: svg_data.getElementById("Q"),
  KeyR: svg_data.getElementById("R"),
  KeyS: svg_data.getElementById("S"),
  KeyT: svg_data.getElementById("T"),
  KeyU: svg_data.getElementById("U"),
  KeyV: svg_data.getElementById("V"),
  KeyW: svg_data.getElementById("W"),
  KeyX: svg_data.getElementById("X"),
  KeyY: svg_data.getElementById("Y"),
  KeyZ: svg_data.getElementById("Z"),
  Equal: svg_data.getElementById("plus"),
  Minus: svg_data.getElementById("minus"),
  Enter: svg_data.getElementById("enter"),
  Digit0: svg_data.getElementById("zero"),
  Digit1: svg_data.getElementById("one"),
  Digit2: svg_data.getElementById("two"),
  Digit3: svg_data.getElementById("three"),
  Digit4: svg_data.getElementById("four"),
  Digit5: svg_data.getElementById("five"),
  Digit6: svg_data.getElementById("six"),
  Digit7: svg_data.getElementById("seven"),
  Digit8: svg_data.getElementById("eight"),
  Digit9: svg_data.getElementById("nine"),
  Backquote: svg_data.getElementById("tilde"),
  ShiftLeft: svg_data.getElementById("shift"),
  Comma: svg_data.getElementById("comma"),
  Period: svg_data.getElementById("period"),
  ShiftRight: svg_data.getElementById("shift2"),
  Slash: svg_data.getElementById("fSlash"),
  Quote: svg_data.getElementById("quote"),
  Semicolon: svg_data.getElementById("semiColon"),
  CapsLock: svg_data.getElementById("caps"),
  Backslash: svg_data.getElementById("bSlash"),
  BracketRight: svg_data.getElementById("cBracket"),
  BracketLeft: svg_data.getElementById("oBracket"),
  Tab: svg_data.getElementById("tab"),
  Backspace: svg_data.getElementById("BackSpace")
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

