(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(e,c,a){},53:function(e,c,a){"use strict";a.r(c);var t=a(3),i=a.n(t),n=a(20),s=a.n(n),r=a(21),j=a(22),h=a(25),l=a(24),o=a(23),d=a.n(o),b=(a(47),a(4)),m=a(6),O=a(1);function u(){return Object(O.jsxs)("div",{class:"social-container",children:[Object(O.jsx)("h3",{className:"heading",children:"Created by Anjali Sharma"}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/anjalisharmaaa/",className:"linkedin social",children:Object(O.jsx)(b.a,{icon:m.b,size:"2x"})}),Object(O.jsx)("a",{href:"https://github.com/AnjaliSharma1234",className:"github social",children:Object(O.jsx)(b.a,{icon:m.a,size:"2x"})}),Object(O.jsx)("a",{href:"https://twitter.com/AnjaliiSharmaaa",className:"twitter social",children:Object(O.jsx)(b.a,{icon:m.d,size:"2x"})}),Object(O.jsx)("a",{href:"https://medium.com/@anjalisharmaaa",className:"medium social",children:Object(O.jsx)(b.a,{icon:m.c,size:"2x"})})]})}var x=function(e){Object(h.a)(a,e);var c=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(e=c.call.apply(c,[this].concat(i))).state={advice:""},e.fetchAdvice=function(){d.a.get("https://api.adviceslip.com/advice").then((function(c){var a=c.data.slip.advice;e.setState({advice:a})})).catch((function(e){console.log(e)}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("h1",{children:"WELCOME TO ABBAS ENGINEER'S PAGE"}),Object(O.jsx)("h3",{children:"Your Local Software Engineer"}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("h2",{children:e}),Object(O.jsx)("button",{className:"buton",onClick:this.fetchAdvice,children:Object(O.jsx)("span",{children:Object(O.jsx)("h4",{children:"Unlock today's Gyaan"})})})]})]}),Object(O.jsx)("footer",{children:Object(O.jsx)(u,{})})]})}}]),a}(i.a.Component),p=x;s.a.render(Object(O.jsx)(p,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.937d6c99.chunk.js.map