function prevArticle() {
	var myFrames = document.getElementsByid("article*") /*tra tutti gli iframe di tutte le issue */
	
	 /*trova quello che viene mostrato, cioè che ha valore "block" alla proprietà display nel css:*/
	for (frame in myFrames) {
		if (frame.style.display = "block") {
			frame.style.display = "none";
			var framePosition = indexOf(frame);
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
mostrami il child di issue che è alla posizione n -1


*/