function myFunction()
{
console.log("enter myFunction")
var request = new XMLHttpRequest();
request.open('GET', 'http://worldclockapi.com/api/json/est/now', true); // YOUR EXTERNAL JSON URL     
if (request.status >= 200 && request.status < 400) {
     // Success!
         var data = JSON.parse(request.responseText);
         var link;
         for (var t = 0; t < data.people.length; t++){
             link = document.createElement("a"+t);
             var ulist = document.getElementById("list");
             var newItem = document.createElement("li");
             newItem.appendChild(link);
             ulist.appendChild(newItem);
             link.textContent = 'First Name: '+data.people[t].fname + ', Last Name: ' +data.people[t].lname;
             link.setAttribute('data-ind', t); // ADDED A DATA ATTRIBUTE TO STORE A INDEX VALUE
            if (typeof window.addEventListener === 'function'){
                 (function (_td) {
                      link.addEventListener('click', function(){
                      var indexId = this.getAttribute('data-ind'); //GETTING DATA ATTRIBUTE VALUE
                      indexId =  parseInt(indexId); //PARSE FROM STRING TO INTEGER
                      alert(data.people[indexId].relation); // YOU WILL GET THE ACTUAL RELATION VALUE.

                  });
               })(link);
     }
  }
     } else {
      // We reached our target server, but it returned an error

     }
}
