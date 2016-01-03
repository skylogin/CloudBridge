var userArr = [];

var date = new Date();
var yyyy = date.getFullYear();
var mm = date.getMonth();
var dd = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

mm++;
(mm<10)? mm="0"+mm: mm;
(dd<10)? dd="0"+dd: dd;
(hour<10)? hour="0"+hour: hour;
(min<10)? min="0"+min: min;
(sec<10)? sec="0"+sec: sec;

var logDate = "" + yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min + ":" + sec;

exports.connect = function(socket, io){

	socket.on("USER_ENTER", function(data){
		console.log("[" + logDate + "] talk page: (" + data.uIp + ")");

		/*
		Todo: 누군가가 들어오면 해당IP를 로그로 남기기때문에 누군가가 페이지에 접속했다는 것을 클라이언트로 전송해주면 재밌을듯
		io.emit("USER_ADD", {
			newUserNick : userArr,
			newUser : data.uNick
		});
*/
	});

	socket.on("CHAT_MSG", function(data){
		console.log(data.nick + "> " + data.msg);
/*
		io.emit("MSG_ADD", {
			newNick: data.nick,
			newMsg : data.msg
		});
*/
		io.sockets.emit("MSG_ADD", {
			newNick: data.nick,
			newMsg: data.msg
		});
	});
};