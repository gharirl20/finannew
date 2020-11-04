window.addEventListener("click", function(e){
	if( e.target.tagName == "A" ){
		console.log(e.target)
		
		if( e.target.href.match(/\/go\//) ){
			gtag('config', 'UA-453314-1', {
			  'page_title' : 'Redirect',
			  'page_path': e.target.href
			});
		}
		
	}
});

