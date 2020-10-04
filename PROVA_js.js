

/* funzione per cambiare stile */
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex); 

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var frames = window.frames;
    var i;
    for (i = 0; i < frames.length; i++) {
        /*frames[i].document.head.repleaceChild(newLink);*/
        frames[i+1]document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);


    /* var doc=document.getElementsByTagName("iframe");
	for (var i = 0; i < doc.length; i++) {
		var singledoc = doc[i].contentWindow;
		var iframeOldlink = singledoc.document.getElementsByTagName("link").item(cssLinkIndex);
		singledoc.document.getElementsByTagName("head").item(0).replaceChild(newlink, iframeOldlink);
	 	} */


	/* alternativa da StackOverflow però ogni elemento iframe deve avere un id
	var cssLink = document.createElement("link");
	cssLink.href = "style.css"; 
	cssLink.rel = "stylesheet"; 
	cssLink.type = "text/css"; 
	frames['iframe1'].document.head.appendChild(cssLink);
	*/

    }
}


/* funzione per cambiare issues, cioè per visualizzare quella che viene selezionata e nascondere quelle non selezionate */
function changeIssue(issueN){
	if ('issue1' === issueN) {
		x = document.getElementById('issue1')
		y = document.getElementById('issue2')
	} 
	else {
		x = document.getElementById('issue2')
		y = document.getElementById('issue1')
	}

		x.style.display = "block";
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


/* funzione per cambiare articoli, cioè per visuaizzare quello selezionato e nascondere gli altri */
function changeArticle(articleNum, issueNum){
	var c = document.getElementById(issueNum).children;
	for (var i=1; i<=3; i++) {
		if ("article" + i === articleNum) {
			c[i-1].style.display = "block";
		}
		else {
			c[i-1].style.display = "none";
		}
	}
}






/* alternativa alla funzione per selezionare gli articoli:

function changeArticle(articleN){
	if ('article1' === articleN) {
		var x = document.getElementById('article1')
		var y = document.getElementById('article2')
		var z = document.getElementById('article3')
	} 
	else if ('article2' === articleN) {
		var x = document.getElementById('article2')
		var y = document.getElementById('article1')
		var z = document.getElementById('article3')
	}
	else {
		var x = document.getElementById('article3')
		var y = document.getElementById('article1')
		var z = document.getElementById('article2')
	}

		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
}





*/