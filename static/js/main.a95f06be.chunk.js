(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var l=a(1),s=a(5),i=a.n(s),c=(a(14),a(2)),n=a(4),r=a(6),o=a(7),u=a(9),b=a(8),p=(a(15),a(16),a(0)),h=function(t){return Object(p.jsx)("button",{onClick:function(e){return t.click&&t.click(t.label)},className:"\n        button\n        ".concat(t.operation?"operation":"","\n        ").concat(t.ac?"ac":"","\n        ").concat(t.right?"right":"","\n        ").concat(t.bottom?"bottom":"","\n        "),children:t.label})},j=(a(18),function(t){return Object(p.jsx)("div",{className:"display ".concat(t.fontSize),children:t.value})}),d={displayVisibility:1,displayValue:"0",clearDisplay:!1,operation:null,values:[0,null],current:0,fontSize:"big"},y=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state=Object(n.a)({},d),t}return Object(o.a)(a,[{key:"clearAll",value:function(){this.setState(Object(n.a)({},d))}},{key:"clearCurrent",value:function(){var t=this.state.current,e=Object(c.a)(this.state.values);e[t]=0,this.setState({displayValue:"0",values:e})}},{key:"setOperation",value:function(t){var e=this;if("="===t||0!==this.state.current&&null!==this.state.values[1]){if("="!==t||"="===this.state.operation||null!==this.state.values[1]){var a="="===t,l=this.state.operation,s=Object(c.a)(this.state.values);switch(l){case"+":s[0]=parseFloat(s[0])+parseFloat(s[1]);break;case"-":s[0]=parseFloat(s[0])-parseFloat(s[1]);break;case"\xd7":s[0]=parseFloat((parseFloat(s[0])*parseFloat(s[1])).toFixed(8));break;case"\xf7":s[0]=parseFloat((parseFloat(s[0])/parseFloat(s[1])).toFixed(8));break;case"%":s[0]=parseFloat(parseFloat(s[1]*parseFloat(s[0])/100).toFixed(8))}for(isNaN(s[0])?s[0]="Indeterminado":s[0]===1/0&&(s[0]="Indefinido"),s[1]=null;s[0].toString().length>15&&-1!==s[0].toString().indexOf(".");)s[0]=parseFloat(s[0].toFixed(s[0].toString().split(".")[1].length-1));s[0].toString().length>15?this.setState({displayValue:"limite excedido",operation:null,current:0,clearDisplay:!0,values:[0,null],fontSize:"big"}):(s[0].toString().length>10?this.setState({fontSize:"small"}):this.setState({fontSize:"big"}),this.setState({displayValue:s[0].toString().replace(".",","),operation:a?null:t,current:a?0:1,clearDisplay:!0,values:s}))}}else this.setState({displayVisibility:0,operation:t,current:1,clearDisplay:!0}),setTimeout((function(){return e.setState({displayVisibility:1})}),50)}},{key:"addDigit",value:function(t){if(this.state.displayValue.length<15||this.state.clearDisplay){if(","===t&&this.state.displayValue.includes(",")&&!this.state.clearDisplay)return;var e="0"===this.state.displayValue||this.state.clearDisplay,a=this.state.displayValue,l=a+t;l=","!==t?(a=e?"":this.state.displayValue)+t:(a=e?"0":this.state.displayValue)+t;var s=this.state.current,i=parseFloat(l.replace(",",".")),n=Object(c.a)(this.state.values);n[s]=i,this.setState({values:n}),l.length>10&&this.setState({fontSize:"small"}),this.setState({displayValue:l,clearDisplay:!1})}}},{key:"changeSign",value:function(){var t="";if("0"!==this.state.displayValue[0]&&!this.state.clearDisplay){if("-"!==this.state.displayValue[0]){t="-"+this.state.displayValue;var e=this.state.current,a=-1*this.state.values[e],l=Object(c.a)(this.state.values);l[e]=a,this.setState({values:l})}else{t=this.state.displayValue.substring(1);var s=this.state.current,i=-1*this.state.values[s],n=Object(c.a)(this.state.values);n[s]=i,this.setState({values:n})}this.setState({displayValue:t})}}},{key:"render",value:function(){var t=this,e=function(e){return t.addDigit(e)},a=function(e){return t.setOperation(e)};return Object(p.jsxs)("div",{className:"calculator",children:[Object(p.jsx)(j,{value:this.state.displayValue.repeat(this.state.displayVisibility),fontSize:this.state.fontSize}),Object(p.jsx)(h,{label:"AC",click:function(){return t.clearAll()},ac:!0}),Object(p.jsx)(h,{label:"C",click:function(){return t.clearCurrent()}}),Object(p.jsx)(h,{label:"%",click:a,operation:!0}),Object(p.jsx)(h,{label:"\xf7",click:a,operation:!0,right:!0}),Object(p.jsx)(h,{label:"7",click:e}),Object(p.jsx)(h,{label:"8",click:e}),Object(p.jsx)(h,{label:"9",click:e}),Object(p.jsx)(h,{label:"\xd7",click:a,operation:!0,right:!0}),Object(p.jsx)(h,{label:"4",click:e}),Object(p.jsx)(h,{label:"5",click:e}),Object(p.jsx)(h,{label:"6",click:e}),Object(p.jsx)(h,{label:"-",click:a,operation:!0,right:!0}),Object(p.jsx)(h,{label:"1",click:e}),Object(p.jsx)(h,{label:"2",click:e}),Object(p.jsx)(h,{label:"3",click:e}),Object(p.jsx)(h,{label:"+",click:a,operation:!0,right:!0}),Object(p.jsx)(h,{label:"+/-",click:function(){return t.changeSign()},bottom:!0}),Object(p.jsx)(h,{label:"0",click:e,bottom:!0}),Object(p.jsx)(h,{label:",",click:e,bottom:!0}),Object(p.jsx)(h,{label:"=",click:a,operation:!0,bottom:!0,right:!0})]})}}]),a}(l.Component);i.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a95f06be.chunk.js.map