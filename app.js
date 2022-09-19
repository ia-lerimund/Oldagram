let numOfLikesGogh = 492;
let numOfLikesCourbet = 502;
let numOfLikesDucreux = 137;
let condition1 = true;
let condition2 = true;
let condition3 = true;
const likesGogh = document.querySelector(".likesGogh");
const likesCourbet = document.querySelector(".likesCourbet");
const likesDucreux = document.querySelector(".likesDucreux");
const heartGogh = document.querySelector(".heartGogh");
const heartCourbet = document.querySelector(".heartCourbet");
const heartDucreux = document.querySelector(".heartDucreux");

heartGogh.addEventListener("click", function () {
	if (condition1) {
		numOfLikesGogh += 1;
		condition1 = false;
		likesGogh.innerHTML = `21 ${numOfLikesGogh} likes`;
	} else {
		numOfLikesGogh -= 1;
		condition1 = true;
		likesGogh.innerHTML = `21 ${numOfLikesGogh} likes`;
	}
});
heartCourbet.addEventListener("click", function () {
	if (condition2) {
		numOfLikesCourbet += 1;
		condition2 = false;
		likesCourbet.innerHTML = `12 ${numOfLikesCourbet} likes`;
	} else {
		numOfLikesCourbet -= 1;
		condition2 = true;
		likesCourbet.innerHTML = `12 ${numOfLikesCourbet} likes`;
	}
});
heartDucreux.addEventListener("click", function () {
	if (condition3) {
		numOfLikesDucreux += 1;
		condition3 = false;
		likesDucreux.innerHTML = `15 ${numOfLikesDucreux} likes`;
	} else {
		numOfLikesDucreux -= 1;
		condition3 = true;
		likesDucreux.innerHTML = `15 ${numOfLikesDucreux} likes`;
	}
});
