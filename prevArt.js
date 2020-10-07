function prevArticle(IssueN) {
	var articles = document.getElementById(issueN).children; /*tra tutti gli iframe di tutte le issue */
	
	 /*trova quello che viene mostrato, cioè che ha valore "block" alla proprietà display nel css:*/
	for (var i = 1; i < articles.length; i++) {
		var frame = articles[i];
		var displayValue = window.getComputedStyle(frame, null).display;
		if (displayValue === "block") {
			frame.style.display = "none"; /* ora nascondimelo */

			/*
			var frameName = frame.class.value; /* voglio il nome del frame, quindi il valore dell'attributo class
			var frameNum = frameName[6]; estraggo il numero dal nome, che è nascondimelo */
			articles[i-1].style.display = "block";
			}
			


			/*
			var framePosition = articles.indexOf(frame); non va bene questo metodo per capire a che posizione è il frame displayed 
			var prev = articles[framePosition-1];
			prev.style.display = "block";
			*/


	}
}


/*
scomponi l'id per capire che numero è
mostra l'iframe che ha come id il nome - 1 
OPPURE
data n = posizione dell'articolo mostrato all'interno dei figli dell'issue
mostrami il frame che è alla posizione n -1


*/