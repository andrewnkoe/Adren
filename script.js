function darkMode(){document.body.classList.toggle("dark");}
var pictures=[["images/mountains.svg","Mountain scenery"],["images/waterfall.svg","Maletsunyane Falls"],["images/dam.svg","Katse Dam"],["images/horses.svg","Basotho horses"]];var pictureNumber=0;
function showPicture(){document.getElementById("bigPicture").src=pictures[pictureNumber][0];document.getElementById("picName").innerHTML=pictures[pictureNumber][1];}
function nextPic(){pictureNumber=pictureNumber+1;if(pictureNumber>pictures.length-1)pictureNumber=0;showPicture();}
function previousPic(){pictureNumber=pictureNumber-1;if(pictureNumber<0)pictureNumber=pictures.length-1;showPicture();}
function choosePic(number){pictureNumber=number;showPicture();}
function searchPlaces(){var search=document.getElementById("searchBox").value.toLowerCase();var cards=document.getElementById("placeCards").getElementsByClassName("card");for(var i=0;i<cards.length;i++){var words=cards[i].innerText.toLowerCase();if(words.indexOf(search)>-1)cards[i].style.display="";else cards[i].style.display="none";}}
function calculateCost(){var people=Number(document.getElementById("people").value);if(people<1)people=1;document.getElementById("cost").innerHTML=people*100;}
function sendBooking(){var name=document.getElementById("visitorName").value;if(name.trim()==""){document.getElementById("formMessage").innerHTML="Please enter your name.";return false;}document.getElementById("formMessage").innerHTML="Thank you "+name+". Your demo request is ready.";return false;}
function registerVisitor(){var name=document.getElementById("regName").value;localStorage.setItem("tourismName",name);document.getElementById("regMessage").innerHTML="Thank you "+name+". Your name was saved in this browser.";return false;}