let apodUrl = 'https://api.nasa.gov/planetary/apod'
const key = 'mXiWwBXqWRi9ZZh91uNN8pScNcnhFH4nk9o2pk5V'
let urlNasa;


//DATE DECLARATIONS (requires format of 'YYYY-MM-DD')

//CURRENT DATE (DAY 1)
let todayDate = new Date();

todayDate = todayDate.toJSON();

todayDate = todayDate.slice(0, 10);



//PREVIOUS DATE (DAY 2)
let yesterday = new Date (todayDate);
let yesterdayDate = yesterday.setDate(yesterday.getDate() - 0);
let dayTwoDate = new Date(yesterdayDate);
let yearDayTwo = dayTwoDate.getFullYear();
let monthDayTwo = dayTwoDate.getMonth() + 1;

//Accounts for if the month in question is a month before October since those months use single digits
if (monthDayTwo < 10) {
    monthDayTwo = '0' + monthDayTwo;
}

//Accounts for if the day in question is a day before the 10th of the month since those days use single digits
let dateDayTwo = dayTwoDate.getDate();
if (dateDayTwo < 10) {
    dateDayTwo = '0' + dateDayTwo;
}

let finalDayTwo = yearDayTwo + '-' + monthDayTwo + '-' + dateDayTwo;


//DAY 3
let dayThree = new Date(todayDate);
let dayThreeDate = dayThree.setDate(dayThree.getDate() - 1);
let dThree = new Date(dayThreeDate);
let dThreeYear = dThree.getFullYear();
let dThreeMonth = dThree.getMonth() + 1;

if (dThreeMonth < 10) {
    dThreeMonth = '0' + dThreeMonth;
}

let dThreeDate = dThree.getDate();

if (dThreeDate < 10) {
    dThreeDate = '0' + dThreeDate;
}

let finalDayThree = dThreeYear + '-' + dThreeMonth + '-' + dThreeDate;


//DAY 4
// let dayFour = new Date(todayDate);
// let dayFourDate = dayFour.setDate(dayFour.getDate() - 2);
// let dFour = new Date(dayFourDate);
// let dFourYear = dFour.getFullYear();

//DAY 5



//DOM DECLARATIONS
let todayDateAnnounce = document.getElementById('todayDateHeader');
todayDateAnnounce.innerHTML = `Today's date is ${todayDate}`;

let sectionTag = document.querySelector('section');
let dayTwoPicture = document.querySelector('.dayTwo');
let dayThreePicture = document.querySelector('.dayThree');
let dayFourPicture = document.querySelector('.dayFour');
let dayFivePicture = document.querySelector('.dayFive');

//todayDateAnnounce.appendchild(todayDateAnnounce);


//PROMISE.ALL FETCH

//CURRENT DAY FETCH AND DISPLAY
function fetchCurrentPhoto() {
    urlNasa = apodUrl + '?api_key=' + key + '&date=' + todayDate;
    //console.log(urlNasa);

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        //console.log(json);
        displayCurrentPhoto(json);
        
    })
}

fetchCurrentPhoto();

function displayCurrentPhoto(json) {
    //console.log(json);
    let photo = json;
    //console.log(photo.url);
    //let todayImage = document.createElement('img');
    let todayImage = document.getElementById('currentDay');
    todayImage.src = photo.url;
    //sectionTag.appendChild(todayImage);
};


//DAY TWO FETCH AND DISPLAY

    urlNasa = apodUrl + '?api_key=' + key + '&date=' + finalDayTwo;
    //console.log(urlNasa);

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayDayTwoPhoto(json);
        
    })


function displayDayTwoPhoto(json) {
    console.log(json);
    let dayTwoPhoto = json.url;
    console.log(dayTwoPhoto);
    let dayTwoImage = document.getElementById('dayTwo');
    dayTwoImage.src = dayTwoPhoto;
    //console.log(dayTwoImage);
}

displayDayTwoPhoto();


//DAY THREE FETCH AND DISPLAY

    urlNasa = apodUrl + '?api_key=' + key + '&date=' + finalDayThree;
    //console.log(urlNasa);

    fetch(urlNasa)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayDayThreePhoto(json);
        
    })


function displayDayThreePhoto(json) {
    console.log(json);
    let dayThreePhoto = json;
    console.log(dayThreePhoto);
    let dayThreeImage = document.getElementsByClassName('dayThree');
    dayThreeImage = document.createElement('img');
    dayThreeImage.src = dayThreePhoto.url;
    console.log(dayThreeImage);
    dayThreePicture.appendChild(dayThreeImage);
}

displayDayThreePhoto();