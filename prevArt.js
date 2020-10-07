function prevArticle() {
	var myFrames = document.getElementsByTagName("div"); /*tra tutti gli iframe di tutte le issue */
	
	 /*trova quello che viene mostrato, cioè che ha valore "block" alla proprietà display nel css:*/
	for ( var i = 0; i < myFrames.length; i++) {
		var frame = myFrames[i];
		var displayValue = window.getComputedStyle(frame, null).display;
		if (displayValue === "block") {
			frame.style.display = "none";
			var framePosition = myFrames.indexOf(frame); /* non va bene questo metodo per capire a che posizione è il frame displayed */
			var prev = myFrames[framePosition-1];
			prev.style.display = "block";
		}
	}
}


/*
scomponi l'id per capire che numero è
mostra l'iframe che ha come id il nome - 1 
OPPURE
data n = posizione dell'articolo mostrato all'interno dei figli dell'issue
mostrami il frame che è alla posizione n -1


*/