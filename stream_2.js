$(document).ready(function(){
	var creampie = "https://www.solidfiles.com/e/";
	$('a[href^="https://www.solidfiles.com/v/"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://www.solidfiles.com/v/", creampie); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		var ubah = document.getElementById("crot").href;
		$(this).attr("style", "display:none;"); 
	
		var vbuka = ' scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"\n'+
		' src="';
		var vtutup = '"></iframe>';
		$('#iframeHolder').html( '<iframe ' + vbuka + ubah  + vtutup );
	
	});
	
});
