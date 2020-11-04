/* EU COOKIE == FR */if( !document.cookie.match("cookies=accepted") ){
document.body.innerHTML += '<style> #cookie-popup{position:fixed; bottom:0; left:0; right:0; background: rgba(0,0,0,.8); color:#fff; font-size: 16px; padding:15px; z-index:99999; -webkit-font-smoothing: antialiased} #cookie-popup-link{color:#fff; border:1px #aaa solid; padding:0px 5px; border-radius:5px; margin-left:10px; white-space: nowrap; box-sizing: border-box} #cookie-privacy{color:#fff; text-decoration:underline} </style>';
document.body.innerHTML += '<div id="cookie-popup"> By using this website, you agree to our cookie <a id="cookie-privacy" href="/privacy">policy</a> and that we may use cookies for the best possible user experience <a id="cookie-popup-link" href="javascript:void(0)">Accept and Close</a> </div>';
}

if( document.querySelector("#cookie-popup-link") ){
	document.querySelector("#cookie-popup-link").addEventListener("click", function(e){
		var d=new Date(); d.setMonth(d.getMonth()+1); d=d.toUTCString();
		document.cookie='cookies=accepted; expires='+d+'; path=/';
		document.querySelector('#cookie-popup').style.visibility='hidden'
	})
}
