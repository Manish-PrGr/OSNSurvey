// formToSheet
// const scriptURL = ''
//             const form = document.forms['google-sheet']
//
//             form.addEventListener('submit', e => {
//               document.getElementById('sub').classList.add('opt-right');
//               e.preventDefault()
//               fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//                 .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//                 .catch(error => console.error('Error!', error.message))
//             })
//

// Animation Effect for page loader

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function startEffect(){
  setTimeout(() =>{
    loader.style.opacity =0;
    loader.style.display = 'none';
    loader.style.zIndex = -2000;

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 3);
  },1700);
}

startEffect();

// Typewriter Effect

document.addEventListener('DOMContentLoaded',function(event){

  var headText = document.getElementById('head');

  function finalCall() {
    headText.classList.add("anim-typewriter-reverse-1");
    setTimeout(() => {
      headText.classList.remove("anim-typewriter-2");
      headText.classList.remove("anim-typewriter-reverse-2");
      headText.innerHTML = "Aspects Response Form.";
      headText.classList.add("anim-typewriter-2");
    }, 1100);
  }

  function koreanCall() {
    headText.classList.add("anim-typewriter-reverse-1");
    setTimeout(() => {
      headText.classList.remove("anim-typewriter-1");
      headText.classList.remove("anim-typewriter-reverse-1");
      headText.innerHTML = "안녕하세요...";
      headText.classList.add("anim-typewriter-1");
    }, 1100);
    setTimeout(() => {
      finalCall();
    }, 2500)
  }

  function japaneeseCall() {
    headText.classList.add("anim-typewriter-reverse-1");
    setTimeout(() => {
      headText.classList.remove("anim-typewriter-1");
      headText.classList.remove("anim-typewriter-reverse-1");
      headText.innerHTML = "こんにちは...";
      headText.classList.add("anim-typewriter-1");
    }, 1100);
    setTimeout(() => {
      koreanCall();
    }, 2500)
  }

  function bonjourCall() {
    headText.classList.add("anim-typewriter-reverse");
    setTimeout(() => {
      headText.classList.remove("anim-typewriter");
      headText.classList.remove("anim-typewriter-reverse");
      headText.innerHTML = "Bonjour...";
      headText.classList.add("anim-typewriter-1");
    }, 1100);
    setTimeout(() => {
      japaneeseCall();
    }, 2500)
  }

  function holaCall() {
    headText.classList.add("anim-typewriter-reverse");
    setTimeout(() => {
      headText.classList.remove("anim-typewriter");
      headText.classList.remove("anim-typewriter-reverse");
      headText.innerHTML = "Hola...";
      headText.classList.add("anim-typewriter");
    }, 1100);
    setTimeout(() => {
      bonjourCall();
    }, 2500)
  }

  function namasteCall() {
    headText.classList.add("anim-typewriter-reverse");
    setTimeout(() => {
      headText.classList.remove("anim-typewriter");
      headText.classList.remove("anim-typewriter-reverse");
      headText.innerHTML = "नमस्ते...";
      headText.classList.add("anim-typewriter");
    }, 1100);
    setTimeout(() => {
      holaCall();
    }, 2500)
    }

  function helloCall() {
    setTimeout(() => {
      headText.innerHTML = "Hello...";
      headText.classList.remove("anim-typewriter");
      headText.classList.add("anim-typewriter-reverse");
    }, 3500);
    setTimeout(() => {
      namasteCall();
    }, 3500)
    }
  helloCall();
});
// Animation Effect on card

var option1 = document.getElementById('alt-opt-1');
var option2 = document.getElementById('alt-opt-2');
var option3 = document.getElementById('alt-opt-3');
var option4 = document.getElementById('alt-opt-4');
var option5 = document.getElementById('alt-opt-5');
var option99 = document.getElementById('alt-opt-99');
var questionLine = document.getElementById('question');
var optionNo = document.getElementsByClassName("no");
var optionYes = document.getElementsByClassName("yes");
var submitOption = document.getElementById('alt-sub');

