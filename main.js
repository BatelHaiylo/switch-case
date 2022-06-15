function cheackUserInputNumber() {
  let userInput = document.getElementById("user_num").value;
  console.log(userInput);

  switch (userInput) {
    case "3":
      console.log("hello");
      break;

    case "5":
      console.log("goodbye");
      break;

    case "7":
      console.log("thank you");
      break;

    default:
      console.log("no acording massege");
  }
}

function cheackUserInputNane() {
  let userInput = document.getElementById("user_name").value;
  let userNameOnScreen = document.getElementById("write_on_screen_h3");
  console.log(userInput);

  switch (userInput) {
    case "Jacob":
      return (userNameOnScreen.innerText = "Jacob");

    case "Nathan":
      return (userNameOnScreen.innerText = "NATHAN");

    case "Dalia":
      return (userNameOnScreen.innerText = "dalia");

    default:
      userNameOnScreen.innerText = "no acording massege";
  }
}

function userCreateMatmatics() {
  let userNum1 = +document.getElementById("num_1").value;
  let userNum2 = +document.getElementById("num_2").value;
  let mathSign = document.getElementById("operator").value;

  switch (mathSign) {
    case "+":
      console.log(userNum1 + userNum2);
      break;
    case "-":
      console.log(userNum1 - userNum2);
      break;
    case "*":
      console.log(userNum1 * userNum2);
      break;
    case "/":
      console.log(userNum1 / userNum2);
      break;
  }
}

function userCreateAndSentenceElement(){
    let userChoosenColor = document.getElementById("user_Tcolor");
    let userText = document.getElementById("user_text");
    let userFontSize = document.getElementById("user_choosen_header");
    let elementP = document.getElementById("write_on_screen_p");

    switch (userFontSize.value) {
        case "h1":
            elementP.innerHTML = "<"+ userFontSize.value +"  style = 'color:"+ userChoosenColor.value +"';>" + userText.value + "<"+ userFontSize.value +">"

        case "h2":
            elementP.innerHTML = "<"+ userFontSize.value +"  style = 'color:"+ userChoosenColor.value +"';>" + userText.value + "<"+ userFontSize.value +">"
    
        case "h3":
            elementP.innerHTML = "<"+ userFontSize.value +"  style = 'color:"+ userChoosenColor.value +"';>" + userText.value + "<"+ userFontSize.value +">"
    
        case "h4":
            elementP.innerHTML = "<"+ userFontSize.value +"  style = 'color:"+ userChoosenColor.value +"';>" + userText.value + "<"+ userFontSize.value +">"

        case "h5":

            elementP.innerHTML = "<"+ userFontSize.value +"  style = 'color:"+ userChoosenColor.value +"';>" + userText.value + "<"+ userFontSize.value +">"

        case "h6":
            elementP.innerHTML = "<"+ userFontSize.value +"  style = 'color:"+ userChoosenColor.value +"';>" + userText.value + "<"+ userFontSize.value +">"
        }
  
}

function userCreateAndPositionElement() {
  let userChoosenColor = document.getElementById("user_color");
  let userPosition = document.getElementById("user_position");
  let elementDiv = document.getElementById("write_on_screen_div");

  switch (userPosition.value) {
    case "top-left":
      return (elementDiv.style =
        "top: 0px; left: 0px; background-color:" +
        userChoosenColor.value +
        ";");

    case "top-right":
      return (elementDiv.style = 
        "top: 0px; right: -1253px; background-color:" +
        userChoosenColor.value +
        ";");

    case "bottom-left":
      return (elementDiv.style =
        "top: 381px; left: 0px; background-color:" +
        userChoosenColor.value +
        ";");

    case "bottom-right":
      return (elementDiv.style =
        "top: 381px; right: -1253px; background-color:" +
        userChoosenColor.value +
        ";");
  }
}
