function reqListener () {
  console.log(this.responseText);
}

function myFunction()
{
     var oReq = new XMLHttpRequest();
     oReq.addEventListener("load", reqListener);
     oReq.open("GET", "http://worldclockapi.com/api/json/est/now");
     oReq.send();
}
