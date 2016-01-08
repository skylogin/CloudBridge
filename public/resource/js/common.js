var whiteSpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

function flashWindow(nick, time){

/* 팝업으로..
	var host = location.origin;
	var url = host + "/popup";

	var flag = document.hasFocus();
	if(flag == false){
		window.open(url);	
	}
*/
/* 타이틀 메시지 변경..
	var oldTitle = document.title;
	var msg = (nick=="undefined")? "New": nick;
	msg += " Message!!!!";
	var timeoutId = false;

	var blink = function() {
		document.title = (document.title==msg)? oldTitle: msg;//Modify Title in case a popup

		//Stop blinking and restore the Application Title
		if(document.hasFocus()){
			document.title = oldTitle;
			clearInterval(timeoutId);
		}
	};

	if(!timeoutId){
		timeoutId = setInterval(blink, time);//Initiate the Blink Call
	};//Blink logic 
*/	
}