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
    } else {
      MODEL.changePage(pageID);
    }
  }
}

function initSubmitListener() {
  $("#signupbutton").on("click", function (e) {
    // console.log("submit");
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

      $("#loginbutton").on("click", function (e) {
        // console.log("submit");
        let em2 = $("#email").val();
        let pw2 = $("#pw").val();
        // console.log(`${em}${pw}`);
        if (em2 == "") {
          alert("Please enter your Email");
        } else if (pw2 == "") {
          alert("Please enter your Password");
        }
        // else {
        //   alert("You have logged in!");
        // }

        if (em2 == em && pw2 == pw) {
          alert("You have logged in!");
          // console.log("login");
        } else if (em2 != em && em2 != "") {
          alert("We could not find that email");
        } else if (em2 == em && pw2 != pw && pw != "") {
          alert("Your password is not correct");
        }
      });
    }
  });
}

$(document).ready(function () {
  initURLListener();
  populateRecipes();
});
