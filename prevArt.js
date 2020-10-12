// /*
// scomponi l'id per capire che numero è
// mostra l'iframe che ha come id il nome - 1 
// OPPURE
// data n = posizione dell'articolo mostrato all'interno dei figli dell'issue
// mostrami il frame che è alla posizione n -1


// */


function prevArticle1() {
 	var articles = document.getElementsByClassName("article"); /* articles è un HTMLCollection che comprende tutti i children dei div che hanno come classe "issue", cioè altri div (4 per ogni issue): uno che è la copertina e i tre articoli */

 	var i;

 	 /*trova quello che viene mostrato, cioè che ha valore "block" alla proprietà display nel css:*/
 	for (i = 1; i < articles.lenght; i++) { /* partiamo da i = 2 perché non vogliamo considerare né il primo div figlio (che il div della cover) né il div del primo articolo */
 		var frame = articles[i];
 		var displayValue = window.getComputedStyle(frame, null).display;
 		if (displayValue === "block") {
 			frame.style.display = "none"; /* ora nascondimelo */
 			articles[i-1].style.display = "block";
 		}
			


 			/*
 			var framePosition = articles.indexOf(frame); non va bene questo metodo per capire a che posizione è il frame displayed, perché vale solo per le stringhe o gli arrays
 			var prev = articles[framePosition-1];
 			prev.style.display = "block";
 			*/


 	}

 }


 function prevArticle2() {
 	var articlesIssue1 = document.getElementById("issue1").children;
 	var i;

 	for (i = 2; i < articlesIssue1.lenght; i++) {
 		var frame1 = articlesIssue1[i];
 		var displayValue1 = window.getComputedStyle(frame1, null).display;
 		if (displayValue1 === "block") {
 			frame1.style.display = "none";
 			articlesIssue1[i-1].style.display = "block";
 		}

 	}

 	var articlesIssue2 = document.getElementById("issue2").children;
 	var c;

 	for (c = 2; c < articlesIssue2.lenght; c++) {
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

 	for (i = 2; i < articlesIssue1.lenght; i++) {
 		var frame1 = articlesIssue1[i];
 		var displayValue1 = window.getComputedStyle(frame1, null).display;
 		if (displayValue1 === "block") {
 			frame1.style.display = "none";
 			articlesIssue1[i-1].style.display = "block";
 		}

 	}

 	var articlesIssue2 = document.getElementsByClassName("articleIssue2");
 	var c;

 	for (c = 2; c < articlesIssue2.lenght; c++) {
 		var frame2 = articlesIssue2[c];
 		var displayValue2 = window.getComputedStyle(frame2, null).display;
 		if (displayValue2 === "block") {
 			frame2.style.display = "none";
 			articlesIssue2[c-1].style.display = "block";
 		}

 	}

 }

 function prevArticle4() {
 	var articles = document.getElementsByClassName("article"); /* quindi articles = <div class="article1 articleIssue1 article">, <div class="article2 articleIssue1 article">, <div class="article3 articleIssue1 article">, <div class="article1 articleIssue2 article">, <div class="article2 articleIssue2 article">, <div class="article3 articleIssue2 article"> */
 	var i;

 	for (i = 1; i < articles.lenght; i++) {
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
	var articles = document.getElementsByClassName("article"); /* quindi articles = <div class="article1 articleIssue1 article">, <div class="article2 articleIssue1 article">, <div class="article3 articleIssue1 article">, <div class="article1 articleIssue2 article">, <div class="article2 articleIssue2 article">, <div class="article3 articleIssue2 article"> */
	var i;

	for (i = 1; i < articles.lenght; i++) {
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

	for (var i = 1; i < articles.lenght; i++) {
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
	var articles = document.getElementsByTagName("iframe"); /* quindi articles = <div class="article1 articleIssue1 article">, <div class="article2 articleIssue1 article">, <div class="article3 articleIssue1 article">, <div class="article1 articleIssue2 article">, <div class="article2 articleIssue2 article">, <div class="article3 articleIssue2 article"> */
	var i;

	for (i = 1; i < articles.lenght; i++) {
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