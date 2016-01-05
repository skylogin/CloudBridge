var userArr = [];


exports.connect = function(socket, io){
	
	socket.on("USER_ENTER", function(data){
		var userCount = io.sockets.sockets.length;
		var logDate = getTime();
		console.log("[" + logDate + "] talk page: (" + data.uIp + ")");

		//user의 아이피와 함께 대화상대에 추가할 것

		io.emit("USER_ADD", {
			newNick: data.nick,
			newMsg: data.msg,
			newTime: logDate,
			newUserCount: userCount
		});

	});

	socket.on("CHAT_MSG", function(data){
		var logDate = getTime();
		console.log(data.nick + "> " + data.msg + "   // " + logDate);

		io.emit("MSG_ADD", {
			newNick: data.nick,
			newMsg: data.msg,
			newTime: logDate
		});
	});


	socket.on("disconnect", function (data) {
		var userCount = io.sockets.sockets.length;
		var logDate = getTime();
		console.log("disconnect[" + userCount + "]: " + logDate);

		io.emit("DISCONNECTED",{
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