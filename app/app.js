import * as MODEL from "./model.js";

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);
  MODEL.changePage(pageID, initSubmitListener);
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initSubmitListener() {
  $("#loginbutton").on("click", function (e) {
    console.log("submit");
    let em = $("#email").val();
    let pw = $("#pw").val();
    console.log(`${em}${pw}`);
    if (em == "") {
      alert("Please enter your email");
    }
    if (pw == "") {
      alert("Please enter your password");
    }
  });
}

$(document).ready(function () {
  initURLListener();
});
