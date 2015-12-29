var userArr = [];

var date = new Date();
var yyyy = date.getFullYear();
var mm = date.getMonth();
var dd = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

(mm<10)? "0"+mm: mm;
(dd<10)? "0"+dd: dd;
(hour<10)? "0"+hour: hour;
(min<10)? "0"+min: min;
(sec<10)? "0"+sec: sec;

var logDate = ""+yyyy+"-"+mm+"-"+dd+" "hour+"/"+min+"/"+sec;

exports.connect = function(socket, io){

	socket.on("USER_ENTER", function(data){
		console.log("[" + logDate + "] talk page: (" + data.uIp + ")");

		/*
		io.emit("USER_ADD", {
			newUserNick : userArr,
			newUser : data.uNick
		});
*/
	});

	socket.on("CHAT_MSG", function(data){
		console.log(data.nick + "> " + data.msg);

		io.emit("MSG_ADD", {
			newNick: data.nick,
			newMsg : data.msg
		});
	});
};