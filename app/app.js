import * as MODEL from "./model.js";

function changeRoute() {
let hashTag = window.location.hash;
 let pageID = hashTag.replace('#', '');
//   console.log(hashTag + ' ' + pageID);
MODEL.changePage(pageID);

}

function initURLListener() {
$(window).on('hashchange', changeRoute);
changeRoute();
}

$(document).ready(function () {
initURLListener();
});