(this["webpackJsonpweather-report"]=this["webpackJsonpweather-report"]||[]).push([[0],{172:function(e,i,t){},174:function(e,i,t){},175:function(e,i,t){},176:function(e,i,t){},177:function(e,i,t){"use strict";t.r(i);var n=t(1),d=t(0),s=t.n(d),r=t(20),a=t.n(r),o=t(6),u=(t(67),t(9)),p=t(10),l=t.n(p),c=t(22),m=function(){var e=Object(c.a)(l.a.mark((function e(i,t){var n,d,s,r,a,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.latitude,d=t.longitude,s=t.apiKey,r=t.units,a=t.language,o={},e.prev=2,e.next=5,i("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(d,"&exclude=minutely&units=").concat(r,"&lang=").concat(a,"&appid=").concat(s));case 5:return u=e.sent,e.next=8,u.json();case 8:o=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Fetch Error"+e.t0);case 14:return e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(i,t){return e.apply(this,arguments)}}(),w=[{name:"Edirne",latitude:"41.676",longitude:"26.557"},{name:"Istanbul",latitude:"41.028",longitude:"28.980"},{name:"Ankara",latitude:"39.924",longitude:"32.841"},{name:"New York",latitude:"40.677",longitude:"-73.967"},{name:"Munich",latitude:"48.143",longitude:"11.570"},{name:"Berlin",latitude:"52.511",longitude:"13.379"}],h=function(e){return w.filter((function(i){return i.name===e}))},A="WEATHER_REQUEST",v="WEATHER_SUCCESS",b="WEATHER_FAIL",y=(t(69),["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"]),g=function(e){var i=e.getDate(),t=e.getMonth(),n=e.getFullYear();return"".concat(i," ").concat(y[t]," ").concat(n)},f=function(e){return new Date(1e3*e)},j=["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"],_=(t(70),function(e){var i,t=e.dt,d=f(t),s=g(d),r=d.getHours(),a=d.getMinutes(),o=d.getDay();return Object(n.jsxs)("div",{className:"currenttime-container",children:[Object(n.jsx)("div",{children:s}),Object(n.jsxs)("div",{className:"currenttime-day-hours",children:[Object(n.jsx)("div",{children:(i=o,j[i])}),Object(n.jsx)("div",{className:"currenttime-hours",children:"".concat(r<10?"0"+r:r,":").concat(a<10?"0"+a:a)})]})]})}),k=(t(71),function(e){var i=e.humidity;return Object(n.jsxs)("div",{className:"humidity-container",children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAZySURBVFiFrZZ7cBT1Ace/+7y93bvdu9wzd5cHHDUEEqSYNCBCKIpYh/gi0Ao1kkLqH5UKjM4UbC1Ng4hjIR2gxb4szshMpykFUh9JS+toA6LGREAqJYjBkIPLi8txr7199A+NTeReEb//7mf3+/19f6+lMAnxkm2briYZTdPO58IbTNJeVU4MArg0GZ90WsQ7C5Kc1RkF4MkGU6xxuZA/ReEs9hCAvBs1d3JWZ2T2tjZ98aZmTZCsXQCoDHwhl+eKVew6pt9a/6MkL0ptN2JOCg7v+/41TfqKI0F97/thfc6S+yJGs/RsGp42ObznS36wR1/1clDf2xXSi8sqQhTD1af8eDZ31iT+RCgunznlW9/DPC8HAsB3f/YrnuWMjwCo/iLPS7ZG003fKC6qrkWlmwNBklj33Isiy7G7ABRMNkApSXNbpq59lprnM4KjCQAAJ5jR8IuXRE4w/QmAaRxfohHk40UPNZJVXgMMn/F5+QW4Z/1WEy9aWgAQ4w0yzSPN57neLq5rss2urMR0GzvhodXtRWgwSAU/7ilIyvHDAAizu6ij4NtbnOUVczHD/n8+HrkGi9ND9nR2iKODwcu6rnVnbUCwe7aJpfMKffNrMNtpSMk8sPHnRl6UVtA0vYjhpTl80Uy/Z+Fy3JI/kf/wxL+w/8kG1DU9b6Y5bicAa7YGSikD/2LJpheo2/w2WLnUGEnRKC6vZDvb/3L3/X98181U1s662cnBbZrIu6eU4L32v0KQrBBECxHs7TEpcuK1dA3QfJ7r1an12+lpBfnwmek0GYGzJ15HaCCAefc+JB77/faVBAC/NTVf+8QzOLK7EUvqNxo0TW0A4E3ZAGMUHrOUVtX6Vz5OLioygiaJ6z42Jk1T8cLmtahr2ke37/6pKpTMpYx5LriE60OYrDYEe3swOnQFvpvK8MnZU5SalNu/2ICVZLinC1ZvpWY5DDBQ6c0BwFnoxy1LH0D7H3bhO5t30L37n1Q/GJARlrWU/JI1G/D6gX1YsLKBIYB6AMyEAILNtdtz5xqD01eMaXlMRvMx3f3IZnQfbYXDW0yIAisHjx9G15VEStbmLYKvpBz9507D7Z+uA6gYPwWFJMs9/7X1+6hbi0SIhqxnFACAZliIdhde+c0OrN6yk2l7boPKL6gjvaIBPHN9g6qSxFB/L4wmCy6cfPu9z13M7qJdvppHGadVhDfDwkulirtqoSlJjA4F4fOXyoNvHcbJYOoWqmpW4Y6HH4OmqQCgjQXwJhPxZa7b6zDTzqZ8MZuWrnsCf/v1NqzYuNXYf6hZDYSTGIqlXgsAcPFMdxxADwkArEn8vqt6JWM2CZMe/ZjKFiyFHIshEhqBWbTIobMn0DMip2RHh4K49N9TFIBjJAAwBtOj9ttWEMUSDSLzwk8rgiBwx8Pr0XFwPxY/2MANd7TovaEklBQlHGp+KqpDawaQJAGU0ZLNbPRMQ6H05UY/ppu/WYP/HD+KWQvvIgbfbdMUVUN/WJnAvPHn3ynd/2z9RI5GnwYAGkCVOH0uTQCQclz56WTgBRTO+Douf/QhJEd+Mhb4iBqwz0ChRCMSGsGh5qeine0H++LXRqsBJACApmnWQ0sugmdIkF+2/3GqqnkQNGuAZHer8tUgLrxzWeto3Ru6cLqTJnR9TzwaaQQQH+NpRZEHtVgIiq7fsDnw6ZYEgNjVYOJcU+18fHr/OwC8Od748wAAAsmRgCorOqXqOqivoAUACAUDNIB+AAOZOBLA8eGTb2i6riMYVb8S8+HARShyIprNfCzAFZo1BMLnu9A3qmTjc1LX34+oAFpyYSkAUGV5SBnuu4euuI/0W1kwGa7gbJLjUfx20+pIdPTqWgDD2XgSANRk/KXIxTNXBjv/gdNpzvBc9fK+7QlNVVsAnMuFH7sN9WTs2qvhMx3rtJJq2upwpP0Ny6Tuo0f01j1Ngdi10L34bJ/nGgAABnVNPzXyzivLw545lCvfO+FKFhgCy6YaIbIkBIbAUHziGftW6wH1QOMPR+KR8AIAgVxDp5rs+ZzF3p6/dK3xzrr1RJlXzLg1QwMBHNz548jpN9suxcKh2wH05WqeLgAAOE0O7y8VRVnuW3g/VbF4GTmrfCYsNjs0TUV4KIiPT3Wis60l/MG/2zVV0XbI8chO5Fj7ZORjGMMGs2fKGaPVcZU2GBMMZ4zykrXPZLW9BmAVAOlGDP4HpZ4/Mm6+19EAAAAASUVORK5CYII=",alt:"humidity"}),Object(n.jsxs)("p",{children:["% ",i]})]})}),C=(t(72),function(e){var i=e.pressure;return Object(n.jsxs)("div",{className:"pressure-container",children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"humidity"}),Object(n.jsxs)("p",{children:[i," hPa"]})]})}),x=(t(73),function(e){var i=e.temp,t=(void 0===i?0:i).toFixed(0);return Object(n.jsxs)("div",{className:"temperature-container",children:[Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAObSURBVFiF1ZdNaFxVFMd/597pZCbN1yRViyDBBCuSiFHBxlUoRIhUGhEVwQoifpCFERepEopkURIwOwvWfFhcSDeCmgYrtaWuhPiBpdJoaJqqpUls0kxjp3mZN+/juAhKYpwkLx0Cns3j3fP/3/M7l3fffQ8ixOyCPnR1Qb+69Kfvnpt1sz/PuSd/VU1EmePfIRsVTmX0Pmv5FqV0/soUsVSKeYSENaN1VUX1mwWIbVRoDW+hlH49eJSB784ReB7vvPwSNNTXjTu5xnuK4yOPv95VVuxndyz35YLEjeH+rmu3DAA0AHzxywTJRJJ0Nsupz07wdEM9oSP7gJG4mzvgi21ZbjK4F4HnbhlAhSJRyCqIGABc3wcgtFoCMNTffRA4GKGpSCuwbrS+0vkewn4AEe34vK/nwy0FGBrobgfao3giAzTGQrIactYmqUmWrMg9+Wpnl4o8sdIRjg319ewvGMCbCQ9QnGwt/u23MbG8VMgRQzC8XG/U5t0BmwJYM4S9oZjdAKLmk6GBQ6fXsxQUwMCPIZIBsKGOb8RTUACFO0S0BiCIUdP6WicKk8f7uj/O5zEFBZDVDZlw7SYL+wxYcxEfF8BKOPppf/f0epaCAkgQNovQBBCIfgRsLUCuKDNo/O3H/r7f2/Z2ygQJd7i/y9kSgHiu5JCqPLV8TMidB1q3BGCor6cD6Iji+X8cRqoam3FI5ssLVMDmDqN13wPptJbPOHwJVNtrM4jnIcZHbICdvA6A4wUvjKXdd6MU3jCAH+cDoDk2dYWKo0eWBgUSOyexM4vU9B5DPB/HDzvG5/1nogKs+VE6ndE9xnDGpueoPNyLZBdX5DWIsTh1F15tKRMHniduzfX7q4oqowCsuQLG8CLA9lMnVhUHEOuzrTxN7MICZRd+IxeEqfGM11QwAOBBgKKx0byCWLEDCFXfnAfA98KWvOJNAFQSBP/Z/T9hg6XLjSWNIncWEuAPrCWoSOUVqLe0k72dFQCIyqXCAQinAbIP784r8W+WITZk9rFHQMBobLBgABYOA47T1IxXffeqfLBYjHezHHdfPU5lOUlrfrp3h0xGAVj33/DqgrYB74vvU3zmJMkfRpB5By9TRqApss82cvnRBxDIlVrdVZNK/l5QAIAZR9tV6QXiqGIvTxOmSvFKSphzc6jKQklc9tSWx7+PUnzDAACzWd0VBryhIS2ehtXZIHTdMHBixhwPKra11YnkohYH+AtyGmk1ABAALQAAAABJRU5ErkJggg==",alt:"humidity"}),Object(n.jsxs)("p",{children:[t," \xb0C"]})]})}),O=(t(74),function(e){var i=e.desc,t=e.iconCode,d=void 0===t?"10d":t;return Object(n.jsxs)("div",{className:"weather-description-container",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(d,".png"),alt:""})}),Object(n.jsx)("div",{className:"desc",children:i})]})}),B=(t(75),function(e){var i=e.windSpeed;return Object(n.jsxs)("div",{className:"wind-container",children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"wind"}),Object(n.jsxs)("p",{children:[(3.6*i).toPrecision(3)," km/sa"]})]})}),N=(t(76),t(5)),R=t(53);t(172);var H=function(e){var i=e.timeStamps,t=void 0===i?[]:i,d=e.metric,s=void 0===d?[]:d,r=Math.min.apply(Math,Object(N.a)(s)),a=Math.max.apply(Math,Object(N.a)(s));return Object(n.jsx)("div",{className:"line-chart-container",children:Object(n.jsx)(R.Line,{data:{labels:t,datasets:[{label:"S\u0131cakl\u0131k (\xb0C)",data:s,borderColor:"orangered",pointBackgroundColor:"black",borderWidth:1,backgroundColor:"rgba(200,200,0, 0.4)",pointBorderColor:"white"}]},options:{scales:{yAxes:[{ticks:{suggestedMax:a,suggestedMin:r,beginAtZero:!0}}]}}})})},S=function(e){var i,t,d,s,r,a,u,p,l=e.currentLocation,c=Object(o.c)((function(e){return e.weather})),m=c.loading,w=c.error,h=c.data,A=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){var i=f(e.dt),t=i.getHours()<10?"0"+i.getHours():i.getHours(),n=i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes();return{timeStamp:"".concat(t,":").concat(n),temperature:e.temp.toFixed(2)}}))}(null===(i=c.data)||void 0===i?void 0:i.hourly);return Object(n.jsx)("div",{className:"current-weather-container",children:m?"Y\xfckleniyor...":w?"Error":Object(n.jsxs)("div",{style:{backgroundColor:"#e8eff3",boxShadow:"-1px 2px 4px rgba(0,0,0,0.3),1px -1px 4px rgba(0,0,0,0.3)",borderRadius:"3px"},children:[Object(n.jsxs)("div",{className:"current-weather-icon-container",children:[Object(n.jsx)("div",{className:"current-location-text",children:l}),Object(n.jsxs)("div",{className:"current-weather-time-desc",children:[Object(n.jsx)(_,{dt:null===h||void 0===h||null===(t=h.current)||void 0===t?void 0:t.dt}),Object(n.jsx)(O,{desc:null===h||void 0===h||null===(d=h.current)||void 0===d?void 0:d.weather[0].description,iconCode:null===h||void 0===h||null===(s=h.current)||void 0===s?void 0:s.weather[0].icon})]}),Object(n.jsxs)("div",{className:"current-weather-details",children:[Object(n.jsx)(x,{temp:null===h||void 0===h||null===(r=h.current)||void 0===r?void 0:r.temp}),Object(n.jsx)(k,{humidity:null===h||void 0===h||null===(a=h.current)||void 0===a?void 0:a.humidity}),Object(n.jsx)(B,{windSpeed:null===h||void 0===h||null===(u=h.current)||void 0===u?void 0:u.wind_speed}),Object(n.jsx)(C,{pressure:null===h||void 0===h||null===(p=h.current)||void 0===p?void 0:p.pressure})]})]}),Object(n.jsx)(H,{timeStamps:A.map((function(e){return e.timeStamp})).filter((function(e,i){return i%3===0})),metric:A.map((function(e){return e.temperature})).filter((function(e,i){return i%3===0}))})]})})},I=t(57),M=(t(174),[{name:"Edirne",value:"Edirne"},{name:"Istanbul",value:"Istanbul"},{name:"Ankara",value:"Ankara"},{name:"New York",value:"New York"},{name:"Munich",value:"Munich"},{name:"Berlin",value:"Berlin"}]),U=function(e){var i=e.setLocation,t=void 0===i?function(){return null}:i;return Object(n.jsx)(I.a,{onChange:t,options:M,search:!0,placeholder:"\u015eehir se\xe7.."})},V=(t(175),function(){var e,i=Object(o.c)((function(e){return e.weather})),t=i.loading,d=i.error,s=i.data,r=null===s||void 0===s||null===(e=s.daily)||void 0===e?void 0:e.map((function(e){var i,t=f(e.dt);return{timeString:g(t),temp:null===(i=e.temp)||void 0===i?void 0:i.day,humidity:e.humidity,pressure:e.pressure,wind:e.wind_speed,icon:e.weather[0].icon}})),a=null===r||void 0===r?void 0:r.slice(1,(null===r||void 0===r?void 0:r.length)-1);return Object(n.jsx)("div",{children:t?"Y\xfckleniyor...":d?"Error":Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Haftal\u0131k Hava Durumu"}),Object(n.jsx)("div",{className:"daily-weather-grid-container",children:a.map((function(e){return Object(n.jsxs)("div",{className:"daily-weather-item",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"daily-weather-time",children:[e.timeString,Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,".png"),alt:"weather"})]})}),Object(n.jsxs)("div",{className:"daily-weather-icons",children:[Object(n.jsx)(x,{temp:e.temp}),Object(n.jsx)(B,{windSpeed:e.wind}),Object(n.jsx)(C,{pressure:e.pressure}),Object(n.jsx)(k,{humidity:e.humidity})]})]},e.timeString)}))})]})})}),z=(t(176),function(){return Object(n.jsx)("footer",{className:"footer",children:"\xa9 2021 T\xfcrkay TUN\xc7"})});var Z=function(){var e=Object(o.b)(),i=Object(d.useState)("Edirne"),t=Object(u.a)(i,2),s=t[0],r=t[1];return Object(d.useEffect)((function(){var i,t=!0;return t&&e((i=s,function(){var e=Object(c.a)(l.a.mark((function e(t){var n,d,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(i),d={latitude:n[0].latitude,longitude:n[0].longitude,apiKey:"35532d642829618806520ce4361bac8a",units:"metric",language:"tr"},e.prev=2,t({type:A}),e.next=6,m(window.fetch,d);case 6:s=e.sent,t({type:v,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:b,payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(i){return e.apply(this,arguments)}}())),function(){t=!1}}),[e,s]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(U,{setLocation:r}),Object(n.jsx)(S,{currentLocation:s}),Object(n.jsx)(V,{}),Object(n.jsx)(z,{})]})},Q=t(8),Y=t(54),L=t(55),q=t(56),G=Object(Q.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,data:q},i=arguments.length>1?arguments[1]:void 0;switch(i.type){case A:return{loading:!0,data:[]};case v:return{loading:!1,data:i.payload};case b:return{loading:!1,error:i.payload};default:return e}}}),T=[Y.a],K=Object(Q.createStore)(G,{},Object(L.composeWithDevTools)(Q.applyMiddleware.apply(void 0,T)));a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(o.a,{store:K,children:Object(n.jsx)(Z,{})})}),document.getElementById("root"))},56:function(e){e.exports=JSON.parse('{"lat":41.5,"lon":26.5,"timezone":"Europe/Athens","timezone_offset":7200,"current":{"dt":1610088155,"sunrise":1610084408,"sunset":1610118052,"temp":13.33,"feels_like":10.55,"pressure":1000,"humidity":80,"dew_point":9.96,"uvi":0.24,"clouds":99,"visibility":10000,"wind_speed":4.02,"wind_deg":135,"wind_gust":6.71,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}]},"hourly":[{"dt":1609678800,"temp":12.22,"feels_like":8.36,"pressure":1008,"humidity":79,"dew_point":8.69,"uvi":0.14,"clouds":100,"visibility":10000,"wind_speed":5.09,"wind_deg":175,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0.24},{"dt":1609682400,"temp":11.99,"feels_like":8.59,"pressure":1014,"humidity":84,"dew_point":9.37,"uvi":0.04,"clouds":100,"visibility":10000,"wind_speed":4.69,"wind_deg":175,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0.16},{"dt":1609686000,"temp":11.17,"feels_like":8.15,"pressure":1017,"humidity":87,"dew_point":9.09,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.03,"wind_deg":163,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04n"}],"pop":0.12},{"dt":1609689600,"temp":10.48,"feels_like":7.31,"pressure":1018,"humidity":88,"dew_point":8.58,"uvi":0,"clouds":99,"visibility":10000,"wind_speed":4.07,"wind_deg":160,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04n"}],"pop":0.12},{"dt":1609693200,"temp":9.92,"feels_like":6.58,"pressure":1019,"humidity":88,"dew_point":8.03,"uvi":0,"clouds":83,"visibility":10000,"wind_speed":4.11,"wind_deg":160,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04n"}],"pop":0.08},{"dt":1609696800,"temp":9.46,"feels_like":6.4,"pressure":1019,"humidity":89,"dew_point":7.88,"uvi":0,"clouds":72,"visibility":10000,"wind_speed":3.62,"wind_deg":162,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04n"}],"pop":0.04},{"dt":1609700400,"temp":9.24,"feels_like":6.34,"pressure":1019,"humidity":90,"dew_point":7.73,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":3.37,"wind_deg":163,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609704000,"temp":9.2,"feels_like":6.31,"pressure":1020,"humidity":90,"dew_point":7.67,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":3.34,"wind_deg":167,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609707600,"temp":9.12,"feels_like":6.4,"pressure":1020,"humidity":90,"dew_point":7.71,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":3.07,"wind_deg":164,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609711200,"temp":9.01,"feels_like":6.34,"pressure":1020,"humidity":90,"dew_point":7.56,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":2.97,"wind_deg":156,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609714800,"temp":8.86,"feels_like":6.22,"pressure":1019,"humidity":90,"dew_point":7.38,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":2.88,"wind_deg":149,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609718400,"temp":8.73,"feels_like":6.13,"pressure":1019,"humidity":90,"dew_point":7.24,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":2.77,"wind_deg":147,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609722000,"temp":8.66,"feels_like":6.09,"pressure":1018,"humidity":90,"dew_point":7.16,"uvi":0,"clouds":5,"visibility":10000,"wind_speed":2.71,"wind_deg":148,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01n"}],"pop":0},{"dt":1609725600,"temp":8.65,"feels_like":6.08,"pressure":1018,"humidity":89,"dew_point":6.96,"uvi":0,"clouds":30,"visibility":10000,"wind_speed":2.66,"wind_deg":149,"weather":[{"id":802,"main":"Clouds","description":"par\xe7al\u0131 az bulutlu","icon":"03n"}],"pop":0},{"dt":1609729200,"temp":8.77,"feels_like":6.46,"pressure":1018,"humidity":87,"dew_point":6.86,"uvi":0,"clouds":53,"visibility":10000,"wind_speed":2.22,"wind_deg":149,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04n"}],"pop":0},{"dt":1609732800,"temp":8.67,"feels_like":6.36,"pressure":1017,"humidity":87,"dew_point":6.65,"uvi":0,"clouds":65,"visibility":10000,"wind_speed":2.18,"wind_deg":128,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04n"}],"pop":0},{"dt":1609736400,"temp":8.37,"feels_like":6.07,"pressure":1017,"humidity":87,"dew_point":6.44,"uvi":0,"clouds":72,"visibility":10000,"wind_speed":2.07,"wind_deg":108,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04n"}],"pop":0},{"dt":1609740000,"temp":8.17,"feels_like":5.75,"pressure":1017,"humidity":88,"dew_point":6.43,"uvi":0,"clouds":77,"visibility":10000,"wind_speed":2.24,"wind_deg":105,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04d"}],"pop":0},{"dt":1609743600,"temp":9.13,"feels_like":6.85,"pressure":1017,"humidity":85,"dew_point":6.91,"uvi":0.31,"clouds":95,"visibility":10000,"wind_speed":2.17,"wind_deg":108,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0},{"dt":1609747200,"temp":10.86,"feels_like":8.27,"pressure":1017,"humidity":77,"dew_point":7.06,"uvi":0.73,"clouds":94,"visibility":10000,"wind_speed":2.7,"wind_deg":121,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0},{"dt":1609750800,"temp":12.54,"feels_like":9.57,"pressure":1017,"humidity":67,"dew_point":6.77,"uvi":1.18,"clouds":96,"visibility":10000,"wind_speed":3.11,"wind_deg":142,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0},{"dt":1609754400,"temp":14.25,"feels_like":10.7,"pressure":1016,"humidity":58,"dew_point":6.35,"uvi":1.46,"clouds":73,"visibility":10000,"wind_speed":3.79,"wind_deg":150,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04d"}],"pop":0},{"dt":1609758000,"temp":15.41,"feels_like":11.59,"pressure":1014,"humidity":53,"dew_point":6.05,"uvi":1.36,"clouds":79,"visibility":10000,"wind_speed":4.11,"wind_deg":147,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04d"}],"pop":0},{"dt":1609761600,"temp":15.94,"feels_like":12.42,"pressure":1013,"humidity":52,"dew_point":6.34,"uvi":0.99,"clouds":82,"visibility":10000,"wind_speed":3.74,"wind_deg":149,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04d"}],"pop":0},{"dt":1609765200,"temp":14.7,"feels_like":11.65,"pressure":1012,"humidity":59,"dew_point":6.88,"uvi":0.42,"clouds":100,"visibility":10000,"wind_speed":3.28,"wind_deg":126,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0},{"dt":1609768800,"temp":13.81,"feels_like":10.21,"pressure":1011,"humidity":61,"dew_point":6.45,"uvi":0.14,"clouds":100,"visibility":10000,"wind_speed":3.96,"wind_deg":136,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"pop":0},{"dt":1609772400,"temp":12.31,"feels_like":8.54,"pressure":1011,"humidity":63,"dew_point":5.69,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.92,"wind_deg":117,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04n"}],"pop":0},{"dt":1609776000,"temp":11.23,"feels_like":7.6,"pressure":1010,"humidity":67,"dew_point":5.38,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.67,"wind_deg":144,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04n"}],"pop":0.12},{"dt":1609779600,"temp":11.36,"feels_like":7,"pressure":1010,"humidity":71,"dew_point":6.31,"uvi":0,"clouds":100,"visibility":9384,"wind_speed":5.01,"wind_deg":133,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10n"}],"pop":0.36,"rain":{"1h":0.5}},{"dt":1609783200,"temp":11.75,"feels_like":6.17,"pressure":1009,"humidity":68,"dew_point":6.1,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":6.67,"wind_deg":117,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10n"}],"pop":0.44,"rain":{"1h":0.44}},{"dt":1609786800,"temp":12.05,"feels_like":7.57,"pressure":1008,"humidity":64,"dew_point":5.55,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.93,"wind_deg":136,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10n"}],"pop":0.68,"rain":{"1h":0.44}},{"dt":1609790400,"temp":10.18,"feels_like":7.93,"pressure":1008,"humidity":93,"dew_point":9.11,"uvi":0,"clouds":100,"visibility":2159,"wind_speed":2.94,"wind_deg":184,"weather":[{"id":502,"main":"Rain","description":"\u015fiddetli ya\u011fmur","icon":"10n"}],"pop":0.96,"rain":{"1h":8.63}},{"dt":1609794000,"temp":10.91,"feels_like":6.46,"pressure":1008,"humidity":94,"dew_point":10.09,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":6.41,"wind_deg":124,"weather":[{"id":502,"main":"Rain","description":"\u015fiddetli ya\u011fmur","icon":"10n"}],"pop":1,"rain":{"1h":4.81}},{"dt":1609797600,"temp":10.65,"feels_like":4.68,"pressure":1008,"humidity":87,"dew_point":8.63,"uvi":0,"clouds":100,"visibility":9275,"wind_speed":8.06,"wind_deg":152,"weather":[{"id":501,"main":"Rain","description":"orta \u015fiddetli ya\u011fmur","icon":"10n"}],"pop":1,"rain":{"1h":1.25}},{"dt":1609801200,"temp":10.44,"feels_like":7.76,"pressure":1009,"humidity":89,"dew_point":8.85,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.41,"wind_deg":148,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10n"}],"pop":1,"rain":{"1h":0.38}},{"dt":1609804800,"temp":10.18,"feels_like":7.2,"pressure":1009,"humidity":92,"dew_point":9.06,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.93,"wind_deg":138,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04n"}],"pop":0.8},{"dt":1609808400,"temp":9.91,"feels_like":7.66,"pressure":1009,"humidity":94,"dew_point":9.13,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":2.9,"wind_deg":149,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04n"}],"pop":0},{"dt":1609812000,"temp":9.4,"feels_like":6.88,"pressure":1009,"humidity":94,"dew_point":8.61,"uvi":0,"clouds":58,"visibility":10000,"wind_speed":3.11,"wind_deg":183,"weather":[{"id":803,"main":"Clouds","description":"par\xe7al\u0131 bulutlu","icon":"04n"}],"pop":0},{"dt":1609815600,"temp":9.17,"feels_like":5.82,"pressure":1010,"humidity":93,"dew_point":8.25,"uvi":0,"clouds":38,"visibility":10000,"wind_speed":4.15,"wind_deg":173,"weather":[{"id":802,"main":"Clouds","description":"par\xe7al\u0131 az bulutlu","icon":"03n"}],"pop":0},{"dt":1609819200,"temp":9.6,"feels_like":5.52,"pressure":1010,"humidity":87,"dew_point":7.56,"uvi":0,"clouds":29,"visibility":10000,"wind_speed":5.01,"wind_deg":190,"weather":[{"id":802,"main":"Clouds","description":"par\xe7al\u0131 az bulutlu","icon":"03n"}],"pop":0},{"dt":1609822800,"temp":9.04,"feels_like":5.92,"pressure":1011,"humidity":85,"dew_point":6.71,"uvi":0,"clouds":23,"visibility":10000,"wind_speed":3.35,"wind_deg":233,"weather":[{"id":801,"main":"Clouds","description":"az bulutlu","icon":"02n"}],"pop":0},{"dt":1609826400,"temp":8.32,"feels_like":6.18,"pressure":1012,"humidity":88,"dew_point":6.57,"uvi":0,"clouds":19,"visibility":10000,"wind_speed":1.89,"wind_deg":250,"weather":[{"id":801,"main":"Clouds","description":"az bulutlu","icon":"02d"}],"pop":0},{"dt":1609830000,"temp":9.7,"feels_like":8.33,"pressure":1013,"humidity":84,"dew_point":7.29,"uvi":0.34,"clouds":0,"visibility":10000,"wind_speed":1,"wind_deg":251,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01d"}],"pop":0.04},{"dt":1609833600,"temp":11.2,"feels_like":10.1,"pressure":1014,"humidity":76,"dew_point":7.26,"uvi":0.79,"clouds":0,"visibility":10000,"wind_speed":0.62,"wind_deg":309,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01d"}],"pop":0.08},{"dt":1609837200,"temp":12.34,"feels_like":10.94,"pressure":1014,"humidity":69,"dew_point":6.96,"uvi":1.25,"clouds":0,"visibility":10000,"wind_speed":0.94,"wind_deg":285,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01d"}],"pop":0.12},{"dt":1609840800,"temp":13.2,"feels_like":11.55,"pressure":1014,"humidity":65,"dew_point":6.85,"uvi":1.47,"clouds":0,"visibility":10000,"wind_speed":1.28,"wind_deg":246,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01d"}],"pop":0.08},{"dt":1609844400,"temp":13.96,"feels_like":11.82,"pressure":1014,"humidity":60,"dew_point":6.55,"uvi":1.37,"clouds":0,"visibility":10000,"wind_speed":1.85,"wind_deg":224,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01d"}],"pop":0.04},{"dt":1609848000,"temp":14.41,"feels_like":12.1,"pressure":1014,"humidity":56,"dew_point":5.87,"uvi":1,"clouds":4,"visibility":10000,"wind_speed":1.91,"wind_deg":208,"weather":[{"id":800,"main":"Clear","description":"a\xe7\u0131k","icon":"01d"}],"pop":0}],"daily":[{"dt":1609668000,"sunrise":1609652433,"sunset":1609685767,"temp":{"day":10.12,"min":7.61,"max":12.22,"night":9.12,"eve":10.48,"morn":7.87},"feels_like":{"day":7.41,"night":6.4,"eve":7.31,"morn":5.65},"pressure":1020,"humidity":75,"dew_point":5.97,"wind_speed":2.52,"wind_deg":144,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10d"}],"clouds":100,"pop":0.32,"rain":0.26,"uvi":0.33},{"dt":1609754400,"sunrise":1609738832,"sunset":1609772221,"temp":{"day":14.25,"min":8.17,"max":15.94,"night":10.91,"eve":11.23,"morn":8.67},"feels_like":{"day":10.7,"night":6.46,"eve":7.6,"morn":6.36},"pressure":1016,"humidity":58,"dew_point":6.35,"wind_speed":3.79,"wind_deg":150,"weather":[{"id":502,"main":"Rain","description":"\u015fiddetli ya\u011fmur","icon":"10d"}],"clouds":73,"pop":1,"rain":14.82,"uvi":1.46},{"dt":1609840800,"sunrise":1609825230,"sunset":1609858677,"temp":{"day":13.2,"min":8.07,"max":14.47,"night":8.07,"eve":10.29,"morn":9.6},"feels_like":{"day":11.55,"night":4.64,"eve":7.11,"morn":5.52},"pressure":1014,"humidity":65,"dew_point":6.85,"wind_speed":1.28,"wind_deg":246,"weather":[{"id":501,"main":"Rain","description":"orta \u015fiddetli ya\u011fmur","icon":"10d"}],"clouds":0,"pop":1,"rain":1.63,"uvi":1.47},{"dt":1609927200,"sunrise":1609911625,"sunset":1609945133,"temp":{"day":12.45,"min":7.8,"max":14.2,"night":11.02,"eve":12.13,"morn":7.88},"feels_like":{"day":8.34,"night":6.42,"eve":8.27,"morn":4.67},"pressure":1019,"humidity":75,"dew_point":8.16,"wind_speed":5.25,"wind_deg":179,"weather":[{"id":804,"main":"Clouds","description":"kapal\u0131","icon":"04d"}],"clouds":98,"pop":0.08,"uvi":1.19},{"dt":1610013600,"sunrise":1609998018,"sunset":1610031592,"temp":{"day":10.31,"min":6.86,"max":12.62,"night":6.86,"eve":9.51,"morn":10.98},"feels_like":{"day":6.01,"night":4.23,"eve":5.82,"morn":6.66},"pressure":1013,"humidity":59,"dew_point":2.76,"wind_speed":3.91,"wind_deg":324,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10d"}],"clouds":100,"pop":0.68,"rain":1.12,"uvi":1.31},{"dt":1610100000,"sunrise":1610084408,"sunset":1610118052,"temp":{"day":8.69,"min":4.61,"max":11.71,"night":9.13,"eve":10.05,"morn":5.67},"feels_like":{"day":5.42,"night":5.57,"eve":7.26,"morn":3.23},"pressure":1018,"humidity":61,"dew_point":1.81,"wind_speed":2.19,"wind_deg":112,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10d"}],"clouds":37,"pop":0.6,"rain":0.5,"uvi":2},{"dt":1610186400,"sunrise":1610170797,"sunset":1610204513,"temp":{"day":15.26,"min":10.14,"max":16.26,"night":15.54,"eve":15.07,"morn":12.54},"feels_like":{"day":9.35,"night":8.99,"eve":10.59,"morn":8.14},"pressure":1007,"humidity":83,"dew_point":12.49,"wind_speed":9.5,"wind_deg":205,"weather":[{"id":500,"main":"Rain","description":"hafif ya\u011fmur","icon":"10d"}],"clouds":100,"pop":0.96,"rain":4.82,"uvi":2},{"dt":1610272800,"sunrise":1610257183,"sunset":1610290975,"temp":{"day":17.67,"min":13.46,"max":19.28,"night":13.46,"eve":16.64,"morn":15.8},"feels_like":{"day":10.49,"night":10.18,"eve":9.77,"morn":7.33},"pressure":1001,"humidity":73,"dew_point":12.96,"wind_speed":11.49,"wind_deg":211,"weather":[{"id":501,"main":"Rain","description":"orta \u015fiddetli ya\u011fmur","icon":"10d"}],"clouds":100,"pop":1,"rain":11.44,"uvi":2}],"alerts":[{"sender_name":"Anastasia Linardi","event":"Moderate Thunderstorm warning","start":1609646400,"end":1609711200,"description":"Locally thunderstorms"},{"sender_name":"Anastasia Linardi","event":"Moderate Rain warning","start":1609632000,"end":1609714740,"description":"Locally rainfall"}]}')},67:function(e,i,t){},69:function(e,i,t){},70:function(e,i,t){},71:function(e,i,t){},72:function(e,i,t){},73:function(e,i,t){},74:function(e,i,t){},75:function(e,i,t){},76:function(e,i,t){}},[[177,1,2]]]);
//# sourceMappingURL=main.8960b2c3.chunk.js.map