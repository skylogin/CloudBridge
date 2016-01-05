var CONSTANT = function(){
	var message = {
		url1		: "/index?langFlag=en",
		url2		: "/sentence?langFlag=en",
		url3		: "/talk?langFlag=en",
		url4		: "",
		title		: "CloudBridge",
		menu1		: "Start",
		menu2		: "Sentence",
		menu3		: "Talk",
		menu4		: "Conversation",
		lang		: "Language",
		id 	    	: "Email (abc@xyz.com)",
		pw			: "Password",
		name 	 	: "Name",
		signin	 	: "Sign in",
		signup		: "Sign up",
		nick		: "Name",
		message		: "Word, Sentence, anything.",
		clickMessage: "If you <code>click</code> a article, you can enter a comment.",
		label1		: "RE:",
		label2		: "",
		label3		: "",
		label4		: "",
		label5		: "",
		label6		: "",
		notice1		: "Kind word can make others laugh even cry also.",
		chatMessage : "Someone Join us."

	}

	var message_ko = {
		url1		: "/index?langFlag=ko",
		url2		: "/sentence?langFlag=ko",
		url3		: "/talk?langFlag=ko",
		url4		: "",
		title		: "구름다리",
		menu1		: "시작",
		menu2		: "한마디",
		menu3		: "두마디",
		menu4		: "여러마디",
		lang		: "나랏말",
		id 	    	: "이메일주소",
		pw			: "비밀번호",
		name 		: "이름",
		signin	 	: "로그인",
		signup		: "가입하기",
		nick		: "이름",
		message		: "단어, 문장, 어떤 것이라도.",
		clickMessage: "본문을 <code>클릭</code>하면 댓글을 입력할 수 있습니다.",
		label1		: "댓글:",
		label2		: "",
		label3		: "",
		label4		: "",
		label5		: "",
		label6		: "",
		notice1		: "따뜻한 말 한마디는 남을 웃게도 울게도 만들 수 있습니다.",
		chatMessage : "누군가가 대화방에 들어왔습니다."

	}


	return {
		getValue: function(s, lang){
			if(lang == "en"){
				return message[s];
			} else if(lang == "ko"){
				return message_ko[s];
			}
			
		}
	}

}();

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "en" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function changeLang(){
	if(langFlag == "en"){
		langFlag = "ko";
	} else if(langFlag == "ko"){
		langFlag = "en";
	}

	setLang(langFlag);
}

function setLang(lang){
	document.title = CONSTANT.getValue("title", lang);
	$("#menu1").html(CONSTANT.getValue("menu1", lang));
	$("#menu2").html(CONSTANT.getValue("menu2", lang));
	$("#menu3").html(CONSTANT.getValue("menu3", lang));
	$("#menu4").html(CONSTANT.getValue("menu4", lang));

	$("#menu1").attr("href", CONSTANT.getValue("url1", lang));
	$("#menu2").attr("href", CONSTANT.getValue("url2", lang));
	$("#menu3").attr("href", CONSTANT.getValue("url3", lang));
	$("#menu4").attr("href", CONSTANT.getValue("url4", lang));


	$("#lang").html(CONSTANT.getValue("lang", lang));

	$(".cloud-title").html(CONSTANT.getValue("title", lang));

	$(".inputEmail").html(CONSTANT.getValue("id", lang));
	$(".inputPassword").html(CONSTANT.getValue("pw", lang));
	$(".inputName").html(CONSTANT.getValue("name", lang));
	
	$("#inputEmail").attr("placeholder", CONSTANT.getValue("id", lang));
	$("#inputPassword").attr("placeholder", CONSTANT.getValue("pw", lang));
	$("#inputName").attr("placeholder", CONSTANT.getValue("name", lang));
	

	$("#loginBtn").val(CONSTANT.getValue("signin", lang));
	$("#joinBtn").html(CONSTANT.getValue("signup", lang));

	$("#userName").attr("placeholder", CONSTANT.getValue("nick", lang));
	$("#userContent").attr("placeholder", CONSTANT.getValue("message", lang));

	$(".label-warning").html(CONSTANT.getValue("label1", lang));

	$(".clickMessage").html(CONSTANT.getValue("clickMessage", lang));

	/*
	$(".label-primary").html(CONSTANT.getValue("label2", lang));
	$(".label-success").html(CONSTANT.getValue("label3", lang));
	$(".label-info").html(CONSTANT.getValue("label4", lang));
	$(".label-warning").html(CONSTANT.getValue("label5", lang));
	$(".label-danger").html(CONSTANT.getValue("label6", lang));
	*/

	$("#noticeMessage").html(CONSTANT.getValue("notice1", lang));




}