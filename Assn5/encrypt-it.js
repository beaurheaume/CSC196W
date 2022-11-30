/*
 * Starter file 
 */

console.log("Window Loaded!");

(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

  } //end init()

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function shiftCipher(text){
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i<lower.length; i++){
      if(lower[i] < "a" || text[i] > "z"){  //outside range
        result+=text[i];
      } //end if outside letters
      else if(text[i] == "z"){  //last letter in alphabet
        result += "a";  //sub with first letter
      }
      else{ //in letter range
          let unicodeText = text.charAt(i);
          let nextUnicode = String.fromCharCode(unicodeText+1);
          result+=nextUnicode;
      }
    } //end for
    return result;
  } //end shiftCipher()
  document.getElementById("encrypt-it").addEventListener("click",()=>{
    let text = document.getElementById("input-text").value;
    document.getElementById("result").innerText=shiftCipher(text);
  })
})();
