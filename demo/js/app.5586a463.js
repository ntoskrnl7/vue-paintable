(function(t){function i(i){for(var a,s,r=i[0],l=i[1],c=i[2],h=0,p=[];h<r.length;h++)s=r[h],n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(i);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(a=!1)}a&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={app:0},o=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var d=l;o.push(["cd49","chunk-vendors"]),e()})({"034f":function(t,i,e){"use strict";var a=e("e2a1"),n=e.n(a);n.a},2299:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".paintable,body{position:fixed}.paintable{overflow:hidden;height:100%;width:100%;-webkit-transform:scale(1);transform:scale(1)}.paintable.active{z-index:0}.paintable .canvas{position:relative;background-color:transparent;z-index:-1;position:absolute;left:0;top:0;overflow:hidden;-ms-touch-action:none;touch-action:none}.paintable .canvas.active{z-index:1000}.paintable .canvas.active.back{z-index:999}",""])},"3f8c":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"body{font-family:Helvetica,Arial,sans-serif;position:static!important}#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}h3{font-weight:400}.control{margin:20px}.paint{border:5px solid #000;border-radius:5px;margin:40px auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:810px!important;height:810px!important;position:relative!important}",""])},4226:function(t,i,e){"use strict";var a=e("f763"),n=e.n(a);n.a},7354:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".navigation[data-v-6516d8a6]{position:fixed;right:20px;top:20px;z-index:1005;background-color:#333;border-radius:5px;color:#fff}.navigation .navigationMenu[data-v-6516d8a6],.navigation .navigationMenu ul[data-v-6516d8a6]{list-style:none;padding:0;margin:0}.navigation .navigationMenu li>div[data-v-6516d8a6]{cursor:pointer;padding:12px}.navigation .navigationMenu li.disabled[data-v-6516d8a6]{opacity:.5}.navigation__lineWidthPicker[data-v-6516d8a6]{background:#333;position:absolute;left:-225px;top:0;padding:12px;border-radius:5px;-webkit-box-sizing:border-box;box-sizing:border-box}.navigation__lineWidthPickerDot[data-v-6516d8a6]{margin-top:10px;border-radius:100%}.navigation__lineWidthPickerColor[data-v-6516d8a6]{border-radius:100%;height:15px;width:15px;display:block;margin:0 0 10px;border:2px solid transparent}.navigation__lineWidthPickerColor[data-v-6516d8a6]:last-child{margin:0}.navigation__lineWidthPickerColor.selected[data-v-6516d8a6]{border:2px solid #fff}.navigation__colorPicker[data-v-6516d8a6]{background:#333;position:absolute;left:-60px;top:0;padding:12px;border-radius:5px}.navigation__colorPickerColor[data-v-6516d8a6]{border-radius:100%;height:15px;width:15px;display:block;margin:0 0 10px;border:2px solid transparent}.navigation__colorPickerColor[data-v-6516d8a6]:last-child{margin:0}.navigation__colorPickerColor.selected[data-v-6516d8a6]{border:2px solid #fff}.navigation__horizontalNavigation .navigationMenu li[data-v-6516d8a6],.navigation__horizontalNavigation .navigationMenu ul[data-v-6516d8a6]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}",""])},"9f5f":function(t,i,e){var a=e("7354");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("5e5b0ec2",a,!0,{sourceMap:!1,shadowMode:!1})},ae08:function(t,i,e){"use strict";var a=e("9f5f"),n=e.n(a);n.a},cd49:function(t,i,e){"use strict";e.r(i);var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("paintable",{staticClass:"paint",attrs:{width:800,height:800,hide:t.hidePaintable,horizontalNavigation:!0,navigation:t.navigation,name:t.isFirstPaintable?"my-screen":"my-second-screen",factor:1,lineWidth:5,lineWidthEraser:20,alwaysOnTop:""}},[e("div",{staticClass:"control"},[e("h3",[t._v("\n        Paintable "),e("strong",[t._v(t._s(t.isFirstPaintable?"1":"2"))])]),e("button",{on:{click:function(i){t.hidePaintable=!t.hidePaintable}}},[t._v("show/hide")]),e("button",{on:{click:t.show}},[t._v("show navigation")]),e("button",{on:{click:t.hide}},[t._v("hide navigation")]),e("button",{on:{click:t.navigate}},[t._v("switch to another paintable")])]),e("img",{attrs:{src:"https://source.unsplash.com/collection/837167/800x80"+(t.isFirstPaintable?0:1)}})])],1)},o=[],s={data(){return{isFirstPaintable:!0,hidePaintable:!1}},mounted(){this.$root.$on("toggle-paintable",t=>{console.log("paintable",t)})},computed:{navigation(){return{"draw-save":{body:"click here!",activeBody:"<strong>save</strong>"},color:{body:"color"}}}},methods:{navigate(){this.isFirstPaintable=!this.isFirstPaintable},hide(){this.$hidePaintableNavigation()},show(){this.$showPaintableNavigation()}}},r=s,l=(e("034f"),e("2877")),c=Object(l["a"])(r,n,o,!1,null,null,null),d=c.exports,h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.hide?e("div",{staticClass:"content"},[t._t("default")],2):e("div",{staticClass:"paintable"},[e("Navigation",{attrs:{horizontalNavigation:t.horizontalNavigation}},[e("div",{attrs:{slot:"paintable-navigation-draw"},slot:"paintable-navigation-draw"})]),e("canvas",{ref:"canvas-"+t.canvasId,staticClass:"canvas back",class:{active:t.isActive||t.alwaysOnTop},style:{pointerEvents:t.isActive?"all":"none",display:!t.canvasIsEmpty||t.isActive?"block":"none"},attrs:{width:t.width,height:t.height},on:{pointermove:t.drawMove,pointerdown:t.drawStart,pointerup:t.drawEnd,pointercancel:t.drawEnd}}),e("canvas",{ref:"temp-canvas-"+t.canvasId,staticClass:"canvas",class:{active:t.isActive||t.alwaysOnTop},style:{pointerEvents:t.isActive?"all":"none",display:!t.canvasIsEmpty||t.isActive?"block":"none"},attrs:{width:t.width,height:t.height},on:{pointermove:t.drawMove,pointerdown:t.drawStart,pointerup:t.drawEnd,pointercancel:t.drawEnd}}),e("div",{staticClass:"content"},[t._t("default")],2)],1)},p=[],v=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.paintableView.hidePaintableNavigation?t._e():e("div",{staticClass:"navigation",class:{navigation__horizontalNavigation:t.horizontalNavigation}},[t.isColorPickerOpen?e("div",{staticClass:"navigation__colorPicker"},t._l(t.paintableView.colors,function(i){return e("span",{key:i,class:["navigation__colorPickerColor",{selected:t.paintableView.currentColor===i}],style:{backgroundColor:i},on:{click:function(e){return t.changeColor(i)}}})}),0):t._e(),t.isLineWidthPickerOpen?e("div",{staticClass:"navigation__lineWidthPicker"},[e("label",{attrs:{for:"navigation__lineWidthPickerRange"}},[t._v("("+t._s(t.paintableView.currentLineWidth)+"px):")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.paintableView.currentLineWidth,expression:"paintableView.currentLineWidth"}],attrs:{id:"navigation__lineWidthPickerRange",type:"range",min:"1",max:"100"},domProps:{value:t.paintableView.currentLineWidth},on:{change:function(i){t.isLineWidthPickerOpen=!1},__r:function(i){return t.$set(t.paintableView,"currentLineWidth",i.target.value)}}}),e("div",{staticClass:"navigation__lineWidthPickerDot",style:t.lineWidthStyle})]):t._e(),e("ul",{staticClass:"navigationMenu",class:{active:t.paintableView.isActive}},t._l(t.horizontalNavigation?t.navigation.reverse():t.navigation,function(i){return e("li",{key:i.name,class:"navigationMenu__"+i.name},[t.horizontalNavigation?t._e():e("div",{domProps:{innerHTML:t._s(i.isActive?i.activeBody:i.body)},on:{click:i.click}}),t.paintableView.isActive?e("ul",t._l(i.subNavigation,function(i){return e("li",{key:i.name,class:["navigationMenu__"+i.name,{disabled:i.disabled}]},[e("div",{domProps:{innerHTML:t._s(i.isActive?i.activeBody:i.body)},on:{click:i.click}})])}),0):t._e(),t.horizontalNavigation?e("div",{domProps:{innerHTML:t._s(i.isActive?i.activeBody:i.body)},on:{click:i.click}}):t._e()])}),0)])},u=[],g={name:"paintable-navigation",props:["horizontalNavigation"],data(){return{isColorPickerOpen:!1,isLineWidthPickerOpen:!1,paintableView:this.$parent}},computed:{navigation(){return this.filteredNavigation.map(t=>{if(t.subNavigation&&t.subNavigation.length>0){const i=this.horizontalNavigation?t.subNavigation.reverse():t.subNavigation;t.subNavigation=i.map(t=>{return this.paintableView.navigation&&this.paintableView.navigation[t.name]?Object.assign({},t,this.paintableView.navigation[t.name]):t})}return this.paintableView.navigation&&this.paintableView.navigation[t.name]?Object.assign({},t,this.paintableView.navigation[t.name]):t})},filteredNavigation(){return[{name:"draw-save",body:"draw",activeBody:"save",isActive:this.paintableView.isActive,click:this.togglePainting,subNavigation:[{name:"color",body:"color",disabled:!1,show:this.paintableView.colors.length>0,click:this.openColorPicker},{name:"line-width",body:"line-width",disabled:!1,show:this.paintableView.showLineWidth,click:this.openLineWidthPicker},{name:"undo",body:"undo",disabled:!this.paintableView.undoList.length,show:this.paintableView.showUndoRedo,click:this.paintableView.undoDrawingStep},{name:"redo",body:"redo",disabled:!this.paintableView.redoList.length,show:this.paintableView.showUndoRedo,click:this.paintableView.redoDrawingStep},{name:"delete",body:"delete",disabled:!1,show:!0,click:this.paintableView.clearCanvas},{name:"eraser-pencil",body:"eraser",activeBody:"pencil",isActive:this.paintableView.isEraserActive,disabled:!1,show:!0,click:this.toggleEraserAndPencil},{name:"cancel",body:"cancel",disabled:!1,show:!0,click:this.cancelDrawing}].filter(t=>t.show)}]},lineWidthStyle(){return{height:this.paintableView.currentLineWidth+"px",width:this.paintableView.currentLineWidth+"px",backgroundColor:this.paintableView.currentColor}}},methods:{toggleEraserAndPencil(){this.paintableView.isEraserActive=!this.paintableView.isEraserActive},openColorPicker(){this.isColorPickerOpen=!this.isColorPickerOpen,this.isLineWidthPickerOpen=!1},openLineWidthPicker(){this.isLineWidthPickerOpen=!this.isLineWidthPickerOpen,this.isColorPickerOpen=!1},cancelDrawing(){this.paintableView.loadImageFromStorage(),this.paintableView.isActive=!1,this.isColorPickerOpen=!1,this.isLineWidthPickerOpen=!1},changeColor(t){this.paintableView.currentColor=t,this.paintableView.tempCtx.strokeStyle=this.paintableView.currentColor,this.paintableView.ctx.strokeStyle=this.paintableView.currentColor,this.isColorPickerOpen=!1},togglePainting(){this.paintableView.isActive&&this.paintableView.saveCurrentCanvasToStorage(),this.paintableView.isActive=!this.paintableView.isActive,this.isColorPickerOpen=!1,this.isLineWidthPickerOpen=!1,this.$root.$emit("toggle-paintable",this.paintableView.isActive),this.$root.$emit("toggle-paintable-screen",this.paintableView.isActive)}}},b=g,m=(e("ae08"),Object(l["a"])(b,v,u,!1,null,"6516d8a6",null)),w=m.exports;let f=0,y=0,x=0,C=0;var k={name:"paintable",components:{Navigation:w},props:{factor:{type:Number,default:1},navigation:{type:Object,default:null},alwaysOnTop:{type:Boolean,default:!0},name:{type:String,required:!0},width:{type:Number,default:window.innerWidth},height:{type:Number,default:window.innerHeight},hide:{type:Boolean,default:!1},showUndoRedo:{type:Boolean,default:!0},showLineWidth:{type:Boolean,default:!0},lineWidth:{type:Number,default:5},lineWidthEraser:{type:Number,default:20},colors:{type:Array,default:()=>["black","#f00","#4481c7","rgba(255, 235, 59, 0.4)","#999","green"]},horizontalNavigation:{type:Boolean,default:!1}},data(){return{hidePaintableNavigation:!1,currentColor:"black",canvasIsEmpty:!1,canvasId:0,isEraserActive:!1,isActive:!1,pointCoords:[],redoList:[],undoList:[],currentLineWidth:this.isEraserActive?this.lineWidthEraser:this.lineWidth,tempCanvas:null,tempCtx:null,canvas:null,ctx:null,startedDrawing:!1}},watch:{isActive:"init",name:"init",hide(){this.$nextTick(()=>{this.init()})},isEraserActive(t){this.currentLineWidth=t?this.lineWidthEraser:this.lineWidth},currentLineWidth(t){this.ctx.lineWidth=t,this.tempCtx.lineWidth=t},color(t){this.ctx.strokeStyle=t,this.tempCtx.strokeStyle=t}},beforeMount(){this.canvasId=Math.round(1e3*Math.random())},mounted(){this.init()},computed:{scalingFactor(){return window.devicePixelRatio||1}},methods:{setItem(t,i){localStorage.setItem(t,i)},async getItem(t){return localStorage.getItem(t)},removeItem(t){localStorage.removeItem(t)},init(){console.log("init");try{this.pointCoords=[],this.tempCanvas=this.$refs["temp-canvas-"+this.canvasId],this.tempCtx=this.tempCanvas.getContext("2d"),this.canvas=this.$refs["canvas-"+this.canvasId],this.ctx=this.canvas.getContext("2d"),this.tempCtx.lineCap="round",this.ctx.lineCap="round",this.tempCtx.lineWidth=this.lineWidth,this.ctx.lineWidth=this.lineWidth,this.tempCtx.strokeStyle=this.currentColor,this.ctx.strokeStyle=this.currentColor,this.setItem(this.name+"-settings",JSON.stringify({width:this.canvas.width,height:this.canvas.height})),this.setCanvasSize(),this.loadImageFromStorage(),this.$root.$on("hide-paintable-navigation",t=>{this.hidePaintableNavigation=t})}catch(t){}},undoDrawingStep(){this.restoreCanvasState(this.undoList,this.redoList)},redoDrawingStep(){this.restoreCanvasState(this.redoList,this.undoList)},restoreCanvasState(t,i){if(this.ctx.globalCompositeOperation="source-over",t.length){const e=t.pop();this.saveCurrentCanvasState(this.canvas,i,!0),this.loadImageFromStorage(e)}},saveCurrentCanvasState(t,i,e){e=e||!1,e||(this.redoList=[]),(i||this.undoList).push(t.toDataURL("image/png"))},async loadImageFromStorage(t){this.clearCanvas();const i=t||await this.getItem(this.name);if(i){let t=new Image;t.onload=(()=>{this.ctx.drawImage(t,0,0),this.canvasIsEmpty=this.isCanvasBlank()}),t.src=i}else this.canvasIsEmpty=this.isCanvasBlank()},setCanvasSize(){x=0,C=0},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},isCanvasBlank(){const t=document.createElement("canvas"),i=t.getContext("2d");return i.clearRect(0,0,this.canvas.width,this.canvas.height),t.width=this.canvas.width,t.height=this.canvas.height,t.toDataURL()===this.canvas.toDataURL()},saveCurrentCanvasToStorage(){this.isCanvasBlank()?(this.removeItem(this.name),this.removeItem(this.name+"-settings")):(this.setItem(this.name,this.canvas.toDataURL("image/png")),this.setItem(this.name+"-settings",JSON.stringify({width:this.canvas.width,height:this.canvas.height}))),this.undoList=[],this.redoList=[],this.canvasIsEmpty=this.isCanvasBlank()},drawStart(t){t.preventDefault(),this.isActive&&(this.isLineWidthPickerOpen=!1,this.isColorPickerOpen=!1,this.startedDrawing=!0,this.saveCurrentCanvasState(this.canvas),f=x,y=C,t.clientX&&t.clientY&&(x=t.clientX*this.factor-this.tempCanvas.getBoundingClientRect().left,C=t.clientY*this.factor-this.tempCanvas.getBoundingClientRect().top,this.pointCoords.push({x:x,y:C})),this.tempCtx.globalCompositeOperation="source-over",this.ctx.globalCompositeOperation=this.isEraserActive?"destination-out":"source-over")},drawEnd(t){this.isActive&&(this.drawLine(this.ctx),this.startedDrawing=!1,this.pointCoords=[])},drawLine(t){this.tempCtx.clearRect(0,0,this.canvas.width,this.canvas.height);let i=this.pointCoords[0],e=this.pointCoords[1];if(i.x&&i.y){t.beginPath(),t.moveTo(i.x,i.y);for(let a=1,n=this.pointCoords.length;a<n;a++){let n={x:i.x+(e.x-i.x)/2,y:i.y+(e.y-i.y)/2};t.quadraticCurveTo(i.x,i.y,n.x,n.y),i=this.pointCoords[a],e=this.pointCoords[a+1]}t.lineTo(i.x,i.y),t.stroke(),t.closePath()}},drawMove(t){t.preventDefault(),this.isActive&&this.startedDrawing&&(f=x,y=C,t.clientX&&t.clientY&&(x=t.clientX*this.factor-this.tempCanvas.getBoundingClientRect().left,C=t.clientY*this.factor-this.tempCanvas.getBoundingClientRect().top,this.pointCoords.push({x:x,y:C}),this.drawLine(this.isEraserActive?this.ctx:this.tempCtx)))}}},_=k,P=(e("4226"),Object(l["a"])(_,h,p,!1,null,null,null)),W=P.exports,V={install:function(t,i){i&&i.setItem&&(W.methods.setItem=i.setItem),i&&i.getItem&&(W.methods.getItem=i.getItem),i&&i.removeItem&&(W.methods.removeItem=i.removeItem),t.component("paintable",W),t.prototype.$hidePaintableNavigation=function(){var t=this;setTimeout(function(){t.$root.$emit("hide-paintable-navigation",!0)},0)},t.prototype.$showPaintableNavigation=function(){var t=this;setTimeout(function(){t.$root.$emit("hide-paintable-navigation",!1)},0)}}},L=V;a["a"].use(L),new a["a"]({render:function(t){return t(d)}}).$mount("#app")},e2a1:function(t,i,e){var a=e("3f8c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("1f50beb8",a,!0,{sourceMap:!1,shadowMode:!1})},f763:function(t,i,e){var a=e("2299");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("46600cf8",a,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.5586a463.js.map