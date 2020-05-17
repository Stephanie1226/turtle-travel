(this["webpackJsonpturtle-travel"]=this["webpackJsonpturtle-travel"]||[]).push([[0],{161:function(e,t,a){e.exports=a(282)},166:function(e,t,a){},168:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(71),i=a.n(o),l=(a(166),a(42)),c=a(43),s=a(48),u=a(47),d=a(100),f=a.n(d),m=(a(168),function(){return r.a.createElement("div",{className:"header-style"},r.a.createElement("h1",null,r.a.createElement(f.a,{symbol:"\ud83d\udc22 ",label:"turtle"}),"Turtle Traveling Map",r.a.createElement(f.a,{symbol:" \ud83d\udc22",label:"turtle"})))}),h=a(59),p=a(294),b=a(298),y=a(303),E=a(302),v=a(300),g=a(297),O=a(291),j=a(295),k=a(24);var w=Object(k.b)((function(e){return{inputInfo:e.inputData.input_data}}),(function(e){return{load_coordinates:function(t){return e({type:"COORDINATES_DATA",payload:{coordinates_data:t}})}}}))((function(e){var t=e.inputInfo,a=e.load_coordinates,o=Object(n.useState)([]),i=Object(h.a)(o,2),l=i[0],c=i[1];Object(n.useEffect)((function(){fetch("/calculateroute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){c(e)}))}),[t,c]);var s=[],u={};l.forEach((function(e){u[JSON.stringify(e)]=u[JSON.stringify(e)]?u[JSON.stringify(e)]+1:1}));for(var d=0,f=Object.entries(u);d<f.length;d++){var m=Object(h.a)(f[d],2),k=m[0];m[1]>1&&s.push(JSON.parse(k))}return a(s),r.a.createElement(p.a,{height:200,width:200,padding:30,containerComponent:r.a.createElement(b.a,null)},r.a.createElement(v.a,{crossAxis:!0,width:200,height:200,domain:[-10,10],theme:g.a.material,offsetY:100,standalone:!1,style:{grid:{stroke:"#ECEFF1",strokeDasharray:"10, 5"},ticks:{stroke:"grey",size:1},tickLabels:{fontSize:3,padding:1}}}),r.a.createElement(v.a,{dependentAxis:!0,crossAxis:!0,width:200,height:200,domain:[-10,10],theme:g.a.material,offsetX:100,standalone:!1,style:{grid:{stroke:"#ECEFF1",strokeDasharray:"10, 5"},ticks:{stroke:"grey",size:1},tickLabels:{fontSize:3,padding:1}}}),r.a.createElement(y.a,{color:"#54B520",labels:function(e){var t=e.datum;return"x: ".concat(t.x," y: ").concat(t.y)},labelComponent:r.a.createElement(E.a,{style:{fontSize:3},flyoutStyle:{stroke:"#f8b195",strokeWidth:1},flyoutHeight:10,flyoutWidth:15,pointerLength:5,pointerWidth:3}),data:l},r.a.createElement(O.a,{animate:{duration:500,onLoad:{duration:500}},style:{data:{stroke:"#ffb6b6",strokeWidth:1}}}),r.a.createElement(j.a,{style:{data:{fill:function(e){var t=e.datum;return t.x===l[Object.keys(l).length-1].x&&t.y===l[Object.keys(l).length-1].y||t.x===l[0].x&&t.y===l[0].y?"#004445":"#aacfcf"},stroke:function(e){var t=e.datum;return t.x===l[Object.keys(l).length-1].x&&t.y===l[Object.keys(l).length-1].y||t.x===l[0].x&&t.y===l[0].y?"#004445":"#aacfcf"},fillOpacity:.75,strokeWidth:.5}},size:function(e){return e.active?2:1}})))})),x=(a(276),function(e){return{type:"INPUT_DATA",payload:{input_data:e}}}),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).showFile=function(t){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var a=document.getElementById("show-text"),n=document.querySelector("input[type=file]").files[0],r=new FileReader;n.type.match(/text.*/)?r.onload=function(t){e.props.load_input_data(t.target.result),a.innerHTML="<span>Upload success!</span>"}:a.innerHTML="<span class='error'>It doesn't seem to be a text file!</span>",r.readAsText(n),e.setState({input_data:"ABC"})}else alert("Your browser is too old to support HTML5 File API")},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dl-box"},r.a.createElement("div",{className:"tc input-file-container"},r.a.createElement("input",{className:"input-file",id:"my-file",type:"file",onChange:this.showFile}),r.a.createElement("label",{tabindex:"0",for:"my-file",className:"input-file-trigger"},"Select a file here")),r.a.createElement("p",{id:"show-text",className:"show-msg"}))}}]),a}(n.Component),_=Object(k.b)(null,(function(e){return{load_input_data:function(t){return e(x(t))}}}))(N),T=a(72),S=(a(277),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(T.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(){this.props.load_input_data("")}},{key:"render",value:function(){return r.a.createElement("div",{className:"reset-box"},r.a.createElement("div",{className:"tc reset-container"},r.a.createElement("input",{type:"button",id:"my-reset",className:"input-reset",onClick:this.handleClick}),r.a.createElement("label",{tabindex:"0",for:"my-reset",className:"input-reset-trigger"},"Reset Turtle")))}}]),a}(n.Component)),A=Object(k.b)(null,(function(e){return{load_input_data:function(t){return e(x(t))}}}))(S);a(278);var C=function(e){e.id;var t=e.x,a=e.y;return r.a.createElement("div",{className:"tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-3 point-style"},r.a.createElement("span",{className:"point-font"}," (",t,", ",a,")"))};a(279);var I=Object(k.b)((function(e){return{coordinatesInfo:e.coordinatesData.coordinates_data}}),null)((function(e){var t=e.coordinatesInfo,a=Object(n.useState)([]),o=Object(h.a)(a,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){l(t)}),[t]),r.a.createElement("div",null,r.a.createElement("div",{className:"coor-title"},r.a.createElement("h3",null," Turtle passed by these coordinates more than once: ")),r.a.createElement("div",{className:"point-style"},i&&i.map((function(e,t){return r.a.createElement(C,{key:t,x:i[t].x,y:i[t].y})}))))})),D=(a(280),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"button-layout"},r.a.createElement(_,null),r.a.createElement(A,null)),r.a.createElement("div",{className:"instruction tc"},r.a.createElement("h4",null,"Instructions:"),r.a.createElement("p",null,"The Turtle's original location is (0,0), facing north."),r.a.createElement("p",null,"The start point (0,0) and the end point are in darker green. Others points the turtle passed by are in light blue."),r.a.createElement("p",null,"The coordinates that the turtle passed by more than once will show on the bottom of the page."),r.a.createElement("p",null,'"Reset Turtle" button to reset all of the data.')),r.a.createElement(w,null),r.a.createElement(I,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(281);var F=a(44),L={input_data:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_DATA":return Object.assign({},e,{input_data:t.payload.input_data});default:return e}},W={coordinates_data:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COORDINATES_DATA":return Object.assign({},e,{coordinates_data:t.payload.coordinates_data});default:return e}},B=Object(F.b)({inputData:J,coordinatesData:z}),R=Object(F.c)(B);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{store:R},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.84b1012c.chunk.js.map