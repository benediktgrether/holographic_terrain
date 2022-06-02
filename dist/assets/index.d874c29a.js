var V=Object.defineProperty;var G=(o,e,t)=>e in o?V(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(G(o,typeof e!="symbol"?e+"":e,t),t);import{G as B,P as O,O as N,a as A,B as k,F as m,M as x,S as u,U as b,V as w,W as R,C as W,L as p,R as F,b as H,N as y,c as I,s as P,d as j,e as Z,f as _,g as K,D as Q,h as D,i as $,j as X,k as Y}from"./vendor.b631fe10.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};J();class ee{constructor(){n(this,"active");n(this,"gui");this.active=window.location.hash==="#debug",this.active&&(this.gui=new B({width:400}))}}class U{constructor(){n(this,"callbacks");this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e=="undefined"||e===""?(console.warn("wrong names"),!1):typeof t=="undefined"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const s=this.resolveName(i);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e=="undefined"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(r=>{const i=this.resolveName(r);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][i.value]instanceof Array&&(delete this.callbacks[s][i.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e=="undefined"||e==="")return console.warn("wrong name"),!1;let r=null;const i=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][s.value]instanceof Array&&this.callbacks[a][s.value].forEach(l=>{l.apply(this,i)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(a=>{a.apply(this,i)})}return r}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},r=e.split(".");return t.original=e,t.value=r[0],t.namespace="base",r.length>1&&r[1]!==""&&(t.namespace=r[1]),t}}class te extends U{constructor(){super();n(this,"width");n(this,"height");n(this,"pixelRatio");this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class ie extends U{constructor(){super();n(this,"start");n(this,"current");n(this,"elapsed");n(this,"delta");this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.updateAnimationFrame()})}updateAnimationFrame(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("updateAnimationFrame"),window.requestAnimationFrame(()=>{this.updateAnimationFrame()})}}class se{constructor(){n(this,"threeApp");n(this,"scene");n(this,"canvas");n(this,"instance");n(this,"controls");n(this,"sizes");n(this,"cameraCoordinates");this.threeApp=new f,this.sizes=this.threeApp.sizes,this.scene=this.threeApp.scene,this.canvas=this.threeApp.canvas,this.cameraCoordinates=[{position:{x:0,y:2.243895100179859,z:0},rotation:{x:-1.5707953264174506,y:2.7951244627709526,z:0},focus:2.26},{position:{x:1.8491494533673176,y:.6671950558077681,z:-1.2985638129153},rotation:{x:-.2985425319204561,y:1.1895260648968295,z:0},focus:.56},{position:{x:1.1490514787966348,y:.9421703020881406,z:1.673788091687199},rotation:{x:-.4344909243363589,y:.6016063409602449,z:0},focus:1.34},{position:{x:1.3803252782053264,y:.2314712192025106,z:-.04347204374079028},rotation:{x:-.15674906863749621,y:1.2704523223525868,z:0},focus:.56}],this.setInstance(),this.setOrbitControls(),this.changeView(0)}setInstance(){this.instance=new O(75,this.sizes.width/this.sizes.height,.1,100),this.instance.rotation.reorder("YXZ"),this.instance.position.x=1,this.instance.position.y=1,this.instance.position.z=0,this.scene.add(this.instance),this.instance.position.copy(this.cameraCoordinates[2].position),this.instance.rotation.set(this.cameraCoordinates[2].rotation),window.camera=this.instance}setOrbitControls(){this.controls=new N(this.instance,this.canvas),this.controls.enableDamping=!0}changeView(e){this.instance.position.copy(this.cameraCoordinates[e].position),this.instance.rotation.set(this.cameraCoordinates[e].rotation)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}const E={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class h{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const ne=new A(-1,1,1,-1,0,1),C=new k;C.setAttribute("position",new m([-1,3,0,-1,-1,0,3,-1,0],3));C.setAttribute("uv",new m([0,2,0,0,2,0],2));class L{constructor(e){this._mesh=new x(C,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ne)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class z extends h{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof u?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=b.clone(e.uniforms),this.material=new u({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new L(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class T extends h{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class re extends h{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ae{constructor(e,t){if(this.renderer=e,t===void 0){const r={minFilter:p,magFilter:p,format:F},i=e.getSize(new w);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new R(this._width*this._pixelRatio,this._height*this._pixelRatio,r),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],E===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),z===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new z(E),this.clock=new W}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const l=this.renderer.getContext(),v=this.renderer.state.buffers.stencil;v.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),v.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}T!==void 0&&(a instanceof T?r=!0:a instanceof re&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new w);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new A(-1,1,1,-1,0,1);const M=new k;M.setAttribute("position",new m([-1,3,0,-1,-1,0,3,-1,0],3));M.setAttribute("uv",new m([0,2,0,0,2,0],2));class oe extends h{constructor(e,t,r,i,s){super();this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new H}render(e,t,r){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const S={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class le extends h{constructor(e,t,r){super();this.scene=e,this.camera=t;const i=r.focus!==void 0?r.focus:1,s=r.aspect!==void 0?r.aspect:t.aspect,a=r.aperture!==void 0?r.aperture:.025,l=r.maxblur!==void 0?r.maxblur:1,v=r.width||window.innerWidth||1,q=r.height||window.innerHeight||1;this.renderTargetDepth=new R(v,q,{minFilter:y,magFilter:y}),this.renderTargetDepth.texture.name="BokehPass.depth",S===void 0&&console.error("THREE.BokehPass relies on BokehShader");const d=S,c=b.clone(d.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=i,c.aspect.value=s,c.aperture.value=a,c.maxblur.value=l,c.nearClip.value=t.near,c.farClip.value=t.far,this.materialBokeh=new u({defines:Object.assign({},d.defines),uniforms:c,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.uniforms=c,this.needsSwap=!1,this.fsQuad=new L(this.materialBokeh),this._oldClearColor=new H}render(e,t,r){this.scene.traverse(a=>{a instanceof x&&(a.userData.originalMaterial=a.material,a.userData.depthMaterial?a.material=a.userData.depthMaterial:a.material=this.materialDepth)}),e.getClearColor(this._oldClearColor);const i=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=r.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.traverse(a=>{a instanceof x&&(a.material=a.userData.originalMaterial)}),e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}}class ce{constructor(){n(this,"threeApp");n(this,"canvas");n(this,"sizes");n(this,"camera");n(this,"renderer");n(this,"scene");n(this,"effectComposer");n(this,"renderTarget");n(this,"debug");n(this,"bokehPass");n(this,"world");n(this,"clearColorVariable");this.threeApp=new f,this.canvas=this.threeApp.canvas,this.sizes=this.threeApp.sizes,this.scene=this.threeApp.scene,this.camera=this.threeApp.camera,this.debug=this.threeApp.debug,this.world=this.threeApp.world,this.setClearColor(),this.setRenderer(),this.setPostProcessing(),this.debug.active&&this.setDebug()}setClearColor(){this.clearColorVariable={},this.clearColorVariable.clearColor="#080024",console.log(this.clearColorVariable.clearColor)}setRenderer(){this.renderer=new I({canvas:this.canvas,antialias:!0}),this.renderer.setClearColor(this.clearColorVariable.clearColor,1),this.renderer.outputEncoding=P,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}setPostProcessing(){this.renderTarget=new j(this.sizes.width,this.sizes.height,1,{minFilter:p,magFilter:p,format:F,encoding:P}),this.effectComposer=new ae(this.renderer),this.effectComposer.setSize(this.sizes.width,this.sizes.height),this.effectComposer.setPixelRatio(this.sizes.pixelRatio);const e=new oe(this.scene,this.camera.instance);this.effectComposer.addPass(e),this.bokehPass=new le(this.scene,this.camera.instance,{focus:1,aperture:.015,maxblur:.01,width:this.sizes.width*this.sizes.pixelRatio,height:this.sizes.height*this.sizes.pixelRatio}),this.effectComposer.addPass(this.bokehPass),console.log(this.bokehPass.uniforms.focus),this.bokehPass.uniforms.focus.value=this.camera.cameraCoordinates[2].focus}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio),this.effectComposer.setSize(this.sizes.width,this.sizes.height),this.effectComposer.setPixelRatio(this.sizes.pixelRatio),this.bokehPass.renderTargetDepth.width=this.sizes.width*this.sizes.pixelRatio,this.bokehPass.renderTargetDepth.height=this.sizes.height*this.sizes.pixelRatio}update(){this.effectComposer.render()}setDebug(){const e=this.debug.gui.addFolder("bokehPass");e.add(this.bokehPass.materialBokeh.uniforms.focus,"value").min(0).max(10).step(.01).name("focus"),e.add(this.bokehPass.materialBokeh.uniforms.aperture,"value").min(2e-4).max(.1).step(1e-4).name("aperture"),e.add(this.bokehPass.materialBokeh.uniforms.maxblur,"value").min(0).max(.02).step(1e-4).name("maxblur"),this.debug.gui.addColor(this.clearColorVariable,"clearColor").onChange(()=>{this.renderer.setClearColor(this.clearColorVariable.clearColor)})}}var ue=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

uniform float uElevation;
uniform float uElevationDetails;
uniform float uElevationGeneral;
uniform float uElevationGeneralFrequency;
uniform float uElevationValley;
uniform float uElevationValleyFrequency;
uniform float uTime;
uniform float uElevationDetailsFrequency;

varying float vElevation;
varying vec2 vUv;

float getElevation(vec2 _position) {

    float elevation = 0.0;

    
    vec2 position = _position;
    position.x += uTime * 0.03;
    position.y += uTime * 0.0;

    
    
    
    float valleyStrenght = cos(position.y * uElevationValleyFrequency + 3.1415) * 0.5 + 0.5;
    elevation += valleyStrenght * uElevationValley;

    
    elevation += cnoise(position * uElevationGeneralFrequency) * uElevationGeneral * (valleyStrenght + 0.1);

    
    elevation +=cnoise(position * uElevationDetailsFrequency + 123.0) * uElevationDetails * (valleyStrenght + 0.1);

    elevation *= uElevation;

        return elevation;
}

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = getElevation(modelPosition.xz);

    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    
    vElevation = elevation;
    vUv = uv;
}`,he=`uniform sampler2D uTexture;
uniform float uTextureFrequency;
uniform float uTextureOffset;

