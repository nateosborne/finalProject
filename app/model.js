var userInfo = {};

//
export function changePage(pageID, callback) {
  if (pageID == "") {
    $.get(`pages/home.html`, function (data) {
      //console.log("data " + data);
      $("#app").html(data);
    });
  } else if (pageID == "account") {
    $.get(`pages/${pageID}.html`, function (data) {
      //console.log("data " + data);
      $("#app").html(data);
    });
  } else if (pageID == "recipes") {
    $.get(`pages/${pageID}.html`, function (data) {
      //console.log("data " + data);
      $("#app").html(data);
      console.log("TESTING");
      populateRecipes();
    });
  } else {
    //login only works when "home.html" is "login.html"
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
      callback();
    });
  }
}

export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}
