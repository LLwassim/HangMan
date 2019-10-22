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
}



