(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),o=(a(16),a(17),a(10)),s=a(1),i=a(2),u=a(4),d=a(3),m=a(5),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={note:""},a.handlerNoteChange=function(e){a.setState({note:e.target.value})},a.handlerFormSubmit=function(e){e.preventDefault();var t=a.props.addTodo,n=a.state.note;n&&(t(n),a.setState(function(){return{note:""}}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.note;return l.a.createElement("form",{onSubmit:this.handlerFormSubmit},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handlerNoteChange,value:e}))}}]),t}(l.a.Component),p=a(6),f=a(9),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={completed:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleCheck",value:function(e){this.setState(function(t){return{completed:Object(f.a)({},t.completed,Object(p.a)({},e,!t.completed[e]))}})}},{key:"handleRemove",value:function(e){this.props.list.splice(e,1),this.setState({})}},{key:"render",value:function(){var e=this,t=this.props,a=t.item,n=t.i;return l.a.createElement("li",{className:this.state.completed[n]?"completed":""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:n,checked:this.i,onChange:function(){e.handleCheck(n)}}),l.a.createElement("label",{htmlFor:"todo-1"},a.note),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){e.handleRemove(n)}})))}}]),t}(l.a.Component);b.defaultProps={item:"",i:null,list:[]};var v=b,y=function(e){var t=e.list;return l.a.createElement("ul",{className:"todo-list"},t.map(function(e,a){return l.a.createElement(v,{key:e.id,list:t,item:e,i:a})}))};y.defaultProps={list:[]};var j=y,O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={selectedIndex:0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tabs,a=this.state.selectedIndex;return l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},"3 items left"),l.a.createElement("ul",{className:"filters"},t.map(function(t,n){return l.a.createElement("li",{key:t.id},l.a.createElement("a",{href:t.href,className:n===a?"selected":"",onClick:function(){e.setState({selectedIndex:n})}},t.title))})),l.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"}}))}}]),t}(l.a.Component);O.defaultProps={tabs:[]};var E=O,k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={tabs:[{title:"All",href:"#/",id:1},{title:"Active",href:"#/active",id:2},{title:"Completed",href:"#/completed",id:3}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.tabs,t=this.props.list;return l.a.createElement(E,{tabs:e,list:t})}}]),t}(l.a.Component);k.defaultProps={list:[]};var g=k,N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={list:[]},a.addTodo=function(e){a.setState(function(t){return{list:[].concat(Object(o.a)(t.list),[{id:new Date,note:e,completed:!1}])}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.list;return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos")),l.a.createElement(h,{addTodo:this.addTodo}),l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(j,{list:e})),l.a.createElement(g,{list:e}))}}]),t}(l.a.Component);r.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.b5bcfc96.chunk.js.map