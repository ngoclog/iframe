$(document).ready(function(){
	var creampie = "https://www.solidfiles.com/e/";
	var impregnation = "https://adfoc.us/serve/sitelinks/?id=384580&url=https://";
	$('a[href^="https://www.solidfiles.com/v/"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://www.solidfiles.com/v/", creampie); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		var ubah = document.getElementById("crot").href;
		$(this).attr("style", "display:none;"); 
	
		var vbuka = ' scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"\n'+
		' src="';
		var vtutup = '" style="width:100%;height:360px;"></iframe>';
		$('#iframeHolder').html( '<iframe ' + vbuka + ubah  + vtutup );
		document.getElementById("downloadbtn").innerHTML = '<a href="https://adfoc.us/serve/sitelinks/?id=384580&url='+Janda+'">DOWNLOAD</a>';
	});
	$('a[href^="http://www.solidfiles.com/v/"]').each(function(){ 
		var Milf = $(this).attr("href"); 
		var Virgin = Milf.replace("http://", impregnation); 
		$(this).attr("id", "cum"); 
		$(this).attr("href", Virgin); });
	
});





