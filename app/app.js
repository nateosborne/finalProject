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
      Swal.fire({
        icon: "error",
        title: "Please enter your First Name",
      });
    } else if (ln == "") {
      Swal.fire({
        icon: "error",
        title: "Please enter your Last Name",
      });
    } else if (em == "") {
      Swal.fire({
        icon: "error",
        title: "Please enter your Email",
      });
    } else if (pw == "") {
      Swal.fire({
        icon: "error",
        title: "Please enter your Password",
      });
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pw,
      };
      Swal.fire({
        icon: "success",
        title: "You have signed up!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

      MODEL.setUserInfo(userObj);

      $("#loginbutton").on("click", function (e) {
        // console.log("submit");
        let em2 = $("#email").val();
        let pw2 = $("#pw").val();
        // console.log(`${em}${pw}`);
        if (em2 == "") {
          Swal.fire({
            icon: "error",
            title: "Please enter your Email",
          });
        } else if (pw2 == "") {
          Swal.fire({
            icon: "error",
            title: "Please enter your Password",
          });
        }

        // else {
        //   alert("You have logged in!");
        // }

        if (em2 == em && pw2 == pw) {
          Swal.fire({
            icon: "success",
            title: "You have logged in!",
            text: " Welcome back " + fn + "!",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });

          // console.log("login");
        }
        if (pw2 != pw && pw2 != "") {
          Swal.fire({
            icon: "error",
            title: "That password is incorrect",
          });
        } else if (em2 != em && em2 != "") {
          Swal.fire({
            icon: "error",
            title: "Please enter a valid email",
          });
        }
      });
    }
  });
}

$(document).ready(function () {
  initURLListener();
  populateRecipes();
});