function buttonClicked(clickedID) {
  var button = clickedID;
  if (button == 99) {
    setTimeout(() => {
      questionLine.style.display = '';
      questionLine.innerHTML = "Enter your Registered Number: "
			questionLine.style.animation = '';
      option99.style.display = '';
      option99.style.animation = '';
      option1.style.display = 'none';
      option2.style.display = 'none';
      option3.style.display = 'none';
      option4.style.display = 'none';
      option5.style.display = 'none';
      submitOption.style.display = 'none';
		}, 0);
  }

  else if (button == 1) {
    setTimeout(() => {
      questionLine.style.display = '';
      questionLine.innerHTML = "Interested to get in touch with the new people?"
			questionLine.style.animation = '';
      optionNo.innerHTML = "Not Interested";
      optionYes.innerHTML = "Interested";
      option1.style.display = '';
      option1.style.animation = '';
      option2.style.display = 'none';
      option3.style.display = 'none';
      option4.style.display = 'none';
      option5.style.display = 'none';
      option99.style.display = 'none';
      submitOption.style.display = 'none';
		}, 0);
  }

  else if (button == 2) {
    setTimeout(() => {
      questionLine.style.display = '';
      questionLine.innerHTML = "How often you keep in touch with the friends?"
			questionLine.style.animation = '';
      optionNo.innerHTML = "Rarely";
      optionYes.innerHTML = "Mostly";
      option2.style.display = '';
      option2.style.animation = '';
      option1.style.display = 'none';
      option3.style.display = 'none';
      option4.style.display = 'none';
      option5.style.display = 'none';
      option99.style.display = 'none';
      submitOption.style.display = 'none';
		}, 0);
  }

  else if (button == 3) {
    setTimeout(() => {
      questionLine.style.display = '';
      questionLine.innerHTML = "Do you use your social accounts for general socializing?"
			questionLine.style.animation = '';
      optionNo.innerHTML = "Usually";
      optionYes.innerHTML = "Now and then";
      option3.style.display = '';
      option3.style.animation = '';
      option2.style.display = 'none';
      option1.style.display = 'none';
      option4.style.display = 'none';
      option5.style.display = 'none';
      option99.style.display = 'none';
      submitOption.style.display = 'none';
		}, 0);
  }

  else if (button == 4) {
    setTimeout(() => {
      questionLine.style.display = '';
      questionLine.innerHTML = "Do you like following the latest trends?"
			questionLine.style.animation = '';
      optionNo.innerHTML = "Doesn't like";
      optionYes.innerHTML = "Like to follow";
      option4.style.display = '';
      option4.style.animation = '';
      option2.style.display = 'none';
      option3.style.display = 'none';
      option1.style.display = 'none';
      option5.style.display = 'none';
      option99.style.display = 'none';
      submitOption.style.display = 'none';
		}, 0);
  }

  else if (button == 5) {
    setTimeout(() => {
      questionLine.style.display = '';
      questionLine.innerHTML = "Do you encourage on other thoughts and opinions?"
			questionLine.style.animation = '';
      optionNo.innerHTML = "Encourage";
      optionYes.innerHTML = "Discourage";
      option5.style.display = '';
      option5.style.animation = '';
      option2.style.display = 'none';
      option3.style.display = 'none';
      option4.style.display = 'none';
      option1.style.display = 'none';
      option99.style.display = 'none';
      submitOption.style.display = 'none';
		}, 0);
  }
}


function submitButton(clickID) {
  var subButton = clickID;
  if (subButton == 6) {
    setTimeout(() => {
      submitOption.style.display = '';
      submitOption.style.animation = '';
      questionLine.innerHTML = '';
      option1.style.display = 'none';
      option2.style.display = 'none';
      option3.style.display = 'none';
      option4.style.display = 'none';
      option5.style.display = 'none';
      option99.style.display = 'none';
    },0);
  }
}


var option10 = document.getElementById('alt-opt-1').getElementsByClassName("opt")[0];
var option11 = document.getElementById('alt-opt-1').getElementsByClassName("opt")[1];
var option20 = document.getElementById('alt-opt-2').getElementsByClassName("opt")[0];
var option21 = document.getElementById('alt-opt-2').getElementsByClassName("opt")[1];
var option30 = document.getElementById('alt-opt-3').getElementsByClassName("opt")[0];
var option31 = document.getElementById('alt-opt-3').getElementsByClassName("opt")[1];
var option40 = document.getElementById('alt-opt-4').getElementsByClassName("opt")[0];
var option41 = document.getElementById('alt-opt-4').getElementsByClassName("opt")[1];
var option50 = document.getElementById('alt-opt-5').getElementsByClassName("opt")[0];
var option51 = document.getElementById('alt-opt-5').getElementsByClassName("opt")[1];

function optionClicked(clickedOption) {

  var option = document.getElementById(clickedOption);

if(option.id == 'no-1' || option.id == 'yes-1') {
  if (option.name == option10.name) {
    option10.classList.add("opt-wrong");
    option11.classList.remove("opt-right");
    document.getElementById('i-1').value = option10.innerHTML;
  }
  else if(option.name == option11.name) {
    option11.classList.add("opt-right");
    option10.classList.remove("opt-wrong");
    document.getElementById('i-1').value = option11.innerHTML;
  }
}

if(option.id == 'no-2' || option.id == 'yes-2') {
  if (option.name == option20.name) {
    option20.classList.add("opt-wrong");
    option21.classList.remove("opt-right");
    document.getElementById('i-2').value = option20.innerHTML;
  }
  else if(option.name == option21.name) {
    option21.classList.add("opt-right");
    option20.classList.remove("opt-wrong");
    document.getElementById('i-2').value = option21.innerHTML;
  }
}

if(option.id == 'no-3' || option.id == 'yes-3') {
  if (option.name == option30.name) {
    option30.classList.add("opt-wrong");
    option31.classList.remove("opt-right");
    document.getElementById('i-3').value = option30.innerHTML;
  }
  else if(option.name == option31.name) {
    option31.classList.add("opt-right");
    option30.classList.remove("opt-wrong");
    document.getElementById('i-3').value = option31.innerHTML;
  }
}

if(option.id == 'no-4' || option.id == 'yes-4') {
  if (option.name == option40.name) {
    option40.classList.add("opt-wrong");
    option41.classList.remove("opt-right");
    document.getElementById('i-4').value = option40.innerHTML;
  }
  else if(option.name == option41.name) {
    option41.classList.add("opt-right");
    option40.classList.remove("opt-wrong");
    document.getElementById('i-4').value = option41.innerHTML;
  }
}

if(option.id == 'no-5' || option.id == 'yes-5') {
  if (option.name == option50.name) {
    option50.classList.add("opt-wrong");
    option51.classList.remove("opt-right");
    document.getElementById('i-5').value = option50.innerHTML;
  }
  else if(option.name == option51.name) {
    option51.classList.add("opt-right");
    option50.classList.remove("opt-wrong");
    document.getElementById('i-5').value = option51.innerHTML;
  }
}

}
