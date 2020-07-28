var Name = document.getElementById("title");
var Email = document.getElementById("content1");
var Gender = document.getElementById("content2");
var City = document.getElementById("content3");
var Picture = document.getElementById("image");
const url = "https://randomuser.me/api";

function time() {
  var dt = new Date();
  var hr = dt.getHours();
  var min = dt.getMinutes();
  var sec = dt.getSeconds();
  var t;

  if (hr > 12) {
    t = "PM";
    hr = hr - 12;
  } else {
    t = "AM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  var Time = hr + ":" + min + ":" + sec + " " + t;
  document.getElementById("container").innerHTML = Time;

  setInterval(time, 1000);
}

time();
function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      const { name, email, gender, picture, location } = data.results[0];
      console.log(name);
      Picture.src = picture.large;
      Name.innerHTML = name.first + " " + name.last;
      Email.innerHTML = email;
      Gender.innerHTML = gender;
      City.innerHTML = location.city;
    });
}
fetchData();
setInterval(fetchData, 10000);