uniform float uTime;
uniform float uHslTimeFrequency;
uniform float uHslHue;
uniform float uHslHueOffset;
uniform float uHslHueFrequency;
uniform float uHslLightness;
uniform float uHslLightnessVariation;
uniform float uHslLightnessFrequency;

varying float vElevation;
varying vec2 vUv;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

vec3 hslToRgb(in vec3 c)
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
}

vec3 getRainbowColor(){

    vec2 uv = vUv;
    uv.y += uTime * uHslTimeFrequency;

    float hue = uHslHueOffset + cnoise(uv * uHslHueFrequency) * uHslHue;
    float lightness = uHslLightness + cnoise(uv  * uHslLightnessFrequency + 1234.5) * uHslLightnessVariation;
    vec3 hslColor = vec3(hue, 1.0, lightness);
    vec3 rainbowColor = hslToRgb(hslColor);
    return rainbowColor;
}

void main() {

    vec3 uColor = vec3(1.0, 1.0, 1.0);

    vec3 rainbowColor = getRainbowColor();
    vec4 textureColor = texture2D(uTexture, vec2(0.0, vElevation * uTextureFrequency + uTextureOffset));

    vec3 color = mix(uColor, rainbowColor, textureColor.r);

    
    float fadeSideAmplitude = 0.2;
    float sideAlpha =  1.0 - max(
        smoothstep(0.5 - fadeSideAmplitude, 0.5, abs(vUv.x -0.5)),
        smoothstep(0.5 - fadeSideAmplitude, 0.5, abs(vUv.y -0.5)));

    gl_FragColor = vec4(color, textureColor.a * sideAlpha);
    
}`,fe=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

varying vec2 vHighPrecisionZW;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

uniform float uElevation;
uniform float uTime;

uniform float uElevationDetails;
uniform float uElevationGeneral;
uniform float uElevationDetailsFrequency;
uniform float uElevationGeneralFrequency;
uniform float uElevationValley;
uniform float uElevationValleyFrequency;

varying float vElevation;
varying vec2 vUv;

float getElevation(vec2 _position) {

    float elevation = 0.0;

    
    vec2 position = _position;
    position.x += uTime * 0.03;
    position.y += uTime * 0.0;

    
    
    
    float valleyStrenght = cos(position.y * uElevationValleyFrequency + 3.1415) * 0.5 + 0.5;
    elevation += valleyStrenght * uElevationValley;

    
    elevation += cnoise(position * uElevationGeneralFrequency) * uElevationGeneral * (valleyStrenght + 0.1);

    
    elevation +=cnoise(position * uElevationDetailsFrequency + 123.0) * uElevationDetails * (valleyStrenght + 0.1);

    elevation *= uElevation;

        return elevation;
}

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	vec4 position = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		position = instanceMatrix * position;

	#endif

	vec4 mPosition = modelMatrix * position;

	
    float elevation = getElevation(mPosition.xz);
	mPosition.y += elevation;

	vec4 mvPosition = viewMatrix * mPosition;
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}`,ve=`#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}`;class de{constructor(){n(this,"threeApp");n(this,"geometry");n(this,"material");n(this,"scene");n(this,"mesh");n(this,"texture");n(this,"debug");n(this,"time");n(this,"depthMaterial");this.threeApp=new f,this.scene=this.threeApp.scene,this.debug=this.threeApp.debug,this.time=this.threeApp.time,this.initTerrainTexture(),this.setGeometry(),this.setMaterial(),this.setRotation(),this.setDepthMaterial(),this.setMesh(),this.debug.active&&this.setDebug()}initTerrainTexture(){this.texture={},this.texture.visible=!1,this.texture.linesCount=5,this.texture.bigLinewidth=.08,this.texture.smallLinewidth=.01,this.texture.alpha=.5,this.texture.width=1,this.texture.height=128,this.texture.canvas=document.createElement("canvas"),this.texture.canvas.width=this.texture.width,this.texture.canvas.height=this.texture.height,this.texture.canvas.style.position="fixed",this.texture.canvas.style.top=0,this.texture.canvas.style.left=0,this.texture.canvas.style.width="50px",this.texture.canvas.style.height=`${this.texture.height}px`,this.texture.canvas.style.zIndex=1,this.texture.visible&&document.body.append(this.texture.canvas),this.texture.context=this.texture.canvas.getContext("2d"),this.texture.instance=new Z(this.texture.canvas),this.texture.uElevation=2,this.texture.instance.wrapS=_,this.texture.instance.wrapT=_,this.texture.instance.magFilter=y,this.texture.uniforms={uTexture:{value:this.texture.instance},uElevation:{value:2},uTextureFrequency:{value:10},uElevationGeneral:{value:.2},uElevationGeneralFrequency:{value:.2},uElevationValley:{value:.2},uElevationValleyFrequency:{value:1.5},uTextureOffset:{value:.585},uElevationDetails:{value:.4},uElevationDetailsFrequency:{value:2.012},uTime:{value:0},uHslTimeFrequency:{value:.1},uHslHue:{value:1},uHslHueOffset:{value:0},uHslHueFrequency:{value:10},uHslLightness:{value:.75},uHslLightnessVariation:{value:.25},uHslLightnessFrequency:{value:20}},this.setTerrainTextureUpdate()}setTerrainTextureUpdate(){this.texture.update=()=>{this.texture.context.clearRect(0,0,this.texture.width,this.texture.height);const e=Math.round(this.texture.height*this.texture.bigLinewidth),t=Math.round((this.texture.height-e)/this.texture.linesCount),r=Math.round(this.texture.height*this.texture.smallLinewidth);this.setContext("#ffffff",1,0,e);for(let i=0;i<this.texture.linesCount-1;i++)this.setContext("#00ffff",this.texture.alpha,t*(i+1),r);this.texture.instance.needsUpdate=!0},this.texture.update()}setContext(e,t,r,i){this.texture.context.fillStyle=e,this.texture.context.globalAlpha=t,this.texture.context.fillRect(0,r,this.texture.width,i)}setGeometry(){this.geometry=new K(1,1,1e3,1e3)}setMaterial(){this.material=new u({transparent:!0,side:Q,vertexShader:ue,fragmentShader:he,uniforms:this.texture.uniforms})}setRotation(){this.geometry.rotateX(-Math.PI*.5)}setDepthMaterial(){const e=b.merge([D.common,D.displacementmap]);for(const t in this.texture.uniforms)e[t]=this.texture.uniforms[t];this.depthMaterial=new u({uniforms:e,vertexShader:fe,fragmentShader:ve}),this.depthMaterial.depthPacking=$,this.depthMaterial.blending=X}setMesh(){this.mesh=new x(this.geometry,this.material),this.mesh.scale.set(10,10,10),this.mesh.userData.depthMaterial=this.depthMaterial,this.scene.add(this.mesh)}update(){this.texture.uniforms.uTime.value=this.time.elapsed*.001}setDebug(){const e=this.debug.gui.addFolder("textures"),t=this.debug.gui.addFolder("hls");e.add(this.texture,"visible").name("visible").onChange(()=>{this.texture.visible?document.body.append(this.texture.canvas):document.body.removeChild(this.texture.canvas)}),e.add(this.texture,"linesCount").min(1).max(10).step(1).name("Lines Count").onChange(()=>{this.texture.update()}),e.add(this.texture,"bigLinewidth").min(0).max(.5).step(.001).name("Big Line Width").onChange(()=>{this.texture.update()}),e.add(this.texture,"smallLinewidth").min(0).max(.1).step(.001).name("Small Line Width").onChange(()=>{this.texture.update()}),e.add(this.texture,"alpha").min(0).max(1).step(.001).name("Small Line Alpha").onChange(()=>{this.texture.update()}),e.add(this.texture.uniforms.uElevation,"value").min(0).max(5).step(1).name("uElevation"),e.add(this.texture.uniforms.uElevationValleyFrequency,"value").min(0).max(10).step(.001).name("uElevationValleyFrequency"),e.add(this.texture.uniforms.uElevationDetailsFrequency,"value").min(0).max(10).step(.001).name("uElevationDetailsFrequency"),e.add(this.texture.uniforms.uTextureFrequency,"value").min(.1).max(50).step(.01).name("uTextureFrequency"),e.add(this.texture.uniforms.uElevationDetails,"value").min(0).max(1).step(.001).name("uElevationDetails"),e.add(this.texture.uniforms.uElevationGeneral,"value").min(0).max(1).step(.001).name("uElevationGeneral"),e.add(this.texture.uniforms.uElevationGeneralFrequency,"value").min(0).max(10).step(.001).name("uElevationGeneralFrequency"),e.add(this.texture.uniforms.uElevationValley,"value").min(0).max(1).step(.001).name("uElevationValley"),e.add(this.texture.uniforms.uTextureOffset,"value").min(0).max(1).step(.001).name("uTextureOffset"),t.add(this.texture.uniforms.uHslTimeFrequency,"value").min(0).max(1).step(.001).name("uHslTimeFrequency"),t.add(this.texture.uniforms.uHslHue,"value").min(0).max(1).step(.001).name("uHslHue"),t.add(this.texture.uniforms.uHslHueOffset,"value").min(0).max(1).step(.001).name("uHslHueOffset"),t.add(this.texture.uniforms.uHslHueFrequency,"value").min(0).max(50).step(.01).name("uHslHueFrequency"),t.add(this.texture.uniforms.uHslLightness,"value").min(0).max(1).step(.001).name("uHslLightness"),t.add(this.texture.uniforms.uHslLightnessVariation,"value").min(0).max(1).step(.001).name("uHslLightnessVariation"),t.add(this.texture.uniforms.uHslLightnessFrequency,"value").min(0).max(50).step(.01).name("uHslLightnessFrequency")}}class xe{constructor(){n(this,"threeApp");n(this,"scene");n(this,"terrain");n(this,"resources");n(this,"vignette");this.threeApp=new f,this.scene=this.threeApp.scene,this.terrain=new de}update(){this.terrain.update()}}let g=null;class f{constructor(e){n(this,"canvas");n(this,"sizes");n(this,"time");n(this,"scene");n(this,"camera");n(this,"renderer");n(this,"world");n(this,"resources");n(this,"debug");if(g)return g;g=this,this.canvas=e,this.debug=new ee,this.sizes=new te,this.time=new ie,this.scene=new Y,this.camera=new se,this.renderer=new ce,this.world=new xe,this.sizes.on("resize",()=>{this.resize()}),this.time.on("updateAnimationFrame",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}}new f(document.querySelector("canvas.three-js-app"));
