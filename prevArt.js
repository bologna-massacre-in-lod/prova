function prevArticle() {
	var articles = document.getElementsByClassName("article"); /* articles è un HTMLCollection che comprende tutti i children dei div che hanno come classe "issue", cioè altri div (4 per ogni issue): uno che è la copertina e i tre articoli */

	var i;

	 /*trova quello che viene mostrato, cioè che ha valore "block" alla proprietà display nel css:*/
	for (i = 2; i < articles.lenght; i++) { /* partiamo da i = 2 perché non vogliamo considerare né il primo div figlio (che il div della cover) né il div del primo articolo */
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
			var framePosition = articles.indexOf(frame); non va bene questo metodo per capire a che posizione è il frame displayed, perché vale solo per le stringhe o gli arrays
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