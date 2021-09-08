function myFunction()
{
     var request = new XMLHttpRequest();
     request.open('GET', 'http://worldclockapi.com/api/json/est/now', true); // YOUR EXTERNAL JSON URL     
     if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              alert(data);
     }
}
