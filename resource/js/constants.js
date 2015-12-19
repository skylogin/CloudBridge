var CONSTANT_KO = function() {
	var message = {
		title		: "구름다리",
		menu1		: "시작",
		menu2		: "한마디",
		menu3		: "두마디",
		menu4		: "여러마디",
		lang		: "나랏말",
		id 	    	: "이메일주소",
		pw			: "비밀번호",
		signin	 	: "로그인",
		signup		: "가입하기",
		nick		: "이름",
		message		: "단어, 문장, 어떤 것이라도"
	}

	
	return {
		getValue: function(s){
			return message[s];
		}
	}
}();

var CONSTANT_EN = function(){
	var message = {
		title: "CloudBridge",
		menu1		: "Start",
		menu2		: "Sentence",
		menu3		: "Talk",
		menu4		: "Conversation",
		lang		: "Language",
		id 	    	: "Email",
		pw			: "Password",
		signin	 	: "Sign in",
		signup		: "Sign up",
		nick		: "Name",
		message		: "Word, Sentence, anything."
	}

	return {
		getValue: function(s){
			return message[s];
		}
	}

}();


function changeLang(){
	if(langFlag == "en"){
		langFlag = "ko";
	} else if(langFlag == "ko"){
		langFlag = "en";
	}

	setLang(langFlag);
}
function setLang(lang){
	if(lang == "en"){
		document.title = CONSTANT_EN.getValue("title");
		$("#menu1").html(CONSTANT_EN.getValue("menu1"));
		$("#menu2").html(CONSTANT_EN.getValue("menu2"));
		$("#menu3").html(CONSTANT_EN.getValue("menu3"));
		$("#menu4").html(CONSTANT_EN.getValue("menu4"));

		$("#lang").html(CONSTANT_EN.getValue("lang"));

		$(".cloud-title").html(CONSTANT_EN.getValue("title"));

		$(".inputEmail").html(CONSTANT_EN.getValue("id"));
		$(".inputPassword").html(CONSTANT_EN.getValue("pw"));
		
		$("#inputEmail").attr("placeholder", CONSTANT_EN.getValue("id"));
		$("#inputPassword").attr("placeholder", CONSTANT_EN.getValue("pw"));

		$("#loginBtn").val(CONSTANT_EN.getValue("signin"));
		$("#joinBtn").val(CONSTANT_EN.getValue("signup"));

		$("#userName").attr("placeholder", CONSTANT_EN.getValue("nick"));
		$("#userContent").attr("placeholder", CONSTANT_EN.getValue("message"));
	} else if(lang == "ko"){
		document.title = CONSTANT_KO.getValue("title");
		$("#menu1").html(CONSTANT_KO.getValue("menu1"));
		$("#menu2").html(CONSTANT_KO.getValue("menu2"));
		$("#menu3").html(CONSTANT_KO.getValue("menu3"));
		$("#menu4").html(CONSTANT_KO.getValue("menu4"));

		$("#lang").html(CONSTANT_KO.getValue("lang"));

		$(".cloud-title").html(CONSTANT_KO.getValue("title"));

		$(".inputEmail").html(CONSTANT_KO.getValue("id"));
		$(".inputPassword").html(CONSTANT_KO.getValue("pw"));
		
		$("#inputEmail").attr("placeholder", CONSTANT_KO.getValue("id"));
		$("#inputPassword").attr("placeholder", CONSTANT_KO.getValue("pw"));

		$("#loginBtn").val(CONSTANT_KO.getValue("signin"));
		$("#joinBtn").val(CONSTANT_KO.getValue("signup"));

		$("#userName").attr("placeholder", CONSTANT_KO.getValue("nick"));
		$("#userContent").attr("placeholder", CONSTANT_KO.getValue("message"));
	}
	
}