import * as MODEL from "./model.js";

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);
  MODEL.changePage(pageID, initSubmitListener);

  if (pageID == "") {
    if (pageID == "") {
      MODEL.changePage("home");
    } 
    else {
      MODEL.changePage(pageID);
    }
  }
}


function initSubmitListener() {
  var userObj = {};
  $("#loginbutton").on("click", function (e) {
    console.log("submit");
    let em = $("#email").val();
    let pw = $("#pw").val();
    // console.log(`${em}${pw}`);
    if (em == "") {
      alert("Please enter your Email");
    } else if (pw == "") {
      alert("Please enter your Password");
    } else {
      alert("You have logged in!");
    }

    if (em == userObj[2] && pw == userObj[3]) {
      alert("You have logged in!");
      console.log("login");
    }
  });
  $("#signupbutton").on("click", function (e) {
    console.log("submit");
    let fn = $("#fn").val();
    let ln = $("#ln").val();
    let em = $("#email2").val();
    let pw = $("#pw2").val();
    // console.log(`${em}${pw}`);
    if (fn == "") {
      alert("Please enter your First Name");
    } else if (ln == "") {
      alert("Please enter your Last Name");
    } else if (em == "") {
      alert("Please enter your Email");
    } else if (pw == "") {
      alert("Please enter your Password");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
      };
      alert("You have signed up!");

      MODEL.setUserInfo(userObj);
    }
  });
}





$(document).ready(function () {
  initURLListener();
  populateRecipes();
});
