let numOfLikesGogh = 492;
let numOfLikesCourbet = 502;
let numOfLikesDucreux = 137;
const likesGogh = document.querySelector(".likesGogh");
const likesCourbet = document.querySelector(".likesCourbet");
const likesDucreux = document.querySelector(".likesDucreux");
const heartGogh = document.querySelector(".heartGogh");
const heartCourbet = document.querySelector(".heartCourbet");
const heartDucreux = document.querySelector(".heartDucreux");

heartGogh.addEventListener("click", function () {
	numOfLikesGogh += 1;
	likesGogh.innerHTML = `21 ${numOfLikesGogh} likes`;
});
heartCourbet.addEventListener("click", function () {
	numOfLikesCourbet += 1;
	likesCourbet.innerHTML = `12 ${numOfLikesCourbet} likes`;
});
heartDucreux.addEventListener("click", function () {
	numOfLikesDucreux += 1;
	likesDucreux.innerHTML = `15 ${numOfLikesDucreux} likes`;
});
