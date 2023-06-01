console.log('script.js loaded');

/*FAILURES BUT REFRENCED, IGNORE THIS

//const groupR = svg_data.getElementById("R");
//const originalFillColor = groupR.querySelector('rect').getAttribute('fill');
//const groupT = svg_data.getElementById("T");
const J = svg_data.getElementById("J");
const style = svg_data.getElementById('J').style.display;
if keyDown('j'){
  if(style==="none")
    svg_data.getElementById("J").style.display = "block";
  else
    svg_data.getElementById("J").style.display="none";
}
/*const playSound = e => {
      let keyCode;
      if (e.type === 'keydown') {
        keyCode = e.keyCode;
      } else {
        keyCode = e.target.getAttribute('data-key') || e.target.parentNode.getAttribute('data-key');
      }
      const audio = svg_data.querySelector(`audio[data-key="${keyCode}"]`);
      const key = svg_data.querySelector(`div[data-key="${keyCode}"]`);

      if (!audio) return;

      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    }

    const removeTransition = e => {
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

    const keys = Array.from(svg_data.querySelectorAll('.key'));
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


//Code Starts Here

//reduces the risk in the java loading before the html (issue being that svg_data would be null)
window.addEventListener("DOMContentLoaded", function() {
console.log("DOM fully loaded and parsed");

const svg_data = document.querySelector("#svgData").contentDocument;
console.log("got svg data");
const keys = {
  Digit8:{
    button: svg_data.getElementById("cTwo"),
    sound:  document.getElementById("cTwoSound")
  },
  Digit9:{
    button: svg_data.getElementById("dTwo"),
    sound:  document.getElementById("dTwoSound")
  },
  Digit0:{
    button: svg_data.getElementById("eTwo"),
    sound:  document.getElementById("eTwoSound")
  },
  KeyQ:{
    button: svg_data.getElementById("fTwo"),
    sound:  document.getElementById("fTwoSound")
  },
  KeyW:{
    button: svg_data.getElementById("gTwo"),
    sound:  document.getElementById("gTwoSound")
  },
  KeyE:{
    button: svg_data.getElementById("aTwo"),
    sound:  document.getElementById("aTwoSound")
  },
  KeyR:{
    button: svg_data.getElementById("bTwo"),
    sound:  document.getElementById("bTwoSound")
  },
  UpperCaseQ:{
    button: svg_data.getElementById("fSharpTwo"),
    sound:  document.getElementById("fSharpTwoSound")
  },
  UpperCaseW:{
    button: svg_data.getElementById("gSharpTwo"),
    sound:  document.getElementById("gSharpTwoSound")
  },
  UpperCaseE:{
    button: svg_data.getElementById("aSharpTwo"),
    sound:  document.getElementById("aSharpTwoSound")
  },
  Key8:{
    button: svg_data.getElementById("cSharpTwo"),
    sound:  document.getElementById("cSharpTwoSound")
  },
  Key9:{
    button: svg_data.getElementById("dSharpTwo"),
    sound:  document.getElementById("dSharpTwoSound")
  }

};

/*
const keys = {
  Digit1:{
   button: svg_data.getElementById("cOne"),
   sound:  document.getElementById("cOneSound")
  },
  Digit2:{
    button: svg_data.getElementById("dOne"),
    sound:  document.getElementById("dOneSound")
  }, 
  Digit3:{
    button: svg_data.getElementById("eOne"),
    sound:  document.getElementById("eOneSound")
  },
  Digit4:{
    button: svg_data.getElementById("fOne"),
    sound:  document.getElementById("fOneSound")
  },
  Digit5:{
    button: svg_data.getElementById("gOne"),
    sound:  document.getElementById("gOneSound")
  },
  Digit6:{
    button: svg_data.getElementById("aOne"),
    sound:  document.getElementById("aOneSound")
  },
  Digit7:{
    button: svg_data.getElementById("bOne"),
    sound:  document.getElementById("bOneSound")
  },
  Key1:{
    button: svg_data.getElementById("cSharpOne"),
    sound:  document.getElementById("cSharpOneSound")
  },
  Key2:{
    button: svg_data.getElementById("dSharpOne"),
    sound:  document.getElementById("dSharpOneSound")
  },
  Key4:{
    button: svg_data.getElementById("fSharpOne"),
    sound:  document.getElementById("fSharpOneSound")
  },
  Key5:{
    button: svg_data.getElementById("gSharpOne"),
    sound:  document.getElementById("gSharpOneSound")
  },
  Key6:{
    button: svg_data.getElementById("aSharpOne"),
    sound:  document.getElementById("aSharpOneSound")
  }
*/
  /*
  Digit3: svg_data.getElementById("eOne"),
  Digit4: svg_data.getElementById("fOne"),
  Digit5: svg_data.getElementById("gOne"),
  Digit6: svg_data.getElementById("aOne"),
  Digit7: svg_data.getElementById("bOne"),
  Key1: svg_data.getElementById("cSharpOne"),
  Key2: svg_data.getElementById("dSharpOne"),
  Key4: svg_data.getElementById("fSharpOne"),
  Key5: svg_data.getElementById("gSharpOne"),
  Key6: svg_data.getElementById("aSharpOne")
  */
//};
//could make a second object for the shifted keys where if shift is targeted, objects in keys is overidden by objects in shiftedKeys
console.log("got keys using svg data");

const shiftedState = {};

// for in loop
for (const key in keys) {
  const {button, sound} = keys[key];
  const originalFillColor = button.querySelector('[id^="Rectangle"]').getAttribute("fill");
  const originalShiftFillColor = svg_data.querySelector("rect").getAttribute("fill");
  shiftedState[key] = false;  
  window.addEventListener("keydown", (event) => {
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      shiftedState[key] = true;
    }
    
    //Digit${key.slice(-1)} cuts out the number after "Digit" / the last character in the key string and adds it to a new array, key.startsWith("Key") appends that number to the end of "Key"
    //&& shiftedState[key] === true at the end of if statement is uneccessary due to event.shiftKey
    if (event.shiftKey && event.code === `Digit${key.slice(-1)}` && key.startsWith("Key")) {
      console.log(button.id);
      button.querySelector("rect").setAttribute("fill", "red");
      sound.currentTime = 0;
      sound.play();
    }
    if(event.code === key && shiftedState[key] === false) {
      console.log(`${key}`);
      button.querySelector('[id^="Rectangle"]').setAttribute("fill", "red");
      sound.currentTime = 0;
      sound.play();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code === key) {
      button.querySelector('[id^="Rectangle"]').setAttribute("fill", originalFillColor);
    }
    if (event.code === `Digit${key.slice(-1)}` && key.startsWith("Key")) {
     button.querySelector("rect").setAttribute("fill", originalShiftFillColor);
    }
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      shiftedState[key] = false;
    }
  });
}

});


































































/*
const svg_data = svg_data.querySelector("#svgData").contentDocument;



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

const keye = svg_data.getElementById('E');

console.log(keys);


//This works but im trying to select my svg elements first


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
*/