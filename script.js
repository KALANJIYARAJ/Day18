
var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.classList.add("row","m-3");



var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));



function foo(value){
    console.log(value);
    for(var i=0;i<value.length;i++){
      // var c1= value[i].capital;
      // console.log(c1);
      
        row.innerHTML+=`
        <div class="col-lg-4">
        <div class="card border-primary mb-3" style="width:300px;height:350px;">
        <div class="card-body text-primary" >
        <h2  style="background-color:black; color: white;">${value[i].name}</h2>
        <img src="${value[i].flag}" class="card-img-top" style="width:250px;height:150px;" >
        <div class="captial">Captital:${value[i].capital}</div>
        <div class="region">Region:${value[i].region}</div>
        <div class="countrycode">Country Code:${value[i].callingCodes}</div>
        <button type="button" onclick="foo1()">Click for Weather</button> 
        <h4 id="weather"></h4>
        </div>
      </div>
      </div>`;

     
      
      container.append(row);
      document.body.append(container);
    }
}

async function foo1(){
  // var str="china";
  let url=`https://api.openweathermap.org/data/2.5/weather?q=china&appid=05a9d997253ef3c2fe86d73254a3b288`;
  let res1 = await fetch(url);
  let res2=await res1.json();

    
  let temp1=document.getElementById("weather");
  temp1.innerHTML=`Temp:${res2.main.temp}`;

}

