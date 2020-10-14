/*
definire una variabile (e.g. articles), cioè un HTMLcollection object che comprenda tutti gli articoli o tutti i children delle issues (i.e. dei div che hanno come classe "issue") che però comprendono anche la copertina
trova quello che viene mostrato, cioè che ha valore "block" alla proprietà display nel css
nella ricerca (i.e. for loop) partiamo da i = 1 se articles comprende SOLO gli articoli, perché non vogliamo considerare il primo articolo di ogni issue; oppure da i = 2 se articles contiene TUTTI i figli del div issue, perché non vogliamo considerare il div della cover
scomponi l'id per capire che numero è
mostra l'iframe che ha come id il nome - 1 
OPPURE
data n = posizione dell'articolo mostrato all'interno dei figli dell'issue
mostrami il frame che è alla posizione n -1

 */
 function hide() { /* si ma quando viene triggerata sta funzione?? */
 	var articles = document.getElementsByClassName("article"),
 		firstArticle = document.getElementsByClassName("article1");
 	
 	for (var i = 1; i < articles.length; i++) {
 		var frame = articles[i]; 		 		
 		if (frame === firstArticle) {
 			button.style.display = "none";
  		}
 	}
 }


function prevArticle1() {
 	var articles = document.getElementsByClassName("article"),
 		firstArticles = document.getElementsByClassName("article1");
 	
 	for (var i = 1; i < articles.length; i++) {
 		var frame = articles[i];
 		var displayValue = window.getComputedStyle(frame, null).display;
 		if (!(frame in firstArticles)) {
 			if (displayValue === "block") {
 				frame.style.display = "none";
 				articles[i-1].style.display = "block";
 			}
 		}
 		

 	}

 }




 function prevArticle2() {
 	var articlesIssue1 = document.getElementById("issue1").children;
 	var i;

 	for (i = 2; i < articlesIssue1.length; i++) {
 		var frame1 = articlesIssue1[i];
 		var displayValue1 = window.getComputedStyle(frame1, null).display;
 		if (displayValue1 === "block") {
 			frame1.style.display = "none";
 			articlesIssue1[i-1].style.display = "block";
 		}
 	}

 	var articlesIssue2 = document.getElementById("issue2").children;
 	var c;

 	for (c = 2; c < articlesIssue2.length; c++) {
 		var frame2 = articlesIssue2[c];
 		var displayValue2 = window.getComputedStyle(frame2, null).display;
 		if (displayValue2 === "block") {
 			frame2.style.display = "none";
 			articlesIssue2[c-1].style.display = "block";
 		}
 	}
 }









 function prevArticle3() {
 	var articlesIssue1 = document.getElementsByClassName("articleIssue1");
 	var i;

 	for (i = 0; i < articlesIssue1.length; i++) {
 		var frame1 = articlesIssue1[i];
 		var displayValue1 = window.getComputedStyle(frame1, null).display;
 		if (displayValue1 === "block") {
 			frame1.style.display = "none";
 			articlesIssue1[i-1].style.display = "block";
 		}
 	}

 	var articlesIssue2 = document.getElementsByClassName("articleIssue2");
 	var c;

 	for (c = 0; c < articlesIssue2.length; c++) {
 		var frame2 = articlesIssue2[c];
 		var displayValue2 = window.getComputedStyle(frame2, null).display;
 		if (displayValue2 === "block") {
 			frame2.style.display = "none";
 			articlesIssue2[c-1].style.display = "block";
 		}
 	}
 }

 function prevArt2(issueN) {
 	var articles = document.getElementsByClassName(issueN);
 	for (var i = 0; i < articles.length; i++) {
 		var frame = articles[i];
 		var displayValue = window.getComputedStyle(frame, null).display;
 		if (displayValue === "block") {
 			frame.style.display = "none";
 			articles[i-1].style.display = "block";
 		}
 	}
}


 function changeIssue(issueN){
	if ('issue1' === issueN) {
		var x = document.getElementById('issue1');
		var y = document.getElementById('issue2');
	} 
	else {
		var x = document.getElementById('issue2');
		var y = document.getElementById('issue1');
	}

	x.style.display = "block";
	x.children[0].style.display = "block";
	for (var i=1; i<=3; i++) {
		x.children[i].style.display = "none";
	}
	y.style.display = "none";


	var oldArticles = document.getElementById("changeArguments").children;

	for (var i=0; i<3; i++) {
		var newArticle = document.createElement("a");
		newArticle.setAttribute("class", "buttonArticle");
		var n = i+1;
	    newArticle.setAttribute("onclick", "changeArticle('article"  + n + "', '" + issueN + "')");
	    newArticle.innerHTML = 'article'+n;

	    document.getElementById("changeArguments").replaceChild(newArticle, oldArticles[i]);
    	}
}



