(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{7178:function(n){function o(n){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=function(){return[]},o.resolve=o,o.id=7178,n.exports=o},4237:function(n,o,e){"use strict";e.r(o),e.d(o,{default:function(){return h}});var t=e(2784),r=e(5423),i=e.n(r),s=e(7911);e(9055),e(1693);var c=function(){var n=this;this.queue=[],this.original=console,console=this,this.log=function(o){try{n.queue.push(JSON.stringify(o))}catch(e){console.log(e)}n.original.log(o)},this.warn=this.original.warn},l=e(3411),u=l.ZP.button.withConfig({displayName:"runButton",componentId:"sc-1yu4kpv-0"})({width:"100%",background:"#000",color:"#fff",border:"none",padding:"10px",textTransform:"uppercase",cursor:"pointer",flex:1}),a=l.ZP.button.withConfig({displayName:"testButton",componentId:"sc-9m51z9-0"})({width:"100%",background:"#ccc",color:"#000",border:"none",padding:"10px",textTransform:"uppercase",cursor:"pointer",flex:1}),d=l.ZP.button.withConfig({displayName:"clearButton",componentId:"sc-b8hkru-0"})({width:"100%",background:"red",color:"#fff",border:"none",padding:"10px",textTransform:"uppercase",cursor:"pointer"}),p=l.ZP.pre.withConfig({displayName:"preCode",componentId:"sc-122pzvb-0"})({background:"#333",whiteSpace:"pre",wordWrap:"break-word",overflow:"auto",borderRadius:"4px",border:"1px solid #292929",position:"relative",width:"100%",boxSizing:"border-box",label:{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"13px",color:"#ddd",position:"absolute",left:"1px",top:"15px",textAlign:"center",width:"60px","-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","pointer-events":"none"},code:{fontFamily:'"Inconsolata","Monaco","Consolas","Andale Mono","Bitstream Vera Sans Mono","Courier New",Courier,monospace',display:"block",margin:"0 0 0 60px",padding:"15px 16px 14px",borderLeft:"1px solid #555",overflowX:"auto",fontSize:"13px",lineHeight:"19px",color:"#ddd"}}),f=e(2322),h=function(n){var o=n.code,e=n.height,r=void 0===e?"500px":e,l=(n.editable,n.test),h=void 0!==l&&l,x=(0,t.useState)(!1),g=x[0],b=x[1],w=t.useRef(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.ZP,{height:r,defaultLanguage:"typescript",defaultValue:o,onMount:function(n){w.current=n},theme:"vs-dark"}),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,f.jsx)(u,{onClick:function(){var n,o=null===(n=w.current)||void 0===n?void 0:n.getValue(),e=i().transpile(null!==o&&void 0!==o?o:""),t="\n      const logger = ".concat(c,";\n      const newConsole = new logger();\n      ").concat(e,";\n      return newConsole.queue;\n    "),r=new Function(t)();b(r.join("\n"))},children:"Run it"}),h&&(0,f.jsx)(a,{children:"test"})]}),g&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(p,{children:[(0,f.jsx)("label",{children:"Output:"}),(0,f.jsx)("code",{children:g})]}),(0,f.jsx)(d,{onClick:function(){b(!1)},children:"Clear"})]})]})}},2183:function(){},3024:function(){},4240:function(){},3611:function(){},8353:function(){},1210:function(){},3454:function(){}}]);