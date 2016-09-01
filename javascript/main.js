var animals = [{
	name : 'pig',
	good : 'Smart, charming, imaginative',
	bad : 'secretive, grouchy',
	image : 'img/pig.jpg'
}, 
{
	name : 'rabbit',
	good : 'Smart, kind, intuitive',
	bad : 'Touchy, superficial',
	image : 'img/rabbit.jpg'
}, 
{
	name : 'horse',
	good : 'Charishmatic, generous, heroic',
	bad : 'impatient, vain',
	image : 'img/horse.jpg'
}, 
{
	name : 'rooster',
	good : 'Brave, kind-hearted, entertaining',
	bad : 'Pushy, insecure',
	image : 'img/rooster.jpg'
}, 
{
	name : 'oxen',
	good : 'Generous, Patient, Determined',
	bad : 'Stubborn, Gloomy',
	image : 'img/oxen.jpg'
}, 
{
	name : 'dragon',
	good : 'Warm-hearted, Exciting, Successful',
	bad : 'Demanding, short-sighted',
	image : 'img/dragon.jpg'
}, 
{
	name : 'sheep',
	good : 'Easygoing, compassionate, creative',
	bad : 'Naive, worrisome',
	image : 'img/sheep.jpg'
}, 
{
	name : 'dog',
	good : 'Playful, Giving, fearless',
	bad : 'Negative, unsatisfied',
	image : 'img/dog.jpg'
}, 
{
	name : 'tiger',
	good : 'Daring, lucky, adventurous',
	bad : 'Dramatic, selfish',
	image : 'img/tiger.jpg'
}, 
{
	name : 'snake',
	good : 'Curious, wise, graceful',
	bad : 'Jealous, suspicious',
	image : 'img/snake.jpg'
}, 
{
	name : 'monkey',
	good : 'Funny, lively, social',
	bad : 'Phony, thoughtless',
	image : 'img/monkey.jpg'
}, 
{
	name : 'rat',
	good : 'Smart, charming, imaginative',
	bad : 'Fearful, gluttonous',
	image : 'img/rat.jpg'
}
]


function horoscope(){
	var sign = document.getElementById('sign').value.toLowerCase();

	for(var i = 0; i < animals.length; i++){
		if(sign === animals[i].name){
			document.getElementById('yourSign').innerHTML = "Your spirit animal is " + animals[i].name + '!';
			document.getElementById('icon').src = animals[i].image ;
			document.getElementById('horoscope').innerHTML = "What makes you awesome : " + animals[i].good + "<br>" + "What you can work on : " + animals[i].bad ;
			return ; 
		}
		else{
			document.getElementById('yourSign').innerHTML = "Sorry, the sign you entered does not exists. Please try again!" ;
			document.getElementById('icon').src = "" ;
			document.getElementById('horoscope').innerHTML = "" ;
		}
	}
}; 




















