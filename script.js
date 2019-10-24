var rand = 0
var word = ' ';
var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var anime = ['One Punch Man','One Piece','Naruto','My Hero Academia','Hunter x Hunter','Akame ga Kill','Code Geass','DeathNote','Seven Deadly Sins','Blue Excorcist'];
var songs = ['Marvins Room by Drake','Controlla by Drake','Wake me up before you go go by Wham','Piano Man by Billy Joel','Vienna by Billy Joel','Uptown Girl by Billy Joel','Star Spangled Banner by Jimmi Hendrix','Keep ya head up by Tupac','Juice by Biggie','I aint mad at cha by Tupac','Lost Ones by J Cole','Me N My Girlfriend by Tupac','Letter 2 My Unborn by Tupac','A Better Tommorow by Wu-Tang Clan','Beautiful Girls by Sean Kingston','My Shit by A Boogie Wit Da Hoodie', 'WAKA by Tekashi','Unforgetable by French Montana', 'Bohemian Rhapsody by Queen','Shameless by Camila Cabello','Fat Bottomed Girls by Queen','Sympathy for the Devil by Rolling Stones','La Mer by Charlie Trenet','Beyond the Sea by Frank Sinatra','a Change is gonna come by Sam Cooke','Mood Swings by A Boogie','Sexual Healing by Marvin Gaye','Love on the Brain by Rihanna','Hips Dont Lie by Shakira','Stairway to Heaven by Led Zeplin','Immigrant Song by Led Zeplin','Ramble On by Led Zeplin','Hymn for the Weekend by Coldplay'];
var brands = ['McDonalds','Wendys','Coca Cola','Sony','Apple','Samsung','Google','Reddit','Facebook','Mercedez','Bugatti','Lamborghini','Gucci','Versace','Saint Laurent','Burberry','Louis Vuitton'];
var challenges = ['A'];

function sp(){
	document.getElementById('introPage').style.display = 'none';
	document.getElementById('multiPage').style.display = 'none';
	document.getElementById('singlePage').style.display = 'none';
}

function mp(){
	document.getElementById('introPage').style.display = 'none';
	document.getElementById('multiPage').style.display = 'none';
	document.getElementById('singlePage').style.display = 'none';
}

function anime(){
	rand = Math.floor(Math.random()*anime.length);
	word = anime[rand];
	document.getElementById('singlePage').style.display = 'none';
	document.getElementById('categoryName').innerHTML = 'Anime Shows Names';
	hangman()
}

function songs(){
	rand = Math.floor(Math.random()*songs.length);
	word = songs[rand];
	document.getElementById('singlePage').style.display = 'none';
	document.getElementById('categoryName').innerHTML = 'Songs and Artists(hint: "by"';
	hangman()
}

function brands(){
	rand = Math.floor(Math.random()*brands.length);
	word = brands[rand];
	document.getElementById('singlePage').style.display = 'none';
	document.getElementById('categoryName').innerHTML = 'All Company Brands';
	hangman()
}

function challenge(){
	rand = 
Math.floor(Math.random()*challanges.length);
word = 1;
var letter = word.substring(0,1);
document.getElementById('letter1').innerHTML = letter;
document.getElementById('letter1').style.visibility = "hidden";	
document.getElementById('underline1').style.display = "block";            
document.getElementById('underline1').style.borderBottom = "3px solid black";
document.getElementById('singlePage').style.display = "none";    
document.getElementById('gamePage').style.display = "block";
document.getElementById('categoryName').innerHTML = "Guess every letter other than the correct one to win!";
document.getElementById('categoryName').style.width = "100%";
if(document.getElementById('underline1').offsetWidth == 50){
        document.getElementById('categoryName').style.fontSize = "45px";
    }
if(document.getElementById('underline1').offsetWidth == 28){
        document.getElementById('categoryName').style.fontSize = "30px";
    }
if(document.getElementById('underline1').offsetWidth == 18){
        document.getElementById('categoryName').style.fontSize = "20px";
    }
document.getElementById('letterBank').style.display = "none";
document.getElementById('challengeBank').style.display = "block";
phraseLength = 1;
draw();
}

function challengeGuess(){
	var target = event.target || event.srcElement;
	target.style.visibility = 'hidden';
	var lower = target.id;
	var upper = document.getElementById(lower).getAttribute('value');
	var results = document.getElementById('results');
	if(document.getElementById('letter1').innerHTML === upper) {
		document.getElementById('letter1').style.visibility = 'visible';
		numRight++;
	}
	if (numRight==0){
		numWrong++;
        hang();
	}
	if(numRight==1){
        results.style.visibility = "visible";
        results.style.color = "red";
        results.innerHTML = "You lose!";        
        if(document.getElementById('underline1').offsetWidth == 50){
            results.style.fontSize = "200px";
            results.style.height = "200px";
            results.style.lineHeight = "200px";
        }
        if(document.getElementById('underline1').offsetWidth == 28){
            results.style.marginTop = "20px";
            results.style.fontSize = "100px";
            results.style.height = "100px";
            results.style.lineHeight = "100px";
        }
        if(document.getElementById('underline1').offsetWidth == 18){
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
            results.style.height = "75px";
            results.style.lineHeight = "75px";
        }
        document.getElementById('challengeBank').style.display = "none";
        document.getElementById('vidSent').style.display = "block";
        document.getElementById('again').style.display = "block";
        document.getElementById('home').style.display = "block";
    }
    if(numWrong==25){
        results.style.visibility = "visible";
        results.style.color = "#00b100";
        results.innerHTML = "You win!";        
        if(document.getElementById('underline1').offsetWidth == 50){
            results.style.fontSize = "200px";
            results.style.height = "200px";
            results.style.lineHeight = "200px";
        }
        if(document.getElementById('underline1').offsetWidth == 28){
            results.style.marginTop = "20px";
            results.style.fontSize = "100px";
            results.style.height = "100px";
            results.style.lineHeight = "100px";
        }
        if(document.getElementById('underline1').offsetWidth == 18){
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
            results.style.height = "75px";
            results.style.lineHeight = "75px";
        }
        document.getElementById('challengeBank').style.display = "none";
        document.getElementById('vidSent').style.display = "block";
        document.getElementById('again').style.display = "block";
        document.getElementById('home').style.display = "block";
        document.getElementById('letter1').style.visibility = "visible";
    }
}






