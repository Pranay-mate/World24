(this.webpackJsonpip=this.webpackJsonpip||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(11),c=a.n(l),o=(a(58),a(16)),i=a(17),r=a(20),m=a(19),d=a(48),u=a(18),h=a(113),v=a(114),E=a(115),p=a(118),y=a(116),f=a(117),b=(a(72),a(73),a(13)),N=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.state={isNavOpen:!1},n}return Object(i.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return s.a.createElement("div",{className:"main_banner sticky-top row"},s.a.createElement(h.a,{dark:!0,expand:"md",className:"navbar p-3 navbar-dark transparent-nav nav-js col-sm-12"},s.a.createElement("div",{className:"container"},s.a.createElement(v.a,{className:"mr-auto",href:"/"},s.a.createElement(b.Link,{className:"navbar-brand",href:"/",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-200,duration:500},"CLOCK")),s.a.createElement(E.a,{onClick:this.toggleNav}),s.a.createElement(p.a,{isOpen:this.state.isNavOpen,navbar:!0},s.a.createElement(y.a,{navbar:!0},s.a.createElement(f.a,null,s.a.createElement(b.Link,{className:"nav-item nav-link",activeClass:"active",to:"date_time",spy:!0,smooth:!0,offset:-200,duration:500},"Home ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement(f.a,null,s.a.createElement(b.Link,{className:"nav-item nav-link",activeClass:"active",to:"date_time",spy:!0,smooth:!0,offset:-70,duration:500},"Indian Time")),s.a.createElement(f.a,null,s.a.createElement(b.Link,{className:"nav-item nav-link",activeClass:"active",to:"world_clock",spy:!0,smooth:!0,offset:-70,duration:500},"World Clock")))))))}}]),a}(n.Component);a(88);var k=function(e){return s.a.createElement("div",{id:"date_time",className:"row"},s.a.createElement("div",{className:"date col-sm-12"},s.a.createElement("h1",null,e.location),s.a.createElement("h1",null,e.day_week,", ",e.day," ",e.month," ",e.year)),s.a.createElement("div",{className:"time col-sm-12"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:""},e.hrs,":",e.min,s.a.createElement("span",null,e.sec)))))},g=a(51),w=a.n(g),C=(a(89),a(90),a(52));var S=function(e){return s.a.createElement("div",{id:"world_clock",className:"row"},s.a.createElement("div",{className:"worldClockHeader col-xl-12 col-sm-12"},s.a.createElement("h1",null,s.a.createElement(C.a,{className:"earth"})," WORLD CLOCK")),s.a.createElement("div",{id:"date_time",className:"col-sm-12"},s.a.createElement("div",{className:"Select col-xl-12"},s.a.createElement(w.a,{className:"myClassName",options:e.options,onChange:e.onChange,value:e.value,placeholder:"Select a location"})),s.a.createElement("div",{className:"col-xl-12"},s.a.createElement("button",{className:"button",onClick:e.onClick},"Submit")),s.a.createElement("div",{className:"date_2 col-xl-12"},s.a.createElement("h1",null,e.location),s.a.createElement("h1",null,e.dbDay,", ",e.dbday_date," ",e.months," ",e.years)),s.a.createElement("div",{className:"time col-xl-12"},s.a.createElement("h1",null,e.hours,":",e.minutes,s.a.createElement("span",null,e.seconds)))))};a(91);var O=function(){return s.a.createElement("section",{id:"home",className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("h1",null,s.a.createElement("img",{src:"https://img.icons8.com/ios-filled/50/000000/india-map.png",alt:"error in img uploading"}),"Life is Nothing But ",s.a.createElement("span",null,"Time"))))};a(92);var _=function(){return s.a.createElement("div",{className:"copyrightline"},s.a.createElement("p",null,"\xa9 2020 All Rights Reserved. Copyright by : ",s.a.createElement("a",{href:"https://www.worldtimeapi.org"},"worldtimeapi")))},D=a(93),j=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectedOption:null},n.handleChange=function(e){n.setState({selectedOption:e},(function(){return console.log("Option selected:",n.state.selectedOption)}))},n.handleClick=function(){setInterval((function(){return D.post("http://localhost:5000/world",{selected:n.state.selectedOption}).then((function(e){n.setState({location:e.data.location}),n.setState({hours:e.data.hours}),n.setState({minutes:e.data.minutes}),n.setState({seconds:e.data.seconds}),n.setState({dbDay:e.data.dbDay}),n.setState({months:e.data.dbMonth}),n.setState({years:e.data.dbyear}),n.setState({dbday_date:e.data.dbDayDate})})).catch((function(e){console.log(e)}))}),1e3)},n.state={data:null,hrs:null,min:null,sec:null,day_week:null,day:null,month:null,year:null,loc:null},n.state={location:null,hours:["hr"],minutes:["min"],seconds:["Sec"],dbDay:["Todays"],months:null,years:["Date"],dbday_date:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/").then((function(e){return e.json()})).then((function(t){e.setState({data:t})})),setInterval((function(){return fetch("http://localhost:5000/india").then((function(e){return e.json()})).then((function(t){e.setState({loc:t.location}),e.setState({hrs:t.hours}),e.setState({min:t.minutes}),e.setState({sec:t.seconds}),e.setState({day_week:t.dbDay}),e.setState({day:t.dbDayDate}),e.setState({month:t.dbMonth}),e.setState({year:t.dbyear})}))}),1e3)}},{key:"render",value:function(){var e=this.state.selectedOption;return s.a.createElement(d.BrowserRouter,null,s.a.createElement("div",{className:"App"},s.a.createElement(O,null),s.a.createElement(N,null),s.a.createElement(k,{location:this.state.loc,day_week:this.state.day_week,day:this.state.day,month:this.state.month,year:this.state.year,hrs:this.state.hrs,min:this.state.min,sec:this.state.sec}),s.a.createElement(S,{location:this.state.location,dbDay:this.state.dbDay,dbday_date:this.state.dbday_date,months:this.state.months,years:this.state.years,hours:this.state.hours,minutes:this.state.minutes,seconds:this.state.seconds,options:this.state.data,onChange:this.handleChange,value:e,onClick:this.handleClick}),s.a.createElement(_,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(111)},58:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.b02acc67.chunk.js.map