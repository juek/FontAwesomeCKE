/* see ./src/plugin.js for uncompressed version */
"use strict";!function(){function t(t,e){CKEDITOR.tools.extend(this,{editor:t,editable:t.editable(),doc:t.document,win:t.window},e,!0),this.inline=this.editable.isInline(),this.inline||(this.frame=this.win.getFrame()),this.target=this[this.inline?"editable":"doc"]}var i,h,l,a,c;function e(t,e){CKEDITOR.tools.extend(this,e,{editor:t},!0)}CKEDITOR.plugins.add("lineutils"),CKEDITOR.LINEUTILS_BEFORE=1,CKEDITOR.LINEUTILS_AFTER=2,CKEDITOR.LINEUTILS_INSIDE=4,t.prototype={start:function(t){var e,i,s,n,o=this,r=this.editor,h=this.doc,l=CKEDITOR.tools.eventsBuffer(50,function(){r.readOnly||"wysiwyg"!=r.mode||(o.relations={},(i=h.$.elementFromPoint(s,n))&&i.nodeType&&(e=new CKEDITOR.dom.element(i),o.traverseSearch(e),isNaN(s+n)||o.pixelSearch(e,s,n),t&&t(o.relations,s,n)))});this.listener=this.editable.attachListener(this.target,"mousemove",function(t){s=t.data.$.clientX,n=t.data.$.clientY,l.input()}),this.editable.attachListener(this.inline?this.editable:this.frame,"mouseout",function(){l.reset()})},stop:function(){this.listener&&this.listener.removeListener()},getRange:(i={},i[CKEDITOR.LINEUTILS_BEFORE]=CKEDITOR.POSITION_BEFORE_START,i[CKEDITOR.LINEUTILS_AFTER]=CKEDITOR.POSITION_AFTER_END,i[CKEDITOR.LINEUTILS_INSIDE]=CKEDITOR.POSITION_AFTER_START,function(t){var e=this.editor.createRange();return e.moveToPosition(this.relations[t.uid].element,i[t.type]),e}),store:function(){function s(t,e,i){var s=t.getUniqueId();s in i?i[s].type|=e:i[s]={element:t,type:e}}return function(t,e){var i;n(e,CKEDITOR.LINEUTILS_AFTER)&&E(i=t.getNext())&&i.isVisible()&&(s(i,CKEDITOR.LINEUTILS_BEFORE,this.relations),e^=CKEDITOR.LINEUTILS_AFTER),n(e,CKEDITOR.LINEUTILS_INSIDE)&&E(i=t.getFirst())&&i.isVisible()&&(s(i,CKEDITOR.LINEUTILS_BEFORE,this.relations),e^=CKEDITOR.LINEUTILS_INSIDE),s(t,e,this.relations)}}(),traverseSearch:function(t){var e,i,s,n;do{if(!((s=t.$["data-cke-expando"])&&s in this.relations)){if(t.equals(this.editable))return;if(E(t))for(e in this.lookups)(i=this.lookups[e](t))&&this.store(t,i)}}while((!I(n=t)||"true"!=n.getAttribute("contenteditable"))&&(t=t.getParent()))},pixelSearch:function(){var l=CKEDITOR.env.ie||CKEDITOR.env.webkit?function(t,e){return t.contains(e)}:function(t,e){return!!(16&t.compareDocumentPosition(e))};function r(t,e,i,s,n){for(var o,r=i,h=0;n(r);){if(r+=s,25==++h)return;if(o=this.doc.$.elementFromPoint(e,r))if(o!=t){if(l(t,o)&&(h=0,E(o=new CKEDITOR.dom.element(o))))return o}else h=0}}return function(t,e,i){var s=this.win.getViewPaneSize().height,n=r.call(this,t.$,e,i,-1,function(t){return 0<t}),o=r.call(this,t.$,e,i,1,function(t){return t<s});if(n)for(this.traverseSearch(n);!n.getParent().equals(t);)n=n.getParent();if(o)for(this.traverseSearch(o);!o.getParent().equals(t);)o=o.getParent();for(;(n||o)&&(n&&(n=n.getNext(E)),n&&!n.equals(o))&&(this.traverseSearch(n),o&&(o=o.getPrevious(E)),o&&!o.equals(n));)this.traverseSearch(o)}}(),greedySearch:function(){this.relations={};for(var t,e,i,s=this.editable.getElementsByTag("*"),n=0;t=s.getItem(n++);)if(!t.equals(this.editable)&&t.type==CKEDITOR.NODE_ELEMENT&&(t.hasAttribute("contenteditable")||!t.isReadOnly())&&E(t)&&t.isVisible())for(i in this.lookups)(e=this.lookups[i](t))&&this.store(t,e);return this.relations}},e.prototype={locate:function(){function s(t,e){var i=t.element[e===CKEDITOR.LINEUTILS_BEFORE?"getPrevious":"getNext"]();return i&&E(i)?(t.siblingRect=i.getClientRect(),e==CKEDITOR.LINEUTILS_BEFORE?(t.siblingRect.bottom+t.elementRect.top)/2:(t.elementRect.bottom+t.siblingRect.top)/2):e==CKEDITOR.LINEUTILS_BEFORE?t.elementRect.top:t.elementRect.bottom}return function(t){var e;for(var i in this.locations={},t)(e=t[i]).elementRect=e.element.getClientRect(),n(e.type,CKEDITOR.LINEUTILS_BEFORE)&&this.store(i,CKEDITOR.LINEUTILS_BEFORE,s(e,CKEDITOR.LINEUTILS_BEFORE)),n(e.type,CKEDITOR.LINEUTILS_AFTER)&&this.store(i,CKEDITOR.LINEUTILS_AFTER,s(e,CKEDITOR.LINEUTILS_AFTER)),n(e.type,CKEDITOR.LINEUTILS_INSIDE)&&this.store(i,CKEDITOR.LINEUTILS_INSIDE,(e.elementRect.top+e.elementRect.bottom)/2);return this.locations}}(),sort:function(t,e){for(var i in h=this.locations,l=[],h)for(var s in h[i])if(n=t,o=i,r=s,a=Math.abs(n-h[o][r]),l.length){for(c=0;c<l.length;c++)if(a<l[c].dist){l.splice(c,0,{uid:+i,type:s,dist:a});break}c==l.length&&l.push({uid:+i,type:s,dist:a})}else l.push({uid:+i,type:s,dist:a});var n,o,r;return void 0!==e?l.slice(0,e):l},store:function(t,e,i){this.locations[t]||(this.locations[t]={}),this.locations[t][e]=i}};var r={display:"block",width:"0px",height:"0px","border-color":"transparent","border-style":"solid",position:"absolute",top:"-6px"},d={height:"0px","border-top":"1px dashed red",position:"absolute","z-index":9999};function s(t,e){var i=t.editable();CKEDITOR.tools.extend(this,{editor:t,editable:i,inline:i.isInline(),doc:t.document,win:t.window,container:CKEDITOR.document.getBody(),winTop:CKEDITOR.document.getWindow()},e,!0),this.hidden={},this.visible={},this.inline||(this.frame=this.win.getFrame()),this.queryViewport();var s=CKEDITOR.tools.bind(this.queryViewport,this),n=CKEDITOR.tools.bind(this.hideVisible,this),o=CKEDITOR.tools.bind(this.removeAll,this);i.attachListener(this.winTop,"resize",s),i.attachListener(this.winTop,"scroll",s),i.attachListener(this.winTop,"resize",n),i.attachListener(this.win,"scroll",n),i.attachListener(this.inline?i:this.frame,"mouseout",function(t){var e=t.data.$.clientX,i=t.data.$.clientY;this.queryViewport(),(e<=this.rect.left||e>=this.rect.right||i<=this.rect.top||i>=this.rect.bottom)&&this.hideVisible(),(e<=0||e>=this.winTopPane.width||i<=0||i>=this.winTopPane.height)&&this.hideVisible()},this),i.attachListener(t,"resize",s),i.attachListener(t,"mode",o),t.on("destroy",o),this.lineTpl=new CKEDITOR.template('<div data-cke-lineutils-line="1" class="cke_reset_all" style="{lineStyle}"><span style="{tipLeftStyle}">&nbsp;</span><span style="{tipRightStyle}">&nbsp;</span></div>').output({lineStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},d,this.lineStyle,!0)),tipLeftStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},r,{left:"0px","border-left-color":"red","border-width":"6px 0 6px 6px"},this.tipCss,this.tipLeftStyle,!0)),tipRightStyle:CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},r,{right:"0px","border-right-color":"red","border-width":"6px 6px 6px 0"},this.tipCss,this.tipRightStyle,!0))})}function n(t,e){return t&e}s.prototype={removeAll:function(){var t;for(t in this.hidden)this.hidden[t].remove(),delete this.hidden[t];for(t in this.visible)this.visible[t].remove(),delete this.visible[t]},hideLine:function(t){var e=t.getUniqueId();t.hide(),this.hidden[e]=t,delete this.visible[e]},showLine:function(t){var e=t.getUniqueId();t.show(),this.visible[e]=t,delete this.hidden[e]},hideVisible:function(){for(var t in this.visible)this.hideLine(this.visible[t])},placeLine:function(t,e){var i,s,n;if(i=this.getStyle(t.uid,t.type)){for(n in this.visible)if(this.visible[n].getCustomData("hash")!==this.hash){s=this.visible[n];break}if(!s)for(n in this.hidden)if(this.hidden[n].getCustomData("hash")!==this.hash){this.showLine(s=this.hidden[n]);break}s||this.showLine(s=this.addLine()),s.setCustomData("hash",this.hash),(this.visible[s.getUniqueId()]=s).setStyles(i),e&&e(s)}},getStyle:function(t,e){var i,s=this.relations[t],n=this.locations[t][e],o={};if(s.siblingRect?o.width=Math.max(s.siblingRect.width,s.elementRect.width):o.width=s.elementRect.width,this.inline?o.top=n+this.winTopScroll.y-this.rect.relativeY:o.top=this.rect.top+this.winTopScroll.y+n,o.top-this.winTopScroll.y<this.rect.top||o.top-this.winTopScroll.y>this.rect.bottom)return!1;for(var r in this.inline?o.left=s.elementRect.left-this.rect.relativeX:(0<s.elementRect.left?o.left=this.rect.left+s.elementRect.left:(o.width+=s.elementRect.left,o.left=this.rect.left),0<(i=o.left+o.width-(this.rect.left+this.winPane.width))&&(o.width-=i)),o.left+=this.winTopScroll.x,o)o[r]=CKEDITOR.tools.cssLength(o[r]);return o},addLine:function(){var t=CKEDITOR.dom.element.createFromHtml(this.lineTpl);return t.appendTo(this.container),t},prepare:function(t,e){this.relations=t,this.locations=e,this.hash=Math.random()},cleanup:function(){var t;for(var e in this.visible)(t=this.visible[e]).getCustomData("hash")!==this.hash&&this.hideLine(t)},queryViewport:function(){this.winPane=this.win.getViewPaneSize(),this.winTopScroll=this.winTop.getScrollPosition(),this.winTopPane=this.winTop.getViewPaneSize(),this.rect=this.getClientRect(this.inline?this.editable:this.frame)},getClientRect:function(t){var e=t.getClientRect(),i=this.container.getDocumentPosition(),s=this.container.getComputedStyle("position");return e.relativeX=e.relativeY=0,"static"!=s&&(e.relativeY=i.y,e.relativeX=i.x,e.top-=e.relativeY,e.bottom-=e.relativeY,e.left-=e.relativeX,e.right-=e.relativeX),e}};var o={left:1,right:1,center:1},u={absolute:1,fixed:1};function I(t){return t&&t.type==CKEDITOR.NODE_ELEMENT}function E(t){return I(t)&&!(o[(e=t).getComputedStyle("float")]||o[e.getAttribute("align")])&&!u[t.getComputedStyle("position")];var e}CKEDITOR.plugins.lineutils={finder:t,locator:e,liner:s}}();
