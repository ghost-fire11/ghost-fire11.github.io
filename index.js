//test
var inter_time;
var p_time = document.getElementById("id_time");
inter_time = setInterval(function(){
  var data = new Date();
  // var year = data.getFullYear();
  // var mouth = data.getMonth();
  // var day = data.getDate();

  p_time.innerText = data.toLocaleString();
  // console.log(data.toLocaleString());
  // console.log(p_time);
}, 500);
