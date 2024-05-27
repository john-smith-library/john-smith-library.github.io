(()=>{"use strict";var e={560:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Application=void 0;const s=n(213),i=n(97),r=n(493),l=n(697);n(136),t.Application=class{constructor(e){var t,n,o,a;this._domEngine=null!==(t=null==e?void 0:e.domEngine)&&void 0!==t?t:new i.NativeDomEngine,this._bindingRegistry=null!==(n=null==e?void 0:e.bindingRegistry)&&void 0!==n?n:new s.DefaultBindingRegistry,this._troubleshooter=null!==(o=null==e?void 0:e.troubleshooter)&&void 0!==o?o:JS.TroubleShooterFactory?JS.TroubleShooterFactory():new l.NoopTroubleshooter,this._viewRenderer=null!==(a=null==e?void 0:e.viewRenderer)&&void 0!==a?a:new r.DefaultViewRenderer(this._domEngine,this._bindingRegistry,this._troubleshooter)}render(e,t,n){const s=this._domEngine.resolveElement(e);if(null!==s){const e=this._domEngine.createMarkerElement();return s.appendChild(e),this._viewRenderer.render(e,t,n)}return this._troubleshooter.elementNotFound(e,this._domEngine.getRoot())}}},877:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(947),n(445),n(229),n(313)},313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=n(213),i=n(809);s.DefaultBindingRegistry.prototype.$checked=(e,t)=>new i.AbstractBidirectionalConnector(t,e,(e=>e.isChecked()),((e,t)=>e.setChecked(!!t)),"change")},947:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=n(213),i=n(956),r=n(809),l=n(958);s.DefaultBindingRegistry.prototype.$className=(e,t)=>{const n=e.createClassNames();if("string"==typeof t||(0,i.isListenable)(t))return new r.AbstractListenableConnector(t,(e=>null===e?null:(n.add(e),{dispose:()=>{n.remove(e)}})));const s=new l.Owner,o=t;for(const e in o)s.own(new r.AbstractListenableConnector(o[e],(t=>(t?n.add(e):n.remove(e),null))));return s}},445:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=n(213),i=n(809);s.DefaultBindingRegistry.prototype.$innerHTML=(e,t)=>new i.AbstractListenableConnector(t,(t=>(e.setInnerHtml(null===t?"":t),null)))},229:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const s=n(213),i=n(809);s.DefaultBindingRegistry.prototype.$value=(e,t)=>{const n=t,{event:s,source:r}=n&&2===n.length?{event:n[1],source:n[0]}:{event:"change",source:n};return new i.AbstractBidirectionalConnector(r,e,(e=>e.getValue()),((e,t)=>e.setValue(null===t?"":t)),s)}},213:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultBindingRegistry=void 0,t.DefaultBindingRegistry=class{}},542:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IsDisposable=t.NoopDisposable=void 0,t.NoopDisposable={dispose:()=>{}},t.IsDisposable=e=>void 0!==e.dispose},958:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,i)}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(542),t),i(n(509),t)},509:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ToDisposable=t.Owner=void 0;const s=n(542);class i{constructor(e){this._properties=e||[]}own(e){return this._properties.push(e),e}ownIfNotNull(e){return e?this.own(e):e}dispose(){for(let e=0;e<this._properties.length;e++)this._properties[e].dispose()}}t.Owner=i,t.ToDisposable=e=>{if(e){if((0,s.IsDisposable)(e))return e;if(e.length)return new i(e)}return null}},455:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.JsGlobal=void 0;const s=n(534);class i{constructor(e){this.version=e}}t.JsGlobal=i,globalThis.JS=new i(s.JS_VERSION)},258:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,i)}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(560),t)},983:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BidirectionalValue=void 0;const s=n(135);class i extends s.ObservableValue{constructor(e,t){super(t),this.changeHandler=e}requestUpdate(e){const t=this.changeHandler(e);null==t||!0===t?this.setValue(e):!1!==t&&void 0!==t.newValue&&this.setValue(t.newValue)}}t.BidirectionalValue=i},956:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,i)}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(889),t),i(n(135),t),i(n(544),t),i(n(983),t)},889:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPartialListenable=t.isListenable=t.ReadonlyObservable=t.PartialListeners=t.Listeners=t.Listenable=t.DataChangeReason=void 0;const s=n(277);var i;!function(e){e[e.replace=0]="replace",e[e.initial=1]="initial",e[e.add=2]="add",e[e.remove=3]="remove"}(i||(t.DataChangeReason=i={}));class r{constructor(e,t){this.allListeners=e,this.currentListener=t}dispose(){s.ArrayUtils.removeItem(this.allListeners,this.currentListener)}}class l{}t.Listenable=l,t.Listeners=class{constructor(){this._items=[]}add(e,t){return this._items.push(e),void 0!==t&&e(t),new r(this._items,e)}notify(e){for(let t=0;t<this._items.length;t++)this._items[t](e)}size(){return this._items.length}},t.PartialListeners=class{constructor(){this._items=[]}add(e,t){return this._items.push(e),void 0!==t&&e(t,i.initial),new r(this._items,e)}notify(e,t){for(let n=0;n<this._items.length;n++)this._items[n](e,t)}size(){return this._items.length}},t.ReadonlyObservable=class extends l{},t.isListenable=e=>!!e.listen,t.isPartialListenable=e=>!!e.listenPartial},544:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObservableList=void 0;const s=n(135),i=n(889),r=n(277);class l extends s.ObservableValue{constructor(e){super(void 0===e?[]:e),this._count=null,this._partialListeners=new i.PartialListeners}listenPartial(e,t){return this._partialListeners.add(e,void 0===t||t?this.getValue():void 0)}getPartialListenersCount(){return this._partialListeners.size()}setValue(e){if(e&&!(e instanceof Array))throw new Error("Observable list supports only array values");super.setValue(e),this._partialListeners.notify(e,i.DataChangeReason.replace),this.notifyCountListeners()}add(...e){const t=this.getValue();for(let n=0;n<e.length;n++)t.push(e[n]);this.reactOnChange(e,i.DataChangeReason.add)}remove(...e){const t=this.getValue();for(let n=0;n<e.length;n++)r.ArrayUtils.removeItem(t,e[n]);this.reactOnChange(e,i.DataChangeReason.remove)}clear(){const e=this.getValue();if(null!==e){const t=e.splice(0,e.length);this.reactOnChange(t,i.DataChangeReason.remove)}}count(){return null===this._count&&(this._count=new s.ObservableValue(0),this.notifyCountListeners()),this._count}currentCount(){return this.getValue().length}getRequiredLast(){const e=this.getRequiredValue();if(0===e.length)throw new Error("Expected non empty list");return e[e.length-1]}forEach(e,t){(this.getValue()||[]).forEach(e,t)}reactOnChange(e,t){this._listeners.notify(this.getValue()),this._partialListeners.notify(e,t),this.notifyCountListeners()}notifyCountListeners(){null!==this._count&&this._count.setValue(this.currentCount())}}t.ObservableList=l},135:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObservableValue=void 0;const s=n(889);class i extends s.ReadonlyObservable{constructor(e){super(),this._listeners=new s.Listeners,this._value=e}getValue(){return this._value}getRequiredValue(){if(null===this._value)throw new Error("Expected a value but was null");return this._value}setValue(e){this._value=e,this._listeners.notify(e)}hasValue(){return!(null==this._value)}getListenersCount(){return this._listeners.size()}mutate(e){const t=e(this._value);this.setValue(t)}listen(e,t){const n=void 0===t||t?this.getValue():void 0;return this._listeners.add(e,n)}}t.ObservableValue=i},895:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.map=void 0;const s=n(889);t.map=(e,t)=>new i(e,t);class i extends s.Listenable{constructor(e,t){super(),this.source=e,this.mapper=t}listen(e,t){return this.source.listen((t=>{const n=this.mapper(t);e(n)}),t)}}},136:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(455)},697:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NoopTroubleshooter=void 0;const s=n(958);t.NoopTroubleshooter=class{bindingNotFound(){return s.NoopDisposable}elementNotFound(){return s.NoopDisposable}unknownHtmlDefinition(){return s.NoopDisposable}}},277:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ArrayUtils=void 0,t.ArrayUtils=class{static removeItem(e,t){let n=-1;for(let s=0;s<e.length;s++)e[s]===t&&(n=s);n>=0&&e.splice(n,1)}}},534:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.JS_VERSION=void 0,t.JS_VERSION="4.0.1-alpha.23"},809:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractBidirectionalConnector=t.AbstractListenableConnector=void 0;const s=n(956);class i{constructor(e,t){this.renderer=t,this._renderedValue=null,this._link=null,null===e?this.doRender(e):void 0!==e&&((0,s.isListenable)(e)?this._link=e.listen((e=>this.doRender(e))):this.doRender(e))}dispose(){this.disposeRenderedValue(),this._link&&this._link.dispose()}doRender(e){this.disposeRenderedValue(),this._renderedValue=this.renderer(e)}disposeRenderedValue(){null!==this._renderedValue&&(this._renderedValue.dispose(),this._renderedValue=null)}}t.AbstractListenableConnector=i,t.AbstractBidirectionalConnector=class extends i{constructor(e,t,n,s,i){if(super(e,(e=>(s(t,e),null))),this.target=t,this.event=i,e&&void 0!==e.requestUpdate){const s=e;this._eventHandler=t.attachEventHandler(i,(()=>{s.requestUpdate(n(t))}))}}dispose(){super.dispose(),this._eventHandler&&this.target.detachEventHandler(this.event,this._eventHandler)}}},323:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,i)}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(811),t),i(n(583),t),i(n(104),t)},583:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ListenableAttributeConnector=void 0;const s=n(809);class i extends s.AbstractListenableConnector{constructor(e,t,n){super(e,(e=>(void 0===e?t.removeAttribute(n):null===e?t.setAttribute(n,""):t.setAttribute(n,e),null)))}}t.ListenableAttributeConnector=i},104:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ListenableTextConnector=void 0;const s=n(809);class i extends s.AbstractListenableConnector{constructor(e,t){super(e,(e=>(t.setText(null==e?"":e.toString?e.toString():"unknown"),null)))}}t.ListenableTextConnector=i},811:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObservableListViewConnector=void 0;const s=n(956);t.ObservableListViewConnector=class{constructor(e,t,n,i,r){this.viewDefinition=n,this.viewRenderer=i,this.domEngine=r,this._link=null,this._renderedValues=[],this._initialPlaceholder=t,null!=e&&((0,s.isPartialListenable)(e)?this._link=e.listenPartial(((e,t)=>{this.doRender(e||[],t)})):(0,s.isListenable)(e)?this._link=e.listen((e=>{this.doRender(e||[],s.DataChangeReason.replace)})):this.doRender(e,s.DataChangeReason.replace))}dispose(){this._link&&this._link.dispose();for(let e=0;e<this._renderedValues.length;e++)this._renderedValues[e].renderedValue.dispose()}findRenderedValue(e){for(let t=0;t<this._renderedValues.length;t++){const n=this._renderedValues[t];if(n.value===e)return n.renderedValue}return null}removeRenderedValue(e){let t=-1;for(let n=0;n<this._renderedValues.length;n++)this._renderedValues[n].renderedValue===e&&(t=n);t>=0&&this._renderedValues.splice(t,1)}doRender(e,t){let n;if(t==s.DataChangeReason.remove)for(n=0;n<e.length;n++){const t=e[n],s=this.findRenderedValue(t);s&&(1===this._renderedValues.length&&(this._initialPlaceholder=this.domEngine.createMarkerElement(),s.root.insertAfter(this._initialPlaceholder)),s.dispose(),this.removeRenderedValue(s))}else if(t==s.DataChangeReason.add)this.appendItems(e);else{for(this._renderedValues.length>0&&(this._initialPlaceholder=this.domEngine.createMarkerElement(),this._renderedValues[this._renderedValues.length-1].renderedValue.root.insertAfter(this._initialPlaceholder)),n=0;n<this._renderedValues.length;n++)this._renderedValues[n].renderedValue.dispose();this._renderedValues=[],this.appendItems(e)}}appendItems(e){if(e)for(let t=0;t<e.length;t++){const n=e[t],s=this.viewRenderer.render(this.getNextItemPlaceholder(),this.viewDefinition,n);this._renderedValues.push({value:n,renderedValue:s})}}getNextItemPlaceholder(){if(0!==this._renderedValues.length){const e=this._renderedValues[this._renderedValues.length-1];if(null!==e.renderedValue.root){const t=this.domEngine.createMarkerElement();return e.renderedValue.root.insertAfter(t),t}}return this._initialPlaceholder}}},493:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultViewRenderer=void 0;const s=n(958),i=n(323);n(877);class r{constructor(e,t,n){this.domEngine=e,this.bindingRegistry=t,this.troubleshooter=n}render(e,t,n){const i=r.createViewRuntime(t,n),l=i.template,o=[],a={viewInstance:i.viewInstance,viewModel:n},u=this.transformElementsRecursively(null,l,o,a,void 0),d=new s.Owner;null!==u&&(e.replaceWith(u),d.own({dispose:()=>{u.remove()}}));const c=null!==u&&void 0!==u.setInnerHtml?u:null,h=a.viewInstance;h&&h.onBeforeInit&&d.ownIfNotNull((0,s.ToDisposable)(h.onBeforeInit(c,this.domEngine)));for(let e=o.length-1;e>=0;e--)d.own(o[e]());const p=a.viewInstance;p&&p.onInit&&d.ownIfNotNull((0,s.ToDisposable)(p.onInit(c,this.domEngine)));const v=a.viewInstance;return v&&v.onUnrender?{root:null!=u?u:e,dispose:()=>{v.onUnrender((()=>{d.dispose()}),c,this.domEngine)}}:{root:null!=u?u:e,dispose:()=>{d.dispose()}}}static createViewRuntime(e,t){const n=e;if("function"==typeof e&&void 0===e.prototype){const n=e(t);return{template:n,viewInstance:n}}const s=new n(t);return s.template?{template:s.template(),viewInstance:s}:{template:s,viewInstance:s}}transformElementsRecursively(e,t,n,s,i){if("string"==typeof t.element){const e=t.namespace||i,r=e?this.domEngine.createNamespaceElement(e,t.element):this.domEngine.createElement(t.element);return t.nested&&this.processElementNested(t,r,n,s,e),this.processElementAttributes(t,n,r,s),r}return"function"==typeof t.element?this.processViewComponent(t.element,t.attributes,n):(n.push((()=>this.troubleshooter.unknownHtmlDefinition(t,e))),null)}processViewComponent(e,t,n){const s=new e(t);if(!s.$$createBinding)return null;const i=this.domEngine.createMarkerElement();return n.push((()=>s.$$createBinding(i,this,this.domEngine))),i}processElementNested(e,t,n,s,r){var l;for(let o=0;o<e.nested.length;o++){const a=e.nested[o];if("string"==typeof a)t.appendChild(this.domEngine.createTextNode(a));else if("number"==typeof a)t.appendChild(this.domEngine.createTextNode(a.toString()));else if("element"in a){const e=this.transformElementsRecursively(t,a,n,s,r);null!==e&&t.appendChild(e)}else if("listen"in a){const e=a,s=this.domEngine.createTextNode("");t.appendChild(s),n.push((()=>new i.ListenableTextConnector(e,s)))}else t.appendChild(this.domEngine.createTextNode(a.toString&&null!==(l=a.toString())&&void 0!==l?l:""))}}processElementAttributes(e,t,n,s){for(const r in e.attributes){const l=r&&r.length>0?r[0]:null,o=e.attributes[r];"$"===l?t.push((()=>this.configureBinding(n,r,o))):"_"===l?t.push(this.createEventInitializer(n,r,o,s)):"string"==typeof o?n.setAttribute(r,o):t.push((()=>new i.ListenableAttributeConnector(o,n,r)))}}configureBinding(e,t,n){const s=this.bindingRegistry[t];return s?s(e,n):this.troubleshooter.bindingNotFound(t,e)}createEventInitializer(e,t,n,s){const{eventKey:i,eventThis:r}=t.length>1&&"_"===t[1]?{eventKey:t.slice(2),eventThis:s.viewInstance}:{eventKey:t.slice(1),eventThis:s.viewModel};return()=>{const t=e.attachEventHandler(i,(function(...e){n.apply(r,e)}));return{dispose:()=>e.detachEventHandler(i,t)}}}}t.DefaultViewRenderer=r},97:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NativeDomEngine=void 0;class n{constructor(e){this.element=e}remove(){this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}class s{constructor(e){this.element=e;const t=e.className;this._classNames=""===t?[]:t.split(" ")}add(e){this._classNames.indexOf(e)<0&&(this._classNames.push(e),this.updateElementClass())}remove(e){const t=this._classNames.indexOf(e);t>=0&&(this._classNames.splice(t,1),this.updateElementClass())}updateElementClass(){this.element.className=this._classNames.join(" ")}}class i extends n{constructor(e){super(e),this.comment=e}replaceWith(e){this.comment.replaceWith(e.element)}insertAfter(e){this.comment.after(e.element)}}class r extends n{constructor(e){super(e),this.element=e}replaceWith(e){this.element.replaceWith(e.element)}insertAfter(e){this.element.after(e.element)}setInnerText(e){this.element.innerText=e}setInnerHtml(e){this.element.innerHTML=e}appendChild(e){this.element.appendChild(e.element)}setAttribute(e,t){this.element.setAttribute(e,t)}removeAttribute(e){this.element.removeAttribute(e)}setInnerElement(e){this.appendChild(e)}attachEventHandler(e,t){return this.element.addEventListener(e,t),t}detachEventHandler(e,t){this.element.removeEventListener(e,t)}remove(){this.element.parentNode&&this.element.parentNode.removeChild(this.element)}createClassNames(){return new s(this.element)}getValue(){return this.element.value}setValue(e){this.element.value=e}isChecked(){return this.element.checked}setChecked(e){this.element.checked=e}}class l extends n{constructor(e){super(e),this.textNode=e}replaceWith(e){this.textNode.replaceWith(e.element)}setText(e){this.textNode.nodeValue=e}insertAfter(e){this.textNode.after(e.element)}}t.NativeDomEngine=class{getRoot(){return new r(document.body)}createElement(e){return new r(document.createElement(e))}createMarkerElement(){return new i(document.createComment("JS-placeholder"))}createNamespaceElement(e,t){return new r(document.createElementNS(e,t))}resolveElement(e){if("string"==typeof e){const t=document.getElementById(e);if(t)return new r(t)}return e&&"object"==typeof e&&"nodeType"in e?new r(e):null}createTextNode(e){return new l(document.createTextNode(e))}}},456:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(455),JS.d=function(...e){const t=arguments.length,n=[];for(let s=2;s<t;s++)n.push(e[s]);const s=t>1&&void 0!==e[1]?e[1]:null,i=s?s.xmlns:void 0;return{element:e[0],attributes:s,nested:n,namespace:i}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}(()=>{var e=n(258);n(456);var t=n(956),s=n(895),i=function(){function e(){this.age=new t.ObservableValue(42),this.available=new t.ObservableValue(!0),this.status=new t.ObservableValue("active")}return e.prototype.getOlder=function(){this.age.mutate((function(e){return e+1}))},e.prototype.toggleAvailability=function(){this.available.mutate((function(e){return!e}))},e.prototype.toggleStatus=function(){this.status.mutate((function(e){return"active"===e?"stopped":"active"}))},e}();(new e.Application).render("root",(function(e){var t=(0,s.map)(e.available,(function(e){return!!e||void 0}));return JS.d("section",null,JS.d("h1",null,"Attributes Bindings Demo"),JS.d("table",null,JS.d("tbody",null,JS.d("tr",null,JS.d("th",null,"Bind number to value attribute:"),JS.d("td",null,JS.d("input",{value:e.age})),JS.d("td",null,JS.d("button",{_click:e.getOlder},"Increment"))),JS.d("tr",null,JS.d("th",null,"Bind to checked attribute:"),JS.d("td",null,JS.d("input",{type:"checkbox",checked:t})),JS.d("td",null,JS.d("button",{_click:e.toggleAvailability},"Toggle"))),JS.d("tr",null,JS.d("th",null,"Bind to class attribute"),JS.d("td",{class:e.status}),JS.d("td",null,JS.d("button",{_click:e.toggleStatus},"Toggle"))))))}),new i)})()})();