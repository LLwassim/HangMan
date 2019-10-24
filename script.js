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

function countChars(countfrom,displayto) {
    var len = document.getElementById(countfrom).value.length;
    document.getElementById(displayto).innerHTML = len;
}

function readText(){
    word = document.getElementById('input').value;
    hangman();
}

function hangman(){
    var x = word.length;
        if(x==0){
            alert("Please enter something into the text box.");
            return;
        }
    var y = x-1;
    var spaces = 0;
    var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "?", "!", ",", ".", "-", "'");
    for(z = 0; z < word.length; z++){
        var letter = word.substring(y,x);
        if(validChar.indexOf(letter) > -1){
            x--;
            y--;
        }
        else{
            alert("Please remove any special characters.");
            return;
        }
    }
    x = word.length;
    y = x-1;
    while (x>0){
        numChar++;
        var letter = word.substring(y,x);
        if(letter === " "){
            document.getElementById('letter'+x).innerHTML = "&nbsp;";
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        else if(letter === "?" || letter === "!" || letter === "," || letter === "." || letter === "-" || letter === "'"){
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        else{
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('underline'+x).style.display = "block";            
            document.getElementById('underline'+x).style.borderBottom = "3px solid black";
        }
        x--;
        y--;
    }
    phraseLength = word.length - spaces;
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    splitWords();
    document.getElementById('challengeBank').style.display = "none";
    draw();
}

function draw(){
    var ctx = document.getElementById("hangman").getContext('2d');
        ctx.fillStyle = "white";
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
        ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(49,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(60,90);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(60,90);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(100,25);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
        ctx.beginPath(); //noose
            ctx.moveTo(150,40);
            ctx.lineTo(150,80);
            ctx.stroke();
    var cntx = document.getElementById("homeHangman").getContext('2d');
        cntx.fillStyle = "white";
        cntx.lineWidth=3;
        cntx.fillRect(0, 0, 300, 300);
        cntx.beginPath(); //vertical bar
            cntx.moveTo(50,270);
            cntx.lineTo(50,25);
            cntx.stroke();
        cntx.beginPath(); //vertical bar long piece
            cntx.moveTo(65,270);
            cntx.lineTo(65,85);
            cntx.stroke();
        cntx.beginPath(); //vertical bar short piece
            cntx.moveTo(65,64);
            cntx.lineTo(65,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar
            cntx.moveTo(49,25);
            cntx.lineTo(175,25);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar short piece
            cntx.moveTo(49,40);
            cntx.lineTo(86,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar long piece
            cntx.moveTo(106,40);
            cntx.lineTo(175,40);
            cntx.stroke();
        cntx.beginPath(); //small vertical bar
            cntx.moveTo(173,25);
            cntx.lineTo(173,40);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(100,25);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(60,90);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(60,90);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(100,25);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //ground
            cntx.moveTo(35,270);
            cntx.lineTo(265,270);
            cntx.stroke();
        cntx.beginPath(); //noose
            cntx.moveTo(150,40);
            cntx.lineTo(150,80);
            cntx.stroke();
}

function splitWords(){
    var placeKeep = 0;
    var countBack = 16;
    if(numChar > 15){
        while(countBack > 1){
            if(document.getElementById('letter16').innerHTML == "&nbsp;"){
                document.getElementById('underline16').style.width = "0px";
                document.getElementById('underline16').style.marginRight = "0px";
            }
            if(document.getElementById('letter'+countBack).innerHTML == "&nbsp;"){
                document.getElementById('underline'+countBack).style.width = (document.getElementById('underline1').offsetWidth)*(16-countBack)+"px";
                placeKeep = countBack;
                countBack = 0;
            }
            countBack--;
        }
    }
    for(x=0;x<8;x++){
        countBack = 15+placeKeep;
        if(numChar > countBack){
            while(countBack > 1){
                if(document.getElementById('letter'+countBack).innerHTML == "&nbsp;"){
                    document.getElementById('underline'+countBack).style.width = (document.getElementById('underline1').offsetWidth*((16+placeKeep)-countBack))+"px";
                    placeKeep = countBack;
                    countBack = 0;
                }
                countBack--;
            }
        }
    }
    
}




