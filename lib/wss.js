var userArr = [];


exports.connect = function(socket, io){
	
	socket.on("USER_ENTER", function(data){
		var userCount = io.sockets.sockets.length;
		var logDate = getTime();
		console.log("[" + logDate + "] talk page: (" + data.uIp + ")");

		io.emit("USER_ADD", {
			newNick: data.nick,
			newMsg: data.msg,
			newTime: logDate,
			newUserCount: userCount
		});

	});

	socket.on("CHAT_MSG", function(data){
		var logDate = getTime();
		console.log("[" + logDate + "]" + data.nick + "> " + data.msg);

		var hashFlag = analyzeTag(data.msg);
		
		if(hashFlag == "NOTHING"){
			io.emit("MSG_ADD", {
				newNick: data.nick,
				newMsg: data.msg,
				newTime: logDate
			});
		} else if(hashFlag == "TIME"){
			io.emit("TIME_ADD", {
				newTime: logDate
			});
		}
	});


	socket.on("disconnect", function (data) {
		var userCount = io.sockets.sockets.length;
		var logDate = getTime();
		console.log("disconnect[" + userCount + "]: " + logDate);

		io.emit("DISCONNECTED",{
			newTime: logDate,
			newUserCount: userCount
		});

  });
};

function getTime(){
	var date = new Date();
	var yyyy = date.getFullYear();
	var mm = date.getMonth();
	var dd = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	mm++;
	hour = hour+9; //GMT기준 (서버는 영국)

	(mm<10)? mm="0"+mm: mm;
	(dd<10)? dd="0"+dd: dd;
	(hour<10)? hour="0"+hour: hour;
	(min<10)? min="0"+min: min;
	(sec<10)? sec="0"+sec: sec;

	return "" + yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min + ":" + sec;
}

function hasHashTag(e){
	for(var i=0; i<e.length; i++){
		if(e[i] == "#"){
			return i;
		}
	}
	return -1;
}

function analyzeTag(msg){
	var hashFlag = hasHashTag(msg);

	if(hashFlag != -1){
		var hashTag = msg.substr(hashFlag).split(" ");
		return executeHashTag(hashTag[0]);
	}

	return "NOTHING";
	/*
	여러개의 해쉬는 나중에 처리하기로 하고
	var hashFlag = hasHashTag(msg);
	var temp = "";
	if(hashFlag != -1){
		temp = msg.substr(hashFlag).split(" ");
		for(var i=0; i<temp.length; i++){
			analyzeTag(temp[i]);
		}
	} else{
		return false;
	}

	console.log(temp);
	*/
}

function executeHashTag(tag){
	if(tag == "#시간" || tag == "#time" || tag == "#TIME"){
		return "TIME";
	} else{
		console.log("미구현: " + tag);
		return "NOTHING";
	}
}