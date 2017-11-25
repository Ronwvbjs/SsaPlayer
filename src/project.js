require=function t(e,n,i){function r(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return r(n||t)},u,u.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({AlphaFade:[function(t,e,n){"use strict";function i(t,e,n,i){r.call(this),this.targetNode_=t,this.destinationColor_=this.targetNode_.color.clone(),this.destinationColor_.setA(e),this.duration_=n,this.shouldDelete_=i}cc._RF.push(e,"2207bdpe4xLKrMxpZd1wlBL","AlphaFade");var r=t("SceneState"),o=t("Fade");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onActivated=function(t,e){t.changeState(new o(this.targetNode_,this.destinationColor_,this.duration_,this.shouldDelete_))},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){},e.exports=i,cc._RF.pop()},{Fade:"Fade",SceneState:"SceneState"}],Duration:[function(t,e,n){"use strict";cc._RF.push(e,"70de4dQtdBIaosZci+YDvzF","Duration");var i={CHANGE_SCENE:.75,START_FADE:.5,FAILURE:2,SUCCESS:2,APPETIZER:1.5,PRIZE:1};e.exports=i,cc._RF.pop()},{}],EventDispatcher:[function(t,e,n){"use strict";function i(){this._listeners=null,this._captureListeners=null}cc._RF.push(e,"49b06Al4KtAC52bgPh4blML","EventDispatcher");var r={};r.Event=t("SceneState");var o=i.prototype;i.initialize=function(t){t.addEventListener=o.addEventListener,t.on=o.on,t.removeEventListener=t.off=o.removeEventListener,t.removeAllEventListeners=o.removeAllEventListeners,t.hasEventListener=o.hasEventListener,t.dispatchEvent=o.dispatchEvent,t._dispatchEvent=o._dispatchEvent,t.willTrigger=o.willTrigger},o.addEventListener=function(t,e,n){var i,r=(i=n?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{})[t];return r&&this.removeEventListener(t,e,n),(r=i[t])?r.push(e):i[t]=[e],e},o.on=function(t,e,n,i,r,o){return e.handleEvent&&(n=n||e,e=e.handleEvent),n=n||this,this.addEventListener(t,function(t){e.call(n,t,r),i&&t.remove()},o)},o.removeEventListener=function(t,e,n){var i=n?this._captureListeners:this._listeners;if(i){var r=i[t];if(r)for(var o=0,a=r.length;o<a;o++)if(r[o]==e){1==a?delete i[t]:r.splice(o,1);break}}},o.off=o.removeEventListener,o.removeAllEventListeners=function(t){t?(this._listeners&&delete this._listeners[t],this._captureListeners&&delete this._captureListeners[t]):this._listeners=this._captureListeners=null},o.dispatchEvent=function(t,e,n){if("string"==typeof t){var i=this._listeners;if(!(e||i&&i[t]))return!0;t=new r.Event(t,e,n)}else t.target&&t.clone&&(t=t.clone());try{t.target=this}catch(t){}if(t.bubbles&&this.parent){for(var o=this,a=[o];o.parent;)a.push(o=o.parent);var s,c=a.length;for(s=c-1;s>=0&&!t.propagationStopped;s--)a[s]._dispatchEvent(t,1+(0==s));for(s=1;s<c&&!t.propagationStopped;s++)a[s]._dispatchEvent(t,3)}else this._dispatchEvent(t,2);return!t.defaultPrevented},o.hasEventListener=function(t){var e=this._listeners,n=this._captureListeners;return!!(e&&e[t]||n&&n[t])},o.willTrigger=function(t){for(var e=this;e;){if(e.hasEventListener(t))return!0;e=e.parent}return!1},o.toString=function(){return"[EventDispatcher]"},o._dispatchEvent=function(t,e){var n,i,r=e<=2?this._captureListeners:this._listeners;if(t&&r&&(i=r[t.type])&&(n=i.length)){try{t.currentTarget=this}catch(t){}try{t.eventPhase=0|e}catch(t){}t.removed=!1,i=i.slice();for(var o=0;o<n&&!t.immediatePropagationStopped;o++){var a=i[o];a.handleEvent?a.handleEvent(t):a(t),t.removed&&(this.off(t.type,a,1==e),t.removed=!1)}}2===e&&this._dispatchEvent(t,2.1)},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],Event:[function(t,e,n){"use strict";function i(t,e,n){this.type=t,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!e,this.cancelable=!!n,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}cc._RF.push(e,"e569fdNic5A+Z8/rVLU3uda","Event");var r=i.prototype;r.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},r.stopPropagation=function(){this.propagationStopped=!0},r.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},r.remove=function(){this.removed=!0},r.clone=function(){return new i(this.type,this.bubbles,this.cancelable)},r.set=function(t){for(var e in t)this[e]=t[e];return this},r.toString=function(){return"[Event (type="+this.type+")]"},e.exports=i,cc._RF.pop()},{}],Fade:[function(t,e,n){"use strict";function i(t,e,n,i){r.call(this),this.targetNode_=t,this.destinationColor_=e,this.duration_=n,this.shouldDelete_=i,this.currentR_=this.currentG_=this.currentB_=this.currentA_=0,this.deltaR_=this.deltaG_=this.deltaB_=this.deltaA_=0,this.elapsedTime_=0,this.canUpdate_=!1,this.isPlaying_=!1}cc._RF.push(e,"57b33kZBkhM7rTy5FsUPQBu","Fade");var r=t("SceneState");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.isPlaying=function(){return this.isPlaying_},i.prototype.onActivated=function(t,e){this.currentR_=this.targetNode_.color.getR(),this.currentG_=this.targetNode_.color.getG(),this.currentB_=this.targetNode_.color.getB(),this.currentA_=this.targetNode_.opacity,this.deltaR_=(this.destinationColor_.getR()-this.currentR_)/this.duration_,this.deltaG_=(this.destinationColor_.getG()-this.currentG_)/this.duration_,this.deltaB_=(this.destinationColor_.getB()-this.currentB_)/this.duration_,this.deltaA_=(this.destinationColor_.getA()-this.currentA_)/this.duration_,this.elapsedTime_=0,this.canUpdate_=!0,this.isPlaying_=!0},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){this.canUpdate_&&(this.currentR_=this.currentR_+this.deltaR_*e,this.currentR_<0?this.currentR_=0:this.currentR_>255&&(this.currentR_=255),this.currentG_=this.currentG_+this.deltaG_*e,this.currentG_<0?this.currentG_=0:this.currentG_>255&&(this.currentG_=255),this.currentB_=this.currentB_+this.deltaB_*e,this.currentB_<0?this.currentB_=0:this.currentB_>255&&(this.currentB_=255),this.currentA_=this.currentA_+this.deltaA_*e,this.currentA_<0?this.currentA_=0:this.currentA_>255&&(this.currentA_=255),this.targetNode_.color=new cc.Color(this.currentR_,this.currentG_,this.currentB_),this.targetNode_.opacity=this.currentA_,this.elapsedTime_+=e,this.elapsedTime_>this.duration_&&(this.shouldDelete_?(this.targetNode_.parent.removeChild(this.targetNode_,!0),this.targetNode_.destroy()):(this.targetNode_.color=new cc.Color(this.destinationColor_.getR(),this.destinationColor_.getG(),this.destinationColor_.getB()),this.targetNode_.opacity=this.destinationColor_.getA()),this.canUpdate_=!1,this.isPlaying_=!1,t.changeState()))},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],FrontEnd:[function(t,e,n){"use strict";cc._RF.push(e,"103c2UVWe5KJZoP13Nz39Hg","FrontEnd");var i=t("GameScene"),r=t("LoadScene"),o=(t("Fade"),t("ScreenFade")),a=t("WaitAnyKey"),s=t("Duration"),c=(t("NoOperation"),t("GameStart"));cc.Class({extends:i,properties:{gameStart:cc.Node},onLoad:function(){this._super(),this.eventListener_=null,this.canvas.opacity=0},onSceneActivated:function(t){t.getNewState()instanceof a?this.gameStart.getComponent(c).playBlink():t.getOldState()instanceof a&&(this.gameStart.getComponent(c).stopBlink(),this.gameStart.opacity=255,this.removeEventListener(i.EventType.STATE_ACTIVE,this.eventListener_,!1))},start:function(){this.eventListener_=this.onSceneActivated.bind(this),this.addEventListener(i.EventType.STATE_ACTIVE,this.eventListener_,!1),this.pushState(new r("SsLogo")),this.pushState(new o(cc.Color.TRANSPARENT,new cc.Color,s.CHANGE_SCENE)),this.pushState(new a),this.changeState(new o(cc.Color.BLACK,cc.Color.TRANSPARENT,s.CHANGE_SCENE,!0))},update:function(t){this.currentState.onUpdate(this,t)}}),cc._RF.pop()},{Duration:"Duration",Fade:"Fade",GameScene:"GameScene",GameStart:"GameStart",LoadScene:"LoadScene",NoOperation:"NoOperation",ScreenFade:"ScreenFade",WaitAnyKey:"WaitAnyKey"}],GameBehaviour:[function(t,e,n){"use strict";cc._RF.push(e,"6a287B356pHwZhUxq1NFeUE","GameBehaviour"),cc.Class({extends:cc.Component,getPosition:function(){return this.node.getPosition()},setPosition:function(t){this.node.setPosition(t.x,t.y)},getX:function(){return this.node.x},setX:function(t){this.node.x=t},getY:function(){return this.node.y},setY:function(t){this.node.y=t},getZIndex:function(){return this.node.zIndex},setZIndex:function(t){this.node.zIndex=t},sortAllChildren:function(){this.node.sortAllChildren()},runAction:function(t){return this.node.runAction(t)}}),cc._RF.pop()},{}],GameScene:[function(t,e,n){"use strict";cc._RF.push(e,"a832f0Sxo5AvKfy3Gora9sI","GameScene");var i=t("SceneEvent"),r=t("EventDispatcher"),o=cc.Class({extends:cc.Component,properties:{canvas:cc.Node},statics:{EventType:{STATE_ACTIVE:"STATE_ACTIVE",STATE_DEACTIVE:"STATE_DEACTIVE"}},isStateEmpty:function(){return 0===this.states_.length},getStateCount:function(){return this.states_.length},containsState:function(t){for(var e=0;e<this.states_.length;++e)if(this.states_[e]===t)return!0;return!1},clearStates:function(){this.states_=new Array},pushState:function(t){this.states_.push(t)},popState:function(){return this.states_.pop()},peekState:function(){return this.states_[this.states_.length-1]},changeState:function(t){var e;null==t&&(t=this.popState()),null!=this.currentState&&(this.currentState.onDeactivated(this,t),this.dispatchEvent(new i(this.currentState,t,o.EventType.STATE_DEACTIVE,!1,!0),!1,!0)),e=this.currentState,this.currentState=t,cc.log("State - Count:",this.states_.length," - OldState:",e," - NewState:",this.currentState),this.currentState.onActivated(this,e),this.dispatchEvent(new i(e,this.currentState,o.EventType.STATE_ACTIVE,!1,!0),!1,!0)},onLoad:function(){this.currentState=null,this.states_=[],r.initialize(this)}});cc._RF.pop()},{EventDispatcher:"EventDispatcher",SceneEvent:"SceneEvent"}],GameStart:[function(t,e,n){"use strict";cc._RF.push(e,"6751ccllw1LGL7/D4LNDNA6","GameStart");var i=t("GameBehaviour"),r=cc.Class({extends:i,statics:{AnimationClip:{BLINK:"GameStartBlink"}},onLoad:function(){this.animation_=this.getComponent(cc.Animation)},start:function(){},playBlink:function(){this.animation_.play(r.AnimationClip.BLINK).wrapMode=cc.WrapMode.Loop},stopBlink:function(){this.animation_.stop(r.AnimationClip.BLINK)}});cc._RF.pop()},{GameBehaviour:"GameBehaviour"}],LoadScene:[function(t,e,n){"use strict";function i(t){r.call(this),this.name_=t}cc._RF.push(e,"c9071mOY8pCVqqQox4qC6wW","LoadScene");var r=t("SceneState");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onActivated=function(t,e){cc.director.loadScene(this.name_)},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],NoOperation:[function(t,e,n){"use strict";function i(){r.call(this)}cc._RF.push(e,"1588cJEwyBGcZvFy5AkT7mY","NoOperation");var r=t("SceneState");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onActivated=function(t,e){},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],SceneEvent:[function(t,e,n){"use strict";function i(t,e,n,i,o){r.call(this,n,i,o),this.oldState_=t,this.newState_=e}cc._RF.push(e,"b15684uWktFI5Q8YQ2QuNzq","SceneEvent");var r=t("Event");Object.setPrototypeOf(r.prototype,i.prototype),i.prototype.getOldState=function(){return this.oldState_},i.prototype.getNewState=function(){return this.newState_},e.exports=i,cc._RF.pop()},{Event:"Event"}],SceneState:[function(t,e,n){"use strict";function i(){}cc._RF.push(e,"8484elEWe5By77zx1KJJTNy","SceneState"),i.prototype.onActivated=function(t,e){throw new Error("Not Implemented")},i.prototype.onDeactivated=function(t,e){throw new Error("Not Implemented")},i.prototype.onUpdate=function(t,e){throw new Error("Not Implemented")},e.exports=i,cc._RF.pop()},{}],ScreenFade:[function(t,e,n){"use strict";function i(t,e,n,i){r.call(this),this.sourceColor_=t,this.destinationColor_=e,this.duration_=n,this.shouldDelete_=i,this.targetNode_=null}cc._RF.push(e,"496cfmlLD1GZIE2KajYwsHT","ScreenFade");var r=t("SceneState"),o=t("Fade");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onLoadResComplete=function(t,e){t?cc.error(t.message||t):(this.targetNode_=cc.instantiate(e),this.targetNode_.color=new cc.Color(this.sourceColor_.getR(),this.sourceColor_.getG(),this.sourceColor_.getB()),this.targetNode_.opacity=this.sourceColor_.getA(),this.sender_.canvas.opacity=255,this.sender_.canvas.addChild(this.targetNode_),this.sender_.changeState(new o(this.targetNode_,this.destinationColor_,this.duration_,this.shouldDelete_)))},i.prototype.onActivated=function(t,e){this.sender_=t,cc.loader.loadRes("WhiteScreen",this.onLoadResComplete.bind(this))},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){},e.exports=i,cc._RF.pop()},{Fade:"Fade",SceneState:"SceneState"}],SsAnimationList:[function(t,e,n){"use strict";cc._RF.push(e,"7fe846l/stA3552E9Q9rJu8","SsAnimationList"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){}}),cc._RF.pop()},{}],SsAnimation:[function(t,e,n){"use strict";function i(t,e){this.ssaData=t,this.imageList=e,this.partsMap=new Array,this.parts=t.parts;for(var n=0;n<this.parts.length;n++)this.partsMap[this.parts[n]]=n}cc._RF.push(e,"91469yKzNdBt4noiYHU4N7u","SsAnimation"),i.prototype.getCanvasWidth=function(){return this.ssaData.CanvasWidth},i.prototype.getCanvasHeight=function(){return this.ssaData.CanvasHeight},i.prototype.getCanvasWidth=function(){return this.ssaData.CanvasWidth},i.prototype.getFPS=function(){return this.ssaData.fps},i.prototype.getFrameCount=function(){return this.ssaData.ssa.length},i.prototype.getParts=function(){return this.ssaData.parts},i.prototype.getPartsMap=function(){return this.partsMap},i.prototype.drawFunc=function(t,e,n,i,r,o,a,s,c){var h=new Array("source-over","source-over","lighter","source-over"),u=this.ssaData.ssa[e];t.begin();for(var p=0;p<u.length;p++){var l=u[p],d=l.length,_=l[0],f=this.imageList.getImage(l[1]),y=l[2],m=l[3],S=l[4],g=l[5],v=l[6]*s,x=l[7]*c,A=S,C=g;if(v+=n,x+=i,S>0&&g>0){var E=l[8],F=l[9],T=l[10],L=d>11?l[11]:0,w=d>12?l[12]:0,R=d>13&&0!=l[13]?-1:1,b=d>14&&0!=l[14]?-1:1,N=d>15?l[15]:1,D=d>16?l[16]:0;t.globalCompositeOperation=h[D],t.globalAlpha=N,t.setTransform(1*s,0,0,1*c,v,-x),t.translate(this.getCanvasWidth()/2,this.getCanvasHeight()/2),cc._renderType===cc.game.RENDER_TYPE_WEBGL||(cc._renderType,cc.game.RENDER_TYPE_CANVAS),t.rotate(-E),t.scale(F,T),t.translate(A/2-L,-(C/2-w)),t.scale(R,b),t.drawImage(f,y,m,S,g,-A/2,-C/2,A,C)}var P=a[_];P.x=v,P.y=x}t.end()},e.exports=i,cc._RF.pop()},{}],SsContext:[function(t,e,n){"use strict";function i(){this.matrix=new r,this.angle_=0,this.renderTexture_=new cc.RenderTexture,this.renderTexture_.name="RenderTexture"}cc._RF.push(e,"864bficnydEDIVZ5zPI3zxM","SsContext");var r=t("matrix").Matrix;i.prototype.setCanvasSize=function(t,e){this.renderTexture_.initWithWidthAndHeight(t,e,cc.Texture2D.PIXEL_FORMAT_RGBA8888,0)},i.prototype.getRenderTexture=function(){return this.renderTexture_},i.prototype.setTransform=function(t,e,n,i,r,o){this.matrix=this.matrix.setTransform(t,e,n,i,r,o)},i.prototype.rotate=function(t){t=180*t/Math.PI,this.angle_=t},i.prototype.scale=function(t,e){this.matrix=this.matrix.scale(t,e)},i.prototype.translate=function(t,e){this.matrix=this.matrix.translate(t,e)},i.prototype.begin=function(){this.renderTexture_.beginWithClear(0,0,0,0)},i.prototype.drawImage=function(t,e,n,i,r,o,a,s,c){var h;(h=new _ccsg.Sprite(t)).x=this.matrix.e,h.y=this.matrix.f,h.scaleX=this.matrix.a,h.scaleY=this.matrix.d,h.rotation=this.angle_,h.opacity=255*this.globalAlpha,h.initWithTexture(h.getTexture(),new cc.rect(e,n,i,r),!1),h.retain(),h.visit(),h.release(),this.matrix.reset()},i.prototype.end=function(){this.renderTexture_.end()},e.exports=i,cc._RF.pop()},{matrix:"matrix"}],SsImageList:[function(t,e,n){"use strict";function i(t,e,n,i,r){this.target_=t,this.imageFiles_=e,this.rootDirectory_=n,this.loadCallBack_=r,this.images_=new Array(e.length),i&&this.loadImageAll()}cc._RF.push(e,"2528aoVRSFAlpBBCF8RiH66","SsImageList"),i.prototype.getLength=function(){return this.images_.length},i.prototype.isAllLoaded=function(){for(var t=0;t<this.images_.length;++t)if(null==this.images_[t])return!1;return!0},i.prototype.loadImage=function(t){var e,n,i;if(null!=this.images_[t]&&(this.images_[t].destroy(),this.images_[t]=null),e=cc.url.raw("resources/"+this.rootDirectory_+this.imageFiles_[t]),null==(n=cc.textureCache.getTextureForKey(e)))i=this,n=cc.textureCache.addImage(e,function(){n.isLoaded()&&(i.images_[t]=n),i.callLoadCallback()});else if(n.isLoaded())this.images_[t]=n,this.callLoadCallback();else{i=this;this.target_.schedule(function e(r){n.isLoaded()&&(i.images_[t]=n,i.callLoadCallback(),i.target_.unschedule(e))},0)}},i.prototype.loadImageAll=function(){for(var t=0;t<this.imageFiles_.length;++t)this.loadImage(t)},i.prototype.callLoadCallback=function(){this.isAllLoaded()&&null!=this.loadCallBack_&&this.loadCallBack_()},i.prototype.getImage=function(t){return this.images_[t]},i.prototype.setImage=function(t,e){this.imageFiles_[t]=e,this.loadImage(t)},i.prototype.setLoadCallback=function(t){this.loadCallBack_=t},e.exports=i,cc._RF.pop()},{}],SsLogo:[function(t,e,n){"use strict";cc._RF.push(e,"c7b2arFPwNKg5WKJbl2ofkw","SsLogo");var i=t("GameScene"),r=t("LoadScene"),o=(t("Fade"),t("ScreenFade")),a=(t("WaitAnyKey"),t("Duration")),s=t("NoOperation"),c=t("SsRoot");cc.Class({extends:i,properties:{newSplash:c},onLoad:function(){this._super(),this.canvas.opacity=0},onNewSplashEnd:function(){this.pushState(new r("FrontEnd")),this.changeState(new o(cc.Color.TRANSPARENT,new cc.Color,a.CHANGE_SCENE))},start:function(){this.hasAnimationPlayed_=!1,this.newSplash.setEndCallBack(this.onNewSplashEnd.bind(this)),this.pushState(new s),this.changeState(new o(cc.Color.BLACK,cc.Color.TRANSPARENT,a.CHANGE_SCENE,!0))},update:function(t){!this.hasAnimationPlayed_&&this.newSplash.canPlayAnimation()&&(this.hasAnimationPlayed_=!0,this.newSplash.playAnimation(0,1)),this.currentState.onUpdate(this,t)}}),cc._RF.pop()},{Duration:"Duration",Fade:"Fade",GameScene:"GameScene",LoadScene:"LoadScene",NoOperation:"NoOperation",ScreenFade:"ScreenFade",SsRoot:"SsRoot",WaitAnyKey:"WaitAnyKey"}],SsPartState:[function(t,e,n){"use strict";cc._RF.push(e,"e67betS/yNISJcAWs3YGl+l","SsPartState"),e.exports=function(t){this.name=t,this.x=0,this.y=0},cc._RF.pop()},{}],SsRoot:[function(t,e,n){"use strict";cc._RF.push(e,"52ad4/AKRxCqI5yU0UXCWIa","SsRoot");var i=t("SsImageList"),r=t("SsAnimation"),o=t("SsPartState"),a=t("SsContext");cc.Class({extends:cc.Component,properties:{flipH:!1,flipV:!1,jsonURL:"",initialStoppingAnimation:!1,initialAnimationIndex:0,initialAnimationLoop:0},statics:{},canPlayAnimation:function(){return this.canPlayAnimation_},playAnimation:function(t,e,n,i){this.hasAllImageLoaded_&&(e=void 0===e?0:e,n=void 0===n?0:n,i=void 0===i?1:i,this.setAnimation(new r(this.json_[t].animation,this.imageLists_[t])),this.setLoop(e),this.setFrameNo(n),this.setStep(i),this.canUpdate_=!0)},stopAnimation:function(){},onJSONLoadComplete:function(t,e){var n;if(t)for(r=0;r<t.length;r++)cc.error("Error url ["+t[r]+"]: "+e.getError(t[r]));else{this.json_=e,this.imageLists_=new Array(this.json_.length);for(var r=0;r<this.json_.length;++r)this.imageLists_[r]=new i(this,this.json_[r].images,this.rootDirectory_,!0);n=this;this.schedule(function t(e){n.hasAllImageLoaded_=!0;for(var i=0;i<n.imageLists_.length;++i)n.imageLists_[i].isAllLoaded()||(n.hasAllImageLoaded_=!1);n.hasAllImageLoaded_&&(n.canPlayAnimation_=!0,n.initialStoppingAnimation||n.playAnimation(n.initialAnimationIndex,n.initialAnimationLoop),n.unschedule(t))},0)}},onLoad:function(){this.inner_={animation:null,playingFrame:0,prevDrawnTime:0,step:1,loop:0,loopCount:0,endCallBack:null,partStates:null,initPartStates:function(){if(this.partStates=null,null!=this.animation){for(var t=this.animation.getParts(),e=new Array,n=0;n<t.length;n++)e.push(new o(t[n]));this.partStates=e}}},this.context_=new a,this.hasAllImageLoaded_=!1,this.canPlayAnimation_=!1,this.canUpdate_=!1,this.jsonURL+=".json",this.rootDirectory_=this.jsonURL.split("/",2)[0]+"/",cc.loader.load(cc.url.raw("resources/"+this.jsonURL),this.onJSONLoadComplete.bind(this))},start:function(){this.context_=new a},update:function(t){if(!this.canUpdate_)return!1;this.draw(this.context_,(new Date).getTime())},setAnimation:function(t){var e;this.inner_.animation=t,this.inner_.initPartStates(),this.inner_.playingFrame=0,this.inner_.prevDrawnTime=0,this.clearLoopCount(),this.context_.setCanvasSize(t.getCanvasWidth(),t.getCanvasHeight()),(e=this.context_.getRenderTexture()).sprite.texture.setAntiAliasTexParameters();var n=this.node.getChildByName(e.name);null==n&&((n=new cc.Node(e.name))._sgNode=e,this.node.addChild(n)),n.width=t.getCanvasWidth(),n.height=t.getCanvasHeight()},getAnimation:function(){return this.inner_.animation},setFrameNo:function(t){this.inner_.playingFrame=t,this.inner_.prevDrawnTime=0},getFrameNo:function(){return this.inner_.playingFrame>>0},setStep:function(t){this.inner_.step=t},getStep:function(){return this.inner_.step},setLoop:function(t){t<0||(this.inner_.loop=t)},getLoop:function(){return this.inner_.loop},getLoopCount:function(){return this.inner_.loopCount},clearLoopCount:function(){this.inner_.loopCount=0},setEndCallBack:function(t){this.inner_.endCallBack=t},getPartState:function(t){if(null==this.inner_.partStates)return null;var e=this.inner_.animation.getPartsMap()[t];return null==e?null:this.inner_.partStates[e]},draw:function(t,e){if(null!=this.inner_.animation){if((0==this.inner_.loop||this.inner_.loop>this.inner_.loopCount)&&this.inner_.prevDrawnTime>0){var n=(e-this.inner_.prevDrawnTime)/(1e3/this.inner_.animation.getFPS());this.inner_.playingFrame+=n*this.inner_.step;var i=this.inner_.playingFrame/this.inner_.animation.getFrameCount()>>0;this.inner_.step>=0?this.inner_.playingFrame>=this.inner_.animation.getFrameCount()&&(this.inner_.loopCount+=i,0==this.inner_.loop||this.inner_.loopCount<this.inner_.loop?this.inner_.playingFrame%=this.inner_.animation.getFrameCount():(this.inner_.playingFrame=this.inner_.animation.getFrameCount()-1,null!=this.inner_.endCallBack&&this.inner_.endCallBack())):this.inner_.playingFrame<0&&(this.inner_.loopCount+=1-i,0==this.inner_.loop||this.inner_.loopCount<this.inner_.loop?(this.inner_.playingFrame%=this.inner_.animation.getFrameCount(),this.inner_.playingFrame<0&&(this.inner_.playingFrame+=this.inner_.animation.getFrameCount())):(this.inner_.playingFrame=0,null!=this.inner_.endCallBack&&this.inner_.endCallBack()))}this.inner_.prevDrawnTime=e,this.inner_.animation.drawFunc(t,this.getFrameNo(),this.node.x,this.node.y,this.flipH,this.flipV,this.inner_.partStates,this.node.scaleX,this.node.scaleY)}}});cc._RF.pop()},{SsAnimation:"SsAnimation",SsContext:"SsContext",SsImageList:"SsImageList",SsPartState:"SsPartState"}],WaitAction:[function(t,e,n){"use strict";function i(t){r.call(this),t instanceof Array||(t=[t]),this.actions_=t}cc._RF.push(e,"a5712NIXOhCSJ0KCMsR+5zq","WaitAction");var r=t("SceneState");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onActivated=function(t,e){},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){for(var n=0;n<this.actions_.length;++n)if(!this.actions_[n].isDone())return;t.changeState()},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],WaitAnyKey:[function(t,e,n){"use strict";function i(){r.call(this),this.anyKeyDown_=!1,this.keyboardListener_=null}cc._RF.push(e,"c4450ebT0NI8Lp6Bev9RRuQ","WaitAnyKey");var r=t("SceneState");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onTouchStart=function(t){this.anyKeyDown_=!0},i.prototype.onActivated=function(t,e){var n;this.anyKeyDown_=!1,n=this,this.keyboardListener_=cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,e){n.anyKeyDown_=!0}},t.node),t.canvas.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){this.anyKeyDown_&&(cc.eventManager.removeListener(this.keyboardListener_),t.canvas.off(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),t.changeState())},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],WaitSeconds:[function(t,e,n){"use strict";function i(t){r.call(this),this.seconds_=t,this.deltaTime_=0}cc._RF.push(e,"9a1912RvR5MN5yGXgO88uYk","WaitSeconds");var r=t("SceneState");Object.setPrototypeOf(i.prototype,r.prototype),i.prototype.onActivated=function(t,e){this.deltaTime_=0},i.prototype.onDeactivated=function(t,e){},i.prototype.onUpdate=function(t,e){this.deltaTime_+=e,this.deltaTime_>this.seconds_&&t.changeState()},e.exports=i,cc._RF.pop()},{SceneState:"SceneState"}],matrix:[function(t,e,n){"use strict";function i(t,e){var n,i=this;i._t=i.transform,i.a=i.d=1,i.b=i.c=i.e=i.f=0,t&&(i.context=t).setTransform(1,0,0,1,0,0),Object.defineProperty(i,"element",{get:function(){return n},set:function(t){n||(i._px=i._getPX(),i.useCSS3D=!1),n=t,(i._st=n.style)[i._px]=i.toCSS()}}),e&&(i.element=e)}cc._RF.push(e,"b2e46Z/qY1Jir4hpH9otBj/","matrix"),i.fromTriangles=function(t,e,n){var r,o,a,s,c,h,u=new i,p=new i(n);return Array.isArray(t)?"number"==typeof t[0]?(a=t[4],s=t[5],c=e[4],h=e[5],r=[t[0]-a,t[1]-s,t[2]-a,t[3]-s,a,s],o=[e[0]-c,e[1]-h,e[2]-c,e[3]-h,c,h]):(a=t[2].x,s=t[2].y,c=e[2].x,h=e[2].y,r=[t[0].x-a,t[0].y-s,t[1].x-a,t[1].y-s,a,s],o=[e[0].x-c,e[0].y-h,e[1].x-c,e[1].y-h,c,h]):(r=[t.px-t.rx,t.py-t.ry,t.qx-t.rx,t.qy-t.ry,t.rx,t.ry],o=[e.px-e.rx,e.py-e.ry,e.qx-e.rx,e.qy-e.ry,e.rx,e.ry]),u.setTransform.apply(u,r),p.setTransform.apply(p,o),p.multiply(u.inverse())},i.fromSVGTransformList=function(t,e,n){for(var r=new i(e,n),o=0;o<t.length;)r.multiply(t[o++].matrix);return r},i.from=function(t,e,n,r,o,a,s,c){var h,u,p,l=new i(s,c);if("number"==typeof t)l.setTransform(t,e,n,r,o,a);else if("number"==typeof t.x)p=Math.sqrt(t.x*t.x+t.y*t.y),h=u=1,r?h=p:u=p,l.translate(e||0,n||0).rotateFromVector(t).scaleU(h).translate(u,0);else{if("boolean"==typeof t.is2D&&!t.is2D)throw"Cannot use 3D DOMMatrix.";e&&(l.context=e),n&&(l.element=n),l.multiply(t)}return l},i.prototype={_getPX:function(){for(var t,e=["t","oT","msT","mozT","webkitT","khtmlT"],n=0,i=document.createElement("div").style;t=e[n++];)if(void 0!==i[t+"ransform"])return t+"ransform"},concat:function(t){return this.clone().multiply(t)},flipX:function(){return this._t(-1,0,0,1,0,0)},flipY:function(){return this._t(1,0,0,-1,0,0)},reflectVector:function(t,e){var n=this.applyToPoint(0,1),i=2*(n.x*t+n.y*e);return t-=i*n.x,e-=i*n.y,{x:t,y:e}},reset:function(){return this.setTransform(1,0,0,1,0,0)},rotate:function(t){var e=Math.cos(t),n=Math.sin(t);return this._t(e,n,-n,e,0,0)},rotateFromVector:function(t,e){return this.rotate("number"==typeof t?Math.atan2(e,t):Math.atan2(t.y,t.x))},rotateDeg:function(t){return this.rotate(t*Math.PI/180)},scaleU:function(t){return this._t(t,0,0,t,0,0)},scale:function(t,e){return this._t(t,0,0,e,0,0)},scaleX:function(t){return this._t(t,0,0,1,0,0)},scaleY:function(t){return this._t(1,0,0,t,0,0)},scaleFromVector:function(t,e){return this.scaleU(Math.sqrt(t*t+e*e))},shear:function(t,e){return this._t(1,e,t,1,0,0)},shearX:function(t){return this._t(1,0,t,1,0,0)},shearY:function(t){return this._t(1,t,0,1,0,0)},skew:function(t,e){return this.shear(Math.tan(t),Math.tan(e))},skewDeg:function(t,e){return this.shear(Math.tan(t/180*Math.PI),Math.tan(e/180*Math.PI))},skewX:function(t){return this.shearX(Math.tan(t))},skewY:function(t){return this.shearY(Math.tan(t))},setTransform:function(t,e,n,i,r,o){var a=this;return a.a=t,a.b=e,a.c=n,a.d=i,a.e=r,a.f=o,a._x()},translate:function(t,e){return this._t(1,0,0,1,t,e)},translateX:function(t){return this._t(1,0,0,1,t,0)},translateY:function(t){return this._t(1,0,0,1,0,t)},transform:function(t,e,n,i,r,o){var a=this,s=a.a,c=a.b,h=a.c,u=a.d,p=a.e,l=a.f;return a.a=s*t+h*e,a.b=c*t+u*e,a.c=s*n+h*i,a.d=c*n+u*i,a.e=s*r+h*o+p,a.f=c*r+u*o+l,a._x()},multiply:function(t){return this._t(t.a,t.b,t.c,t.d,t.e,t.f)},divide:function(t){return this.multiply(t.inverse())},divideScalar:function(t){var e=this;if(!t)throw"Division on zero";return e.a/=t,e.b/=t,e.c/=t,e.d/=t,e.e/=t,e.f/=t,e._x()},inverse:function(t,e){var n=this,r=new i(t?n.context:null,e?n.element:null),o=n.determinant();if(0===o)throw"Matrix not invertible.";return r.a=n.d/o,r.b=-n.b/o,r.c=-n.c/o,r.d=n.a/o,r.e=(n.c*n.f-n.d*n.e)/o,r.f=-(n.a*n.f-n.b*n.e)/o,r},interpolate:function(t,e,n,r){var o=this,a=new i(n,r);return a.a=o.a+(t.a-o.a)*e,a.b=o.b+(t.b-o.b)*e,a.c=o.c+(t.c-o.c)*e,a.d=o.d+(t.d-o.d)*e,a.e=o.e+(t.e-o.e)*e,a.f=o.f+(t.f-o.f)*e,a._x()},interpolateAnim:function(t,e,n,r){var o=new i(n,r),a=this.decompose(),s=t.decompose(),c=a.translate,h=s.translate,u=a.scale;return o.translate(c.x+(h.x-c.x)*e,c.y+(h.y-c.y)*e),o.rotate(a.rotation+(s.rotation-a.rotation)*e),o.scale(u.x+(s.scale.x-u.x)*e,u.y+(s.scale.y-u.y)*e),o._x()},decompose:function(t){var e=this,n=e.a,i=e.b,r=e.c,o=e.d,a=Math.acos,s=Math.atan,c=Math.sqrt,h=Math.PI,u={x:e.e,y:e.f},p=0,l={x:1,y:1},d={x:0,y:0},_=n*o-i*r;if(t)n?(d={x:s(r/n),y:s(i/n)},l={x:n,y:_/n}):i?(p=.5*h,l={x:i,y:_/i},d.x=s(o/i)):(l={x:r,y:o},d.x=.25*h);else if(n||i){var f=c(n*n+i*i);p=i>0?a(n/f):-a(n/f),l={x:f,y:_/f},d.x=s((n*r+i*o)/(f*f))}else if(r||o){var y=c(r*r+o*o);p=.5*h-(o>0?a(-r/y):-a(r/y)),l={x:_/y,y:y},d.y=s((n*r+i*o)/(y*y))}else l={x:0,y:0};return{translate:u,rotation:p,scale:l,skew:d}},determinant:function(){return this.a*this.d-this.b*this.c},applyToPoint:function(t,e){var n=this;return{x:t*n.a+e*n.c+n.e,y:t*n.b+e*n.d+n.f}},applyToArray:function(t){var e,n,i=0,r=[];if("number"==typeof t[0])for(n=t.length;i<n;)e=this.applyToPoint(t[i++],t[i++]),r.push(e.x,e.y);else for(;e=t[i++];)r.push(this.applyToPoint(e.x,e.y));return r},applyToTypedArray:function(t,e){for(var n,i=0,r=t.length,o=e?new Float64Array(r):new Float32Array(r);i<r;)n=this.applyToPoint(t[i],t[i+1]),o[i++]=n.x,o[i++]=n.y;return o},applyToContext:function(t){var e=this;return t.setTransform(e.a,e.b,e.c,e.d,e.e,e.f),e},applyToElement:function(t,e){var n=this;return n._px||(n._px=n._getPX()),t.style[n._px]=e?n.toCSS3D():n.toCSS(),n},applyToObject:function(t){var e=this;return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t.e=e.e,t.f=e.f,e},isIdentity:function(){var t=this;return!(1!==t.a||t.b||t.c||1!==t.d||t.e||t.f)},isInvertible:function(){return!this._q(this.determinant(),0)},isValid:function(){return!(this.a*this.d)},isEqual:function(t){var e=this,n=e._q;return n(e.a,t.a)&&n(e.b,t.b)&&n(e.c,t.c)&&n(e.d,t.d)&&n(e.e,t.e)&&n(e.f,t.f)},clone:function(t){return new i(t?null:this.context).multiply(this)},toArray:function(){var t=this;return[t.a,t.b,t.c,t.d,t.e,t.f]},toTypedArray:function(t){var e=t?new Float64Array(6):new Float32Array(6),n=this;return e[0]=n.a,e[1]=n.b,e[2]=n.c,e[3]=n.d,e[4]=n.e,e[5]=n.f,e},toCSS:function(){return"matrix("+this.toArray()+")"},toCSS3D:function(){var t=this;return"matrix3d("+t.a+","+t.b+",0,0,"+t.c+","+t.d+",0,0,0,0,1,0,"+t.e+","+t.f+",0,1)"},toJSON:function(){var t=this;return'{"a":'+t.a+',"b":'+t.b+',"c":'+t.c+',"d":'+t.d+',"e":'+t.e+',"f":'+t.f+"}"},toString:function(t){var e=this;return t=t||4,"a="+e.a.toFixed(t)+" b="+e.b.toFixed(t)+" c="+e.c.toFixed(t)+" d="+e.d.toFixed(t)+" e="+e.e.toFixed(t)+" f="+e.f.toFixed(t)},toCSV:function(){return this.toArray().join()+"\r\n"},toDOMMatrix:function(){var t=null;return"DOMMatrix"in window&&((t=new DOMMatrix).a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.e=this.e,t.f=this.f),t},toSVGMatrix:function(){var t=this,e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=null;return e&&((n=e.createSVGMatrix()).a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n.e=t.e,n.f=t.f),n},_q:function(t,e){return Math.abs(t-e)<1e-14},_x:function(){var t=this;return t.context&&t.context.setTransform(t.a,t.b,t.c,t.d,t.e,t.f),t._st&&(t._st[t._px]=t.useCSS3D?t.toCSS3D():t.toCSS()),t}},void 0!==n&&(n.Matrix=i),cc._RF.pop()},{}]},{},["Duration","AlphaFade","Fade","GameBehaviour","GameScene","LoadScene","NoOperation","SceneEvent","SceneState","ScreenFade","WaitAction","WaitAnyKey","WaitSeconds","matrix","Event","EventDispatcher","SsAnimation","SsAnimationList","SsContext","SsImageList","SsPartState","SsRoot","FrontEnd","SsLogo","GameStart"]);