function changeArticle(articleNum, issueNum){
	var c = document.getElementById(issueNum).children;
	c[0].style.display = "none";
	for (var i=1; i<=3; i++) {
		if ("article" + i === articleNum) {
			c[i].style.display = "block";
		}
		else {
			c[i].style.display = "none";
		}
	}	
}






 function prevArticle4() {
 	var articles = document.getElementsByClassName("article");
 	var i;

 	for (i = 1; i < articles.length; i++) {
 		var articleDiv = articles[i],
     		style = window.getComputedStyle(articleDiv),
 			displayValue = style.getPropertyValue('display');
 		if (displayValue === "block") {
 			articleDiv.style.display = "none";
 			articles[i-1].style.display = "block";
 		}

 	}

 }


function prevArticle5() {
	var articles = document.getElementsByClassName("article");
	var i;

	for (i = 1; i < articles.length; i++) {
		var articleDiv = articles[i],
    		style = window.getComputedStyle(articleDiv),
			displayValue = style.getPropertyValue('display');
		if (displayValue === "block") {
			articleDiv.style.display='none';
			articles[i-1].style.display = 'block';
		}

	}

}


function prevArticle() {
	var articles = document.getElementsByClassName("article");

	for (var i = 1; i < articles.length; i++) {
		var articleDiv = articles[i],
    		style = window.getComputedStyle(articleDiv),
			visibilityValue = style.getPropertyValue('visibility');
		if (visibilityValue === "visible") {
			articleDiv.style.visibility='hidden';
			articles[i-1].style.visibility = 'visible';
		}

	}


}


function prevArticlee() {
	var articles = document.getElementsByTagName("iframe"); 
	var i;

	for (i = 2; i < articles.length; i++) {
		var frame = articles[i],
    		style = window.getComputedStyle(frame),
			displayValue = style.getPropertyValue('display');
		if (displayValue === 'block') {
			frame.style.display='none';
			articles[i-1].style.display = 'block';
		}

	}

}


function changeArt(iframeNum){
  var element = document.getElementById(iframeNum);
  var style = window.getComputedStyle(element);
  var displayValue = style.getPropertyValue('display');
		if (displayValue === 'none') {
			element.style.display='block';
		}
}



function nextArticle2() {
 	var articlesIssue1 = document.getElementById("issue1").children;
 	var i;

 	for (i = articlesIssue1.length-1; i >= 0; i--) { /* i > 1 perché non vogliamo considerare la cover */
 		var frame1 = articlesIssue1[i];
 		var displayValue1 = window.getComputedStyle(frame1, null).display;
 		if (displayValue1 === "block") {
 			frame1.style.display = "none";
 			articlesIssue1[i+1].style.display = "block";
 		}
 	}

 	var articlesIssue2 = document.getElementById("issue2").children;
 	var c;

 	for (c = 0; c < articlesIssue1.length-1; c++) {
 		var frame2 = articlesIssue2[c];
 		var displayValue2 = window.getComputedStyle(frame2, null).display;
 		if (displayValue2 === "block") {
 			frame2.style.display = "none";
 			articlesIssue2[c+1].style.display = "block";
 		}
 	}
 }



 function nextArticlee() {
	var articles = document.getElementsByClassName("article");
	var i;

	for (i = articlesIssue1.length-1; i > 1; i--) { /* i = 1 perché non vogliamo considerare la cover */
		var frame = articles[i],
    		style = window.getComputedStyle(frame),
			displayValue = style.getPropertyValue('display');
		if (displayValue === 'block') {
			frame.style.display='none';
			articles[i+1].style.display = 'block';
		}
	}
}