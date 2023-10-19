var container=document.createElement('div')
   container.setAttribute('class','container')
   container.setAttribute('id','container')
var row=document.createElement('div')
   row.setAttribute('class','row')
   row.setAttribute('id','row')
   container.append(row)
   document.body.append(container)   
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{
   console.log(data1)
      for(i=0;i<250;i++){
         var div=document.createElement('div')
         div.setAttribute('id','main')
         div.innerHTML=`
                        <div class="row col-lg-12 col-sm-12">
                           <div class="card" id='card' style="width: 300px;" style="background-color:white;">
                              <div class="card-body" id="card-body" style="padding:0px">
                                 <h1 class="card-title" id='title'>${data1[i].name}</h1>
                                 <img src='${data1[i].flag}' width= 220px height=140px style="padding-left:40px"></img><br>
                                 <div class="body" style="text-align:center; padding-bottom:10px">
                                    <h5 class="card-title">Capital:${data1[i].capital}</h5>
                                    <h5 class="card-title">Region:${data1[i].region}</h5>
                                    <h5 class="card-title">Country-code:${data1[i].alpha3Code}</h5>
                                    <h5 class="card-title">Latlng:${data1[i].latlng}</h5>
                                    <button type="button" class="btn btn-primary" id='btn' onclick=weather('${data1[i].capital}','${data1[i].name}','${data1[i].alpha3Code}')>click for weather</a></button>
                                 </div> 
                              </div>
                           </div>
                        </div>`
         var c=document.getElementById('container')
         var r=document.getElementById('row')
         r.append(div)
         c.append(r)
         document.body.append(c)
      }
}).catch((err)=>console(err))
function weather(capital,city){
   let w=fetch('https://api.openweathermap.org/data/2.5/weather?q='+capital+'&appid=1e327aa2b6353a855baa06be0be817d4&units=metric')
   w.then((ans)=>ans.json()).then((res)=>{
      console.log(res)
      var cap1=document.getElementById('container')
      cap1.innerHTML=``;
       
      var cap=document.createElement('div')
        cap.setAttribute('class','dummy')
      
      var span0=document.createElement('p');
        span0.innerHTML=`country-name :${city}`;
        cap.append(span0)
          
      var span1=document.createElement('p');
        span1.innerHTML=`Temperature :${res.main.temp}c`;
        cap.append(span1)
      
      var span2=document.createElement('p');
         span2.innerHTML=`Sun-rise :${res.sys.sunrise} lan`;
         cap.append(span2)
     
      var span3=document.createElement('p');
         span3.innerHTML=`Sun-set :${res.sys.sunset} lan`;
          cap.append(span3)
     
      var span6=document.createElement('p');
         span6.innerHTML=`wind_speed :${res.wind.speed} km/h`;
         cap.append(span6)
      
      var span7=document.createElement('p');
         span7.innerHTML=`clouds :${res.clouds.all}`;
         cap.append(span7)
 
      var link=document.createElement('a')
         link.setAttribute('href','http://127.0.0.1:5500/index.html')
         link.innerHTML='click back to home'

      document.body.append(cap,link)
   }).catch((r)=>console.log(r))
}