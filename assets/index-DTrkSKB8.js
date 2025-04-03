var yd=Object.defineProperty;var Sd=(i,t,e)=>t in i?yd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ed=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var O=(i,t,e)=>Sd(i,typeof t!="symbol"?t+"":t,e);var tE=Ed(Ut=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="175",As={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,Eh=1,wd=2,ou=1,Td=2,Zi=3,En=0,ai=1,Fi=2,xn=0,Yn=1,va=2,bh=3,wh=4,Ad=5,Gn=100,Cd=101,Rd=102,Pd=103,Ld=104,Id=200,Dd=201,Nd=202,Ud=203,Ho=204,Vo=205,Od=206,Fd=207,Bd=208,zd=209,kd=210,Gd=211,Hd=212,Vd=213,Wd=214,Wo=0,Xo=1,qo=2,Ds=3,$o=4,Yo=5,jo=6,Zo=7,Vl=0,Xd=1,qd=2,yn=0,$d=1,Yd=2,jd=3,Zd=4,Kd=5,Jd=6,Qd=7,lu=300,Ns=301,Us=302,Ko=303,Jo=304,qr=306,Ma=1e3,Vn=1001,Qo=1002,Li=1003,tf=1004,Wa=1005,zi=1006,eo=1007,Wn=1008,nn=1009,hu=1010,cu=1011,xa=1012,Wl=1013,jn=1014,Qi=1015,La=1016,Xl=1017,ql=1018,ya=1020,uu=35902,du=1021,fu=1022,Ri=1023,pu=1024,mu=1025,Sa=1026,Ea=1027,gu=1028,$l=1029,_u=1030,Yl=1031,jl=1033,yr=33776,Sr=33777,Er=33778,br=33779,tl=35840,el=35841,il=35842,nl=35843,sl=36196,al=37492,rl=37496,ol=37808,ll=37809,hl=37810,cl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,vl=37819,Ml=37820,xl=37821,wr=36492,yl=36494,Sl=36495,vu=36283,El=36284,bl=36285,wl=36286,ef=3200,nf=3201,Zl=0,sf=1,gn="",xi="srgb",Os="srgb-linear",Dr="linear",he="srgb",ns=7680,Th=519,af=512,rf=513,of=514,Mu=515,lf=516,hf=517,cf=518,uf=519,Ah=35044,Ch="300 es",tn=2e3,Nr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rh=1234567;const ra=Math.PI/180,ba=180/Math.PI;function Hs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function Kl(i,t){return(i%t+t)%t}function df(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ff(i,t,e){return i!==t?(e-i)/(t-i):0}function oa(i,t,e){return(1-e)*i+e*t}function pf(i,t,e,n){return oa(i,t,1-Math.exp(-e*n))}function mf(i,t=1){return t-Math.abs(Kl(i,t*2)-t)}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mf(i,t){return i+Math.random()*(t-i)}function xf(i){return i*(.5-Math.random())}function yf(i){i!==void 0&&(Rh=i);let t=Rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(i){return i*ra}function Ef(i){return i*ba}function bf(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,t,e,n,s){const a=Math.cos,o=Math.sin,r=a(e/2),l=o(e/2),h=a((t+n)/2),c=o((t+n)/2),u=a((t-n)/2),d=o((t-n)/2),f=a((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(r*c,l*u,l*d,r*h);break;case"YZY":i.set(l*d,r*c,l*u,r*h);break;case"ZXZ":i.set(l*u,l*d,r*c,r*h);break;case"XZX":i.set(r*c,l*g,l*f,r*h);break;case"YXY":i.set(l*f,r*c,l*g,r*h);break;case"ZYZ":i.set(l*g,l*f,r*c,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ii={DEG2RAD:ra,RAD2DEG:ba,generateUUID:Hs,clamp:kt,euclideanModulo:Kl,mapLinear:df,inverseLerp:ff,lerp:oa,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:_f,randInt:vf,randFloat:Mf,randFloatSpread:xf,seededRandom:yf,degToRad:Sf,radToDeg:Ef,isPowerOfTwo:bf,ceilPowerOfTwo:wf,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Af,normalize:$e,denormalize:vs};class tt{constructor(t=0,e=0){tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,a,o,r,l,h){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,l,h)}set(t,e,n,s,a,o,r,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=r,c[3]=e,c[4]=a,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],S=s[4],v=s[7],R=s[2],w=s[5],C=s[8];return a[0]=o*_+r*b+l*R,a[3]=o*m+r*S+l*w,a[6]=o*p+r*v+l*C,a[1]=h*_+c*b+u*R,a[4]=h*m+c*S+u*w,a[7]=h*p+c*v+u*C,a[2]=d*_+f*b+g*R,a[5]=d*m+f*S+g*w,a[8]=d*p+f*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*r*h-n*a*c+n*r*l+s*a*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],c=t[8],u=c*o-r*h,d=r*l-c*a,f=h*a-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*h-c*n)*_,t[2]=(r*n-s*o)*_,t[3]=d*_,t[4]=(c*e-s*l)*_,t[5]=(s*a-r*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,r){const l=Math.cos(a),h=Math.sin(a);return this.set(n*l,n*h,-n*(l*o+h*r)+o+t,-s*h,s*l,-s*(-h*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Ht;function xu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){const i=Ur("canvas");return i.style.display="block",i}const Ph={};function Tr(i){i in Ph||(Ph[i]=!0,console.warn(i))}function Rf(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Pf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){const i={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===he&&(s.r=en(s.r),s.g=en(s.g),s.b=en(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Dr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Os]:{primaries:t,whitePoint:n,transfer:Dr,toXYZ:Lh,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Lh,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),i}const ee=If();function en(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class Df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=Ur("canvas")),ss.width=t.width,ss.height=t.height;const s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=en(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(en(e[n]/255)*255):e[n]=en(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nf=0;class Jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Hs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(no(s[o].image)):a.push(no(s[o]))}else a=no(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class Je extends es{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Vn,s=Vn,a=zi,o=Wn,r=Ri,l=nn,h=Je.DEFAULT_ANISOTROPY,c=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Hs(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ma:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ma:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=lu;Je.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(h+1)/2,v=(f+1)/2,R=(p+1)/2,w=(c+d)/4,C=(u+_)/4,P=(g+m)/4;return S>v&&S>R?S<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(S),s=w/n,a=C/n):v>R?v<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),n=w/s,a=P/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=C/a,s=P/a),this.set(n,s,a,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-c)/b,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Of extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Jl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yu extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Li,this.minFilter=Li,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ff extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Li,this.minFilter=Li,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,r){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const d=a[o+0],f=a[o+1],g=a[o+2],_=a[o+3];if(r===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||h!==f||c!==g){let m=1-r;const p=l*d+h*f+c*g+u*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*b);m=Math.sin(m*w)/R,r=Math.sin(r*w)/R}const v=r*b;if(l=l*m+d*v,h=h*m+f*v,c=c*m+g*v,u=u*m+_*v,m===1-r){const R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,o){const r=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=a[o],d=a[o+1],f=a[o+2],g=a[o+3];return t[e]=r*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-r*f,t[e+2]=h*g+c*f+r*d-l*u,t[e+3]=c*g-r*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,l=Math.sin,h=r(n/2),c=r(s/2),u=r(a/2),d=l(n/2),f=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],r=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(a-h)*f,this._z=(o-s)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(a+h)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(a-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(o-s)/f,this._x=(a+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,r=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*r+s*h-a*l,this._y=s*c+o*l+a*r-n*h,this._z=a*c+o*h+n*l-s*r,this._w=o*c-n*r-s*l-a*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+n*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,r),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,r=t.z,l=t.w,h=2*(o*s-r*n),c=2*(r*e-a*s),u=2*(a*n-o*e);return this.x=e+l*h+o*u-r*c,this.y=n+l*c+r*h-a*u,this.z=s+l*u+a*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,r=e.y,l=e.z;return this.x=s*l-a*r,this.y=a*o-n*l,this.z=n*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new T,Dh=new Hi;class Ia{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,bi):bi.fromBufferAttribute(a,o),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(t.matrixWorld),this.union(Xa)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),qa.subVectors(this.max,$s),as.subVectors(t.a,$s),rs.subVectors(t.b,$s),os.subVectors(t.c,$s),on.subVectors(rs,as),ln.subVectors(os,rs),Ln.subVectors(as,os);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Ln.z,Ln.y,on.z,0,-on.x,ln.z,0,-ln.x,Ln.z,0,-Ln.x,-on.y,on.x,0,-ln.y,ln.x,0,-Ln.y,Ln.x,0];return!ao(e,as,rs,os,qa)||(e=[1,0,0,0,1,0,0,0,1],!ao(e,as,rs,os,qa))?!1:($a.crossVectors(on,ln),e=[$a.x,$a.y,$a.z],ao(e,as,rs,os,qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xi=[new T,new T,new T,new T,new T,new T,new T,new T],bi=new T,Xa=new Ia,as=new T,rs=new T,os=new T,on=new T,ln=new T,Ln=new T,$s=new T,qa=new T,$a=new T,In=new T;function ao(i,t,e,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){In.fromArray(i,a);const r=s.x*Math.abs(In.x)+s.y*Math.abs(In.y)+s.z*Math.abs(In.z),l=t.dot(In),h=e.dot(In),c=n.dot(In);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>r)return!1}return!0}const Bf=new Ia,Ys=new T,ro=new T;class Da{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(ro)),this.expandByPoint(Ys.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new T,oo=new T,Ya=new T,hn=new T,lo=new T,ja=new T,ho=new T;class Na{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oo.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(oo);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Ya),r=hn.dot(this.direction),l=-hn.dot(Ya),h=hn.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-r,d=o*r-l,g=a*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,f=u*(u+o*d+2*r)+d*(o*u+d+2*l)+h}else d=a,u=Math.max(0,-(o*d+r)),f=-u*u+d*(d+2*l)+h;else d=-a,u=Math.max(0,-(o*d+r)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*a+r)),d=u>0?-a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+h):(u=Math.max(0,-(o*a+r)),d=u>0?a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+h);else d=o>0?-a:a,u=Math.max(0,-(o*d+r)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oo).addScaledVector(Ya,d),f}intersectSphere(t,e){qi.subVectors(t.center,this.origin);const n=qi.dot(this.direction),s=qi.dot(qi)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,r,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(a=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(a=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>s)||((r>n||n!==n)&&(n=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,n,s,a){lo.subVectors(e,t),ja.subVectors(n,t),ho.crossVectors(lo,ja);let o=this.direction.dot(ho),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;hn.subVectors(this.origin,t);const l=r*this.direction.dot(ja.crossVectors(hn,ja));if(l<0)return null;const h=r*this.direction.dot(lo.cross(hn));if(h<0||l+h>o)return null;const c=-r*hn.dot(ho);return c<0?null:this.at(c/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,a,o,r,l,h,c,u,d,f,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,r,l,h,c,u,d,f,g,_,m)}set(t,e,n,s,a,o,r,l,h,c,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=o,p[9]=r,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),a=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=o*c,f=o*u,g=r*c,_=r*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-_*h,e[9]=-r*l,e[2]=_-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d+_*r,e[4]=g*r-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-r,e[2]=f*r-g,e[6]=_+d*r,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d-_*r,e[4]=-o*u,e[8]=g+f*r,e[1]=f+g*r,e[5]=o*c,e[9]=_-d*r,e[2]=-o*h,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=r*c,_=r*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+_,e[1]=l*u,e[5]=_*h+d,e[9]=f*h-g,e[2]=-h,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=r*l,_=r*h;e[0]=l*c,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-r*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=r*l,_=r*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+_,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=r*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,kf)}lookAt(t,e,n){const s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),cn.crossVectors(n,li),cn.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),cn.crossVectors(n,li)),cn.normalize(),Za.crossVectors(li,cn),s[0]=cn.x,s[4]=Za.x,s[8]=li.x,s[1]=cn.y,s[5]=Za.y,s[9]=li.y,s[2]=cn.z,s[6]=Za.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],r=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],v=n[11],R=n[15],w=s[0],C=s[4],P=s[8],E=s[12],x=s[1],L=s[5],z=s[9],B=s[13],H=s[2],q=s[6],W=s[10],K=s[14],V=s[3],st=s[7],mt=s[11],vt=s[15];return a[0]=o*w+r*x+l*H+h*V,a[4]=o*C+r*L+l*q+h*st,a[8]=o*P+r*z+l*W+h*mt,a[12]=o*E+r*B+l*K+h*vt,a[1]=c*w+u*x+d*H+f*V,a[5]=c*C+u*L+d*q+f*st,a[9]=c*P+u*z+d*W+f*mt,a[13]=c*E+u*B+d*K+f*vt,a[2]=g*w+_*x+m*H+p*V,a[6]=g*C+_*L+m*q+p*st,a[10]=g*P+_*z+m*W+p*mt,a[14]=g*E+_*B+m*K+p*vt,a[3]=b*w+S*x+v*H+R*V,a[7]=b*C+S*L+v*q+R*st,a[11]=b*P+S*z+v*W+R*mt,a[15]=b*E+S*B+v*K+R*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],r=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+a*l*u-s*h*u-a*r*d+n*h*d+s*r*f-n*l*f)+_*(+e*l*f-e*h*d+a*o*d-s*o*f+s*h*c-a*l*c)+m*(+e*h*u-e*r*f-a*o*u+n*o*f+a*r*c-n*h*c)+p*(-s*r*c-e*l*u+e*r*d+s*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*h-_*d*h+_*l*f-r*m*f-u*l*p+r*d*p,S=g*d*h-c*m*h-g*l*f+o*m*f+c*l*p-o*d*p,v=c*_*h-g*u*h+g*r*f-o*_*f-c*r*p+o*u*p,R=g*u*l-c*_*l-g*r*d+o*_*d+c*r*m-o*u*m,w=e*b+n*S+s*v+a*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=b*C,t[1]=(_*d*a-u*m*a-_*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(r*m*a-_*l*a+_*s*h-n*m*h-r*s*p+n*l*p)*C,t[3]=(u*l*a-r*d*a-u*s*h+n*d*h+r*s*f-n*l*f)*C,t[4]=S*C,t[5]=(c*m*a-g*d*a+g*s*f-e*m*f-c*s*p+e*d*p)*C,t[6]=(g*l*a-o*m*a-g*s*h+e*m*h+o*s*p-e*l*p)*C,t[7]=(o*d*a-c*l*a+c*s*h-e*d*h-o*s*f+e*l*f)*C,t[8]=v*C,t[9]=(g*u*a-c*_*a-g*n*f+e*_*f+c*n*p-e*u*p)*C,t[10]=(o*_*a-g*r*a+g*n*h-e*_*h-o*n*p+e*r*p)*C,t[11]=(c*r*a-o*u*a-c*n*h+e*u*h+o*n*f-e*r*f)*C,t[12]=R*C,t[13]=(c*_*s-g*u*s+g*n*d-e*_*d-c*n*m+e*u*m)*C,t[14]=(g*r*s-o*_*s-g*n*l+e*_*l+o*n*m-e*r*m)*C,t[15]=(o*u*s-c*r*s+c*n*l-e*u*l-o*n*d+e*r*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,r=t.y,l=t.z,h=a*o,c=a*r;return this.set(h*o+n,h*r-s*l,h*l+s*r,0,h*r+s*l,c*r+n,c*l-s*o,0,h*l-s*r,c*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,r=e._z,l=e._w,h=a+a,c=o+o,u=r+r,d=a*h,f=a*c,g=a*u,_=o*c,m=o*u,p=r*u,b=l*h,S=l*c,v=l*u,R=n.x,w=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+S)*C,s[9]=(m-b)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),r=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],wi.copy(this);const h=1/a,c=1/o,u=1/r;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=c,wi.elements[5]*=c,wi.elements[6]*=c,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,e.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=r,this}makePerspective(t,e,n,s,a,o,r=tn){const l=this.elements,h=2*a/(e-t),c=2*a/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(r===tn)f=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===Nr)f=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,o,r=tn){const l=this.elements,h=1/(e-t),c=1/(n-s),u=1/(o-a),d=(e+t)*h,f=(n+s)*c;let g,_;if(r===tn)g=(o+a)*u,_=-2*u;else if(r===Nr)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new T,wi=new fe,zf=new T(0,0,0),kf=new T(1,1,1),cn=new T,Za=new T,li=new T,Nh=new fe,Uh=new Hi;class fi{constructor(t=0,e=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const Oh=new T,hs=new Hi,$i=new fe,Ka=new T,js=new T,Hf=new T,Vf=new Hi,Fh=new T(1,0,0),Bh=new T(0,1,0),zh=new T(0,0,1),kh={type:"added"},Wf={type:"removed"},cs={type:"childadded",child:null},co={type:"childremoved",child:null};class Pe extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new T,e=new fi,n=new Hi,s=new T(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ht}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ka.copy(t):Ka.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(js,Ka,this.up):$i.lookAt(Ka,js,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),hs.setFromRotationMatrix($i),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,h=this.material.length;l<h;l++)r.push(a(t.materials,this.material[l]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(a(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(r){const l=[];for(const h in r){const c=r[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new T(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new T,Yi=new T,uo=new T,ji=new T,us=new T,ds=new T,Gh=new T,fo=new T,po=new T,mo=new T,go=new ue,_o=new ue,vo=new ue;class Ci{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Ti.subVectors(s,e),Yi.subVectors(n,e),uo.subVectors(t,e);const o=Ti.dot(Ti),r=Ti.dot(Yi),l=Ti.dot(uo),h=Yi.dot(Yi),c=Yi.dot(uo),u=o*h-r*r;if(u===0)return a.set(0,0,0),null;const d=1/u,f=(h*l-r*c)*d,g=(o*c-r*l)*d;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,a,o,r,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(r,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,a,o){return go.setScalar(0),_o.setScalar(0),vo.setScalar(0),go.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(go,a.x),o.addScaledVector(_o,a.y),o.addScaledVector(vo,a.z),o}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),Yi.subVectors(t,e),Ti.cross(Yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Ti.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Ci.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,r;us.subVectors(s,n),ds.subVectors(a,n),fo.subVectors(t,n);const l=us.dot(fo),h=ds.dot(fo);if(l<=0&&h<=0)return e.copy(n);po.subVectors(t,s);const c=us.dot(po),u=ds.dot(po);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(us,o);mo.subVectors(t,a);const f=us.dot(mo),g=ds.dot(mo);if(g>=0&&f<=g)return e.copy(a);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return r=h/(h-g),e.copy(n).addScaledVector(ds,r);const m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return Gh.subVectors(a,s),r=(u-c)/(u-c+(f-g)),e.copy(s).addScaledVector(Gh,r);const p=1/(m+_+d);return o=_*p,r=d*p,e.copy(n).addScaledVector(us,o).addScaledVector(ds,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Kl(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Mo(o,a,t+1/3),this.g=Mo(o,a,t),this.b=Mo(o,a,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=xi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xi){const n=Su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=en(t.r),this.g=en(t.g),this.b=en(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return ee.fromWorkingColorSpace(Ge.copy(this),t),Math.round(kt(Ge.r*255,0,255))*65536+Math.round(kt(Ge.g*255,0,255))*256+Math.round(kt(Ge.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,a=Ge.b,o=Math.max(n,s,a),r=Math.min(n,s,a);let l,h;const c=(r+o)/2;if(r===o)l=0,h=0;else{const u=o-r;switch(h=c<=.5?u/(o+r):u/(2-o-r),o){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=xi){ee.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==xi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Ja);const n=oa(un.h,Ja.h,e),s=oa(un.s,Ja.s,e),a=oa(un.l,Ja.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new _t;_t.NAMES=Su;let Xf=0;class Tn extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Yn,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Vo,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $r extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new T,Qa=new tt;let qf=0;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),a=$e(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ah&&(t.usage=this.usage),t}}class Eu extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bu extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $f=0;const gi=new fe,xo=new Pe,fs=new T,hi=new Ia,Zs=new Ia,Ne=new T;class Ue extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?bu:Eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ht().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];Zs.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(hi.min,Zs.min),hi.expandByPoint(Ne),Ne.addVectors(hi.max,Zs.max),hi.expandByPoint(Ne)):(hi.expandByPoint(Zs.min),hi.expandByPoint(Zs.max))}hi.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)Ne.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],l=this.morphTargetsRelative;for(let h=0,c=r.count;h<c;h++)Ne.fromBufferAttribute(r,h),l&&(fs.fromBufferAttribute(t,h),Ne.add(fs)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let P=0;P<n.count;P++)r[P]=new T,l[P]=new T;const h=new T,c=new T,u=new T,d=new tt,f=new tt,g=new tt,_=new T,m=new T;function p(P,E,x){h.fromBufferAttribute(n,P),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(a,P),f.fromBufferAttribute(a,E),g.fromBufferAttribute(a,x),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(L),r[P].add(_),r[E].add(_),r[x].add(_),l[P].add(m),l[E].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,E=b.length;P<E;++P){const x=b[P],L=x.start,z=x.count;for(let B=L,H=L+z;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new T,v=new T,R=new T,w=new T;function C(P){R.fromBufferAttribute(s,P),w.copy(R);const E=r[P];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(w,E);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,E=b.length;P<E;++P){const x=b[P],L=x.start,z=x.count;for(let B=L,H=L+z;B<H;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,a=new T,o=new T,r=new T,l=new T,h=new T,c=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,a),u.subVectors(s,a),c.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),r.add(c),l.add(c),h.add(c),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,a),u.subVectors(s,a),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(r,l){const h=r.array,c=r.itemSize,u=r.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){r.isInterleavedBufferAttribute?f=l[_]*r.data.stride+r.offset:f=l[_]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Le(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const r in s){const l=s[r],h=t(l,n);e.setAttribute(r,h)}const a=this.morphAttributes;for(const r in a){const l=[],h=a[r];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const h=o[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const a=t.morphAttributes;for(const h in a){const c=[],u=a[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new fe,Dn=new Na,tr=new Da,Vh=new T,er=new T,ir=new T,nr=new T,yo=new T,sr=new T,Wh=new T,ar=new T;class Ct extends Pe{constructor(t=new Ue,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){sr.set(0,0,0);for(let l=0,h=a.length;l<h;l++){const c=r[l],u=a[l];c!==0&&(yo.fromBufferAttribute(u,t),o?sr.addScaledVector(yo,c):sr.addScaledVector(yo.sub(e),c))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(a),Dn.copy(t.ray).recast(t.near),!(tr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(tr,Vh)===null||Dn.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Hh.copy(a).invert(),Dn.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,h=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=S;v<R;v+=3){const w=r.getX(v),C=r.getX(v+1),P=r.getX(v+2);s=rr(this,p,t,n,h,c,u,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(r.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=r.getX(m),S=r.getX(m+1),v=r.getX(m+2);s=rr(this,o,t,n,h,c,u,b,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=S;v<R;v+=3){const w=v,C=v+1,P=v+2;s=rr(this,p,t,n,h,c,u,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,v=m+2;s=rr(this,o,t,n,h,c,u,b,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Yf(i,t,e,n,s,a,o,r){let l;if(t.side===ai?l=n.intersectTriangle(o,a,s,!0,r):l=n.intersectTriangle(s,a,o,t.side===En,r),l===null)return null;ar.copy(r),ar.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ar);return h<e.near||h>e.far?null:{distance:h,point:ar.clone(),object:i}}function rr(i,t,e,n,s,a,o,r,l,h){i.getVertexPosition(r,er),i.getVertexPosition(l,ir),i.getVertexPosition(h,nr);const c=Yf(i,t,e,n,er,ir,nr,Wh);if(c){const u=new T;Ci.getBarycoord(Wh,er,ir,nr,u),s&&(c.uv=Ci.getInterpolatedAttribute(s,r,l,h,u,new tt)),a&&(c.uv1=Ci.getInterpolatedAttribute(a,r,l,h,u,new tt)),o&&(c.normal=Ci.getInterpolatedAttribute(o,r,l,h,u,new T),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:r,b:l,c:h,normal:new T,materialIndex:0};Ci.getNormal(er,ir,nr,d.normal),c.face=d,c.barycoord=u}return c}class ni extends Ue{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,a,0),g("z","y","x",1,-1,n,e,-t,o,a,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2));function g(_,m,p,b,S,v,R,w,C,P,E){const x=v/C,L=R/P,z=v/2,B=R/2,H=w/2,q=C+1,W=P+1;let K=0,V=0;const st=new T;for(let mt=0;mt<W;mt++){const vt=mt*L-B;for(let zt=0;zt<q;zt++){const ie=zt*x-z;st[_]=ie*b,st[m]=vt*S,st[p]=H,h.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,c.push(st.x,st.y,st.z),u.push(zt/C),u.push(1-mt/P),K+=1}}for(let mt=0;mt<P;mt++)for(let vt=0;vt<C;vt++){const zt=d+vt+q*mt,ie=d+vt+q*(mt+1),$=d+(vt+1)+q*(mt+1),nt=d+(vt+1)+q*mt;l.push(zt,ie,nt),l.push(ie,$,nt),V+=6}r.addGroup(f,V,E),f+=V,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=Fs(i[e]);for(const s in n)t[s]=n[s]}return t}function jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Zf={clone:Fs,merge:Ye};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tu extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new T,Xh=new tt,qh=new tt;class ui extends Tu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;a+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Qf extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ui(ps,ms,t,e);s.layers=this.layers,this.add(s);const a=new ui(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new ui(ps,ms,t,e);o.layers=this.layers,this.add(o);const r=new ui(ps,ms,t,e);r.layers=this.layers,this.add(r);const l=new ui(ps,ms,t,e);l.layers=this.layers,this.add(l);const h=new ui(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,r,l]=e;for(const h of e)this.remove(h);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,r),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Au extends Je{constructor(t=[],e=Ns,n,s,a,o,r,l,h,c){super(t,e,n,s,a,o,r,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tp extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Au(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ni(5,5,5),a=new sn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ai,blending:xn});a.uniforms.tEquirect.value=e;const o=new Ct(s,a),r=e.minFilter;return e.minFilter===Wn&&(e.minFilter=zi),new Qf(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}class Ve extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ep={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const r=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ip extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Eo=new T,np=new T,sp=new Ht;let mn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Eo.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sp.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Nn=new Da,or=new T;class th{constructor(t=new mn,e=new mn,n=new mn,s=new mn,a=new mn,o=new mn){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn){const n=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],S=s[14],v=s[15];if(n[0].setComponents(l-a,d-h,m-f,v-p).normalize(),n[1].setComponents(l+a,d+h,m+f,v+p).normalize(),n[2].setComponents(l+o,d+c,m+g,v+b).normalize(),n[3].setComponents(l-o,d-c,m-g,v-b).normalize(),n[4].setComponents(l-r,d-u,m-_,v-S).normalize(),e===tn)n[5].setComponents(l+r,d+u,m+_,v+S).normalize();else if(e===Nr)n[5].setComponents(r,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cu extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Or=new T,Fr=new T,$h=new fe,Ks=new Na,lr=new Da,bo=new T,Yh=new T;class ap extends Pe{constructor(t=new Ue,e=new Cu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)Or.fromBufferAttribute(e,s-1),Fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Or.distanceTo(Fr);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=a,t.ray.intersectsSphere(lr)===!1)return;$h.copy(s).invert(),Ks.copy(t.ray).applyMatrix4($h);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=c.getX(_),b=c.getX(_+1),S=hr(this,t,Ks,l,p,b,_);S&&e.push(S)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(f),p=hr(this,t,Ks,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=hr(this,t,Ks,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=hr(this,t,Ks,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function hr(i,t,e,n,s,a,o){const r=i.geometry.attributes.position;if(Or.fromBufferAttribute(r,s),Fr.fromBufferAttribute(r,a),e.distanceSqToSegment(Or,Fr,bo,Yh)>n)return;bo.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(bo);if(!(h<t.near||h>t.far))return{distance:h,point:Yh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class Yr extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jh=new fe,Tl=new Na,cr=new Da,ur=new T;class eh extends Pe{constructor(t=new Ue,e=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(s),cr.radius+=a,t.ray.intersectsSphere(cr)===!1)return;jh.copy(s).invert(),Tl.copy(t.ray).applyMatrix4(jh);const r=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=h.getX(g);ur.fromBufferAttribute(u,m),Zh(ur,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ur.fromBufferAttribute(u,g),Zh(ur,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}}function Zh(i,t,e,n,s,a,o){const r=Tl.distanceSqToPoint(i);if(r<e){const l=new T;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(r),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ru extends Je{constructor(t,e,n,s,a,o,r,l,h){super(t,e,n,s,a,o,r,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pu extends Je{constructor(t,e,n=jn,s,a,o,r=Li,l=Li,h,c=Sa){if(c!==Sa&&c!==Ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,o,r,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const a=n.length;let o;e?o=e:o=t*n[a-1];let r=0,l=a-1,h;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),h=n[s]-o,h<0)r=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(a-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),l=e||(o.isVector2?new tt:new T);return l.copy(r).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,s=[],a=[],o=[],r=new T,l=new fe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}a[0]=new T,o[0]=new T;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),r.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),r.crossVectors(s[f-1],s[f]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(kt(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(r,g))}o[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(kt(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lu extends an{constructor(t=0,e=0,n=1,s=1,a=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(t,e=new tt){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(r),h=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rp extends Lu{constructor(t,e,n,s,a,o){super(t,e,n,n,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let i=0,t=0,e=0,n=0;function s(a,o,r,l){i=a,t=r,e=-3*a+3*o-2*r-l,n=2*a-2*o+r+l}return{initCatmullRom:function(a,o,r,l,h){s(o,r,h*(r-a),h*(l-o))},initNonuniformCatmullRom:function(a,o,r,l,h,c,u){let d=(o-a)/h-(r-a)/(h+c)+(r-o)/c,f=(r-o)/c-(l-o)/(c+u)+(l-r)/u;d*=c,f*=c,s(o,r,d,f)},calc:function(a){const o=a*a,r=o*a;return i+t*a+e*o+n*r}}}const dr=new T,wo=new ih,To=new ih,Ao=new ih;class op extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:l===0&&r===a-1&&(r=a-2,l=1);let h,c;this.closed||r>0?h=s[(r-1)%a]:(dr.subVectors(s[0],s[1]).add(s[0]),h=dr);const u=s[r%a],d=s[(r+1)%a];if(this.closed||r+2<a?c=s[(r+2)%a]:(dr.subVectors(s[a-1],s[a-2]).add(s[a-1]),c=dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wo.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,_,m),To.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,_,m),Ao.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),To.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Ao.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(wo.calc(l),To.calc(l),Ao.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Kh(i,t,e,n,s){const a=(n-t)*.5,o=(s-e)*.5,r=i*i,l=i*r;return(2*e-2*n+a+o)*l+(-3*e+3*n-2*a-o)*r+a*i+e}function lp(i,t){const e=1-i;return e*e*t}function hp(i,t){return 2*(1-i)*i*t}function cp(i,t){return i*i*t}function la(i,t,e,n){return lp(i,t)+hp(i,e)+cp(i,n)}function up(i,t){const e=1-i;return e*e*e*t}function dp(i,t){const e=1-i;return 3*e*e*i*t}function fp(i,t){return 3*(1-i)*i*i*t}function pp(i,t){return i*i*i*t}function ha(i,t,e,n,s){return up(i,t)+dp(i,e)+fp(i,n)+pp(i,s)}class mp extends an{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){const n=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(ha(t,s.x,a.x,o.x,r.x),ha(t,s.y,a.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jr extends an{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return n.set(ha(t,s.x,a.x,o.x,r.x),ha(t,s.y,a.y,o.y,r.y),ha(t,s.z,a.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gp extends an{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends an{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _p extends an{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,s=this.v0,a=this.v1,o=this.v2;return n.set(la(t,s.x,a.x,o.x),la(t,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends an{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,a=this.v1,o=this.v2;return n.set(la(t,s.x,a.x,o.x),la(t,s.y,a.y,o.y),la(t,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){const n=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Kh(r,l.x,h.x,c.x,u.x),Kh(r,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new tt().fromArray(s))}return this}}var Mp=Object.freeze({__proto__:null,ArcCurve:rp,CatmullRomCurve3:op,CubicBezierCurve:mp,CubicBezierCurve3:jr,EllipseCurve:Lu,LineCurve:gp,LineCurve3:Iu,QuadraticBezierCurve:_p,QuadraticBezierCurve3:Du,SplineCurve:vp});class Ua extends Ue{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=kt(s,0,Math.PI*2);const a=[],o=[],r=[],l=[],h=[],c=1/e,u=new T,d=new tt,f=new T,g=new T,_=new T;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const S=n+b*c*s,v=Math.sin(S),R=Math.cos(S);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),d.x=b/e,d.y=w/(t.length-1),r.push(d.x,d.y);const C=l[3*w+0]*v,P=l[3*w+1],E=l[3*w+0]*R;h.push(C,P,E)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){const v=S+b*t.length,R=v,w=v+t.length,C=v+t.length+1,P=v+1;a.push(R,w,P),a.push(C,P,w)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(r,2)),this.setAttribute("normal",new Me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.points,t.segments,t.phiStart,t.phiLength)}}class Te extends Ue{constructor(t=1,e=1,n=1,s=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};const h=this;s=Math.floor(s),a=Math.floor(a);const c=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function b(){const v=new T,R=new T;let w=0;const C=(e-t)/n;for(let P=0;P<=a;P++){const E=[],x=P/a,L=x*(e-t)+t;for(let z=0;z<=s;z++){const B=z/s,H=B*l+r,q=Math.sin(H),W=Math.cos(H);R.x=L*q,R.y=-x*n+m,R.z=L*W,u.push(R.x,R.y,R.z),v.set(q,C,W).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-x),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<a;E++){const x=_[E][P],L=_[E+1][P],z=_[E+1][P+1],B=_[E][P+1];(t>0||E!==0)&&(c.push(x,L,B),w+=3),(e>0||E!==a-1)&&(c.push(L,z,B),w+=3)}h.addGroup(p,w,0),p+=w}function S(v){const R=g,w=new tt,C=new T;let P=0;const E=v===!0?t:e,x=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const H=z/s*l+r,q=Math.cos(H),W=Math.sin(H);C.x=E*W,C.y=m*x,C.z=E*q,u.push(C.x,C.y,C.z),d.push(0,x,0),w.x=q*.5+.5,w.y=W*.5*x+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){const B=R+z,H=L+z;v===!0?c.push(H,H+1,B):c.push(H+1,H,B),P+=3}h.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nh extends Te{constructor(t=1,e=1,n=32,s=1,a=!1,o=0,r=Math.PI*2){super(0,t,e,n,s,a,o,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:r}}static fromJSON(t){return new nh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kn extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(n),l=Math.floor(s),h=r+1,c=l+1,u=t/r,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const b=p*d-o;for(let S=0;S<h;S++){const v=S*u-a;g.push(v,-b,0),_.push(0,0,1),m.push(S/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<r;b++){const S=b+h*p,v=b+h*(p+1),R=b+1+h*(p+1),w=b+1+h*p;f.push(S,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class wa extends Ue{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+r,Math.PI);let h=0;const c=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*a)*Math.sin(o+S*r),u.y=t*Math.cos(o+S*r),u.z=t*Math.sin(s+w*a)*Math.sin(o+S*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-S),b.push(h++)}c.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const S=c[p][b+1],v=c[p][b],R=c[p+1][b],w=c[p+1][b+1];(p!==0||o>0)&&f.push(S,v,w),(p!==n-1||l<Math.PI)&&f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vs extends Ue{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const o=[],r=[],l=[],h=[],c=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*a,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),r.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bs extends Ue{constructor(t=new Du(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:a};const o=t.computeFrenetFrames(e,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const r=new T,l=new T,h=new tt;let c=new T;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function _(){for(let S=0;S<e;S++)m(S);m(a===!1?e:0),b(),p()}function m(S){c=t.getPointAt(S/e,c);const v=o.normals[S],R=o.binormals[S];for(let w=0;w<=s;w++){const C=w/s*Math.PI*2,P=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+P*R.x,l.y=E*v.y+P*R.y,l.z=E*v.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),r.x=c.x+n*l.x,r.y=c.y+n*l.y,r.z=c.z+n*l.z,u.push(r.x,r.y,r.z)}}function p(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){const R=(s+1)*(S-1)+(v-1),w=(s+1)*S+(v-1),C=(s+1)*S+v,P=(s+1)*(S-1)+v;g.push(R,w,P),g.push(w,C,P)}}function b(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)h.x=S/e,h.y=v/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Bs(new Mp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class de extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nu extends de{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xn extends Tn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xp extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yp extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zr extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sp extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Co=new fe,Jh=new T,Qh=new T;class Uu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tc=new fe,Js=new T,Ro=new T;class Ep extends Uu{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Ro.copy(n.position),Ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ro),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc)}}class Al extends Zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ep}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ou extends Tu{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,r-=c*this.view.offsetY,l=r-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bp extends Uu{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wp extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp extends Zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ap extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Cp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ec(){return performance.now()}const ic=new fe;class Rp{constructor(t,e,n=0,s=1/0){this.ray=new Na(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ic.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ic),this}intersectObject(t,e=!0,n=[]){return Cl(t,this,n,e),n.sort(nc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)Cl(t[s],this,n,e);return n.sort(nc),n}}function nc(i,t){return i.distance-t.distance}function Cl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let o=0,r=a.length;o<r;o++)Cl(a[o],t,e,!0)}}class sc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pp extends es{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ac(i,t,e,n){const s=Lp(n);switch(e){case du:return i*t;case pu:return i*t;case mu:return i*t*2;case gu:return i*t/s.components*s.byteLength;case $l:return i*t/s.components*s.byteLength;case _u:return i*t*2/s.components*s.byteLength;case Yl:return i*t*2/s.components*s.byteLength;case fu:return i*t*3/s.components*s.byteLength;case Ri:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:case nl:return Math.max(i,16)*Math.max(t,8)/4;case tl:case il:return Math.max(i,8)*Math.max(t,8)/2;case sl:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wr:case yl:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vu:case El:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bl:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lp(i){switch(i){case nn:case hu:return{byteLength:1,components:1};case xa:case cu:case La:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case jn:case Wl:case Qi:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fu(){let i=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Ip(i){const t=new WeakMap;function e(r,l){const h=r.array,c=r.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),r.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)r.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,h){const c=l.array,u=l.updateRanges;if(i.bindBuffer(h,r),u.length===0)i.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(i.deleteBuffer(l.buffer),t.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const c=t.get(r);(!c||c.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const h=t.get(r);if(h===void 0)t.set(r,e(r,l));else if(h.version<r.version){if(h.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,r,l),h.version=r.version}}return{get:s,remove:a,update:o}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Dp,alphahash_pars_fragment:Np,alphamap_fragment:Up,alphamap_pars_fragment:Op,alphatest_fragment:Fp,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Gp,batching_vertex:Hp,begin_vertex:Vp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Kp,color_fragment:Jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:im,cube_uv_reflection_fragment:nm,defaultnormal_vertex:sm,displacementmap_pars_vertex:am,displacementmap_vertex:rm,emissivemap_fragment:om,emissivemap_pars_fragment:lm,colorspace_fragment:hm,colorspace_pars_fragment:cm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:wm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:Mm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:Em,lights_pars_begin:bm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Cm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:Nm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Om,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Bm,map_fragment:zm,map_pars_fragment:km,map_particle_fragment:Gm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:$m,morphtarget_pars_vertex:Ym,morphtarget_vertex:jm,normal_fragment_begin:Zm,normal_fragment_maps:Km,normal_pars_fragment:Jm,normal_pars_vertex:Qm,normal_vertex:t0,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:a0,opaque_fragment:r0,packing:o0,premultiplied_alpha_fragment:l0,project_vertex:h0,dithering_fragment:c0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:v0,skinning_pars_vertex:M0,skinning_vertex:x0,skinnormal_vertex:y0,specularmap_fragment:S0,specularmap_pars_fragment:E0,tonemapping_fragment:b0,tonemapping_pars_fragment:w0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:C0,uv_pars_vertex:R0,uv_vertex:P0,worldpos_vertex:L0,background_vert:I0,background_frag:D0,backgroundCube_vert:N0,backgroundCube_frag:U0,cube_vert:O0,cube_frag:F0,depth_vert:B0,depth_frag:z0,distanceRGBA_vert:k0,distanceRGBA_frag:G0,equirect_vert:H0,equirect_frag:V0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:$0,meshlambert_vert:Y0,meshlambert_frag:j0,meshmatcap_vert:Z0,meshmatcap_frag:K0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ig,meshphysical_frag:ng,meshtoon_vert:sg,meshtoon_frag:ag,points_vert:rg,points_frag:og,shadow_vert:lg,shadow_frag:hg,sprite_vert:cg,sprite_frag:ug},at={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Oi={basic:{uniforms:Ye([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ye([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ye([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ye([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ye([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ye([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ye([at.points,at.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ye([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ye([at.common,at.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ye([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ye([at.sprite,at.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ye([at.common,at.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ye([at.lights,at.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Oi.physical={uniforms:Ye([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const fr={r:0,b:0,g:0},Un=new fi,dg=new fe;function fg(i,t,e,n,s,a,o){const r=new _t(0);let l=a===!0?0:1,h,c,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const R=g(S);R===null?p(r,l):R&&R.isColor&&(p(R,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===qr)?(c===void 0&&(c=new Ct(new ni(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Fs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Un.copy(v.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Un)),c.material.toneMapped=ee.getTransfer(R.colorSpace)!==he,(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Ct(new Kn(2,2),new sn({name:"BackgroundMaterial",uniforms:Fs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=ee.getTransfer(R.colorSpace)!==he,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,v){S.getRGB(fr,wu(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,v,o)}function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return r},setClearColor:function(S,v=1){r.set(S),l=v,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(r,l)},render:_,addToRenderList:m,dispose:b}}function pg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,o=!1;function r(x,L,z,B,H){let q=!1;const W=u(B,z,L);a!==W&&(a=W,h(a.object)),q=f(x,B,z,H),q&&g(x,B,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(x,L,z,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function c(x){return i.deleteVertexArray(x)}function u(x,L,z){const B=z.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let q=H[L.id];q===void 0&&(q={},H[L.id]=q);let W=q[B];return W===void 0&&(W=d(l()),q[B]=W),W}function d(x){const L=[],z=[],B=[];for(let H=0;H<e;H++)L[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,L,z,B){const H=a.attributes,q=L.attributes;let W=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){const mt=H[V];let vt=q[V];if(vt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),mt===void 0||mt.attribute!==vt||vt&&mt.data!==vt.data)return!0;W++}return a.attributesNum!==W||a.index!==B}function g(x,L,z,B){const H={},q=L.attributes;let W=0;const K=z.getAttributes();for(const V in K)if(K[V].location>=0){let mt=q[V];mt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor));const vt={};vt.attribute=mt,mt&&mt.data&&(vt.data=mt.data),H[V]=vt,W++}a.attributes=H,a.attributesNum=W,a.index=B}function _(){const x=a.newAttributes;for(let L=0,z=x.length;L<z;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const z=a.newAttributes,B=a.enabledAttributes,H=a.attributeDivisors;z[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),H[x]!==L&&(i.vertexAttribDivisor(x,L),H[x]=L)}function b(){const x=a.newAttributes,L=a.enabledAttributes;for(let z=0,B=L.length;z<B;z++)L[z]!==x[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function S(x,L,z,B,H,q,W){W===!0?i.vertexAttribIPointer(x,L,z,H,q):i.vertexAttribPointer(x,L,z,B,H,q)}function v(x,L,z,B){_();const H=B.attributes,q=z.getAttributes(),W=L.defaultAttributeValues;for(const K in q){const V=q[K];if(V.location>=0){let st=H[K];if(st===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const mt=st.normalized,vt=st.itemSize,zt=t.get(st);if(zt===void 0)continue;const ie=zt.buffer,$=zt.type,nt=zt.bytesPerElement,Et=$===i.INT||$===i.UNSIGNED_INT||st.gpuType===Wl;if(st.isInterleavedBufferAttribute){const ot=st.data,Pt=ot.stride,qt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)p(V.location+It,ot.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let It=0;It<V.locationSize;It++)m(V.location+It);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let It=0;It<V.locationSize;It++)S(V.location+It,vt/V.locationSize,$,mt,Pt*nt,(qt+vt/V.locationSize*It)*nt,Et)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)p(V.location+ot,st.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ot=0;ot<V.locationSize;ot++)S(V.location+ot,vt/V.locationSize,$,mt,vt*nt,vt/V.locationSize*ot*nt,Et)}}else if(W!==void 0){const mt=W[K];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(V.location,mt);break;case 3:i.vertexAttrib3fv(V.location,mt);break;case 4:i.vertexAttrib4fv(V.location,mt);break;default:i.vertexAttrib1fv(V.location,mt)}}}}b()}function R(){P();for(const x in n){const L=n[x];for(const z in L){const B=L[z];for(const H in B)c(B[H].object),delete B[H];delete L[z]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const z in L){const B=L[z];for(const H in B)c(B[H].object),delete B[H];delete L[z]}delete n[x.id]}function C(x){for(const L in n){const z=n[L];if(z[x.id]===void 0)continue;const B=z[x.id];for(const H in B)c(B[H].object),delete B[H];delete z[x.id]}}function P(){E(),o=!0,a!==s&&(a=s,h(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function mg(i,t,e){let n;function s(h){n=h}function a(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function r(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function gg(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ri&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const P=C===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qi&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function _g(i){const t=this;let e=null,n=0,s=!1,a=!1;const o=new mn,r=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?c(null):h();else{const b=a?0:n,S=b*4;let v=p.clippingState||null;l.value=v,v=c(g,d,S,f);for(let R=0;R!==S;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;r.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(b,r),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vg(i){let t=new WeakMap;function e(o,r){return r===Ko?o.mapping=Ns:r===Jo&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===Ko||r===Jo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new tp(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const Ss=4,rc=[.125,.215,.35,.446,.526,.582],Hn=20,Po=new Ou,oc=new _t;let Lo=null,Io=0,Do=0,No=!1;const zn=(1+Math.sqrt(5))/2,gs=1/zn,lc=[new T(-zn,gs,0),new T(zn,gs,0),new T(-gs,0,zn),new T(gs,0,zn),new T(0,zn,-gs),new T(0,zn,gs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Mg=new T;class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,a={}){const{size:o=256,position:r=Mg}=a;Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,r),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Io,Do),this._renderer.xr.enabled=No,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:La,format:Ri,colorSpace:Os,depthBuffer:!1},s=cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(a)),this._blurMaterial=yg(a,t,e)}return s}_compileMaterial(t){const e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s,a){const l=new ui(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(oc),u.toneMapping=yn,u.autoClear=!1;const g=new $r({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),_=new Ct(new ni,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(oc),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,h[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+c[b],a.y,a.z)):S===1?(l.up.set(0,0,h[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+c[b],a.z)):(l.up.set(0,h[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+c[b]));const v=this._cubeSize;pr(s,S*v,b>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ns||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=lc[(s-a-1)%lc.length];this._blur(t,a-1,a,o,r)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,r){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ct(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Hn-1),_=a/g,m=isFinite(a)?1+Math.floor(c*_):Hn;m>Hn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const p=[];let b=0;for(let C=0;C<Hn;++C){const P=C/_,E=Math.exp(-P*P/2);p.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[s],R=3*v*(s>S-Ss?s-S+Ss:0),w=4*(this._cubeSize-v);pr(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Po)}}function xg(i){const t=[],e=[],n=[];let s=i;const a=i-Ss+1+rc.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let l=1/r;o>i-Ss?l=rc[o-i+Ss-1]:o===0&&(l=0),n.push(l);const h=1/(r-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,P=w>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];b.set(E,_*g*w),S.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const R=new Ue;R.setAttribute("position",new Le(b,_)),R.setAttribute("uv",new Le(S,m)),R.setAttribute("faceIndex",new Le(v,p)),t.push(R),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cc(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yg(i,t,e){const n=new Float32Array(Hn),s=new T(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function uc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function dc(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(i){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,h=l===Ko||l===Jo,c=l===Ns||l===Us;if(h||c){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new hc(i)),u=h?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new hc(i)),u=h?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",a),u.texture):null}}}return r}function s(r){let l=0;const h=6;for(let c=0;c<h;c++)r[c]!==void 0&&l++;return l===h}function a(r){const l=r.target;l.removeEventListener("dispose",a);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Eg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){const s={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=a.get(d);f&&(t.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let S=0,v=b.length;S<v;S+=3){const R=b[S+0],w=b[S+1],C=b[S+2];d.push(R,w,w,C,C,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const R=S+0,w=S+1,C=S+2;d.push(R,w,w,C,C,R)}}else return;const m=new(xu(d)?bu:Eu)(d,1);m.version=_;const p=a.get(u);p&&t.remove(p),a.set(u,m)}function c(u){const d=a.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return a.get(u)}return{get:r,update:l,getWireframeAttribute:c}}function wg(i,t,e){let n;function s(d){n=d}let a,o;function r(d){a=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,a,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,a,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Tg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,r){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=r*(a/3);break;case i.LINES:e.lines+=r*(a/2);break;case i.LINE_STRIP:e.lines+=r*(a-1);break;case i.LINE_LOOP:e.lines+=r*a;break;case i.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,t,e){const n=new WeakMap,s=new ue;function a(o,r,l){const h=o.morphTargetInfluences,c=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(r);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(r),r.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,_=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],b=r.morphAttributes.normal||[],S=r.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=r.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*w*4*u),P=new yu(C,R,w,u);P.type=Qi,P.needsUpdate=!0;const E=v*4;for(let L=0;L<u;L++){const z=p[L],B=b[L],H=S[L],q=R*w*4*L;for(let W=0;W<z.count;W++){const K=W*E;g===!0&&(s.fromBufferAttribute(z,W),C[q+K+0]=s.x,C[q+K+1]=s.y,C[q+K+2]=s.z,C[q+K+3]=0),_===!0&&(s.fromBufferAttribute(B,W),C[q+K+4]=s.x,C[q+K+5]=s.y,C[q+K+6]=s.z,C[q+K+7]=0),m===!0&&(s.fromBufferAttribute(H,W),C[q+K+8]=s.x,C[q+K+9]=s.y,C[q+K+10]=s.z,C[q+K+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new tt(R,w)},n.set(r,d),r.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Cg(i,t,e,n){let s=new WeakMap;function a(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function r(l){const h=l.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Bu=new Je,fc=new Pu(1,1),zu=new yu,ku=new Ff,Gu=new Au,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function Ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=pc[s];if(a===void 0&&(a=new Float32Array(s),pc[s]=a),t!==0){n.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,i[o].toArray(a,r)}return a}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),De(e,n)}}function Ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),De(e,n)}}function Ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),De(e,n)}}function Og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=Mu,a=fc):a=Bu,e.setTexture2D(t||a,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function $g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zu,s)}function Yg(i){switch(i){case 5126:return Rg;case 35664:return Pg;case 35665:return Lg;case 35666:return Ig;case 35674:return Dg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return $g}}function jg(i,t){i.uniform1fv(this.addr,t)}function Zg(i,t){const e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Kg(i,t){const e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){const e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Qg(i,t){const e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){const e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){const e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i_(i,t){i.uniform1iv(this.addr,t)}function n_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function r_(i,t){i.uniform1uiv(this.addr,t)}function o_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function c_(i,t,e){const n=this.cache,s=t.length,a=Kr(e,s);Ie(n,a)||(i.uniform1iv(this.addr,a),De(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bu,a[o])}function u_(i,t,e){const n=this.cache,s=t.length,a=Kr(e,s);Ie(n,a)||(i.uniform1iv(this.addr,a),De(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ku,a[o])}function d_(i,t,e){const n=this.cache,s=t.length,a=Kr(e,s);Ie(n,a)||(i.uniform1iv(this.addr,a),De(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,a[o])}function f_(i,t,e){const n=this.cache,s=t.length,a=Kr(e,s);Ie(n,a)||(i.uniform1iv(this.addr,a),De(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zu,a[o])}function p_(i){switch(i){case 5126:return jg;case 35664:return Zg;case 35665:return Kg;case 35666:return Jg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return i_;case 35667:case 35671:return n_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return r_;case 36294:return o_;case 36295:return l_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}}class g_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}}class __{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function v_(i,t,e){const n=i.name,s=n.length;for(Uo.lastIndex=0;;){const a=Uo.exec(n),o=Uo.lastIndex;let r=a[1];const l=a[2]==="]",h=a[3];if(l&&(r=r|0),h===void 0||h==="["&&o+2===s){Mc(e,h===void 0?new m_(r,i,t):new g_(r,i,t));break}else{let u=e.map[r];u===void 0&&(u=new __(r),Mc(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);v_(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const M_=37297;let x_=0;function y_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}const yc=new Ht;function S_(i){ee._getMatrix(yc,ee.workingColorSpace,i);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+y_(i.getShaderSource(t),o)}else return s}function E_(i,t){const e=S_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,t){let e;switch(t){case $d:e="Linear";break;case Yd:e="Reinhard";break;case jd:e="Cineon";break;case Zd:e="ACESFilmic";break;case Jd:e="AgX";break;case Qd:e="Neutral";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new T;function w_(){ee.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function A_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),o=a.name;let r=1;a.type===i.FLOAT_MAT2&&(r=2),a.type===i.FLOAT_MAT3&&(r=3),a.type===i.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:r}}return e}function ea(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(R_,L_)}const P_=new Map;function L_(i,t){let e=Wt[t];if(e===void 0){const n=P_.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(I_,D_)}function D_(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Tc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function U_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Us:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function F_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case qd:t="ENVMAP_BLENDING_ADD";break}return t}function B_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function z_(i,t,e,n){const s=i.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=N_(e),h=U_(e),c=O_(e),u=F_(e),d=B_(e),f=T_(e),g=A_(a),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==yn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),o=Rl(o),o=Ec(o,e),o=bc(o,e),r=Rl(r),r=Ec(r,e),r=bc(r,e),o=wc(o),r=wc(r),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+o,v=b+p+r,R=xc(s,s.VERTEX_SHADER,S),w=xc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(R).trim(),H=s.getShaderInfoLog(w).trim();let q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,w);else{const K=Sc(s,R,"vertex"),V=Sc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&(W=!1);W&&(L.diagnostics={runnable:q,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(R),s.deleteShader(w),P=new Ar(s,_),E=C_(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,M_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let k_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new H_(t),e.set(t,n)),n}}class H_{constructor(t){this.id=k_++,this.code=t,this.usedTimes=0}}function V_(i,t,e,n,s,a,o){const r=new Ql,l=new G_,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,x,L,z,B){const H=z.fog,q=B.geometry,W=E.isMeshStandardMaterial?z.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),V=K&&K.mapping===qr?K.image.height:null,st=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=mt!==void 0?mt.length:0;let zt=0;q.morphAttributes.position!==void 0&&(zt=1),q.morphAttributes.normal!==void 0&&(zt=2),q.morphAttributes.color!==void 0&&(zt=3);let ie,$,nt,Et;if(st){const le=Oi[st];ie=le.vertexShader,$=le.fragmentShader}else ie=E.vertexShader,$=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),Et=l.getFragmentShaderID(E);const ot=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),qt=B.isInstancedMesh===!0,It=B.isBatchedMesh===!0,ge=!!E.map,pe=!!E.matcap,$t=!!K,I=!!E.aoMap,Xe=!!E.lightMap,Xt=!!E.bumpMap,jt=!!E.normalMap,At=!!E.displacementMap,ne=!!E.emissiveMap,Tt=!!E.metalnessMap,A=!!E.roughnessMap,M=E.anisotropy>0,F=E.clearcoat>0,j=E.dispersion>0,J=E.iridescence>0,Y=E.sheen>0,bt=E.transmission>0,ut=M&&!!E.anisotropyMap,Mt=F&&!!E.clearcoatMap,Kt=F&&!!E.clearcoatNormalMap,it=F&&!!E.clearcoatRoughnessMap,xt=J&&!!E.iridescenceMap,Dt=J&&!!E.iridescenceThicknessMap,Ft=Y&&!!E.sheenColorMap,yt=Y&&!!E.sheenRoughnessMap,Zt=!!E.specularMap,Vt=!!E.specularColorMap,me=!!E.specularIntensityMap,D=bt&&!!E.transmissionMap,dt=bt&&!!E.thicknessMap,X=!!E.gradientMap,Z=!!E.alphaMap,pt=E.alphaTest>0,ft=!!E.alphaHash,Gt=!!E.extensions;let xe=yn;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(xe=i.toneMapping);const ze={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:$,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:It,batchingColor:It&&B._colorsTexture!==null,instancing:qt,instancingColor:qt&&B.instanceColor!==null,instancingMorph:qt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Os,alphaToCoverage:!!E.alphaToCoverage,map:ge,matcap:pe,envMap:$t,envMapMode:$t&&K.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:Xe,bumpMap:Xt,normalMap:jt,displacementMap:d&&At,emissiveMap:ne,normalMapObjectSpace:jt&&E.normalMapType===sf,normalMapTangentSpace:jt&&E.normalMapType===Zl,metalnessMap:Tt,roughnessMap:A,anisotropy:M,anisotropyMap:ut,clearcoat:F,clearcoatMap:Mt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:it,dispersion:j,iridescence:J,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:Zt,specularColorMap:Vt,specularIntensityMap:me,transmission:bt,transmissionMap:D,thicknessMap:dt,gradientMap:X,opaque:E.transparent===!1&&E.blending===Yn&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:pt,alphaHash:ft,combine:E.combine,mapUv:ge&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:Xe&&_(E.lightMap.channel),bumpMapUv:Xt&&_(E.bumpMap.channel),normalMapUv:jt&&_(E.normalMap.channel),displacementMapUv:At&&_(E.displacementMap.channel),emissiveMapUv:ne&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:Mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(E.sheenRoughnessMap.channel),specularMapUv:Zt&&_(E.specularMap.channel),specularColorMapUv:Vt&&_(E.specularColorMap.channel),specularIntensityMapUv:me&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(jt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(ge||Z),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:zt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:ge&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fi,flipSided:E.side===ai,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=h.has(1),ze.vertexUv2s=h.has(2),ze.vertexUv3s=h.has(3),h.clear(),ze}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)x.push(L),x.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(b(x,E),S(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){r.disableAll(),x.supportsVertexTextures&&r.enable(0),x.instancing&&r.enable(1),x.instancingColor&&r.enable(2),x.instancingMorph&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),x.dispersion&&r.enable(20),x.batchingColor&&r.enable(21),E.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reverseDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),E.push(r.mask)}function v(E){const x=g[E.type];let L;if(x){const z=Oi[x];L=Zf.clone(z.uniforms)}else L=E.uniforms;return L}function R(E,x){let L;for(let z=0,B=c.length;z<B;z++){const H=c[z];if(H.cacheKey===x){L=H,++L.usedTimes;break}}return L===void 0&&(L=new z_(i,x,E,a),c.push(L)),L}function w(E){if(--E.usedTimes===0){const x=c.indexOf(E);c[x]=c[c.length-1],c.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:P}}function W_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function s(o,r,l){i.get(o)[r]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function r(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||X_),n.length>1&&n.sort(d||Ac),s.length>1&&s.sort(d||Ac)}function c(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:r,unshift:l,finish:c,sort:h}}function q_(){let i=new WeakMap;function t(n,s){const a=i.get(n);let o;return a===void 0?(o=new Cc,i.set(n,[o])):s>=a.length?(o=new Cc,a.push(o)):o=a[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new _t};break;case"SpotLight":e={position:new T,direction:new T,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let j_=0;function Z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K_(i){const t=new $_,e=Y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new T);const s=new T,a=new fe,o=new fe;function r(h){let c=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,S=0,v=0,R=0,w=0,C=0;h.sort(Z_);for(let E=0,x=h.length;E<x;E++){const L=h[E],z=L.color,B=L.intensity,H=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=z.r*B,u+=z.g*B,d+=z.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],B);C++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,b++}n.directional[f]=W,f++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const K=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const K=L.shadow,V=e.get(L);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=C,n.version=j_++)}function l(h,c){let u=0,d=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const S=h[p];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:r,setupView:l,state:n}}function Rc(i){const t=new K_(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function a(c){e.push(c)}function o(c){n.push(c)}function r(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:o}}function J_(i){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let r;return o===void 0?(r=new Rc(i),t.set(s,[r])):a>=o.length?(r=new Rc(i),o.push(r)):r=o[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}const Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ev(i,t,e){let n=new th;const s=new tt,a=new tt,o=new ue,r=new xp({depthPacking:nf}),l=new yp,h={},c=e.maxTextureSize,u={[En]:ai,[ai]:En,[Fi]:Fi},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Q_,fragmentShader:tv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let p=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==Zi&&this.type===Zi,H=p===Zi&&this.type!==Zi;for(let q=0,W=w.length;q<W;q++){const K=w[q],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const st=V.getFrameExtents();if(s.multiply(st),a.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/st.x),s.x=a.x*st.x,V.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/st.y),s.y=a.y*st.y,V.mapSize.y=a.y)),V.map===null||B===!0||H===!0){const vt=this.type!==Zi?{minFilter:Li,magFilter:Li}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(s.x,s.y,vt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const mt=V.getViewportCount();for(let vt=0;vt<mt;vt++){const zt=V.getViewport(vt);o.set(a.x*zt.x,a.y*zt.y,a.x*zt.z,a.y*zt.w),z.viewport(o),V.updateMatrices(K,vt),n=V.getFrustum(),v(C,P,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Zi&&b(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,L)};function b(w,C){const P=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function S(w,C,P,E){let x=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=P.isPointLight===!0?l:r,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=x.uuid,B=C.uuid;let H=h[z];H===void 0&&(H={},h[z]=H);let q=H[B];q===void 0&&(q=x.clone(),H[B]=q,C.addEventListener("dispose",R)),x=q}if(x.visible=C.visible,x.wireframe=C.wireframe,E===Zi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=P}return x}function v(w,C,P,E,x){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Zi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const B=t.update(w),H=w.material;if(Array.isArray(H)){const q=B.groups;for(let W=0,K=q.length;W<K;W++){const V=q[W],st=H[V.materialIndex];if(st&&st.visible){const mt=S(w,st,E,x);w.onBeforeShadow(i,w,C,P,B,mt,V),i.renderBufferDirect(P,null,B,mt,w,V),w.onAfterShadow(i,w,C,P,B,mt,V)}}}else if(H.visible){const q=S(w,H,E,x);w.onBeforeShadow(i,w,C,P,B,q,null),i.renderBufferDirect(P,null,B,q,w,null),w.onAfterShadow(i,w,C,P,B,q,null)}}const z=w.children;for(let B=0,H=z.length;B<H;B++)v(z[B],C,P,E,x)}function R(w){w.target.removeEventListener("dispose",R);for(const P in h){const E=h[P],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const iv={[Wo]:Xo,[qo]:jo,[$o]:Zo,[Ds]:Yo,[Xo]:Wo,[jo]:qo,[Zo]:$o,[Yo]:Ds};function nv(i,t){function e(){let D=!1;const dt=new ue;let X=null;const Z=new ue(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,ft,Gt,xe,ze){ze===!0&&(pt*=xe,ft*=xe,Gt*=xe),dt.set(pt,ft,Gt,xe),Z.equals(dt)===!1&&(i.clearColor(pt,ft,Gt,xe),Z.copy(dt))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,X=null,Z=null,pt=null;return{setReversed:function(ft){if(dt!==ft){const Gt=t.get("EXT_clip_control");ft?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),dt=ft;const xe=pt;pt=null,this.setClear(xe)}},getReversed:function(){return dt},setTest:function(ft){ft?ot(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ft){X!==ft&&!D&&(i.depthMask(ft),X=ft)},setFunc:function(ft){if(dt&&(ft=iv[ft]),Z!==ft){switch(ft){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ft}},setLocked:function(ft){D=ft},setClear:function(ft){pt!==ft&&(dt&&(ft=1-ft),i.clearDepth(ft),pt=ft)},reset:function(){D=!1,X=null,Z=null,pt=null,dt=!1}}}function s(){let D=!1,dt=null,X=null,Z=null,pt=null,ft=null,Gt=null,xe=null,ze=null;return{setTest:function(le){D||(le?ot(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(le){dt!==le&&!D&&(i.stencilMask(le),dt=le)},setFunc:function(le,Si,Wi){(X!==le||Z!==Si||pt!==Wi)&&(i.stencilFunc(le,Si,Wi),X=le,Z=Si,pt=Wi)},setOp:function(le,Si,Wi){(ft!==le||Gt!==Si||xe!==Wi)&&(i.stencilOp(le,Si,Wi),ft=le,Gt=Si,xe=Wi)},setLocked:function(le){D=le},setClear:function(le){ze!==le&&(i.clearStencil(le),ze=le)},reset:function(){D=!1,dt=null,X=null,Z=null,pt=null,ft=null,Gt=null,xe=null,ze=null}}}const a=new e,o=new n,r=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,R=null,w=null,C=new _t(0,0,0),P=0,E=!1,x=null,L=null,z=null,B=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=K>=2);let st=null,mt={};const vt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),ie=new ue().fromArray(vt),$=new ue().fromArray(zt);function nt(D,dt,X,Z){const pt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<X;Gt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(dt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ft}const Et={};Et[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Ds),Xt(!1),jt(Eh),ot(i.CULL_FACE),I(xn);function ot(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function Pt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function qt(D,dt){return u[D]!==dt?(i.bindFramebuffer(D,dt),u[D]=dt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function It(D,dt){let X=f,Z=!1;if(D){X=d.get(dt),X===void 0&&(X=[],d.set(dt,X));const pt=D.textures;if(X.length!==pt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Gt=pt.length;ft<Gt;ft++)X[ft]=i.COLOR_ATTACHMENT0+ft;X.length=pt.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function ge(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const pe={[Gn]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};pe[Pd]=i.MIN,pe[Ld]=i.MAX;const $t={[Id]:i.ZERO,[Dd]:i.ONE,[Nd]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[kd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,dt,X,Z,pt,ft,Gt,xe,ze,le){if(D===xn){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),D!==Ad){if(D!==m||le!==E){if((p!==Gn||v!==Gn)&&(i.blendEquation(i.FUNC_ADD),p=Gn,v=Gn),le)switch(D){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,R=null,w=null,C.set(0,0,0),P=0,m=D,E=le}return}pt=pt||dt,ft=ft||X,Gt=Gt||Z,(dt!==p||pt!==v)&&(i.blendEquationSeparate(pe[dt],pe[pt]),p=dt,v=pt),(X!==b||Z!==S||ft!==R||Gt!==w)&&(i.blendFuncSeparate($t[X],$t[Z],$t[ft],$t[Gt]),b=X,S=Z,R=ft,w=Gt),(xe.equals(C)===!1||ze!==P)&&(i.blendColor(xe.r,xe.g,xe.b,ze),C.copy(xe),P=ze),m=D,E=!1}function Xe(D,dt){D.side===Fi?Pt(i.CULL_FACE):ot(i.CULL_FACE);let X=D.side===ai;dt&&(X=!X),Xt(X),D.blending===Yn&&D.transparent===!1?I(xn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);const Z=D.stencilWrite;r.setTest(Z),Z&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function jt(D){D!==bd?(ot(i.CULL_FACE),D!==L&&(D===Eh?i.cullFace(i.BACK):D===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=D}function At(D){D!==z&&(W&&i.lineWidth(D),z=D)}function ne(D,dt,X){D?(ot(i.POLYGON_OFFSET_FILL),(B!==dt||H!==X)&&(i.polygonOffset(dt,X),B=dt,H=X)):Pt(i.POLYGON_OFFSET_FILL)}function Tt(D){D?ot(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+q-1),st!==D&&(i.activeTexture(D),st=D)}function M(D,dt,X){X===void 0&&(st===null?X=i.TEXTURE0+q-1:X=st);let Z=mt[X];Z===void 0&&(Z={type:void 0,texture:void 0},mt[X]=Z),(Z.type!==D||Z.texture!==dt)&&(st!==X&&(i.activeTexture(X),st=X),i.bindTexture(D,dt||Et[D]),Z.type=D,Z.texture=dt)}function F(){const D=mt[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){ie.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function yt(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Zt(D,dt){let X=h.get(dt);X===void 0&&(X=new WeakMap,h.set(dt,X));let Z=X.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(dt,D.name),X.set(D,Z))}function Vt(D,dt){const Z=h.get(dt).get(D);l.get(dt)!==Z&&(i.uniformBlockBinding(dt,Z,D.__bindingPointIndex),l.set(dt,Z))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},st=null,mt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,R=null,w=null,C=new _t(0,0,0),P=0,E=!1,x=null,L=null,z=null,B=null,H=null,ie.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:ot,disable:Pt,bindFramebuffer:qt,drawBuffers:It,useProgram:ge,setBlending:I,setMaterial:Xe,setFlipSided:Xt,setCullFace:jt,setLineWidth:At,setPolygonOffset:ne,setScissorTest:Tt,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Vt,texStorage2D:Kt,texStorage3D:it,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Mt,scissor:Ft,viewport:yt,reset:me}}function sv(i,t,e,n,s,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new tt,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):Ur("canvas")}function _(A,M,F){let j=1;const J=Tt(A);if((J.width>F||J.height>F)&&(j=F/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(j*J.width),bt=Math.floor(j*J.height);u===void 0&&(u=g(Y,bt));const ut=M?g(Y,bt):u;return ut.width=Y,ut.height=bt,ut.getContext("2d").drawImage(A,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+bt+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,M,F,j,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=M;if(M===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),M===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const bt=J?Dr:ee.getTransfer(j);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=bt===he?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,M){let F;return A?M===null||M===jn||M===ya?F=i.DEPTH24_STENCIL8:M===Qi?F=i.DEPTH32F_STENCIL8:M===xa&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jn||M===ya?F=i.DEPTH_COMPONENT24:M===Qi?F=i.DEPTH_COMPONENT32F:M===xa&&(F=i.DEPTH_COMPONENT16),F}function R(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Li&&A.minFilter!==zi?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){const M=A.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&c.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),x(M)}function P(A){const M=n.get(A);if(M.__webglInit===void 0)return;const F=A.source,j=d.get(F);if(j){const J=j[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(A),Object.keys(j).length===0&&d.delete(F)}n.remove(A)}function E(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const F=A.source,j=d.get(F);delete j[M.__cacheKey],o.memory.textures--}function x(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let J=0;J<M.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[j][J]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=A.textures;for(let j=0,J=F.length;j<J;j++){const Y=n.get(F[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[j])}n.remove(A)}let L=0;function z(){L=0}function B(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function q(A,M){const F=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,A,M);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function W(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function K(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,M);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function V(A,M){const F=n.get(A);if(A.version>0&&F.__version!==A.version){nt(F,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const st={[Ma]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},mt={[Li]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Wa]:i.NEAREST_MIPMAP_LINEAR,[zi]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},vt={[af]:i.NEVER,[uf]:i.ALWAYS,[rf]:i.LESS,[Mu]:i.LEQUAL,[of]:i.EQUAL,[cf]:i.GEQUAL,[lf]:i.GREATER,[hf]:i.NOTEQUAL};function zt(A,M){if(M.type===Qi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zi||M.magFilter===eo||M.magFilter===Wa||M.magFilter===Wn||M.minFilter===zi||M.minFilter===eo||M.minFilter===Wa||M.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,st[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,st[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,st[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Li||M.minFilter!==Wa&&M.minFilter!==Wn||M.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ie(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));const j=M.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Y=H(M);if(Y!==A.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Y].usedTimes++;const bt=J[A.__cacheKey];bt!==void 0&&(J[A.__cacheKey].usedTimes--,bt.usedTimes===0&&E(M)),A.__cacheKey=Y,A.__webglTexture=J[Y].texture}return F}function $(A,M,F){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const J=ie(A,M),Y=M.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+F);const bt=n.get(Y);if(Y.version!==bt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ut=ee.getPrimaries(ee.workingColorSpace),Mt=M.colorSpace===gn?null:ee.getPrimaries(M.colorSpace),Kt=M.colorSpace===gn||ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let it=_(M.image,!1,s.maxTextureSize);it=ne(M,it);const xt=a.convert(M.format,M.colorSpace),Dt=a.convert(M.type);let Ft=S(M.internalFormat,xt,Dt,M.colorSpace,M.isVideoTexture);zt(j,M);let yt;const Zt=M.mipmaps,Vt=M.isVideoTexture!==!0,me=bt.__version===void 0||J===!0,D=Y.dataReady,dt=R(M,it);if(M.isDepthTexture)Ft=v(M.format===Ea,M.type),me&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ft,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ft,it.width,it.height,0,xt,Dt,null));else if(M.isDataTexture)if(Zt.length>0){Vt&&me&&e.texStorage2D(i.TEXTURE_2D,dt,Ft,Zt[0].width,Zt[0].height);for(let X=0,Z=Zt.length;X<Z;X++)yt=Zt[X],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,yt.width,yt.height,0,xt,Dt,yt.data);M.generateMipmaps=!1}else Vt?(me&&e.texStorage2D(i.TEXTURE_2D,dt,Ft,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,xt,Dt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,it.width,it.height,0,xt,Dt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ft,Zt[0].width,Zt[0].height,it.depth);for(let X=0,Z=Zt.length;X<Z;X++)if(yt=Zt[X],M.format!==Ri)if(xt!==null)if(Vt){if(D)if(M.layerUpdates.size>0){const pt=ac(yt.width,yt.height,M.format,M.type);for(const ft of M.layerUpdates){const Gt=yt.data.subarray(ft*pt/yt.data.BYTES_PER_ELEMENT,(ft+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ft,yt.width,yt.height,1,xt,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,it.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ft,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,it.depth,xt,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ft,yt.width,yt.height,it.depth,0,xt,Dt,yt.data)}else{Vt&&me&&e.texStorage2D(i.TEXTURE_2D,dt,Ft,Zt[0].width,Zt[0].height);for(let X=0,Z=Zt.length;X<Z;X++)yt=Zt[X],M.format!==Ri?xt!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,yt.width,yt.height,0,xt,Dt,yt.data)}else if(M.isDataArrayTexture)if(Vt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ft,it.width,it.height,it.depth),D)if(M.layerUpdates.size>0){const X=ac(it.width,it.height,M.format,M.type);for(const Z of M.layerUpdates){const pt=it.data.subarray(Z*X/it.data.BYTES_PER_ELEMENT,(Z+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,xt,Dt,pt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,Dt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,it.width,it.height,it.depth,0,xt,Dt,it.data);else if(M.isData3DTexture)Vt?(me&&e.texStorage3D(i.TEXTURE_3D,dt,Ft,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,Dt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,it.width,it.height,it.depth,0,xt,Dt,it.data);else if(M.isFramebufferTexture){if(me)if(Vt)e.texStorage2D(i.TEXTURE_2D,dt,Ft,it.width,it.height);else{let X=it.width,Z=it.height;for(let pt=0;pt<dt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ft,X,Z,0,xt,Dt,null),X>>=1,Z>>=1}}else if(Zt.length>0){if(Vt&&me){const X=Tt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ft,X.width,X.height)}for(let X=0,Z=Zt.length;X<Z;X++)yt=Zt[X],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt,Dt,yt):e.texImage2D(i.TEXTURE_2D,X,Ft,xt,Dt,yt);M.generateMipmaps=!1}else if(Vt){if(me){const X=Tt(it);e.texStorage2D(i.TEXTURE_2D,dt,Ft,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,it)}else e.texImage2D(i.TEXTURE_2D,0,Ft,xt,Dt,it);m(M)&&p(j),bt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function nt(A,M,F){if(M.image.length!==6)return;const j=ie(A,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const bt=ee.getPrimaries(ee.workingColorSpace),ut=M.colorSpace===gn?null:ee.getPrimaries(M.colorSpace),Mt=M.colorSpace===gn||bt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Kt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!Kt&&!it?xt[Z]=_(M.image[Z],!0,s.maxCubemapSize):xt[Z]=it?M.image[Z].image:M.image[Z],xt[Z]=ne(M,xt[Z]);const Dt=xt[0],Ft=a.convert(M.format,M.colorSpace),yt=a.convert(M.type),Zt=S(M.internalFormat,Ft,yt,M.colorSpace),Vt=M.isVideoTexture!==!0,me=Y.__version===void 0||j===!0,D=J.dataReady;let dt=R(M,Dt);zt(i.TEXTURE_CUBE_MAP,M);let X;if(Kt){Vt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Zt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){X=xt[Z].mipmaps;for(let pt=0;pt<X.length;pt++){const ft=X[pt];M.format!==Ri?Ft!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Ft,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Zt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Ft,yt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Zt,ft.width,ft.height,0,Ft,yt,ft.data)}}}else{if(X=M.mipmaps,Vt&&me){X.length>0&&dt++;const Z=Tt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Ft,yt,xt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,xt[Z].width,xt[Z].height,0,Ft,yt,xt[Z].data);for(let pt=0;pt<X.length;pt++){const Gt=X[pt].image[Z].image;Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Gt.width,Gt.height,Ft,yt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Zt,Gt.width,Gt.height,0,Ft,yt,Gt.data)}}else{Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ft,yt,xt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Ft,yt,xt[Z]);for(let pt=0;pt<X.length;pt++){const ft=X[pt];Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Ft,yt,ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Zt,Ft,yt,ft.image[Z])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Y.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Et(A,M,F,j,J,Y){const bt=a.convert(F.format,F.colorSpace),ut=a.convert(F.type),Mt=S(F.internalFormat,bt,ut,F.colorSpace),Kt=n.get(M),it=n.get(F);if(it.__renderTarget=M,!Kt.__hasExternalTextures){const xt=Math.max(1,M.width>>Y),Dt=Math.max(1,M.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,Mt,xt,Dt,M.depth,0,bt,ut,null):e.texImage2D(J,Y,Mt,xt,Dt,0,bt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),jt(M)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,it.__webglTexture,0,Xt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,it.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const j=M.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=v(M.stencilBuffer,J),bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Xt(M);jt(M)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Y,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,A)}else{const j=M.textures;for(let J=0;J<j.length;J++){const Y=j[J],bt=a.convert(Y.format,Y.colorSpace),ut=a.convert(Y.type),Mt=S(Y.internalFormat,bt,ut,Y.colorSpace),Kt=Xt(M);F&&jt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Mt,M.width,M.height):jt(M)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const J=j.__webglTexture,Y=Xt(M);if(M.depthTexture.format===Sa)jt(M)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===Ea)jt(M)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qt(A){const M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=j}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pt(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),ot(M.__webglDepthbuffer[j],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ot(M.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,M,F){const j=n.get(A);M!==void 0&&Et(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qt(A)}function ge(A){const M=A.texture,F=n.get(A),j=n.get(M);A.addEventListener("dispose",C);const J=A.textures,Y=A.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)F.__webglFramebuffer[ut][Mt]=i.createFramebuffer()}else F.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)F.__webglFramebuffer[ut]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ut=0,Mt=J.length;ut<Mt;ut++){const Kt=n.get(J[ut]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&jt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const Mt=J[ut];F.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const Kt=a.convert(Mt.format,Mt.colorSpace),it=a.convert(Mt.type),xt=S(Mt.internalFormat,Kt,it,Mt.colorSpace,A.isXRRenderTarget===!0),Dt=Xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),zt(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)Et(F.__webglFramebuffer[ut][Mt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt);else Et(F.__webglFramebuffer[ut],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,Mt=J.length;ut<Mt;ut++){const Kt=J[ut],it=n.get(Kt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),zt(i.TEXTURE_2D,Kt),Et(F.__webglFramebuffer,A,Kt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),zt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)Et(F.__webglFramebuffer[Mt],A,M,i.COLOR_ATTACHMENT0,ut,Mt);else Et(F.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ut,0);m(M)&&p(ut),e.unbindTexture()}A.depthBuffer&&qt(A)}function pe(A){const M=A.textures;for(let F=0,j=M.length;F<j;F++){const J=M[F];if(m(J)){const Y=b(A),bt=n.get(J).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}const $t=[],I=[];function Xe(A){if(A.samples>0){if(jt(A)===!1){const M=A.textures,F=A.width,j=A.height;let J=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(A),ut=M.length>1;if(ut)for(let Mt=0;Mt<M.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Mt=0;Mt<M.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const Kt=n.get(M[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,J,i.NEAREST),l===!0&&($t.length=0,I.length=0,$t.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&($t.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<M.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const Kt=n.get(M[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Xt(A){return Math.min(s.maxSamples,A.samples)}function jt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(A){const M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function ne(A,M){const F=A.colorSpace,j=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Os&&F!==gn&&(ee.getTransfer(F)===he?(j!==Ri||J!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=jt}function av(i,t){function e(n,s=gn){let a;const o=ee.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return i.BYTE;if(n===cu)return i.SHORT;if(n===xa)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Qi)return i.FLOAT;if(n===La)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===fu)return i.RGB;if(n===Ri)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===Sa)return i.DEPTH_COMPONENT;if(n===Ea)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===Er||n===br)if(o===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===il||n===nl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===tl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===al||n===rl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sl||n===al)return o===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===ll||n===hl||n===cl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===Ml||n===xl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ol)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===yl||n===Sl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===wr)return o===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===El||n===bl||n===wl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===wr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===El)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ya?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:rv,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends es{constructor(t,e){super();const n=this;let s=null,a=1,o=null,r="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null;const _=new lv,m=e.getContextAttributes();let p=null,b=null;const S=[],v=[],R=new tt;let w=null;const C=new ui;C.viewport=new ue;const P=new ui;P.viewport=new ue;const E=[C,P],x=new Ap;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=S[$];return nt===void 0&&(nt=new So,S[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=S[$];return nt===void 0&&(nt=new So,S[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=S[$];return nt===void 0&&(nt=new So,S[$]=nt),nt.getHandSpace()};function B($){const nt=v.indexOf($.inputSource);if(nt===-1)return;const Et=S[nt];Et!==void 0&&(Et.update($.inputSource,$.frame,h||o),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let $=0;$<S.length;$++){const nt=v[$];nt!==null&&(v[$]=null,S[$].disconnect(nt))}L=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,ot=null,Pt=null;m.depth&&(Pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=m.stencil?Ea:Sa,ot=m.stencil?ya:jn);const qt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:a};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Zn(d.textureWidth,d.textureHeight,{format:Ri,type:nn,depthTexture:new Pu(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(r),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q($){for(let nt=0;nt<$.removed.length;nt++){const Et=$.removed[nt],ot=v.indexOf(Et);ot>=0&&(v[ot]=null,S[ot].disconnect(Et))}for(let nt=0;nt<$.added.length;nt++){const Et=$.added[nt];let ot=v.indexOf(Et);if(ot===-1){for(let qt=0;qt<S.length;qt++)if(qt>=v.length){v.push(Et),ot=qt;break}else if(v[qt]===null){v[qt]=Et,ot=qt;break}if(ot===-1)break}const Pt=S[ot];Pt&&Pt.connect(Et)}}const W=new T,K=new T;function V($,nt,Et){W.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const ot=W.distanceTo(K),Pt=nt.projectionMatrix.elements,qt=Et.projectionMatrix.elements,It=Pt[14]/(Pt[10]-1),ge=Pt[14]/(Pt[10]+1),pe=(Pt[9]+1)/Pt[5],$t=(Pt[9]-1)/Pt[5],I=(Pt[8]-1)/Pt[0],Xe=(qt[8]+1)/qt[0],Xt=It*I,jt=It*Xe,At=ot/(-I+Xe),ne=At*-I;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ne),$.translateZ(At),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Tt=It+At,A=ge+At,M=Xt-ne,F=jt+(ot-ne),j=pe*ge/A*Tt,J=$t*ge/A*Tt;$.projectionMatrix.makePerspective(M,F,j,J,Tt,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,Et=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),x.near=P.near=C.near=nt,x.far=P.far=C.far=Et,(L!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,z=x.far),C.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=C.layers.mask|P.layers.mask;const ot=$.parent,Pt=x.cameras;st(x,ot);for(let qt=0;qt<Pt.length;qt++)st(Pt[qt],ot);Pt.length===2?V(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),mt($,x,ot)};function mt($,nt,Et){Et===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ba*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let vt=null;function zt($,nt){if(c=nt.getViewerPose(h||o),g=nt,c!==null){const Et=c.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ot=!1;Et.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let It=0;It<Et.length;It++){const ge=Et[It];let pe=null;if(f!==null)pe=f.getViewport(ge);else{const I=u.getViewSubImage(d,ge);pe=I.viewport,It===0&&(t.setRenderTargetTextures(b,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(b))}let $t=E[It];$t===void 0&&($t=new ui,$t.layers.enable(It),$t.viewport=new ue,E[It]=$t),$t.matrix.fromArray(ge.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(ge.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(pe.x,pe.y,pe.width,pe.height),It===0&&(x.matrix.copy($t.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push($t)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const It=u.getDepthInformation(Et[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let Et=0;Et<S.length;Et++){const ot=v[Et],Pt=S[Et];ot!==null&&Pt!==void 0&&Pt.update(ot,nt,h||o)}vt&&vt($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ie=new Fu;ie.setAnimationLoop(zt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const On=new fi,cv=new fe;function uv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),c(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ai&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ai&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,On.copy(v),On.x*=-1,On.y*=-1,On.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(On)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ai&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,t,e,n){let s={},a={},o=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const v=S.program;n.uniformBlockBinding(b,v)}function h(b,S){let v=s[b.id];v===void 0&&(g(b),v=c(b),s[b.id]=v,b.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(b,R);const w=t.render.frame;a[b.id]!==w&&(d(b),a[b.id]=w)}function c(b){const S=u();b.__bindingPointIndex=S;const v=i.createBuffer(),R=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let b=0;b<r;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],v=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,C=v.length;w<C;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,x=P.length;E<x;E++){const L=P[E];if(f(L,w,E,R)===!0){const z=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let q=0;q<B.length;q++){const W=B[q],K=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+H,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,v,R){const w=b.value,C=S+"_"+v;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const P=R[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(b){const S=b.uniforms;let v=0;const R=16;for(let C=0,P=S.length;C<P;C++){const E=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,L=E.length;x<L;x++){const z=E[x],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,q=B.length;H<q;H++){const W=B[H],K=_(W),V=v%R,st=V%K.boundary,mt=V+st;v+=st,mt!==0&&R-mt<K.storage&&(v+=R-mt),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=K.storage}}}const w=v%R;return w>0&&(v+=R-w),b.__size=v,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},a={}}return{bind:l,update:h,dispose:p}}class fv{constructor(t={}){const{canvas:e=Cf(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=xi;let w=0,C=0,P=null,E=-1,x=null;const L=new ue,z=new ue;let B=null;const H=new _t(0);let q=0,W=e.width,K=e.height,V=1,st=null,mt=null;const vt=new ue(0,0,W,K),zt=new ue(0,0,W,K);let ie=!1;const $=new th;let nt=!1,Et=!1;const ot=new fe,Pt=new fe,qt=new T,It=new ue,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function $t(){return P===null?V:1}let I=n;function Xe(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),I===null){const N="webgl2";if(I=Xe(N,y),I===null)throw Xe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Xt,jt,At,ne,Tt,A,M,F,j,J,Y,bt,ut,Mt,Kt,it,xt,Dt,Ft,yt,Zt,Vt,me,D;function dt(){Xt=new Eg(I),Xt.init(),Vt=new av(I,Xt),jt=new gg(I,Xt,t,Vt),At=new nv(I,Xt),jt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),ne=new Tg(I),Tt=new W_,A=new sv(I,Xt,At,Tt,jt,Vt,ne),M=new vg(v),F=new Sg(v),j=new Ip(I),me=new pg(I,j),J=new bg(I,j,ne,me),Y=new Cg(I,J,j,ne),Ft=new Ag(I,jt,A),it=new _g(Tt),bt=new V_(v,M,F,Xt,jt,me,it),ut=new uv(v,Tt),Mt=new q_,Kt=new J_(Xt),Dt=new fg(v,M,F,At,Y,f,l),xt=new ev(v,Y,jt),D=new dv(I,ne,jt,At),yt=new mg(I,Xt,ne),Zt=new wg(I,Xt,ne),ne.programs=bt.programs,v.capabilities=jt,v.extensions=Xt,v.properties=Tt,v.renderLists=Mt,v.shadowMap=xt,v.state=At,v.info=ne}dt();const X=new hv(v,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(W,K,!1))},this.getSize=function(y){return y.set(W,K)},this.setSize=function(y,N,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,K=N,e.width=Math.floor(y*V),e.height=Math.floor(N*V),k===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(W*V,K*V).floor()},this.setDrawingBufferSize=function(y,N,k){W=y,K=N,V=k,e.width=Math.floor(y*k),e.height=Math.floor(N*k),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,N,k,G){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,N,k,G),At.viewport(L.copy(vt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(zt)},this.setScissor=function(y,N,k,G){y.isVector4?zt.set(y.x,y.y,y.z,y.w):zt.set(y,N,k,G),At.scissor(z.copy(zt).multiplyScalar(V).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){At.setScissorTest(ie=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){mt=y},this.getClearColor=function(y){return y.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,k=!0){let G=0;if(y){let U=!1;if(P!==null){const et=P.texture.format;U=et===jl||et===Yl||et===$l}if(U){const et=P.texture.type,ht=et===nn||et===jn||et===xa||et===ya||et===Xl||et===ql,gt=Dt.getClearColor(),St=Dt.getClearAlpha(),Bt=gt.r,Ot=gt.g,Rt=gt.b;ht?(g[0]=Bt,g[1]=Ot,g[2]=Rt,g[3]=St,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Bt,_[1]=Ot,_[2]=Rt,_[3]=St,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Dt.dispose(),Mt.dispose(),Kt.dispose(),Tt.dispose(),M.dispose(),F.dispose(),Y.dispose(),me.dispose(),D.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",gh),X.removeEventListener("sessionend",_h),Rn.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=ne.autoReset,N=xt.enabled,k=xt.autoUpdate,G=xt.needsUpdate,U=xt.type;dt(),ne.autoReset=y,xt.enabled=N,xt.autoUpdate=k,xt.needsUpdate=G,xt.type=U}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Gt(y){const N=y.target;N.removeEventListener("dispose",Gt),xe(N)}function xe(y){ze(y),Tt.remove(y)}function ze(y){const N=Tt.get(y).programs;N!==void 0&&(N.forEach(function(k){bt.releaseProgram(k)}),y.isShaderMaterial&&bt.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,k,G,U,et){N===null&&(N=ge);const ht=U.isMesh&&U.matrixWorld.determinant()<0,gt=md(y,N,k,G,U);At.setMaterial(G,ht);let St=k.index,Bt=1;if(G.wireframe===!0){if(St=J.getWireframeAttribute(k),St===void 0)return;Bt=2}const Ot=k.drawRange,Rt=k.attributes.position;let Jt=Ot.start*Bt,se=(Ot.start+Ot.count)*Bt;et!==null&&(Jt=Math.max(Jt,et.start*Bt),se=Math.min(se,(et.start+et.count)*Bt)),St!==null?(Jt=Math.max(Jt,0),se=Math.min(se,St.count)):Rt!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,Rt.count));const be=se-Jt;if(be<0||be===1/0)return;me.setup(U,G,gt,k,St);let ye,te=yt;if(St!==null&&(ye=j.get(St),te=Zt,te.setIndex(ye)),U.isMesh)G.wireframe===!0?(At.setLineWidth(G.wireframeLinewidth*$t()),te.setMode(I.LINES)):te.setMode(I.TRIANGLES);else if(U.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),At.setLineWidth(Lt*$t()),U.isLineSegments?te.setMode(I.LINES):U.isLineLoop?te.setMode(I.LINE_LOOP):te.setMode(I.LINE_STRIP)}else U.isPoints?te.setMode(I.POINTS):U.isSprite&&te.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))te.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Lt=U._multiDrawStarts,Oe=U._multiDrawCounts,ae=U._multiDrawCount,Ei=St?j.get(St).bytesPerElement:1,is=Tt.get(G).currentProgram.getUniforms();for(let oi=0;oi<ae;oi++)is.setValue(I,"_gl_DrawID",oi),te.render(Lt[oi]/Ei,Oe[oi])}else if(U.isInstancedMesh)te.renderInstances(Jt,be,U.count);else if(k.isInstancedBufferGeometry){const Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Oe=Math.min(k.instanceCount,Lt);te.renderInstances(Jt,be,Oe)}else te.render(Jt,be)};function le(y,N,k){y.transparent===!0&&y.side===Fi&&y.forceSinglePass===!1?(y.side=ai,y.needsUpdate=!0,Va(y,N,k),y.side=En,y.needsUpdate=!0,Va(y,N,k),y.side=Fi):Va(y,N,k)}this.compile=function(y,N,k=null){k===null&&(k=y),p=Kt.get(k),p.init(N),S.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==k&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const gt=et[ht];le(gt,k,U),G.add(gt)}else le(et,k,U),G.add(et)}),p=S.pop(),G},this.compileAsync=function(y,N,k=null){const G=this.compile(y,N,k);return new Promise(U=>{function et(){if(G.forEach(function(ht){Tt.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){U(y);return}setTimeout(et,10)}Xt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Si=null;function Wi(y){Si&&Si(y)}function gh(){Rn.stop()}function _h(){Rn.start()}const Rn=new Fu;Rn.setAnimationLoop(Wi),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(y){Si=y,X.setAnimationLoop(y),y===null?Rn.stop():Rn.start()},X.addEventListener("sessionstart",gh),X.addEventListener("sessionend",_h),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,P),p=Kt.get(y,S.length),p.init(N),S.push(p),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Pt),Et=this.localClippingEnabled,nt=it.init(this.clippingPlanes,Et),m=Mt.get(y,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&Qr(et,N,-1/0,v.sortObjects)}Qr(y,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,mt),pe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,pe&&Dt.addToRenderList(m,y),this.info.render.frame++,nt===!0&&it.beginShadows();const k=p.state.shadowsArray;xt.render(k,y,N),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const et=N.cameras;if(U.length>0)for(let ht=0,gt=et.length;ht<gt;ht++){const St=et[ht];Mh(G,U,y,St)}pe&&Dt.render(y);for(let ht=0,gt=et.length;ht<gt;ht++){const St=et[ht];vh(m,y,St,St.viewport)}}else U.length>0&&Mh(G,U,y,N),pe&&Dt.render(y),vh(m,y,N);P!==null&&C===0&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,N),me.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],nt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Qr(y,N,k,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){G&&It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);const ht=Y.update(y),gt=y.material;gt.visible&&m.push(y,ht,gt,k,It.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const ht=Y.update(y),gt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),It.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),It.copy(ht.boundingSphere.center)),It.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),Array.isArray(gt)){const St=ht.groups;for(let Bt=0,Ot=St.length;Bt<Ot;Bt++){const Rt=St[Bt],Jt=gt[Rt.materialIndex];Jt&&Jt.visible&&m.push(y,ht,Jt,k,It.z,Rt)}}else gt.visible&&m.push(y,ht,gt,k,It.z,null)}}const et=y.children;for(let ht=0,gt=et.length;ht<gt;ht++)Qr(et[ht],N,k,G)}function vh(y,N,k,G){const U=y.opaque,et=y.transmissive,ht=y.transparent;p.setupLightsView(k),nt===!0&&it.setGlobalState(v.clippingPlanes,k),G&&At.viewport(L.copy(G)),U.length>0&&Ha(U,N,k),et.length>0&&Ha(et,N,k),ht.length>0&&Ha(ht,N,k),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Mh(y,N,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?La:nn,minFilter:Wn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const et=p.state.transmissionRenderTarget[G.id],ht=G.viewport||L;et.setSize(ht.z*v.transmissionResolutionScale,ht.w*v.transmissionResolutionScale);const gt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),pe&&Dt.render(k);const St=v.toneMapping;v.toneMapping=yn;const Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),nt===!0&&it.setGlobalState(v.clippingPlanes,G),Ha(y,k,G),A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Rt=0,Jt=N.length;Rt<Jt;Rt++){const se=N[Rt],be=se.object,ye=se.geometry,te=se.material,Lt=se.group;if(te.side===Fi&&be.layers.test(G.layers)){const Oe=te.side;te.side=ai,te.needsUpdate=!0,xh(be,k,G,ye,te,Lt),te.side=Oe,te.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(et),A.updateRenderTargetMipmap(et))}v.setRenderTarget(gt),v.setClearColor(H,q),Bt!==void 0&&(G.viewport=Bt),v.toneMapping=St}function Ha(y,N,k){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,et=y.length;U<et;U++){const ht=y[U],gt=ht.object,St=ht.geometry,Bt=ht.group;let Ot=ht.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),gt.layers.test(k.layers)&&xh(gt,N,k,St,Ot,Bt)}}function xh(y,N,k,G,U,et){y.onBeforeRender(v,N,k,G,U,et),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,N,k,G,y,et),U.transparent===!0&&U.side===Fi&&U.forceSinglePass===!1?(U.side=ai,U.needsUpdate=!0,v.renderBufferDirect(k,N,G,U,y,et),U.side=En,U.needsUpdate=!0,v.renderBufferDirect(k,N,G,U,y,et),U.side=Fi):v.renderBufferDirect(k,N,G,U,y,et),y.onAfterRender(v,N,k,G,U,et)}function Va(y,N,k){N.isScene!==!0&&(N=ge);const G=Tt.get(y),U=p.state.lights,et=p.state.shadowsArray,ht=U.state.version,gt=bt.getParameters(y,U.state,et,N,k),St=bt.getProgramCacheKey(gt);let Bt=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?F:M).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",Gt),Bt=new Map,G.programs=Bt);let Ot=Bt.get(St);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===ht)return Sh(y,gt),Ot}else gt.uniforms=bt.getUniforms(y),y.onBeforeCompile(gt,v),Ot=bt.acquireProgram(gt,St),Bt.set(St,Ot),G.uniforms=gt.uniforms;const Rt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=it.uniform),Sh(y,gt),G.needsLights=_d(y),G.lightsStateVersion=ht,G.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function yh(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Ar.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Sh(y,N){const k=Tt.get(y);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function md(y,N,k,G,U){N.isScene!==!0&&(N=ge),A.resetTextureUnits();const et=N.fog,ht=G.isMeshStandardMaterial?N.environment:null,gt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Os,St=(G.isMeshStandardMaterial?F:M).get(G.envMap||ht),Bt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,se=!!k.morphAttributes.color;let be=yn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=v.toneMapping);const ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=ye!==void 0?ye.length:0,Lt=Tt.get(G),Oe=p.state.lights;if(nt===!0&&(Et===!0||y!==x)){const qe=y===x&&G.id===E;it.setState(G,y,qe)}let ae=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Oe.state.version||Lt.outputColorSpace!==gt||U.isBatchedMesh&&Lt.batching===!1||!U.isBatchedMesh&&Lt.batching===!0||U.isBatchedMesh&&Lt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Lt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Lt.instancing===!1||!U.isInstancedMesh&&Lt.instancing===!0||U.isSkinnedMesh&&Lt.skinning===!1||!U.isSkinnedMesh&&Lt.skinning===!0||U.isInstancedMesh&&Lt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Lt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Lt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Lt.instancingMorph===!1&&U.morphTexture!==null||Lt.envMap!==St||G.fog===!0&&Lt.fog!==et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==it.numPlanes||Lt.numIntersection!==it.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==Ot||Lt.morphTargets!==Rt||Lt.morphNormals!==Jt||Lt.morphColors!==se||Lt.toneMapping!==be||Lt.morphTargetsCount!==te)&&(ae=!0):(ae=!0,Lt.__version=G.version);let Ei=Lt.currentProgram;ae===!0&&(Ei=Va(G,N,U));let is=!1,oi=!1,qs=!1;const _e=Ei.getUniforms(),pi=Lt.uniforms;if(At.useProgram(Ei.program)&&(is=!0,oi=!0,qs=!0),G.id!==E&&(E=G.id,oi=!0),is||x!==y){At.buffers.depth.getReversed()?(ot.copy(y.projectionMatrix),Pf(ot),Lf(ot),_e.setValue(I,"projectionMatrix",ot)):_e.setValue(I,"projectionMatrix",y.projectionMatrix),_e.setValue(I,"viewMatrix",y.matrixWorldInverse);const Qe=_e.map.cameraPosition;Qe!==void 0&&Qe.setValue(I,qt.setFromMatrixPosition(y.matrixWorld)),jt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,oi=!0,qs=!0)}if(U.isSkinnedMesh){_e.setOptional(I,U,"bindMatrix"),_e.setOptional(I,U,"bindMatrixInverse");const qe=U.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),_e.setValue(I,"boneTexture",qe.boneTexture,A))}U.isBatchedMesh&&(_e.setOptional(I,U,"batchingTexture"),_e.setValue(I,"batchingTexture",U._matricesTexture,A),_e.setOptional(I,U,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",U._indirectTexture,A),_e.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",U._colorsTexture,A));const mi=k.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Ft.update(U,k,Ei),(oi||Lt.receiveShadow!==U.receiveShadow)&&(Lt.receiveShadow=U.receiveShadow,_e.setValue(I,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pi.envMap.value=St,pi.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(pi.envMapIntensity.value=N.environmentIntensity),oi&&(_e.setValue(I,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&gd(pi,qs),et&&G.fog===!0&&ut.refreshFogUniforms(pi,et),ut.refreshMaterialUniforms(pi,G,V,K,p.state.transmissionRenderTarget[y.id]),Ar.upload(I,yh(Lt),pi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(I,yh(Lt),pi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(I,"center",U.center),_e.setValue(I,"modelViewMatrix",U.modelViewMatrix),_e.setValue(I,"normalMatrix",U.normalMatrix),_e.setValue(I,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qe=G.uniformsGroups;for(let Qe=0,to=qe.length;Qe<to;Qe++){const Pn=qe[Qe];D.update(Pn,Ei),D.bind(Pn,Ei)}}return Ei}function gd(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function _d(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,N,k){const G=Tt.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Tt.get(y.texture).__webglTexture=N,Tt.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const k=Tt.get(y);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const vd=I.createFramebuffer();this.setRenderTarget=function(y,N=0,k=0){P=y,w=N,C=k;let G=!0,U=null,et=!1,ht=!1;if(y){const St=Tt.get(y);if(St.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(St.__hasExternalTextures)A.rebindTextures(y,Tt.get(y.texture).__webglTexture,Tt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(St.__boundDepthTexture!==Rt){if(Rt!==null&&Tt.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ht=!0);const Ot=Tt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?U=Ot[N][k]:U=Ot[N],et=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?U=Tt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[k]:U=Ot,L.copy(y.viewport),z.copy(y.scissor),B=y.scissorTest}else L.copy(vt).multiplyScalar(V).floor(),z.copy(zt).multiplyScalar(V).floor(),B=ie;if(k!==0&&(U=vd),At.bindFramebuffer(I.FRAMEBUFFER,U)&&G&&At.drawBuffers(y,U),At.viewport(L),At.scissor(z),At.setScissorTest(B),et){const St=Tt.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,k)}else if(ht){const St=Tt.get(y.texture),Bt=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,k,Bt)}else if(y!==null&&k!==0){const St=Tt.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,St.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(y,N,k,G,U,et,ht){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){At.bindFramebuffer(I.FRAMEBUFFER,gt);try{const St=y.texture,Bt=St.format,Ot=St.type;if(!jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&k>=0&&k<=y.height-U&&I.readPixels(N,k,G,U,Vt.convert(Bt),Vt.convert(Ot),et)}finally{const St=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,N,k,G,U,et,ht){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt)if(N>=0&&N<=y.width-G&&k>=0&&k<=y.height-U){At.bindFramebuffer(I.FRAMEBUFFER,gt);const St=y.texture,Bt=St.format,Ot=St.type;if(!jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(N,k,G,U,Vt.convert(Bt),Vt.convert(Ot),0);const Jt=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,Jt);const se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rf(I,se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(Rt),I.deleteSync(se),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,k=0){const G=Math.pow(2,-k),U=Math.floor(y.image.width*G),et=Math.floor(y.image.height*G),ht=N!==null?N.x:0,gt=N!==null?N.y:0;A.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,ht,gt,U,et),At.unbindTexture()};const Md=I.createFramebuffer(),xd=I.createFramebuffer();this.copyTextureToTexture=function(y,N,k=null,G=null,U=0,et=null){et===null&&(U!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=U,U=0):et=0);let ht,gt,St,Bt,Ot,Rt,Jt,se,be;const ye=y.isCompressedTexture?y.mipmaps[et]:y.image;if(k!==null)ht=k.max.x-k.min.x,gt=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,Bt=k.min.x,Ot=k.min.y,Rt=k.isBox3?k.min.z:0;else{const mi=Math.pow(2,-U);ht=Math.floor(ye.width*mi),gt=Math.floor(ye.height*mi),y.isDataArrayTexture?St=ye.depth:y.isData3DTexture?St=Math.floor(ye.depth*mi):St=1,Bt=0,Ot=0,Rt=0}G!==null?(Jt=G.x,se=G.y,be=G.z):(Jt=0,se=0,be=0);const te=Vt.convert(N.format),Lt=Vt.convert(N.type);let Oe;N.isData3DTexture?(A.setTexture3D(N,0),Oe=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Oe=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Oe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ae=I.getParameter(I.UNPACK_ROW_LENGTH),Ei=I.getParameter(I.UNPACK_IMAGE_HEIGHT),is=I.getParameter(I.UNPACK_SKIP_PIXELS),oi=I.getParameter(I.UNPACK_SKIP_ROWS),qs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt);const _e=y.isDataArrayTexture||y.isData3DTexture,pi=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const mi=Tt.get(y),qe=Tt.get(N),Qe=Tt.get(mi.__renderTarget),to=Tt.get(qe.__renderTarget);At.bindFramebuffer(I.READ_FRAMEBUFFER,Qe.__webglFramebuffer),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,to.__webglFramebuffer);for(let Pn=0;Pn<St;Pn++)_e&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(y).__webglTexture,U,Rt+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,et,be+Pn)),I.blitFramebuffer(Bt,Ot,ht,gt,Jt,se,ht,gt,I.DEPTH_BUFFER_BIT,I.NEAREST);At.bindFramebuffer(I.READ_FRAMEBUFFER,null),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||Tt.has(y)){const mi=Tt.get(y),qe=Tt.get(N);At.bindFramebuffer(I.READ_FRAMEBUFFER,Md),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,xd);for(let Qe=0;Qe<St;Qe++)_e?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mi.__webglTexture,U,Rt+Qe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mi.__webglTexture,U),pi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qe.__webglTexture,et,be+Qe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qe.__webglTexture,et),U!==0?I.blitFramebuffer(Bt,Ot,ht,gt,Jt,se,ht,gt,I.COLOR_BUFFER_BIT,I.NEAREST):pi?I.copyTexSubImage3D(Oe,et,Jt,se,be+Qe,Bt,Ot,ht,gt):I.copyTexSubImage2D(Oe,et,Jt,se,Bt,Ot,ht,gt);At.bindFramebuffer(I.READ_FRAMEBUFFER,null),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pi?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Oe,et,Jt,se,be,ht,gt,St,te,Lt,ye.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,et,Jt,se,be,ht,gt,St,te,ye.data):I.texSubImage3D(Oe,et,Jt,se,be,ht,gt,St,te,Lt,ye):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Jt,se,ht,gt,te,Lt,ye.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Jt,se,ye.width,ye.height,te,ye.data):I.texSubImage2D(I.TEXTURE_2D,et,Jt,se,ht,gt,te,Lt,ye);I.pixelStorei(I.UNPACK_ROW_LENGTH,ae),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ei),I.pixelStorei(I.UNPACK_SKIP_PIXELS,is),I.pixelStorei(I.UNPACK_SKIP_ROWS,oi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qs),et===0&&N.generateMipmaps&&I.generateMipmap(Oe),At.unbindTexture()},this.copyTextureToTexture3D=function(y,N,k=null,G=null,U=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,k,G,U)},this.initRenderTarget=function(y){Tt.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,At.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Pc={type:"change"},ah={type:"start"},Hu={type:"end"},gr=new Na,Lc=new mn,pv=Math.cos(70*ii.DEG2RAD),Ae=new T,ti=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class Vu extends Pp{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Hi,this._lastTargetPosition=new T,this._quat=new Hi().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sc,this._sphericalDelta=new sc,this._scale=1,this._panOffset=new T,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new T,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gv.bind(this),this._onPointerDown=mv.bind(this),this._onPointerUp=_v.bind(this),this._onContextMenu=bv.bind(this),this._onMouseWheel=xv.bind(this),this._onKeyDown=yv.bind(this),this._onTouchStart=Sv.bind(this),this._onTouchMove=Ev.bind(this),this._onMouseDown=vv.bind(this),this._onMouseMove=Mv.bind(this),this._interceptControlDown=wv.bind(this),this._interceptControlUp=Tv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pc),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ti:n>Math.PI&&(n-=ti),s<-Math.PI?s+=ti:s>Math.PI&&(s-=ti),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const r=Ae.length();o=this._clampDistance(r*this._scale);const l=r-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const r=new T(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const h=new T(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(r),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gr.origin.copy(this.object.position),gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gr.direction))<pv?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),gr.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(Pc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ti/60*this.autoRotateSpeed*t:ti/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let a=Ae.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,a=e-n.top,o=n.width,r=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(a/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/e.clientHeight),this._rotateUp(ti*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/e.clientHeight),this._rotateUp(ti*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,r=(t.pageY+e.y)*.5;this._updateZoomParameters(o,r)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function gv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _v(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hu),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case As.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case As.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ah)}function Mv(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(ah),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hu))}function yv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Sv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ah)}function Ev(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function bv(i){this.enabled!==!1&&i.preventDefault()}function wv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Av(i){i("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),i("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),i("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var t=1;t<=60;++t)i("EPSG:"+(32600+t),"+proj=utm +zone="+t+" +datum=WGS84 +units=m"),i("EPSG:"+(32700+t),"+proj=utm +zone="+t+" +south +datum=WGS84 +units=m");i.WGS84=i["EPSG:4326"],i["EPSG:3785"]=i["EPSG:3857"],i.GOOGLE=i["EPSG:3857"],i["EPSG:900913"]=i["EPSG:3857"],i["EPSG:102113"]=i["EPSG:3857"]}var Jn=1,Qn=2,Rs=3,Cv=4,Pl=5,Ic=6378137,Rv=6356752314e-3,Dc=.0066943799901413165,ca=484813681109536e-20,Q=Math.PI/2,Pv=.16666666666666666,Lv=.04722222222222222,Iv=.022156084656084655,rt=1e-10,Fe=.017453292519943295,ki=57.29577951308232,re=Math.PI/4,Ta=Math.PI*2,Be=3.14159265359,ri={};ri.greenwich=0;ri.lisbon=-9.131906111111;ri.paris=2.337229166667;ri.bogota=-74.080916666667;ri.madrid=-3.687938888889;ri.rome=12.452333333333;ri.bern=7.439583333333;ri.jakarta=106.807719444444;ri.ferro=-17.666666666667;ri.brussels=4.367975;ri.stockholm=18.058277777778;ri.athens=23.7163375;ri.oslo=10.722916666667;const Dv={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.01},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var Nc=/[\s_\-\/\(\)]/g;function bn(i,t){if(i[t])return i[t];for(var e=Object.keys(i),n=t.toLowerCase().replace(Nc,""),s=-1,a,o;++s<e.length;)if(a=e[s],o=a.toLowerCase().replace(Nc,""),o===n)return i[a]}function Ll(i){var t={},e=i.split("+").map(function(r){return r.trim()}).filter(function(r){return r}).reduce(function(r,l){var h=l.split("=");return h.push(!0),r[h[0].toLowerCase()]=h[1],r},{}),n,s,a,o={proj:"projName",datum:"datumCode",rf:function(r){t.rf=parseFloat(r)},lat_0:function(r){t.lat0=r*Fe},lat_1:function(r){t.lat1=r*Fe},lat_2:function(r){t.lat2=r*Fe},lat_ts:function(r){t.lat_ts=r*Fe},lon_0:function(r){t.long0=r*Fe},lon_1:function(r){t.long1=r*Fe},lon_2:function(r){t.long2=r*Fe},alpha:function(r){t.alpha=parseFloat(r)*Fe},gamma:function(r){t.rectified_grid_angle=parseFloat(r)},lonc:function(r){t.longc=r*Fe},x_0:function(r){t.x0=parseFloat(r)},y_0:function(r){t.y0=parseFloat(r)},k_0:function(r){t.k0=parseFloat(r)},k:function(r){t.k0=parseFloat(r)},a:function(r){t.a=parseFloat(r)},b:function(r){t.b=parseFloat(r)},r:function(r){t.a=t.b=parseFloat(r)},r_a:function(){t.R_A=!0},zone:function(r){t.zone=parseInt(r,10)},south:function(){t.utmSouth=!0},towgs84:function(r){t.datum_params=r.split(",").map(function(l){return parseFloat(l)})},to_meter:function(r){t.to_meter=parseFloat(r)},units:function(r){t.units=r;var l=bn(Dv,r);l&&(t.to_meter=l.to_meter)},from_greenwich:function(r){t.from_greenwich=r*Fe},pm:function(r){var l=bn(ri,r);t.from_greenwich=(l||parseFloat(r))*Fe},nadgrids:function(r){r==="@null"?t.datumCode="none":t.nadgrids=r},axis:function(r){var l="ewnsud";r.length===3&&l.indexOf(r.substr(0,1))!==-1&&l.indexOf(r.substr(1,1))!==-1&&l.indexOf(r.substr(2,1))!==-1&&(t.axis=r)},approx:function(){t.approx=!0}};for(n in e)s=e[n],n in o?(a=o[n],typeof a=="function"?a(s):t[a]=s):t[n]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var Aa=1,Wu=2,Xu=3,Br=4,qu=5,rh=-1,Nv=/\s/,Uv=/[A-Za-z]/,Ov=/[A-Za-z84_]/,Jr=/[,\]]/,$u=/[\d\.E\-\+]/;function rn(i){if(typeof i!="string")throw new Error("not a string");this.text=i.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Aa}rn.prototype.readCharicter=function(){var i=this.text[this.place++];if(this.state!==Br)for(;Nv.test(i);){if(this.place>=this.text.length)return;i=this.text[this.place++]}switch(this.state){case Aa:return this.neutral(i);case Wu:return this.keyword(i);case Br:return this.quoted(i);case qu:return this.afterquote(i);case Xu:return this.number(i);case rh:return}};rn.prototype.afterquote=function(i){if(i==='"'){this.word+='"',this.state=Br;return}if(Jr.test(i)){this.word=this.word.trim(),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in afterquote yet, index '+this.place)};rn.prototype.afterItem=function(i){if(i===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Aa;return}if(i==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Aa,this.currentObject=this.stack.pop(),this.currentObject||(this.state=rh);return}};rn.prototype.number=function(i){if($u.test(i)){this.word+=i;return}if(Jr.test(i)){this.word=parseFloat(this.word),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in number yet, index '+this.place)};rn.prototype.quoted=function(i){if(i==='"'){this.state=qu;return}this.word+=i};rn.prototype.keyword=function(i){if(Ov.test(i)){this.word+=i;return}if(i==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Aa;return}if(Jr.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in keyword yet, index '+this.place)};rn.prototype.neutral=function(i){if(Uv.test(i)){this.word=i,this.state=Wu;return}if(i==='"'){this.word="",this.state=Br;return}if($u.test(i)){this.word=i,this.state=Xu;return}if(Jr.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in neutral yet, index '+this.place)};rn.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===rh)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Fv(i){var t=new rn(i);return t.output()}function Fo(i,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var n=t?{}:i,s=e.reduce(function(a,o){return Es(o,a),a},n);t&&(i[t]=s)}function Es(i,t){if(!Array.isArray(i)){t[i]=!0;return}var e=i.shift();if(e==="PARAMETER"&&(e=i.shift()),i.length===1){if(Array.isArray(i[0])){t[e]={},Es(i[0],t[e]);return}t[e]=i[0];return}if(!i.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=i;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(i);return}Array.isArray(e)||(t[e]={});var n;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:i[0].toLowerCase(),convert:i[1]},i.length===3&&Es(i[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:i[0],a:i[1],rf:i[2]},i.length===4&&Es(i[3],t[e]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":i[0]=["name",i[0]],Fo(t,e,i);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":i[0]=["name",i[0]],Fo(t,e,i),t[e].type=e;return;default:for(n=-1;++n<i.length;)if(!Array.isArray(i[n]))return Es(i,t[e]);return Fo(t,e,i)}}var Bv=.017453292519943295,zv=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function kv(i,t){var e=t[0],n=t[1];!(e in i)&&n in i&&(i[e]=i[n],t.length===3&&(i[e]=t[2](i[e])))}function Ni(i){return i*Bv}function Yu(i){for(var t=Object.keys(i),e=0,n=t.length;e<n;++e){var s=t[e];zv.indexOf(s)!==-1&&Gv(i[s]),typeof i[s]=="object"&&Yu(i[s])}}function Gv(i){if(i.AUTHORITY){var t=Object.keys(i.AUTHORITY)[0];t&&t in i.AUTHORITY&&(i.title=t+":"+i.AUTHORITY[t])}if(i.type==="GEOGCS"?i.projName="longlat":i.type==="LOCAL_CS"?(i.projName="identity",i.local=!0):typeof i.PROJECTION=="object"?i.projName=Object.keys(i.PROJECTION)[0]:i.projName=i.PROJECTION,i.AXIS){for(var e="",n=0,s=i.AXIS.length;n<s;++n){var a=[i.AXIS[n][0].toLowerCase(),i.AXIS[n][1].toLowerCase()];a[0].indexOf("north")!==-1||(a[0]==="y"||a[0]==="lat")&&a[1]==="north"?e+="n":a[0].indexOf("south")!==-1||(a[0]==="y"||a[0]==="lat")&&a[1]==="south"?e+="s":a[0].indexOf("east")!==-1||(a[0]==="x"||a[0]==="lon")&&a[1]==="east"?e+="e":(a[0].indexOf("west")!==-1||(a[0]==="x"||a[0]==="lon")&&a[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(i.axis=e)}i.UNIT&&(i.units=i.UNIT.name.toLowerCase(),i.units==="metre"&&(i.units="meter"),i.UNIT.convert&&(i.type==="GEOGCS"?i.DATUM&&i.DATUM.SPHEROID&&(i.to_meter=i.UNIT.convert*i.DATUM.SPHEROID.a):i.to_meter=i.UNIT.convert));var o=i.GEOGCS;i.type==="GEOGCS"&&(o=i),o&&(o.DATUM?i.datumCode=o.DATUM.name.toLowerCase():i.datumCode=o.name.toLowerCase(),i.datumCode.slice(0,2)==="d_"&&(i.datumCode=i.datumCode.slice(2)),i.datumCode==="new_zealand_1949"&&(i.datumCode="nzgd49"),(i.datumCode==="wgs_1984"||i.datumCode==="world_geodetic_system_1984")&&(i.PROJECTION==="Mercator_Auxiliary_Sphere"&&(i.sphere=!0),i.datumCode="wgs84"),i.datumCode==="belge_1972"&&(i.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(i.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),i.ellps.toLowerCase().slice(0,13)==="international"&&(i.ellps="intl"),i.a=o.DATUM.SPHEROID.a,i.rf=parseFloat(o.DATUM.SPHEROID.rf,10)),o.DATUM&&o.DATUM.TOWGS84&&(i.datum_params=o.DATUM.TOWGS84),~i.datumCode.indexOf("osgb_1936")&&(i.datumCode="osgb36"),~i.datumCode.indexOf("osni_1952")&&(i.datumCode="osni52"),(~i.datumCode.indexOf("tm65")||~i.datumCode.indexOf("geodetic_datum_of_1965"))&&(i.datumCode="ire65"),i.datumCode==="ch1903+"&&(i.datumCode="ch1903"),~i.datumCode.indexOf("israel")&&(i.datumCode="isr93")),i.b&&!isFinite(i.b)&&(i.b=i.a);function r(c){var u=i.to_meter||1;return c*u}var l=function(c){return kv(i,c)},h=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Ni],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Ni],["x0","false_easting",r],["y0","false_northing",r],["long0","central_meridian",Ni],["lat0","latitude_of_origin",Ni],["lat0","standard_parallel_1",Ni],["lat1","standard_parallel_1",Ni],["lat2","standard_parallel_2",Ni],["azimuth","Azimuth"],["alpha","azimuth",Ni],["srsCode","name"]];h.forEach(l),!i.long0&&i.longc&&(i.projName==="Albers_Conic_Equal_Area"||i.projName==="Lambert_Azimuthal_Equal_Area")&&(i.long0=i.longc),!i.lat_ts&&i.lat1&&(i.projName==="Stereographic_South_Pole"||i.projName==="Polar Stereographic (variant B)")?(i.lat0=Ni(i.lat1>0?90:-90),i.lat_ts=i.lat1):!i.lat_ts&&i.lat0&&i.projName==="Polar_Stereographic"&&(i.lat_ts=i.lat0,i.lat0=Ni(i.lat0>0?90:-90))}function ju(i){var t=Fv(i),e=t[0],n={};return Es(t,n),Yu(n),n[e]}function je(i){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?je[i]=Ll(arguments[1]):je[i]=ju(arguments[1]):je[i]=e}else if(arguments.length===1){if(Array.isArray(i))return i.map(function(n){Array.isArray(n)?je.apply(t,n):je(n)});if(typeof i=="string"){if(i in je)return je[i]}else"EPSG"in i?je["EPSG:"+i.EPSG]=i:"ESRI"in i?je["ESRI:"+i.ESRI]=i:"IAU2000"in i?je["IAU2000:"+i.IAU2000]=i:console.log(i);return}}Av(je);function Hv(i){return typeof i=="string"}function Vv(i){return i in je}var Wv=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function Xv(i){return Wv.some(function(t){return i.indexOf(t)>-1})}var qv=["3857","900913","3785","102113"];function $v(i){var t=bn(i,"authority");if(t){var e=bn(t,"epsg");return e&&qv.indexOf(e)>-1}}function Yv(i){var t=bn(i,"extension");if(t)return bn(t,"proj4")}function jv(i){return i[0]==="+"}function Zv(i){if(Hv(i)){if(Vv(i))return je[i];if(Xv(i)){var t=ju(i);if($v(t))return je["EPSG:3857"];var e=Yv(t);return e?Ll(e):t}if(jv(i))return Ll(i)}else return i}function Uc(i,t){i=i||{};var e,n;if(!t)return i;for(n in t)e=t[n],e!==void 0&&(i[n]=e);return i}function Vi(i,t,e){var n=i*t;return e/Math.sqrt(1-n*n)}function Oa(i){return i<0?-1:1}function lt(i){return Math.abs(i)<=Be?i:i-Oa(i)*Ta}function Ii(i,t,e){var n=i*e,s=.5*i;return n=Math.pow((1-n)/(1+n),s),Math.tan(.5*(Q-t))/n}function Ca(i,t){for(var e=.5*i,n,s,a=Q-2*Math.atan(t),o=0;o<=15;o++)if(n=i*Math.sin(a),s=Q-2*Math.atan(t*Math.pow((1-n)/(1+n),e))-a,a+=s,Math.abs(s)<=1e-10)return a;return-9999}function Kv(){var i=this.b/this.a;this.es=1-i*i,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Vi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function Jv(i){var t=i.x,e=i.y;if(e*ki>90&&e*ki<-90&&t*ki>180&&t*ki<-180)return null;var n,s;if(Math.abs(Math.abs(e)-Q)<=rt)return null;if(this.sphere)n=this.x0+this.a*this.k0*lt(t-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(re+.5*e));else{var a=Math.sin(e),o=Ii(this.e,e,a);n=this.x0+this.a*this.k0*lt(t-this.long0),s=this.y0-this.a*this.k0*Math.log(o)}return i.x=n,i.y=s,i}function Qv(i){var t=i.x-this.x0,e=i.y-this.y0,n,s;if(this.sphere)s=Q-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var a=Math.exp(-e/(this.a*this.k0));if(s=Ca(this.e,a),s===-9999)return null}return n=lt(this.long0+t/(this.a*this.k0)),i.x=n,i.y=s,i}var tM=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const eM={init:Kv,forward:Jv,inverse:Qv,names:tM};function iM(){}function Oc(i){return i}var nM=["longlat","identity"];const sM={init:iM,forward:Oc,inverse:Oc,names:nM};var aM=[eM,sM],Cr={},zr=[];function Zu(i,t){var e=zr.length;return i.names?(zr[e]=i,i.names.forEach(function(n){Cr[n.toLowerCase()]=e}),this):(console.log(t),!0)}function rM(i){if(!i)return!1;var t=i.toLowerCase();if(typeof Cr[t]<"u"&&zr[Cr[t]])return zr[Cr[t]]}function oM(){aM.forEach(Zu)}const lM={start:oM,add:Zu,get:rM};var Ut={};Ut.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};Ut.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};Ut.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};Ut.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};Ut.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};Ut.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};Ut.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};Ut.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};Ut.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};Ut.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};Ut.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};Ut.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};Ut.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};Ut.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};Ut.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};Ut.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};Ut.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};Ut.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};Ut.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};Ut.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};Ut.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};Ut.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};Ut.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};Ut.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};Ut.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};Ut.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};Ut.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};Ut.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};Ut.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};Ut.hough={a:6378270,rf:297,ellipseName:"Hough"};Ut.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};Ut.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};Ut.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};Ut.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};Ut.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};Ut.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};Ut.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};Ut.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};Ut.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};Ut.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};Ut.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};Ut.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var hM=Ut.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};Ut.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function cM(i,t,e,n){var s=i*i,a=t*t,o=(s-a)/s,r=0;n?(i*=1-o*(Pv+o*(Lv+o*Iv)),s=i*i,o=0):r=Math.sqrt(o);var l=(s-a)/a;return{es:o,e:r,ep2:l}}function uM(i,t,e,n,s){if(!i){var a=bn(Ut,n);a||(a=hM),i=a.a,t=a.b,e=a.rf}return e&&!t&&(t=(1-1/e)*i),(e===0||Math.abs(i-t)<rt)&&(s=!0,t=i),{a:i,b:t,rf:e,sphere:s}}var Rr={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"}};for(var dM in Rr){var Fc=Rr[dM];Rr[Fc.datumName]=Fc}function fM(i,t,e,n,s,a,o){var r={};return i===void 0||i==="none"?r.datum_type=Pl:r.datum_type=Cv,t&&(r.datum_params=t.map(parseFloat),(r.datum_params[0]!==0||r.datum_params[1]!==0||r.datum_params[2]!==0)&&(r.datum_type=Jn),r.datum_params.length>3&&(r.datum_params[3]!==0||r.datum_params[4]!==0||r.datum_params[5]!==0||r.datum_params[6]!==0)&&(r.datum_type=Qn,r.datum_params[3]*=ca,r.datum_params[4]*=ca,r.datum_params[5]*=ca,r.datum_params[6]=r.datum_params[6]/1e6+1)),o&&(r.datum_type=Rs,r.grids=o),r.a=e,r.b=n,r.es=s,r.ep2=a,r}var Ku={};function pM(i,t){var e=new DataView(t),n=_M(e),s=vM(e,n),a=MM(e,s,n),o={header:s,subgrids:a};return Ku[i]=o,o}function mM(i){if(i===void 0)return null;var t=i.split(",");return t.map(gM)}function gM(i){if(i.length===0)return null;var t=i[0]==="@";return t&&(i=i.slice(1)),i==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:i,mandatory:!t,grid:Ku[i]||null,isNull:!1}}function bs(i){return i/3600*Math.PI/180}function _M(i){var t=i.getInt32(8,!1);return t===11?!1:(t=i.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function vM(i,t){return{nFields:i.getInt32(8,t),nSubgridFields:i.getInt32(24,t),nSubgrids:i.getInt32(40,t),shiftType:Il(i,56,64).trim(),fromSemiMajorAxis:i.getFloat64(120,t),fromSemiMinorAxis:i.getFloat64(136,t),toSemiMajorAxis:i.getFloat64(152,t),toSemiMinorAxis:i.getFloat64(168,t)}}function Il(i,t,e){return String.fromCharCode.apply(null,new Uint8Array(i.buffer.slice(t,e)))}function MM(i,t,e){for(var n=176,s=[],a=0;a<t.nSubgrids;a++){var o=yM(i,n,e),r=SM(i,n,o,e),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),h=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);s.push({ll:[bs(o.lowerLongitude),bs(o.lowerLatitude)],del:[bs(o.longitudeInterval),bs(o.latitudeInterval)],lim:[l,h],count:o.gridNodeCount,cvs:xM(r)}),n+=176+o.gridNodeCount*16}return s}function xM(i){return i.map(function(t){return[bs(t.longitudeShift),bs(t.latitudeShift)]})}function yM(i,t,e){return{name:Il(i,t+8,t+16).trim(),parent:Il(i,t+24,t+24+8).trim(),lowerLatitude:i.getFloat64(t+72,e),upperLatitude:i.getFloat64(t+88,e),lowerLongitude:i.getFloat64(t+104,e),upperLongitude:i.getFloat64(t+120,e),latitudeInterval:i.getFloat64(t+136,e),longitudeInterval:i.getFloat64(t+152,e),gridNodeCount:i.getInt32(t+168,e)}}function SM(i,t,e,n){for(var s=t+176,a=16,o=[],r=0;r<e.gridNodeCount;r++){var l={latitudeShift:i.getFloat32(s+r*a,n),longitudeShift:i.getFloat32(s+r*a+4,n),latitudeAccuracy:i.getFloat32(s+r*a+8,n),longitudeAccuracy:i.getFloat32(s+r*a+12,n)};o.push(l)}return o}function Gi(i,t){if(!(this instanceof Gi))return new Gi(i);t=t||function(h){if(h)throw h};var e=Zv(i);if(typeof e!="object"){t("Could not parse to valid json: "+i);return}var n=Gi.projections.get(e.projName);if(!n){t("Could not get projection name from: "+i);return}if(e.datumCode&&e.datumCode!=="none"){var s=bn(Rr,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var a=uM(e.a,e.b,e.rf,e.ellps,e.sphere),o=cM(a.a,a.b,a.rf,e.R_A),r=mM(e.nadgrids),l=e.datum||fM(e.datumCode,e.datum_params,a.a,a.b,o.es,o.ep2,r);Uc(this,e),Uc(this,n),this.a=a.a,this.b=a.b,this.rf=a.rf,this.sphere=a.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,this.init(),t(null,this)}Gi.projections=lM;Gi.projections.start();function EM(i,t){return i.datum_type!==t.datum_type||i.a!==t.a||Math.abs(i.es-t.es)>5e-11?!1:i.datum_type===Jn?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]:i.datum_type===Qn?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]&&i.datum_params[3]===t.datum_params[3]&&i.datum_params[4]===t.datum_params[4]&&i.datum_params[5]===t.datum_params[5]&&i.datum_params[6]===t.datum_params[6]:!0}function Ju(i,t,e){var n=i.x,s=i.y,a=i.z?i.z:0,o,r,l,h;if(s<-Q&&s>-1.001*Q)s=-Q;else if(s>Q&&s<1.001*Q)s=Q;else{if(s<-Q)return{x:-1/0,y:-1/0,z:i.z};if(s>Q)return{x:1/0,y:1/0,z:i.z}}return n>Math.PI&&(n-=2*Math.PI),r=Math.sin(s),h=Math.cos(s),l=r*r,o=e/Math.sqrt(1-t*l),{x:(o+a)*h*Math.cos(n),y:(o+a)*h*Math.sin(n),z:(o*(1-t)+a)*r}}function Qu(i,t,e,n){var s=1e-12,a=s*s,o=30,r,l,h,c,u,d,f,g,_,m,p,b,S,v=i.x,R=i.y,w=i.z?i.z:0,C,P,E;if(r=Math.sqrt(v*v+R*R),l=Math.sqrt(v*v+R*R+w*w),r/e<s){if(C=0,l/e<s)return P=Q,E=-n,{x:i.x,y:i.y,z:i.z}}else C=Math.atan2(R,v);h=w/l,c=r/l,u=1/Math.sqrt(1-t*(2-t)*c*c),g=c*(1-t)*u,_=h*u,S=0;do S++,f=e/Math.sqrt(1-t*_*_),E=r*g+w*_-f*(1-t*_*_),d=t*f/(f+E),u=1/Math.sqrt(1-d*(2-d)*c*c),m=c*(1-d)*u,p=h*u,b=p*g-m*_,g=m,_=p;while(b*b>a&&S<o);return P=Math.atan(p/Math.abs(m)),{x:C,y:P,z:E}}function bM(i,t,e){if(t===Jn)return{x:i.x+e[0],y:i.y+e[1],z:i.z+e[2]};if(t===Qn){var n=e[0],s=e[1],a=e[2],o=e[3],r=e[4],l=e[5],h=e[6];return{x:h*(i.x-l*i.y+r*i.z)+n,y:h*(l*i.x+i.y-o*i.z)+s,z:h*(-r*i.x+o*i.y+i.z)+a}}}function wM(i,t,e){if(t===Jn)return{x:i.x-e[0],y:i.y-e[1],z:i.z-e[2]};if(t===Qn){var n=e[0],s=e[1],a=e[2],o=e[3],r=e[4],l=e[5],h=e[6],c=(i.x-n)/h,u=(i.y-s)/h,d=(i.z-a)/h;return{x:c+l*u-r*d,y:-l*c+u+o*d,z:r*c-o*u+d}}}function _r(i){return i===Jn||i===Qn}function TM(i,t,e){if(EM(i,t)||i.datum_type===Pl||t.datum_type===Pl)return e;var n=i.a,s=i.es;if(i.datum_type===Rs){var a=Bc(i,!1,e);if(a!==0)return;n=Ic,s=Dc}var o=t.a,r=t.b,l=t.es;if(t.datum_type===Rs&&(o=Ic,r=Rv,l=Dc),s===l&&n===o&&!_r(i.datum_type)&&!_r(t.datum_type))return e;if(e=Ju(e,s,n),_r(i.datum_type)&&(e=bM(e,i.datum_type,i.datum_params)),_r(t.datum_type)&&(e=wM(e,t.datum_type,t.datum_params)),e=Qu(e,l,o,r),t.datum_type===Rs){var h=Bc(t,!0,e);if(h!==0)return}return e}function Bc(i,t,e){if(i.grids===null||i.grids.length===0)return console.log("Grid shift grids not found"),-1;var n={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},a=[];t:for(var o=0;o<i.grids.length;o++){var r=i.grids[o];if(a.push(r.name),r.isNull){s=n;break}if(r.mandatory,r.grid===null){if(r.mandatory)return console.log("Unable to find mandatory grid '"+r.name+"'"),-1;continue}for(var l=r.grid.subgrids,h=0,c=l.length;h<c;h++){var u=l[h],d=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,f=u.ll[0]-d,g=u.ll[1]-d,_=u.ll[0]+(u.lim[0]-1)*u.del[0]+d,m=u.ll[1]+(u.lim[1]-1)*u.del[1]+d;if(!(g>n.y||f>n.x||m<n.y||_<n.x)&&(s=AM(n,t,u),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-n.x*ki+" "+n.y*ki+" tried: '"+a+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function AM(i,t,e){var n={x:Number.NaN,y:Number.NaN};if(isNaN(i.x))return n;var s={x:i.x,y:i.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=lt(s.x-Math.PI)+Math.PI;var a=zc(s,e);if(t){if(isNaN(a.x))return n;a.x=s.x-a.x,a.y=s.y-a.y;var o=9,r=1e-12,l,h;do{if(h=zc(a,e),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(h.x+a.x),y:s.y-(h.y+a.y)},a.x+=l.x,a.y+=l.y}while(o--&&Math.abs(l.x)>r&&Math.abs(l.y)>r);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),n;n.x=lt(a.x+e.ll[0]),n.y=a.y+e.ll[1]}else isNaN(a.x)||(n.x=i.x+a.x,n.y=i.y+a.y);return n}function zc(i,t){var e={x:i.x/t.del[0],y:i.y/t.del[1]},n={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*n.x,y:e.y-1*n.y},a={x:Number.NaN,y:Number.NaN},o;if(n.x<0||n.x>=t.lim[0]||n.y<0||n.y>=t.lim[1])return a;o=n.y*t.lim[0]+n.x;var r={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var l={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var h={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var c={x:t.cvs[o][0],y:t.cvs[o][1]},u=s.x*s.y,d=s.x*(1-s.y),f=(1-s.x)*(1-s.y),g=(1-s.x)*s.y;return a.x=f*r.x+d*l.x+g*c.x+u*h.x,a.y=f*r.y+d*l.y+g*c.y+u*h.y,a}function kc(i,t,e){var n=e.x,s=e.y,a=e.z||0,o,r,l,h={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(o=n,"ew".indexOf(i.axis[l])!==-1?r="x":r="y"):l===1?(o=s,"ns".indexOf(i.axis[l])!==-1?r="y":r="x"):(o=a,r="z"),i.axis[l]){case"e":h[r]=o;break;case"w":h[r]=-o;break;case"n":h[r]=o;break;case"s":h[r]=-o;break;case"u":e[r]!==void 0&&(h.z=o);break;case"d":e[r]!==void 0&&(h.z=-o);break;default:return null}return h}function td(i){var t={x:i[0],y:i[1]};return i.length>2&&(t.z=i[2]),i.length>3&&(t.m=i[3]),t}function CM(i){Gc(i.x),Gc(i.y)}function Gc(i){if(typeof Number.isFinite=="function"){if(Number.isFinite(i))return;throw new TypeError("coordinates must be finite numbers")}if(typeof i!="number"||i!==i||!isFinite(i))throw new TypeError("coordinates must be finite numbers")}function RM(i,t){return(i.datum.datum_type===Jn||i.datum.datum_type===Qn||i.datum.datum_type===Rs)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Jn||t.datum.datum_type===Qn||t.datum.datum_type===Rs)&&i.datumCode!=="WGS84"}function kr(i,t,e,n){var s;Array.isArray(e)?e=td(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var a=e.z!==void 0;if(CM(e),i.datum&&t.datum&&RM(i,t)&&(s=new Gi("WGS84"),e=kr(i,s,e,n),i=s),n&&i.axis!=="enu"&&(e=kc(i,!1,e)),i.projName==="longlat")e={x:e.x*Fe,y:e.y*Fe,z:e.z||0};else if(i.to_meter&&(e={x:e.x*i.to_meter,y:e.y*i.to_meter,z:e.z||0}),e=i.inverse(e),!e)return;if(i.from_greenwich&&(e.x+=i.from_greenwich),e=TM(i.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*ki,y:e.y*ki,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),n&&t.axis!=="enu"?kc(t,!0,e):(e&&!a&&delete e.z,e)}var Hc=Gi("WGS84");function Bo(i,t,e,n){var s,a,o;return Array.isArray(e)?(s=kr(i,t,e,n)||{x:NaN,y:NaN},e.length>2?typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.slice(3)):[s.x,s.y,e[2]].concat(e.slice(3)):[s.x,s.y].concat(e.slice(2)):[s.x,s.y]):(a=kr(i,t,e,n),o=Object.keys(e),o.length===2||o.forEach(function(r){if(typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(r==="x"||r==="y"||r==="z")return}else if(r==="x"||r==="y")return;a[r]=e[r]}),a)}function Vc(i){return i instanceof Gi?i:i.oProj?i.oProj:Gi(i)}function We(i,t,e){i=Vc(i);var n=!1,s;return typeof t>"u"?(t=i,i=Hc,n=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=i,i=Hc,n=!0),t=Vc(t),e?Bo(i,t,e):(s={forward:function(a,o){return Bo(i,t,a,o)},inverse:function(a,o){return Bo(t,i,a,o)}},n&&(s.oProj=t),s)}var Wc=6,ed="AJSAJS",id="AFAFAF",ws=65,ei=73,_i=79,ia=86,na=90;const PM={forward:nd,inverse:LM,toPoint:sd};function nd(i,t){return t=t||5,NM(IM({lat:i[1],lon:i[0]}),t)}function LM(i){var t=oh(rd(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function sd(i){var t=oh(rd(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function zo(i){return i*(Math.PI/180)}function Xc(i){return 180*(i/Math.PI)}function IM(i){var t=i.lat,e=i.lon,n=6378137,s=.00669438,a=.9996,o,r,l,h,c,u,d,f=zo(t),g=zo(e),_,m;m=Math.floor((e+180)/6)+1,e===180&&(m=60),t>=56&&t<64&&e>=3&&e<12&&(m=32),t>=72&&t<84&&(e>=0&&e<9?m=31:e>=9&&e<21?m=33:e>=21&&e<33?m=35:e>=33&&e<42&&(m=37)),o=(m-1)*6-180+3,_=zo(o),r=s/(1-s),l=n/Math.sqrt(1-s*Math.sin(f)*Math.sin(f)),h=Math.tan(f)*Math.tan(f),c=r*Math.cos(f)*Math.cos(f),u=Math.cos(f)*(g-_),d=n*((1-s/4-3*s*s/64-5*s*s*s/256)*f-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*f)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*f)-35*s*s*s/3072*Math.sin(6*f));var p=a*l*(u+(1-h+c)*u*u*u/6+(5-18*h+h*h+72*c-58*r)*u*u*u*u*u/120)+5e5,b=a*(d+l*Math.tan(f)*(u*u/2+(5-h+9*c+4*c*c)*u*u*u*u/24+(61-58*h+h*h+600*c-330*r)*u*u*u*u*u*u/720));return t<0&&(b+=1e7),{northing:Math.round(b),easting:Math.round(p),zoneNumber:m,zoneLetter:DM(t)}}function oh(i){var t=i.northing,e=i.easting,n=i.zoneLetter,s=i.zoneNumber;if(s<0||s>60)return null;var a=.9996,o=6378137,r=.00669438,l,h=(1-Math.sqrt(1-r))/(1+Math.sqrt(1-r)),c,u,d,f,g,_,m,p,b,S=e-5e5,v=t;n<"N"&&(v-=1e7),m=(s-1)*6-180+3,l=r/(1-r),_=v/a,p=_/(o*(1-r/4-3*r*r/64-5*r*r*r/256)),b=p+(3*h/2-27*h*h*h/32)*Math.sin(2*p)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*p)+151*h*h*h/96*Math.sin(6*p),c=o/Math.sqrt(1-r*Math.sin(b)*Math.sin(b)),u=Math.tan(b)*Math.tan(b),d=l*Math.cos(b)*Math.cos(b),f=o*(1-r)/Math.pow(1-r*Math.sin(b)*Math.sin(b),1.5),g=S/(c*a);var R=b-c*Math.tan(b)/f*(g*g/2-(5+3*u+10*d-4*d*d-9*l)*g*g*g*g/24+(61+90*u+298*d+45*u*u-252*l-3*d*d)*g*g*g*g*g*g/720);R=Xc(R);var w=(g-(1+2*u+d)*g*g*g/6+(5-2*d+28*u-3*d*d+8*l+24*u*u)*g*g*g*g*g/120)/Math.cos(b);w=m+Xc(w);var C;if(i.accuracy){var P=oh({northing:i.northing+i.accuracy,easting:i.easting+i.accuracy,zoneLetter:i.zoneLetter,zoneNumber:i.zoneNumber});C={top:P.lat,right:P.lon,bottom:R,left:w}}else C={lat:R,lon:w};return C}function DM(i){var t="Z";return 84>=i&&i>=72?t="X":72>i&&i>=64?t="W":64>i&&i>=56?t="V":56>i&&i>=48?t="U":48>i&&i>=40?t="T":40>i&&i>=32?t="S":32>i&&i>=24?t="R":24>i&&i>=16?t="Q":16>i&&i>=8?t="P":8>i&&i>=0?t="N":0>i&&i>=-8?t="M":-8>i&&i>=-16?t="L":-16>i&&i>=-24?t="K":-24>i&&i>=-32?t="J":-32>i&&i>=-40?t="H":-40>i&&i>=-48?t="G":-48>i&&i>=-56?t="F":-56>i&&i>=-64?t="E":-64>i&&i>=-72?t="D":-72>i&&i>=-80&&(t="C"),t}function NM(i,t){var e="00000"+i.easting,n="00000"+i.northing;return i.zoneNumber+i.zoneLetter+UM(i.easting,i.northing,i.zoneNumber)+e.substr(e.length-5,t)+n.substr(n.length-5,t)}function UM(i,t,e){var n=ad(e),s=Math.floor(i/1e5),a=Math.floor(t/1e5)%20;return OM(s,a,n)}function ad(i){var t=i%Wc;return t===0&&(t=Wc),t}function OM(i,t,e){var n=e-1,s=ed.charCodeAt(n),a=id.charCodeAt(n),o=s+i-1,r=a+t,l=!1;o>na&&(o=o-na+ws-1,l=!0),(o===ei||s<ei&&o>ei||(o>ei||s<ei)&&l)&&o++,(o===_i||s<_i&&o>_i||(o>_i||s<_i)&&l)&&(o++,o===ei&&o++),o>na&&(o=o-na+ws-1),r>ia?(r=r-ia+ws-1,l=!0):l=!1,(r===ei||a<ei&&r>ei||(r>ei||a<ei)&&l)&&r++,(r===_i||a<_i&&r>_i||(r>_i||a<_i)&&l)&&(r++,r===ei&&r++),r>ia&&(r=r-ia+ws-1);var h=String.fromCharCode(o)+String.fromCharCode(r);return h}function rd(i){if(i&&i.length===0)throw"MGRSPoint coverting from nothing";for(var t=i.length,e=null,n="",s,a=0;!/[A-Z]/.test(s=i.charAt(a));){if(a>=2)throw"MGRSPoint bad conversion from: "+i;n+=s,a++}var o=parseInt(n,10);if(a===0||a+3>t)throw"MGRSPoint bad conversion from: "+i;var r=i.charAt(a++);if(r<="A"||r==="B"||r==="Y"||r>="Z"||r==="I"||r==="O")throw"MGRSPoint zone letter "+r+" not handled: "+i;e=i.substring(a,a+=2);for(var l=ad(o),h=FM(e.charAt(0),l),c=BM(e.charAt(1),l);c<zM(r);)c+=2e6;var u=t-a;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+i;var d=u/2,f=0,g=0,_,m,p,b,S;return d>0&&(_=1e5/Math.pow(10,d),m=i.substring(a,a+d),f=parseFloat(m)*_,p=i.substring(a+d),g=parseFloat(p)*_),b=f+h,S=g+c,{easting:b,northing:S,zoneLetter:r,zoneNumber:o,accuracy:_}}function FM(i,t){for(var e=ed.charCodeAt(t-1),n=1e5,s=!1;e!==i.charCodeAt(0);){if(e++,e===ei&&e++,e===_i&&e++,e>na){if(s)throw"Bad character: "+i;e=ws,s=!0}n+=1e5}return n}function BM(i,t){if(i>"V")throw"MGRSPoint given invalid Northing "+i;for(var e=id.charCodeAt(t-1),n=0,s=!1;e!==i.charCodeAt(0);){if(e++,e===ei&&e++,e===_i&&e++,e>ia){if(s)throw"Bad character: "+i;e=ws,s=!0}n+=1e5}return n}function zM(i){var t;switch(i){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+i}function zs(i,t,e){if(!(this instanceof zs))return new zs(i,t,e);if(Array.isArray(i))this.x=i[0],this.y=i[1],this.z=i[2]||0;else if(typeof i=="object")this.x=i.x,this.y=i.y,this.z=i.z||0;else if(typeof i=="string"&&typeof t>"u"){var n=i.split(",");this.x=parseFloat(n[0],10),this.y=parseFloat(n[1],10),this.z=parseFloat(n[2],10)||0}else this.x=i,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}zs.fromMGRS=function(i){return new zs(sd(i))};zs.prototype.toMGRS=function(i){return nd([this.x,this.y],i)};var kM=1,GM=.25,qc=.046875,$c=.01953125,Yc=.01068115234375,HM=.75,VM=.46875,WM=.013020833333333334,XM=.007120768229166667,qM=.3645833333333333,$M=.005696614583333333,YM=.3076171875;function lh(i){var t=[];t[0]=kM-i*(GM+i*(qc+i*($c+i*Yc))),t[1]=i*(HM-i*(qc+i*($c+i*Yc)));var e=i*i;return t[2]=e*(VM-i*(WM+i*XM)),e*=i,t[3]=e*(qM-i*$M),t[4]=e*i*YM,t}function Xs(i,t,e,n){return e*=t,t*=t,n[0]*i-e*(n[1]+t*(n[2]+t*(n[3]+t*n[4])))}var jM=20;function hh(i,t,e){for(var n=1/(1-t),s=i,a=jM;a;--a){var o=Math.sin(s),r=1-t*o*o;if(r=(Xs(s,o,Math.cos(s),e)-i)*(r*Math.sqrt(r))*n,s-=r,Math.abs(r)<rt)return s}return s}function ZM(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=lh(this.es),this.ml0=Xs(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function KM(i){var t=i.x,e=i.y,n=lt(t-this.long0),s,a,o,r=Math.sin(e),l=Math.cos(e);if(this.es){var c=l*n,u=Math.pow(c,2),d=this.ep2*Math.pow(l,2),f=Math.pow(d,2),g=Math.abs(l)>rt?Math.tan(e):0,_=Math.pow(g,2),m=Math.pow(_,2);s=1-this.es*Math.pow(r,2),c=c/Math.sqrt(s);var p=Xs(e,r,l,this.en);a=this.a*(this.k0*c*(1+u/6*(1-_+d+u/20*(5-18*_+m+14*d-58*_*d+u/42*(61+179*m-m*_-479*_)))))+this.x0,o=this.a*(this.k0*(p-this.ml0+r*n*c/2*(1+u/12*(5-_+9*d+4*f+u/30*(61+m-58*_+270*d-330*_*d+u/56*(1385+543*m-m*_-3111*_))))))+this.y0}else{var h=l*Math.sin(n);if(Math.abs(Math.abs(h)-1)<rt)return 93;if(a=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,o=l*Math.cos(n)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(o),h>=1){if(h-1>rt)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return i.x=a,i.y=o,i}function JM(i){var t,e,n,s,a=(i.x-this.x0)*(1/this.a),o=(i.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=hh(t,this.es,this.en),Math.abs(e)<Q){var u=Math.sin(e),d=Math.cos(e),f=Math.abs(d)>rt?Math.tan(e):0,g=this.ep2*Math.pow(d,2),_=Math.pow(g,2),m=Math.pow(f,2),p=Math.pow(m,2);t=1-this.es*Math.pow(u,2);var b=a*Math.sqrt(t)/this.k0,S=Math.pow(b,2);t=t*f,n=e-t*S/(1-this.es)*.5*(1-S/12*(5+3*m-9*g*m+g-4*_-S/30*(61+90*m-252*g*m+45*p+46*g-S/56*(1385+3633*m+4095*p+1574*p*m)))),s=lt(this.long0+b*(1-S/6*(1+2*m+g-S/20*(5+28*m+24*p+8*g*m+6*g-S/42*(61+662*m+1320*p+720*p*m))))/d)}else n=Q*Oa(o),s=0;else{var r=Math.exp(a/this.k0),l=.5*(r-1/r),h=this.lat0+o/this.k0,c=Math.cos(h);t=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(l,2))),n=Math.asin(t),o<0&&(n=-n),l===0&&c===0?s=0:s=lt(Math.atan2(l,c)+this.long0)}return i.x=s,i.y=n,i}var QM=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Pr={init:ZM,forward:KM,inverse:JM,names:QM};function od(i){var t=Math.exp(i);return t=(t-1/t)/2,t}function si(i,t){i=Math.abs(i),t=Math.abs(t);var e=Math.max(i,t),n=Math.min(i,t)/(e||1);return e*Math.sqrt(1+Math.pow(n,2))}function tx(i){var t=1+i,e=t-1;return e===0?i:i*Math.log(t)/e}function ex(i){var t=Math.abs(i);return t=tx(t*(1+t/(si(1,t)+1))),i<0?-t:t}function ch(i,t){for(var e=2*Math.cos(2*t),n=i.length-1,s=i[n],a=0,o;--n>=0;)o=-a+e*s+i[n],a=s,s=o;return t+o*Math.sin(2*t)}function ix(i,t){for(var e=2*Math.cos(t),n=i.length-1,s=i[n],a=0,o;--n>=0;)o=-a+e*s+i[n],a=s,s=o;return Math.sin(t)*o}function nx(i){var t=Math.exp(i);return t=(t+1/t)/2,t}function ld(i,t,e){for(var n=Math.sin(t),s=Math.cos(t),a=od(e),o=nx(e),r=2*s*o,l=-2*n*a,h=i.length-1,c=i[h],u=0,d=0,f=0,g,_;--h>=0;)g=d,_=u,d=c,u=f,c=-g+r*d-l*u+i[h],f=-_+l*d+r*u;return r=n*o,l=s*a,[r*c-l*f,r*f+l*c]}function sx(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Pr.init.apply(this),this.forward=Pr.forward,this.inverse=Pr.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var i=this.es/(1+Math.sqrt(1-this.es)),t=i/(2-i),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var n=ch(this.cbg,this.lat0);this.Zb=-this.Qn*(n+ix(this.gtu,2*n))}function ax(i){var t=lt(i.x-this.long0),e=i.y;e=ch(this.cbg,e);var n=Math.sin(e),s=Math.cos(e),a=Math.sin(t),o=Math.cos(t);e=Math.atan2(n,o*s),t=Math.atan2(a*s,si(n,s*o)),t=ex(Math.tan(t));var r=ld(this.gtu,2*e,2*t);e=e+r[0],t=t+r[1];var l,h;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,h=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,h=1/0),i.x=l,i.y=h,i}function rx(i){var t=(i.x-this.x0)*(1/this.a),e=(i.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var n,s;if(Math.abs(t)<=2.623395162778){var a=ld(this.utg,2*e,2*t);e=e+a[0],t=t+a[1],t=Math.atan(od(t));var o=Math.sin(e),r=Math.cos(e),l=Math.sin(t),h=Math.cos(t);e=Math.atan2(o*h,si(l,h*r)),t=Math.atan2(l,h*r),n=lt(t+this.long0),s=ch(this.cgb,e)}else n=1/0,s=1/0;return i.x=n,i.y=s,i}var ox=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Lr={init:sx,forward:ax,inverse:rx,names:ox};function lx(i,t){if(i===void 0){if(i=Math.floor((lt(t)+Math.PI)*30/Math.PI)+1,i<0)return 0;if(i>60)return 60}return i}var hx="etmerc";function cx(){var i=lx(this.zone,this.long0);if(i===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(i)-183)*Fe,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Lr.init.apply(this),this.forward=Lr.forward,this.inverse=Lr.inverse}var ux=["Universal Transverse Mercator System","utm"];const dx={init:cx,names:ux,dependsOn:hx};function uh(i,t){return Math.pow((1-i)/(1+i),t)}var fx=20;function px(){var i=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*i*i),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(i/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+re)/(Math.pow(Math.tan(.5*this.lat0+re),this.C)*uh(this.e*i,this.ratexp))}function mx(i){var t=i.x,e=i.y;return i.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+re),this.C)*uh(this.e*Math.sin(e),this.ratexp))-Q,i.x=this.C*t,i}function gx(i){for(var t=1e-14,e=i.x/this.C,n=i.y,s=Math.pow(Math.tan(.5*n+re)/this.K,1/this.C),a=fx;a>0&&(n=2*Math.atan(s*uh(this.e*Math.sin(i.y),-.5*this.e))-Q,!(Math.abs(n-i.y)<t));--a)i.y=n;return a?(i.x=e,i.y=n,i):null}const dh={init:px,forward:mx,inverse:gx};function _x(){dh.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function vx(i){var t,e,n,s;return i.x=lt(i.x-this.long0),dh.forward.apply(this,[i]),t=Math.sin(i.y),e=Math.cos(i.y),n=Math.cos(i.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*n),i.x=s*e*Math.sin(i.x),i.y=s*(this.cosc0*t-this.sinc0*e*n),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function Mx(i){var t,e,n,s,a;if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,a=si(i.x,i.y)){var o=2*Math.atan2(a,this.R2);t=Math.sin(o),e=Math.cos(o),s=Math.asin(e*this.sinc0+i.y*t*this.cosc0/a),n=Math.atan2(i.x*t,a*this.cosc0*e-i.y*this.sinc0*t)}else s=this.phic0,n=0;return i.x=n,i.y=s,dh.inverse.apply(this,[i]),i.x=lt(i.x+this.long0),i}var xx=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const yx={init:_x,forward:vx,inverse:Mx,names:xx};function Sx(i,t,e){return t*=e,Math.tan(.5*(Q+i))*Math.pow((1-t)/(1+t),.5*e)}function Ex(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=rt&&(this.k0=.5*(1+Oa(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=rt&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=rt&&Math.abs(Math.cos(this.lat_ts))>rt&&(this.k0=.5*this.cons*Vi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/Ii(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Vi(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-Q,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function bx(i){var t=i.x,e=i.y,n=Math.sin(e),s=Math.cos(e),a,o,r,l,h,c,u=lt(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=rt&&Math.abs(e+this.lat0)<=rt?(i.x=NaN,i.y=NaN,i):this.sphere?(a=2*this.k0/(1+this.sinlat0*n+this.coslat0*s*Math.cos(u)),i.x=this.a*a*s*Math.sin(u)+this.x0,i.y=this.a*a*(this.coslat0*n-this.sinlat0*s*Math.cos(u))+this.y0,i):(o=2*Math.atan(this.ssfn_(e,n,this.e))-Q,l=Math.cos(o),r=Math.sin(o),Math.abs(this.coslat0)<=rt?(h=Ii(this.e,e*this.con,this.con*n),c=2*this.a*this.k0*h/this.cons,i.x=this.x0+c*Math.sin(t-this.long0),i.y=this.y0-this.con*c*Math.cos(t-this.long0),i):(Math.abs(this.sinlat0)<rt?(a=2*this.a*this.k0/(1+l*Math.cos(u)),i.y=a*r):(a=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*r+this.cosX0*l*Math.cos(u))),i.y=a*(this.cosX0*r-this.sinX0*l*Math.cos(u))+this.y0),i.x=a*l*Math.sin(u)+this.x0,i))}function wx(i){i.x-=this.x0,i.y-=this.y0;var t,e,n,s,a,o=Math.sqrt(i.x*i.x+i.y*i.y);if(this.sphere){var r=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=rt?(i.x=t,i.y=e,i):(e=Math.asin(Math.cos(r)*this.sinlat0+i.y*Math.sin(r)*this.coslat0/o),Math.abs(this.coslat0)<rt?this.lat0>0?t=lt(this.long0+Math.atan2(i.x,-1*i.y)):t=lt(this.long0+Math.atan2(i.x,i.y)):t=lt(this.long0+Math.atan2(i.x*Math.sin(r),o*this.coslat0*Math.cos(r)-i.y*this.sinlat0*Math.sin(r))),i.x=t,i.y=e,i)}else if(Math.abs(this.coslat0)<=rt){if(o<=rt)return e=this.lat0,t=this.long0,i.x=t,i.y=e,i;i.x*=this.con,i.y*=this.con,n=o*this.cons/(2*this.a*this.k0),e=this.con*Ca(this.e,n),t=this.con*lt(this.con*this.long0+Math.atan2(i.x,-1*i.y))}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=rt?a=this.X0:(a=Math.asin(Math.cos(s)*this.sinX0+i.y*Math.sin(s)*this.cosX0/o),t=lt(this.long0+Math.atan2(i.x*Math.sin(s),o*this.cosX0*Math.cos(s)-i.y*this.sinX0*Math.sin(s)))),e=-1*Ca(this.e,Math.tan(.5*(Q+a)));return i.x=t,i.y=e,i}var Tx=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const Ax={init:Ex,forward:bx,inverse:wx,names:Tx,ssfn_:Sx};function Cx(){var i=this.lat0;this.lambda0=this.long0;var t=Math.sin(i),e=this.a,n=this.rf,s=1/n,a=2*s-Math.pow(s,2),o=this.e=Math.sqrt(a);this.R=this.k0*e*Math.sqrt(1-a)/(1-a*Math.pow(t,2)),this.alpha=Math.sqrt(1+a/(1-a)*Math.pow(Math.cos(i),4)),this.b0=Math.asin(t/this.alpha);var r=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+i/2)),h=Math.log((1+o*t)/(1-o*t));this.K=r-this.alpha*l+this.alpha*o/2*h}function Rx(i){var t=Math.log(Math.tan(Math.PI/4-i.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(i.y))/(1-this.e*Math.sin(i.y))),n=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(n))-Math.PI/4),a=this.alpha*(i.x-this.lambda0),o=Math.atan(Math.sin(a)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(a))),r=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(a));return i.y=this.R/2*Math.log((1+Math.sin(r))/(1-Math.sin(r)))+this.y0,i.x=this.R*o+this.x0,i}function Px(i){for(var t=i.x-this.x0,e=i.y-this.y0,n=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),a=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(n)),o=Math.atan(Math.sin(n)/(Math.cos(this.b0)*Math.cos(n)-Math.sin(this.b0)*Math.tan(s))),r=this.lambda0+o/this.alpha,l=0,h=a,c=-1e3,u=0;Math.abs(h-c)>1e-7;){if(++u>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+a/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),c=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return i.x=r,i.y=h,i}var Lx=["somerc"];const Ix={init:Cx,forward:Rx,inverse:Px,names:Lx};var Ms=1e-7;function Dx(i){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof i.PROJECTION=="object"?Object.keys(i.PROJECTION)[0]:i.PROJECTION;return"no_uoff"in i||"no_off"in i||t.indexOf(e)!==-1}function Nx(){var i,t,e,n,s,a,o,r,l,h,c=0,u,d=0,f=0,g=0,_=0,m=0,p=0;this.no_off=Dx(this),this.no_rot="no_rot"in this;var b=!1;"alpha"in this&&(b=!0);var S=!1;if("rectified_grid_angle"in this&&(S=!0),b&&(p=this.alpha),S&&(c=this.rectified_grid_angle*Fe),b||S)d=this.longc;else if(f=this.long1,_=this.lat1,g=this.long2,m=this.lat2,Math.abs(_-m)<=Ms||(i=Math.abs(_))<=Ms||Math.abs(i-Q)<=Ms||Math.abs(Math.abs(this.lat0)-Q)<=Ms||Math.abs(Math.abs(m)-Q)<=Ms)throw new Error;var v=1-this.es;t=Math.sqrt(v),Math.abs(this.lat0)>rt?(r=Math.sin(this.lat0),e=Math.cos(this.lat0),i=1-this.es*r*r,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/v),this.A=this.B*this.k0*t/i,n=this.B*t/(e*Math.sqrt(i)),s=n*n-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=n,this.E*=Math.pow(Ii(this.e,this.lat0,r),this.B)):(this.B=1/t,this.A=this.k0,this.E=n=s=1),b||S?(b?(u=Math.asin(Math.sin(p)/n),S||(c=p)):(u=c,p=Math.asin(n*Math.sin(u))),this.lam0=d-Math.asin(.5*(s-1/s)*Math.tan(u))/this.B):(a=Math.pow(Ii(this.e,_,Math.sin(_)),this.B),o=Math.pow(Ii(this.e,m,Math.sin(m)),this.B),s=this.E/a,l=(o-a)/(o+a),h=this.E*this.E,h=(h-o*a)/(h+o*a),i=f-g,i<-Math.pi?g-=Ta:i>Math.pi&&(g+=Ta),this.lam0=lt(.5*(f+g)-Math.atan(h*Math.tan(.5*this.B*(f-g))/l)/this.B),u=Math.atan(2*Math.sin(this.B*lt(f-this.lam0))/(s-1/s)),c=p=Math.asin(n*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(n*n-1)/Math.cos(p))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(re-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(re+s))}function Ux(i){var t={},e,n,s,a,o,r,l,h;if(i.x=i.x-this.lam0,Math.abs(Math.abs(i.y)-Q)>rt){if(o=this.E/Math.pow(Ii(this.e,i.y,Math.sin(i.y)),this.B),r=1/o,e=.5*(o-r),n=.5*(o+r),a=Math.sin(this.B*i.x),s=(e*this.singam-a*this.cosgam)/n,Math.abs(Math.abs(s)-1)<rt)throw new Error;h=.5*this.ArB*Math.log((1-s)/(1+s)),r=Math.cos(this.B*i.x),Math.abs(r)<Ms?l=this.A*i.x:l=this.ArB*Math.atan2(e*this.cosgam+a*this.singam,r)}else h=i.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*i.y;return this.no_rot?(t.x=l,t.y=h):(l-=this.u_0,t.x=h*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-h*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function Ox(i){var t,e,n,s,a,o,r,l={};if(i.x=(i.x-this.x0)*(1/this.a),i.y=(i.y-this.y0)*(1/this.a),this.no_rot?(e=i.y,t=i.x):(e=i.x*this.cosrot-i.y*this.sinrot,t=i.y*this.cosrot+i.x*this.sinrot+this.u_0),n=Math.exp(-this.BrA*e),s=.5*(n-1/n),a=.5*(n+1/n),o=Math.sin(this.BrA*t),r=(o*this.cosgam+s*this.singam)/a,Math.abs(Math.abs(r)-1)<rt)l.x=0,l.y=r<0?-Q:Q;else{if(l.y=this.E/Math.sqrt((1+r)/(1-r)),l.y=Ca(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var Fx=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Bx={init:Nx,forward:Ux,inverse:Ox,names:Fx};function zx(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<rt)){var i=this.b/this.a;this.e=Math.sqrt(1-i*i);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),n=Vi(this.e,t,e),s=Ii(this.e,this.lat1,t),a=Math.sin(this.lat2),o=Math.cos(this.lat2),r=Vi(this.e,a,o),l=Ii(this.e,this.lat2,a),h=Ii(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>rt?this.ns=Math.log(n/r)/Math.log(s/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=n/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function kx(i){var t=i.x,e=i.y;Math.abs(2*Math.abs(e)-Math.PI)<=rt&&(e=Oa(e)*(Q-2*rt));var n=Math.abs(Math.abs(e)-Q),s,a;if(n>rt)s=Ii(this.e,e,Math.sin(e)),a=this.a*this.f0*Math.pow(s,this.ns);else{if(n=e*this.ns,n<=0)return null;a=0}var o=this.ns*lt(t-this.long0);return i.x=this.k0*(a*Math.sin(o))+this.x0,i.y=this.k0*(this.rh-a*Math.cos(o))+this.y0,i}function Gx(i){var t,e,n,s,a,o=(i.x-this.x0)/this.k0,r=this.rh-(i.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+r*r),e=1):(t=-Math.sqrt(o*o+r*r),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*o,e*r)),t!==0||this.ns>0){if(e=1/this.ns,n=Math.pow(t/(this.a*this.f0),e),s=Ca(this.e,n),s===-9999)return null}else s=-Q;return a=lt(l/this.ns+this.long0),i.x=a,i.y=s,i}var Hx=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const Vx={init:zx,forward:kx,inverse:Gx,names:Hx};function Wx(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Xx(i){var t,e,n,s,a,o,r,l=i.x,h=i.y,c=lt(l-this.long0);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),n=-c*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(n)),a=Math.asin(Math.cos(e)*Math.sin(n)/Math.cos(s)),o=this.n*a,r=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),i.y=r*Math.cos(o)/1,i.x=r*Math.sin(o)/1,this.czech||(i.y*=-1,i.x*=-1),i}function qx(i){var t,e,n,s,a,o,r,l,h=i.x;i.x=i.y,i.y=h,this.czech||(i.y*=-1,i.x*=-1),o=Math.sqrt(i.x*i.x+i.y*i.y),a=Math.atan2(i.y,i.x),s=a/Math.sin(this.s0),n=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(n)-Math.sin(this.ad)*Math.cos(n)*Math.cos(s)),e=Math.asin(Math.cos(n)*Math.sin(s)/Math.cos(t)),i.x=this.long0-e/this.alfa,r=t,l=0;var c=0;do i.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(r))/(1-this.e*Math.sin(r)),this.e/2))-this.s45),Math.abs(r-i.y)<1e-10&&(l=1),r=i.y,c+=1;while(l===0&&c<15);return c>=15?null:i}var $x=["Krovak","krovak"];const Yx={init:Wx,forward:Xx,inverse:qx,names:$x};function Ke(i,t,e,n,s){return i*s-t*Math.sin(2*s)+e*Math.sin(4*s)-n*Math.sin(6*s)}function Fa(i){return 1-.25*i*(1+i/16*(3+1.25*i))}function Ba(i){return .375*i*(1+.25*i*(1+.46875*i))}function za(i){return .05859375*i*i*(1+.75*i)}function ka(i){return i*i*i*(35/3072)}function ks(i,t,e){var n=t*e;return i/Math.sqrt(1-n*n)}function An(i){return Math.abs(i)<Q?i:i-Oa(i)*Math.PI}function Gr(i,t,e,n,s){var a,o;a=i/t;for(var r=0;r<15;r++)if(o=(i-(t*a-e*Math.sin(2*a)+n*Math.sin(4*a)-s*Math.sin(6*a)))/(t-2*e*Math.cos(2*a)+4*n*Math.cos(4*a)-6*s*Math.cos(6*a)),a+=o,Math.abs(o)<=1e-10)return a;return NaN}function jx(){this.sphere||(this.e0=Fa(this.es),this.e1=Ba(this.es),this.e2=za(this.es),this.e3=ka(this.es),this.ml0=this.a*Ke(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Zx(i){var t,e,n=i.x,s=i.y;if(n=lt(n-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(n)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(n))-this.lat0);else{var a=Math.sin(s),o=Math.cos(s),r=ks(this.a,this.e,a),l=Math.tan(s)*Math.tan(s),h=n*Math.cos(s),c=h*h,u=this.es*o*o/(1-this.es),d=this.a*Ke(this.e0,this.e1,this.e2,this.e3,s);t=r*h*(1-c*l*(1/6-(8-l+8*u)*c/120)),e=d-this.ml0+r*a/o*c*(.5+(5-l+6*u)*c/24)}return i.x=t+this.x0,i.y=e+this.y0,i}function Kx(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,n,s;if(this.sphere){var a=e+this.lat0;n=Math.asin(Math.sin(a)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(a))}else{var o=this.ml0/this.a+e,r=Gr(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(r)-Q)<=rt)return i.x=this.long0,i.y=Q,e<0&&(i.y*=-1),i;var l=ks(this.a,this.e,Math.sin(r)),h=l*l*l/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(r),2),u=t*this.a/l,d=u*u;n=r-l*Math.tan(r)/h*u*u*(.5-(1+3*c)*u*u/24),s=u*(1-d*(c/3+(1+3*c)*c*d/15))/Math.cos(r)}return i.x=lt(s+this.long0),i.y=An(n),i}var Jx=["Cassini","Cassini_Soldner","cass"];const Qx={init:jx,forward:Zx,inverse:Kx,names:Jx};function Sn(i,t){var e;return i>1e-7?(e=i*t,(1-i*i)*(t/(1-e*e)-.5/i*Math.log((1-e)/(1+e)))):2*t}var ty=1,ey=2,iy=3,ny=4;function sy(){var i=Math.abs(this.lat0);if(Math.abs(i-Q)<rt?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(i)<rt?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=Sn(this.e,1),this.mmf=.5/(1-this.es),this.apa=fy(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=Sn(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function ay(i){var t,e,n,s,a,o,r,l,h,c,u=i.x,d=i.y;if(u=lt(u-this.long0),this.sphere){if(a=Math.sin(d),c=Math.cos(d),n=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+c*n:1+this.sinph0*a+this.cosph0*c*n,e<=rt)return null;e=Math.sqrt(2/e),t=e*c*Math.sin(u),e*=this.mode===this.EQUIT?a:this.cosph0*a-this.sinph0*c*n}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),Math.abs(d+this.lat0)<rt)return null;e=re-d*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(u),e*=n}}else{switch(r=0,l=0,h=0,n=Math.cos(u),s=Math.sin(u),a=Math.sin(d),o=Sn(this.e,a),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(r=o/this.qp,l=Math.sqrt(1-r*r)),this.mode){case this.OBLIQ:h=1+this.sinb1*r+this.cosb1*l*n;break;case this.EQUIT:h=1+l*n;break;case this.N_POLE:h=Q+d,o=this.qp-o;break;case this.S_POLE:h=d-Q,o=this.qp+o;break}if(Math.abs(h)<rt)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?e=this.ymf*h*(this.cosb1*r-this.sinb1*l*n):e=(h=Math.sqrt(2/(1+l*n)))*r*this.ymf,t=this.xmf*h*l*s;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(h=Math.sqrt(o))*s,e=n*(this.mode===this.S_POLE?h:-h)):t=e=0;break}}return i.x=this.a*t+this.x0,i.y=this.a*e+this.y0,i}function ry(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,n,s,a,o,r,l,h;if(this.sphere){var c=0,u,d=0;if(u=Math.sqrt(t*t+e*e),s=u*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(d=Math.sin(s),c=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(u)<=rt?0:Math.asin(e*d/u),t*=d,e=c*u;break;case this.OBLIQ:s=Math.abs(u)<=rt?this.lat0:Math.asin(c*this.sinph0+e*d*this.cosph0/u),t*=d*this.cosph0,e=(c-Math.sin(s)*this.sinph0)*u;break;case this.N_POLE:e=-e,s=Q-s;break;case this.S_POLE:s-=Q;break}n=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<rt)return i.x=this.long0,i.y=this.lat0,i;o=2*Math.asin(.5*l/this.rq),a=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(h=a*this.sinb1+e*o*this.cosb1/l,r=this.qp*h,e=l*this.cosb1*a-e*this.sinb1*o):(h=e*o/l,r=this.qp*h,e=l*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),r=t*t+e*e,!r)return i.x=this.long0,i.y=this.lat0,i;h=1-r/this.qp,this.mode===this.S_POLE&&(h=-h)}n=Math.atan2(t,e),s=py(Math.asin(h),this.apa)}return i.x=lt(this.long0+n),i.y=s,i}var oy=.3333333333333333,ly=.17222222222222222,hy=.10257936507936508,cy=.06388888888888888,uy=.0664021164021164,dy=.016415012942191543;function fy(i){var t,e=[];return e[0]=i*oy,t=i*i,e[0]+=t*ly,e[1]=t*cy,t*=i,e[0]+=t*hy,e[1]+=t*uy,e[2]=t*dy,e}function py(i,t){var e=i+i;return i+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var my=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const gy={init:sy,forward:ay,inverse:ry,names:my,S_POLE:ty,N_POLE:ey,EQUIT:iy,OBLIQ:ny};function wn(i){return Math.abs(i)>1&&(i=i>1?1:-1),Math.asin(i)}function _y(){Math.abs(this.lat1+this.lat2)<rt||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Vi(this.e3,this.sin_po,this.cos_po),this.qs1=Sn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Vi(this.e3,this.sin_po,this.cos_po),this.qs2=Sn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Sn(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>rt?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function vy(i){var t=i.x,e=i.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var n=Sn(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*n)/this.ns0,a=this.ns0*lt(t-this.long0),o=s*Math.sin(a)+this.x0,r=this.rh-s*Math.cos(a)+this.y0;return i.x=o,i.y=r,i}function My(i){var t,e,n,s,a,o;return i.x-=this.x0,i.y=this.rh-i.y+this.y0,this.ns0>=0?(t=Math.sqrt(i.x*i.x+i.y*i.y),n=1):(t=-Math.sqrt(i.x*i.x+i.y*i.y),n=-1),s=0,t!==0&&(s=Math.atan2(n*i.x,n*i.y)),n=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-n*n)/(2*this.ns0)):(e=(this.c-n*n)/this.ns0,o=this.phi1z(this.e3,e)),a=lt(s/this.ns0+this.long0),i.x=a,i.y=o,i}function xy(i,t){var e,n,s,a,o,r=wn(.5*t);if(i<rt)return r;for(var l=i*i,h=1;h<=25;h++)if(e=Math.sin(r),n=Math.cos(r),s=i*e,a=1-s*s,o=.5*a*a/n*(t/(1-l)-e/a+.5/i*Math.log((1-s)/(1+s))),r=r+o,Math.abs(o)<=1e-7)return r;return null}var yy=["Albers_Conic_Equal_Area","Albers","aea"];const Sy={init:_y,forward:vy,inverse:My,names:yy,phi1z:xy};function Ey(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function by(i){var t,e,n,s,a,o,r,l,h=i.x,c=i.y;return n=lt(h-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(n),o=this.sin_p14*t+this.cos_p14*e*s,a=1,o>0||Math.abs(o)<=rt?(r=this.x0+this.a*a*e*Math.sin(n)/o,l=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*e*s)/o):(r=this.x0+this.infinity_dist*e*Math.sin(n),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),i.x=r,i.y=l,i}function wy(i){var t,e,n,s,a,o;return i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,(t=Math.sqrt(i.x*i.x+i.y*i.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),n=Math.cos(s),o=wn(n*this.sin_p14+i.y*e*this.cos_p14/t),a=Math.atan2(i.x*e,t*this.cos_p14*n-i.y*this.sin_p14*e),a=lt(this.long0+a)):(o=this.phic0,a=0),i.x=a,i.y=o,i}var Ty=["gnom"];const Ay={init:Ey,forward:by,inverse:wy,names:Ty};function Cy(i,t){var e=1-(1-i*i)/(2*i)*Math.log((1-i)/(1+i));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*Q:Q;for(var n=Math.asin(.5*t),s,a,o,r,l=0;l<30;l++)if(a=Math.sin(n),o=Math.cos(n),r=i*a,s=Math.pow(1-r*r,2)/(2*o)*(t/(1-i*i)-a/(1-r*r)+.5/i*Math.log((1-r)/(1+r))),n+=s,Math.abs(s)<=1e-10)return n;return NaN}function Ry(){this.sphere||(this.k0=Vi(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Py(i){var t=i.x,e=i.y,n,s,a=lt(t-this.long0);if(this.sphere)n=this.x0+this.a*a*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=Sn(this.e,Math.sin(e));n=this.x0+this.a*this.k0*a,s=this.y0+this.a*o*.5/this.k0}return i.x=n,i.y=s,i}function Ly(i){i.x-=this.x0,i.y-=this.y0;var t,e;return this.sphere?(t=lt(this.long0+i.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(i.y/this.a*Math.cos(this.lat_ts))):(e=Cy(this.e,2*i.y*this.k0/this.a),t=lt(this.long0+i.x/(this.a*this.k0))),i.x=t,i.y=e,i}var Iy=["cea"];const Dy={init:Ry,forward:Py,inverse:Ly,names:Iy};function Ny(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Uy(i){var t=i.x,e=i.y,n=lt(t-this.long0),s=An(e-this.lat0);return i.x=this.x0+this.a*n*this.rc,i.y=this.y0+this.a*s,i}function Oy(i){var t=i.x,e=i.y;return i.x=lt(this.long0+(t-this.x0)/(this.a*this.rc)),i.y=An(this.lat0+(e-this.y0)/this.a),i}var Fy=["Equirectangular","Equidistant_Cylindrical","eqc"];const By={init:Ny,forward:Uy,inverse:Oy,names:Fy};var jc=20;function zy(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Fa(this.es),this.e1=Ba(this.es),this.e2=za(this.es),this.e3=ka(this.es),this.ml0=this.a*Ke(this.e0,this.e1,this.e2,this.e3,this.lat0)}function ky(i){var t=i.x,e=i.y,n,s,a,o=lt(t-this.long0);if(a=o*Math.sin(e),this.sphere)Math.abs(e)<=rt?(n=this.a*o,s=-1*this.a*this.lat0):(n=this.a*Math.sin(a)/Math.tan(e),s=this.a*(An(e-this.lat0)+(1-Math.cos(a))/Math.tan(e)));else if(Math.abs(e)<=rt)n=this.a*o,s=-1*this.ml0;else{var r=ks(this.a,this.e,Math.sin(e))/Math.tan(e);n=r*Math.sin(a),s=this.a*Ke(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+r*(1-Math.cos(a))}return i.x=n+this.x0,i.y=s+this.y0,i}function Gy(i){var t,e,n,s,a,o,r,l,h;if(n=i.x-this.x0,s=i.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=rt)t=lt(n/this.a+this.long0),e=0;else{o=this.lat0+s/this.a,r=n*n/this.a/this.a+o*o,l=o;var c;for(a=jc;a;--a)if(c=Math.tan(l),h=-1*(o*(l*c+1)-l-.5*(l*l+r)*c)/((l-o)/c-1),l+=h,Math.abs(h)<=rt){e=l;break}t=lt(this.long0+Math.asin(n*Math.tan(l)/this.a)/Math.sin(e))}else if(Math.abs(s+this.ml0)<=rt)e=0,t=lt(this.long0+n/this.a);else{o=(this.ml0+s)/this.a,r=n*n/this.a/this.a+o*o,l=o;var u,d,f,g,_;for(a=jc;a;--a)if(_=this.e*Math.sin(l),u=Math.sqrt(1-_*_)*Math.tan(l),d=this.a*Ke(this.e0,this.e1,this.e2,this.e3,l),f=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),g=d/this.a,h=(o*(u*g+1)-g-.5*u*(g*g+r))/(this.es*Math.sin(2*l)*(g*g+r-2*o*g)/(4*u)+(o-g)*(u*f-2/Math.sin(2*l))-f),l-=h,Math.abs(h)<=rt){e=l;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=lt(this.long0+Math.asin(n*u/this.a)/Math.sin(e))}return i.x=t,i.y=e,i}var Hy=["Polyconic","poly"];const Vy={init:zy,forward:ky,inverse:Gy,names:Hy};function Wy(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Xy(i){var t,e=i.x,n=i.y,s=n-this.lat0,a=e-this.long0,o=s/ca*1e-5,r=a,l=1,h=0;for(t=1;t<=10;t++)l=l*o,h=h+this.A[t]*l;var c=h,u=r,d=1,f=0,g,_,m=0,p=0;for(t=1;t<=6;t++)g=d*c-f*u,_=f*c+d*u,d=g,f=_,m=m+this.B_re[t]*d-this.B_im[t]*f,p=p+this.B_im[t]*d+this.B_re[t]*f;return i.x=p*this.a+this.x0,i.y=m*this.a+this.y0,i}function qy(i){var t,e=i.x,n=i.y,s=e-this.x0,a=n-this.y0,o=a/this.a,r=s/this.a,l=1,h=0,c,u,d=0,f=0;for(t=1;t<=6;t++)c=l*o-h*r,u=h*o+l*r,l=c,h=u,d=d+this.C_re[t]*l-this.C_im[t]*h,f=f+this.C_im[t]*l+this.C_re[t]*h;for(var g=0;g<this.iterations;g++){var _=d,m=f,p,b,S=o,v=r;for(t=2;t<=6;t++)p=_*d-m*f,b=m*d+_*f,_=p,m=b,S=S+(t-1)*(this.B_re[t]*_-this.B_im[t]*m),v=v+(t-1)*(this.B_im[t]*_+this.B_re[t]*m);_=1,m=0;var R=this.B_re[1],w=this.B_im[1];for(t=2;t<=6;t++)p=_*d-m*f,b=m*d+_*f,_=p,m=b,R=R+t*(this.B_re[t]*_-this.B_im[t]*m),w=w+t*(this.B_im[t]*_+this.B_re[t]*m);var C=R*R+w*w;d=(S*R+v*w)/C,f=(v*R-S*w)/C}var P=d,E=f,x=1,L=0;for(t=1;t<=9;t++)x=x*P,L=L+this.D[t]*x;var z=this.lat0+L*ca*1e5,B=this.long0+E;return i.x=B,i.y=z,i}var $y=["New_Zealand_Map_Grid","nzmg"];const Yy={init:Wy,forward:Xy,inverse:qy,names:$y};function jy(){}function Zy(i){var t=i.x,e=i.y,n=lt(t-this.long0),s=this.x0+this.a*n,a=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return i.x=s,i.y=a,i}function Ky(i){i.x-=this.x0,i.y-=this.y0;var t=lt(this.long0+i.x/this.a),e=2.5*(Math.atan(Math.exp(.8*i.y/this.a))-Math.PI/4);return i.x=t,i.y=e,i}var Jy=["Miller_Cylindrical","mill"];const Qy={init:jy,forward:Zy,inverse:Ky,names:Jy};var t1=20;function e1(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=lh(this.es)}function i1(i){var t,e,n=i.x,s=i.y;if(n=lt(n-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var a=this.n*Math.sin(s),o=t1;o;--o){var r=(this.m*s+Math.sin(s)-a)/(this.m+Math.cos(s));if(s-=r,Math.abs(r)<rt)break}t=this.a*this.C_x*n*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var l=Math.sin(s),h=Math.cos(s);e=this.a*Xs(s,l,h,this.en),t=this.a*n*h/Math.sqrt(1-this.es*l*l)}return i.x=t,i.y=e,i}function n1(i){var t,e,n,s;return i.x-=this.x0,n=i.x/this.a,i.y-=this.y0,t=i.y/this.a,this.sphere?(t/=this.C_y,n=n/(this.C_x*(this.m+Math.cos(t))),this.m?t=wn((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=wn(Math.sin(t)/this.n)),n=lt(n+this.long0),t=An(t)):(t=hh(i.y/this.a,this.es,this.en),s=Math.abs(t),s<Q?(s=Math.sin(t),e=this.long0+i.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),n=lt(e)):s-rt<Q&&(n=this.long0)),i.x=n,i.y=t,i}var s1=["Sinusoidal","sinu"];const a1={init:e1,forward:i1,inverse:n1,names:s1};function r1(){}function o1(i){for(var t=i.x,e=i.y,n=lt(t-this.long0),s=e,a=Math.PI*Math.sin(e);;){var o=-(s+Math.sin(s)-a)/(1+Math.cos(s));if(s+=o,Math.abs(o)<rt)break}s/=2,Math.PI/2-Math.abs(e)<rt&&(n=0);var r=.900316316158*this.a*n*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return i.x=r,i.y=l,i}function l1(i){var t,e;i.x-=this.x0,i.y-=this.y0,e=i.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var n=lt(this.long0+i.x/(.900316316158*this.a*Math.cos(t)));n<-Math.PI&&(n=-Math.PI),n>Math.PI&&(n=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return i.x=n,i.y=s,i}var h1=["Mollweide","moll"];const c1={init:r1,forward:o1,inverse:l1,names:h1};function u1(){Math.abs(this.lat1+this.lat2)<rt||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Fa(this.es),this.e1=Ba(this.es),this.e2=za(this.es),this.e3=ka(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Vi(this.e,this.sinphi,this.cosphi),this.ml1=Ke(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<rt?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Vi(this.e,this.sinphi,this.cosphi),this.ml2=Ke(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Ke(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function d1(i){var t=i.x,e=i.y,n;if(this.sphere)n=this.a*(this.g-e);else{var s=Ke(this.e0,this.e1,this.e2,this.e3,e);n=this.a*(this.g-s)}var a=this.ns*lt(t-this.long0),o=this.x0+n*Math.sin(a),r=this.y0+this.rh-n*Math.cos(a);return i.x=o,i.y=r,i}function f1(i){i.x-=this.x0,i.y=this.rh-i.y+this.y0;var t,e,n,s;this.ns>=0?(e=Math.sqrt(i.x*i.x+i.y*i.y),t=1):(e=-Math.sqrt(i.x*i.x+i.y*i.y),t=-1);var a=0;if(e!==0&&(a=Math.atan2(t*i.x,t*i.y)),this.sphere)return s=lt(this.long0+a/this.ns),n=An(this.g-e/this.a),i.x=s,i.y=n,i;var o=this.g-e/this.a;return n=Gr(o,this.e0,this.e1,this.e2,this.e3),s=lt(this.long0+a/this.ns),i.x=s,i.y=n,i}var p1=["Equidistant_Conic","eqdc"];const m1={init:u1,forward:d1,inverse:f1,names:p1};function g1(){this.R=this.a}function _1(i){var t=i.x,e=i.y,n=lt(t-this.long0),s,a;Math.abs(e)<=rt&&(s=this.x0+this.R*n,a=this.y0);var o=wn(2*Math.abs(e/Math.PI));(Math.abs(n)<=rt||Math.abs(Math.abs(e)-Q)<=rt)&&(s=this.x0,e>=0?a=this.y0+Math.PI*this.R*Math.tan(.5*o):a=this.y0+Math.PI*this.R*-Math.tan(.5*o));var r=.5*Math.abs(Math.PI/n-n/Math.PI),l=r*r,h=Math.sin(o),c=Math.cos(o),u=c/(h+c-1),d=u*u,f=u*(2/h-1),g=f*f,_=Math.PI*this.R*(r*(u-g)+Math.sqrt(l*(u-g)*(u-g)-(g+l)*(d-g)))/(g+l);n<0&&(_=-_),s=this.x0+_;var m=l+u;return _=Math.PI*this.R*(f*m-r*Math.sqrt((g+l)*(l+1)-m*m))/(g+l),e>=0?a=this.y0+_:a=this.y0-_,i.x=s,i.y=a,i}function v1(i){var t,e,n,s,a,o,r,l,h,c,u,d,f;return i.x-=this.x0,i.y-=this.y0,u=Math.PI*this.R,n=i.x/u,s=i.y/u,a=n*n+s*s,o=-Math.abs(s)*(1+a),r=o-2*s*s+n*n,l=-2*o+1+2*s*s+a*a,f=s*s/l+(2*r*r*r/l/l/l-9*o*r/l/l)/27,h=(o-r*r/3/l)/l,c=2*Math.sqrt(-h/3),u=3*f/h/c,Math.abs(u)>1&&(u>=0?u=1:u=-1),d=Math.acos(u)/3,i.y>=0?e=(-c*Math.cos(d+Math.PI/3)-r/3/l)*Math.PI:e=-(-c*Math.cos(d+Math.PI/3)-r/3/l)*Math.PI,Math.abs(n)<rt?t=this.long0:t=lt(this.long0+Math.PI*(a-1+Math.sqrt(1+2*(n*n-s*s)+a*a))/2/n),i.x=t,i.y=e,i}var M1=["Van_der_Grinten_I","VanDerGrinten","vandg"];const x1={init:g1,forward:_1,inverse:v1,names:M1};function y1(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function S1(i){var t=i.x,e=i.y,n=Math.sin(i.y),s=Math.cos(i.y),a=lt(t-this.long0),o,r,l,h,c,u,d,f,g,_,m,p,b,S,v,R,w,C,P,E,x,L,z;return this.sphere?Math.abs(this.sin_p12-1)<=rt?(i.x=this.x0+this.a*(Q-e)*Math.sin(a),i.y=this.y0-this.a*(Q-e)*Math.cos(a),i):Math.abs(this.sin_p12+1)<=rt?(i.x=this.x0+this.a*(Q+e)*Math.sin(a),i.y=this.y0+this.a*(Q+e)*Math.cos(a),i):(C=this.sin_p12*n+this.cos_p12*s*Math.cos(a),R=Math.acos(C),w=R?R/Math.sin(R):1,i.x=this.x0+this.a*w*s*Math.sin(a),i.y=this.y0+this.a*w*(this.cos_p12*n-this.sin_p12*s*Math.cos(a)),i):(o=Fa(this.es),r=Ba(this.es),l=za(this.es),h=ka(this.es),Math.abs(this.sin_p12-1)<=rt?(c=this.a*Ke(o,r,l,h,Q),u=this.a*Ke(o,r,l,h,e),i.x=this.x0+(c-u)*Math.sin(a),i.y=this.y0-(c-u)*Math.cos(a),i):Math.abs(this.sin_p12+1)<=rt?(c=this.a*Ke(o,r,l,h,Q),u=this.a*Ke(o,r,l,h,e),i.x=this.x0+(c+u)*Math.sin(a),i.y=this.y0+(c+u)*Math.cos(a),i):(d=n/s,f=ks(this.a,this.e,this.sin_p12),g=ks(this.a,this.e,n),_=Math.atan((1-this.es)*d+this.es*f*this.sin_p12/(g*s)),m=Math.atan2(Math.sin(a),this.cos_p12*Math.tan(_)-this.sin_p12*Math.cos(a)),m===0?P=Math.asin(this.cos_p12*Math.sin(_)-this.sin_p12*Math.cos(_)):Math.abs(Math.abs(m)-Math.PI)<=rt?P=-Math.asin(this.cos_p12*Math.sin(_)-this.sin_p12*Math.cos(_)):P=Math.asin(Math.sin(a)*Math.cos(_)/Math.sin(m)),p=this.e*this.sin_p12/Math.sqrt(1-this.es),b=this.e*this.cos_p12*Math.cos(m)/Math.sqrt(1-this.es),S=p*b,v=b*b,E=P*P,x=E*P,L=x*P,z=L*P,R=f*P*(1-E*v*(1-v)/6+x/8*S*(1-2*v)+L/120*(v*(4-7*v)-3*p*p*(1-7*v))-z/48*S),i.x=this.x0+R*Math.sin(m),i.y=this.y0+R*Math.cos(m),i))}function E1(i){i.x-=this.x0,i.y-=this.y0;var t,e,n,s,a,o,r,l,h,c,u,d,f,g,_,m,p,b,S,v,R,w,C,P;return this.sphere?(t=Math.sqrt(i.x*i.x+i.y*i.y),t>2*Q*this.a?void 0:(e=t/this.a,n=Math.sin(e),s=Math.cos(e),a=this.long0,Math.abs(t)<=rt?o=this.lat0:(o=wn(s*this.sin_p12+i.y*n*this.cos_p12/t),r=Math.abs(this.lat0)-Q,Math.abs(r)<=rt?this.lat0>=0?a=lt(this.long0+Math.atan2(i.x,-i.y)):a=lt(this.long0-Math.atan2(-i.x,i.y)):a=lt(this.long0+Math.atan2(i.x*n,t*this.cos_p12*s-i.y*this.sin_p12*n))),i.x=a,i.y=o,i)):(l=Fa(this.es),h=Ba(this.es),c=za(this.es),u=ka(this.es),Math.abs(this.sin_p12-1)<=rt?(d=this.a*Ke(l,h,c,u,Q),t=Math.sqrt(i.x*i.x+i.y*i.y),f=d-t,o=Gr(f/this.a,l,h,c,u),a=lt(this.long0+Math.atan2(i.x,-1*i.y)),i.x=a,i.y=o,i):Math.abs(this.sin_p12+1)<=rt?(d=this.a*Ke(l,h,c,u,Q),t=Math.sqrt(i.x*i.x+i.y*i.y),f=t-d,o=Gr(f/this.a,l,h,c,u),a=lt(this.long0+Math.atan2(i.x,i.y)),i.x=a,i.y=o,i):(t=Math.sqrt(i.x*i.x+i.y*i.y),m=Math.atan2(i.x,i.y),g=ks(this.a,this.e,this.sin_p12),p=Math.cos(m),b=this.e*this.cos_p12*p,S=-b*b/(1-this.es),v=3*this.es*(1-S)*this.sin_p12*this.cos_p12*p/(1-this.es),R=t/g,w=R-S*(1+S)*Math.pow(R,3)/6-v*(1+3*S)*Math.pow(R,4)/24,C=1-S*w*w/2-R*w*w*w/6,_=Math.asin(this.sin_p12*Math.cos(w)+this.cos_p12*Math.sin(w)*p),a=lt(this.long0+Math.asin(Math.sin(m)*Math.sin(w)/Math.cos(_))),P=Math.sin(_),o=Math.atan2((P-this.es*C*this.sin_p12)*Math.tan(_),P*(1-this.es)),i.x=a,i.y=o,i))}var b1=["Azimuthal_Equidistant","aeqd"];const w1={init:y1,forward:S1,inverse:E1,names:b1};function T1(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function A1(i){var t,e,n,s,a,o,r,l,h=i.x,c=i.y;return n=lt(h-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(n),o=this.sin_p14*t+this.cos_p14*e*s,a=1,(o>0||Math.abs(o)<=rt)&&(r=this.a*a*e*Math.sin(n),l=this.y0+this.a*a*(this.cos_p14*t-this.sin_p14*e*s)),i.x=r,i.y=l,i}function C1(i){var t,e,n,s,a,o,r;return i.x-=this.x0,i.y-=this.y0,t=Math.sqrt(i.x*i.x+i.y*i.y),e=wn(t/this.a),n=Math.sin(e),s=Math.cos(e),o=this.long0,Math.abs(t)<=rt?(r=this.lat0,i.x=o,i.y=r,i):(r=wn(s*this.sin_p14+i.y*n*this.cos_p14/t),a=Math.abs(this.lat0)-Q,Math.abs(a)<=rt?(this.lat0>=0?o=lt(this.long0+Math.atan2(i.x,-i.y)):o=lt(this.long0-Math.atan2(-i.x,i.y)),i.x=o,i.y=r,i):(o=lt(this.long0+Math.atan2(i.x*n,t*this.cos_p14*s-i.y*this.sin_p14*n)),i.x=o,i.y=r,i))}var R1=["ortho"];const P1={init:T1,forward:A1,inverse:C1,names:R1};var ve={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},oe={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function L1(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=Q-re/2?this.face=ve.TOP:this.lat0<=-(Q-re/2)?this.face=ve.BOTTOM:Math.abs(this.long0)<=re?this.face=ve.FRONT:Math.abs(this.long0)<=Q+re?this.face=this.long0>0?ve.RIGHT:ve.LEFT:this.face=ve.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function I1(i){var t={x:0,y:0},e,n,s,a,o,r,l={value:0};if(i.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(i.y)):e=i.y,n=i.x,this.face===ve.TOP)a=Q-e,n>=re&&n<=Q+re?(l.value=oe.AREA_0,s=n-Q):n>Q+re||n<=-(Q+re)?(l.value=oe.AREA_1,s=n>0?n-Be:n+Be):n>-(Q+re)&&n<=-re?(l.value=oe.AREA_2,s=n+Q):(l.value=oe.AREA_3,s=n);else if(this.face===ve.BOTTOM)a=Q+e,n>=re&&n<=Q+re?(l.value=oe.AREA_0,s=-n+Q):n<re&&n>=-re?(l.value=oe.AREA_1,s=-n):n<-re&&n>=-(Q+re)?(l.value=oe.AREA_2,s=-n-Q):(l.value=oe.AREA_3,s=n>0?-n+Be:-n-Be);else{var h,c,u,d,f,g,_;this.face===ve.RIGHT?n=Ps(n,+Q):this.face===ve.BACK?n=Ps(n,3.14159265359):this.face===ve.LEFT&&(n=Ps(n,-Q)),d=Math.sin(e),f=Math.cos(e),g=Math.sin(n),_=Math.cos(n),h=f*_,c=f*g,u=d,this.face===ve.FRONT?(a=Math.acos(h),s=vr(a,u,c,l)):this.face===ve.RIGHT?(a=Math.acos(c),s=vr(a,u,-h,l)):this.face===ve.BACK?(a=Math.acos(-h),s=vr(a,u,-c,l)):this.face===ve.LEFT?(a=Math.acos(-c),s=vr(a,u,h,l)):(a=s=0,l.value=oe.AREA_0)}return r=Math.atan(12/Be*(s+Math.acos(Math.sin(s)*Math.cos(re))-Q)),o=Math.sqrt((1-Math.cos(a))/(Math.cos(r)*Math.cos(r))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===oe.AREA_1?r+=Q:l.value===oe.AREA_2?r+=Be:l.value===oe.AREA_3&&(r+=1.5*Be),t.x=o*Math.cos(r),t.y=o*Math.sin(r),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,i.x=t.x,i.y=t.y,i}function D1(i){var t={lam:0,phi:0},e,n,s,a,o,r,l,h,c,u={value:0};if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,n=Math.atan(Math.sqrt(i.x*i.x+i.y*i.y)),e=Math.atan2(i.y,i.x),i.x>=0&&i.x>=Math.abs(i.y)?u.value=oe.AREA_0:i.y>=0&&i.y>=Math.abs(i.x)?(u.value=oe.AREA_1,e-=Q):i.x<0&&-i.x>=Math.abs(i.y)?(u.value=oe.AREA_2,e=e<0?e+Be:e-Be):(u.value=oe.AREA_3,e+=Q),c=Be/12*Math.tan(e),o=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),r=Math.atan(o),s=Math.cos(e),a=Math.tan(n),l=1-s*s*a*a*(1-Math.cos(Math.atan(1/Math.cos(r)))),l<-1?l=-1:l>1&&(l=1),this.face===ve.TOP)h=Math.acos(l),t.phi=Q-h,u.value===oe.AREA_0?t.lam=r+Q:u.value===oe.AREA_1?t.lam=r<0?r+Be:r-Be:u.value===oe.AREA_2?t.lam=r-Q:t.lam=r;else if(this.face===ve.BOTTOM)h=Math.acos(l),t.phi=h-Q,u.value===oe.AREA_0?t.lam=-r+Q:u.value===oe.AREA_1?t.lam=-r:u.value===oe.AREA_2?t.lam=-r-Q:t.lam=r<0?-r-Be:-r+Be;else{var d,f,g;d=l,c=d*d,c>=1?g=0:g=Math.sqrt(1-c)*Math.sin(r),c+=g*g,c>=1?f=0:f=Math.sqrt(1-c),u.value===oe.AREA_1?(c=f,f=-g,g=c):u.value===oe.AREA_2?(f=-f,g=-g):u.value===oe.AREA_3&&(c=f,f=g,g=-c),this.face===ve.RIGHT?(c=d,d=-f,f=c):this.face===ve.BACK?(d=-d,f=-f):this.face===ve.LEFT&&(c=d,d=f,f=-c),t.phi=Math.acos(-g)-Q,t.lam=Math.atan2(f,d),this.face===ve.RIGHT?t.lam=Ps(t.lam,-Q):this.face===ve.BACK?t.lam=Ps(t.lam,-3.14159265359):this.face===ve.LEFT&&(t.lam=Ps(t.lam,+Q))}if(this.es!==0){var _,m,p;_=t.phi<0?1:0,m=Math.tan(t.phi),p=this.b/Math.sqrt(m*m+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-p*p)/(this.one_minus_f*p)),_&&(t.phi=-t.phi)}return t.lam+=this.long0,i.x=t.lam,i.y=t.phi,i}function vr(i,t,e,n){var s;return i<rt?(n.value=oe.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=re?n.value=oe.AREA_0:s>re&&s<=Q+re?(n.value=oe.AREA_1,s-=Q):s>Q+re||s<=-(Q+re)?(n.value=oe.AREA_2,s=s>=0?s-Be:s+Be):(n.value=oe.AREA_3,s+=Q)),s}function Ps(i,t){var e=i+t;return e<-3.14159265359?e+=Ta:e>3.14159265359&&(e-=Ta),e}var N1=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const U1={init:L1,forward:I1,inverse:D1,names:N1};var Dl=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],sa=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],hd=.8487,cd=1.3523,ud=ki/5,O1=1/ud,Ts=18,Hr=function(i,t){return i[0]+t*(i[1]+t*(i[2]+t*i[3]))},F1=function(i,t){return i[1]+t*(2*i[2]+t*3*i[3])};function B1(i,t,e,n){for(var s=t;n;--n){var a=i(s);if(s-=a,Math.abs(a)<e)break}return s}function z1(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function k1(i){var t=lt(i.x-this.long0),e=Math.abs(i.y),n=Math.floor(e*ud);n<0?n=0:n>=Ts&&(n=Ts-1),e=ki*(e-O1*n);var s={x:Hr(Dl[n],e)*t,y:Hr(sa[n],e)};return i.y<0&&(s.y=-s.y),s.x=s.x*this.a*hd+this.x0,s.y=s.y*this.a*cd+this.y0,s}function G1(i){var t={x:(i.x-this.x0)/(this.a*hd),y:Math.abs(i.y-this.y0)/(this.a*cd)};if(t.y>=1)t.x/=Dl[Ts][0],t.y=i.y<0?-Q:Q;else{var e=Math.floor(t.y*Ts);for(e<0?e=0:e>=Ts&&(e=Ts-1);;)if(sa[e][0]>t.y)--e;else if(sa[e+1][0]<=t.y)++e;else break;var n=sa[e],s=5*(t.y-n[0])/(sa[e+1][0]-n[0]);s=B1(function(a){return(Hr(n,a)-t.y)/F1(n,a)},s,rt,100),t.x/=Hr(Dl[e],s),t.y=(5*e+s)*Fe,i.y<0&&(t.y=-t.y)}return t.x=lt(t.x+this.long0),t}var H1=["Robinson","robin"];const V1={init:z1,forward:k1,inverse:G1,names:H1};function W1(){this.name="geocent"}function X1(i){var t=Ju(i,this.es,this.a);return t}function q1(i){var t=Qu(i,this.es,this.a,this.b);return t}var $1=["Geocentric","geocentric","geocent","Geocent"];const Y1={init:W1,forward:X1,inverse:q1,names:$1};var He={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Qs={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function j1(){if(Object.keys(Qs).forEach((function(e){if(typeof this[e]>"u")this[e]=Qs[e].def;else{if(Qs[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Qs[e].num&&(this[e]=parseFloat(this[e]))}Qs[e].degrees&&(this[e]=this[e]*Fe)}).bind(this)),Math.abs(Math.abs(this.lat0)-Q)<rt?this.mode=this.lat0<0?He.S_POLE:He.N_POLE:Math.abs(this.lat0)<rt?this.mode=He.EQUIT:(this.mode=He.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var i=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(i),this.sw=Math.sin(i)}function Z1(i){i.x-=this.long0;var t=Math.sin(i.y),e=Math.cos(i.y),n=Math.cos(i.x),s,a;switch(this.mode){case He.OBLIQ:a=this.sinph0*t+this.cosph0*e*n;break;case He.EQUIT:a=e*n;break;case He.S_POLE:a=-t;break;case He.N_POLE:a=t;break}switch(a=this.pn1/(this.p-a),s=a*e*Math.sin(i.x),this.mode){case He.OBLIQ:a*=this.cosph0*t-this.sinph0*e*n;break;case He.EQUIT:a*=t;break;case He.N_POLE:a*=-(e*n);break;case He.S_POLE:a*=e*n;break}var o,r;return o=a*this.cg+s*this.sg,r=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-a*this.sg)*this.cw*r,a=o*r,i.x=s*this.a,i.y=a*this.a,i}function K1(i){i.x/=this.a,i.y/=this.a;var t={x:i.x,y:i.y},e,n,s;s=1/(this.pn1-i.y*this.sw),e=this.pn1*i.x*s,n=this.pn1*i.y*this.cw*s,i.x=e*this.cg+n*this.sg,i.y=n*this.cg-e*this.sg;var a=si(i.x,i.y);if(Math.abs(a)<rt)t.x=0,t.y=i.y;else{var o,r;switch(r=1-a*a*this.pfact,r=(this.p-Math.sqrt(r))/(this.pn1/a+a/this.pn1),o=Math.sqrt(1-r*r),this.mode){case He.OBLIQ:t.y=Math.asin(o*this.sinph0+i.y*r*this.cosph0/a),i.y=(o-this.sinph0*Math.sin(t.y))*a,i.x*=r*this.cosph0;break;case He.EQUIT:t.y=Math.asin(i.y*r/a),i.y=o*a,i.x*=r;break;case He.N_POLE:t.y=Math.asin(o),i.y=-i.y;break;case He.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(i.x,i.y)}return i.x=t.x+this.long0,i.y=t.y,i}var J1=["Tilted_Perspective","tpers"];const Q1={init:j1,forward:Z1,inverse:K1,names:J1};function tS(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var i=1-this.es,t=1/i;this.radius_p=Math.sqrt(i),this.radius_p2=i,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function eS(i){var t=i.x,e=i.y,n,s,a,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var r=this.radius_p/si(this.radius_p*Math.cos(e),Math.sin(e));if(s=r*Math.cos(t)*Math.cos(e),a=r*Math.sin(t)*Math.cos(e),o=r*Math.sin(e),(this.radius_g-s)*s-a*a-o*o*this.radius_p_inv2<0)return i.x=Number.NaN,i.y=Number.NaN,i;n=this.radius_g-s,this.flip_axis?(i.x=this.radius_g_1*Math.atan(a/si(o,n)),i.y=this.radius_g_1*Math.atan(o/n)):(i.x=this.radius_g_1*Math.atan(a/n),i.y=this.radius_g_1*Math.atan(o/si(a,n)))}else this.shape==="sphere"&&(n=Math.cos(e),s=Math.cos(t)*n,a=Math.sin(t)*n,o=Math.sin(e),n=this.radius_g-s,this.flip_axis?(i.x=this.radius_g_1*Math.atan(a/si(o,n)),i.y=this.radius_g_1*Math.atan(o/n)):(i.x=this.radius_g_1*Math.atan(a/n),i.y=this.radius_g_1*Math.atan(o/si(a,n))));return i.x=i.x*this.a,i.y=i.y*this.a,i}function iS(i){var t=-1,e=0,n=0,s,a,o,r;if(i.x=i.x/this.a,i.y=i.y/this.a,this.shape==="ellipse"){this.flip_axis?(n=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*si(1,n)):(e=Math.tan(i.x/this.radius_g_1),n=Math.tan(i.y/this.radius_g_1)*si(1,e));var l=n/this.radius_p;if(s=e*e+l*l+t*t,a=2*this.radius_g*t,o=a*a-4*s*this.C,o<0)return i.x=Number.NaN,i.y=Number.NaN,i;r=(-a-Math.sqrt(o))/(2*s),t=this.radius_g+r*t,e*=r,n*=r,i.x=Math.atan2(e,t),i.y=Math.atan(n*Math.cos(i.x)/t),i.y=Math.atan(this.radius_p_inv2*Math.tan(i.y))}else if(this.shape==="sphere"){if(this.flip_axis?(n=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*Math.sqrt(1+n*n)):(e=Math.tan(i.x/this.radius_g_1),n=Math.tan(i.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+n*n+t*t,a=2*this.radius_g*t,o=a*a-4*s*this.C,o<0)return i.x=Number.NaN,i.y=Number.NaN,i;r=(-a-Math.sqrt(o))/(2*s),t=this.radius_g+r*t,e*=r,n*=r,i.x=Math.atan2(e,t),i.y=Math.atan(n*Math.cos(i.x)/t)}return i.x=i.x+this.long0,i}var nS=["Geostationary Satellite View","Geostationary_Satellite","geos"];const sS={init:tS,forward:eS,inverse:iS,names:nS};var ua=1.340264,da=-.081106,fa=893e-6,pa=.003796,Vr=Math.sqrt(3)/2;function aS(){this.es=0,this.long0=this.long0!==void 0?this.long0:0}function rS(i){var t=lt(i.x-this.long0),e=i.y,n=Math.asin(Vr*Math.sin(e)),s=n*n,a=s*s*s;return i.x=t*Math.cos(n)/(Vr*(ua+3*da*s+a*(7*fa+9*pa*s))),i.y=n*(ua+da*s+a*(fa+pa*s)),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function oS(i){i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a;var t=1e-9,e=12,n=i.y,s,a,o,r,l,h;for(h=0;h<e&&(s=n*n,a=s*s*s,o=n*(ua+da*s+a*(fa+pa*s))-i.y,r=ua+3*da*s+a*(7*fa+9*pa*s),n-=l=o/r,!(Math.abs(l)<t));++h);return s=n*n,a=s*s*s,i.x=Vr*i.x*(ua+3*da*s+a*(7*fa+9*pa*s))/Math.cos(n),i.y=Math.asin(Math.sin(n)/Vr),i.x=lt(i.x+this.long0),i}var lS=["eqearth","Equal Earth","Equal_Earth"];const hS={init:aS,forward:rS,inverse:oS,names:lS};var Ra=1e-10;function cS(){var i;if(this.phi1=this.lat1,Math.abs(this.phi1)<Ra)throw new Error;this.es?(this.en=lh(this.es),this.m1=Xs(this.phi1,this.am1=Math.sin(this.phi1),i=Math.cos(this.phi1),this.en),this.am1=i/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=dS,this.forward=uS):(Math.abs(this.phi1)+Ra>=Q?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=pS,this.forward=fS)}function uS(i){var t=lt(i.x-(this.long0||0)),e=i.y,n,s,a;return n=this.am1+this.m1-Xs(e,s=Math.sin(e),a=Math.cos(e),this.en),s=a*t/(n*Math.sqrt(1-this.es*s*s)),i.x=n*Math.sin(s),i.y=this.am1-n*Math.cos(s),i.x=this.a*i.x+(this.x0||0),i.y=this.a*i.y+(this.y0||0),i}function dS(i){i.x=(i.x-(this.x0||0))/this.a,i.y=(i.y-(this.y0||0))/this.a;var t,e,n,s;if(e=si(i.x,i.y=this.am1-i.y),s=hh(this.am1+this.m1-e,this.es,this.en),(t=Math.abs(s))<Q)t=Math.sin(s),n=e*Math.atan2(i.x,i.y)*Math.sqrt(1-this.es*t*t)/Math.cos(s);else if(Math.abs(t-Q)<=Ra)n=0;else throw new Error;return i.x=lt(n+(this.long0||0)),i.y=An(s),i}function fS(i){var t=lt(i.x-(this.long0||0)),e=i.y,n,s;return s=this.cphi1+this.phi1-e,Math.abs(s)>Ra?(i.x=s*Math.sin(n=t*Math.cos(e)/s),i.y=this.cphi1-s*Math.cos(n)):i.x=i.y=0,i.x=this.a*i.x+(this.x0||0),i.y=this.a*i.y+(this.y0||0),i}function pS(i){i.x=(i.x-(this.x0||0))/this.a,i.y=(i.y-(this.y0||0))/this.a;var t,e,n=si(i.x,i.y=this.cphi1-i.y);if(e=this.cphi1+this.phi1-n,Math.abs(e)>Q)throw new Error;return Math.abs(Math.abs(e)-Q)<=Ra?t=0:t=n*Math.atan2(i.x,i.y)/Math.cos(e),i.x=lt(t+(this.long0||0)),i.y=An(e),i}var mS=["bonne","Bonne (Werner lat_1=90)"];const gS={init:cS,names:mS};function _S(i){i.Proj.projections.add(Pr),i.Proj.projections.add(Lr),i.Proj.projections.add(dx),i.Proj.projections.add(yx),i.Proj.projections.add(Ax),i.Proj.projections.add(Ix),i.Proj.projections.add(Bx),i.Proj.projections.add(Vx),i.Proj.projections.add(Yx),i.Proj.projections.add(Qx),i.Proj.projections.add(gy),i.Proj.projections.add(Sy),i.Proj.projections.add(Ay),i.Proj.projections.add(Dy),i.Proj.projections.add(By),i.Proj.projections.add(Vy),i.Proj.projections.add(Yy),i.Proj.projections.add(Qy),i.Proj.projections.add(a1),i.Proj.projections.add(c1),i.Proj.projections.add(m1),i.Proj.projections.add(x1),i.Proj.projections.add(w1),i.Proj.projections.add(P1),i.Proj.projections.add(U1),i.Proj.projections.add(V1),i.Proj.projections.add(Y1),i.Proj.projections.add(Q1),i.Proj.projections.add(sS),i.Proj.projections.add(hS),i.Proj.projections.add(gS)}We.defaultDatum="WGS84";We.Proj=Gi;We.WGS84=new We.Proj("WGS84");We.Point=zs;We.toPoint=td;We.defs=je;We.nadgrid=pM;We.transform=kr;We.mgrs=PM;We.version="__VERSION__";_S(We);We.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");We.defs("EPSG:32610","+proj=utm +zone=10 +datum=WGS84 +units=m +no_defs");let ma=0,ga=0,Wr=!1,aa={minLng:0,maxLng:0,minLat:0,maxLat:0},_a=8e3,Ai=1;function Di(i,t,e=!0){if(isNaN(i)||isNaN(t))return console.error(`Invalid coordinates: longitude=${i}, latitude=${t}`),[0,0];const[n,s]=We("EPSG:4326","EPSG:32610",[i,t]);if(Math.random()<.01&&console.log(`Coordinate transformation: 
      WGS84 (${i}, ${t}) -> 
      UTM (${n}, ${s}) -> 
      Game (${n-ma}, ${ga-s})
      Center: (${ma}, ${ga})
      Centered: ${Wr}
      Scale Factor: ${Ai}
    `),!Wr)return[n-55e4,5275e3-s];const a=n-ma,o=ga-s;return e?[a*Ai,o*Ai]:[a,o]}function vS(i){_a=i,console.log(`Terrain base size set to ${_a}`)}function MS(i,t,e,n){aa={minLng:i,maxLng:t,minLat:e,maxLat:n};const s=(i+t)/2,a=(e+n)/2,[o,r]=We("EPSG:4326","EPSG:32610",[s,a]);ma=o,ga=r,Wr=!0,console.log(`Projection center set to geographic coordinates: (${s}, ${a})`),console.log(`Projection center in UTM coordinates: (${ma}, ${ga})`),xS();const[l,h]=Di(i,e,!1),[c,u]=Di(t,n,!1);console.log(`Game coordinate bounds (before scaling): 
    X: ${l} to ${c} (width: ${c-l})
    Z: ${h} to ${u} (height: ${u-h})
  `),console.log(`Game coordinate bounds (after scaling): 
    X: ${l*Ai} to ${c*Ai} (width: ${(c-l)*Ai})
    Z: ${h*Ai} to ${u*Ai} (height: ${(u-h)*Ai})
  `)}function xS(){if(!Wr){console.warn("Cannot calculate scale factor: projection center not set");return}const[i,t]=Di(aa.minLng,aa.minLat,!1),[e,n]=Di(aa.maxLng,aa.maxLat,!1),s=Math.abs(e-i),a=Math.abs(n-t),o=Math.max(s,a);Ai=_a*.8/o,console.log(`Calculated scale factor: ${Ai}`),console.log(`This scale factor will fit the geographic bounds (${s}m × ${a}m) into a ${_a*.8}m × ${_a*.8}m game area`)}function yS(i,t){console.log("Terrain info display is disabled")}async function SS(i){const t=Math.random().toString(36).substring(2,8);console.log(`[PathResolver ${t}] Attempting to load resource from ${i.length} paths: ${i.join(", ")}`);for(let n=0;n<i.length;n++)try{console.log(`[PathResolver ${t}] Attempt ${n+1}/${i.length}: ${i[n]}`);const s=await fetch(i[n]);if(s.ok)return console.log(`[PathResolver ${t}] ✅ Successfully loaded resource from: ${i[n]}`),s;console.log(`[PathResolver ${t}] ❌ Failed to load from ${i[n]} - Status: ${s.status} ${s.statusText}`)}catch(s){console.log(`[PathResolver ${t}] 🚫 Error loading from path ${i[n]}:`,s)}const e=`[PathResolver ${t}] ⚠️ Failed to load resource from all paths: ${i.join(", ")}`;throw console.error(e),new Error(e)}function ES(i,t){console.log(`[PathResolver] Getting paths for: DEV=${i}, PROD=${t}`);const e=window.location.hostname.includes("github.io"),n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";console.log(`[PathResolver] Environment detection: isGitHubPages=${e}, isDev=${n}, hostname=${window.location.hostname}`);const s=e?bS():"";if(e){const o=s+t.replace(/^\.\//,"");console.log(`[PathResolver] GitHub Pages detected. Using base path: ${s}`),console.log(`[PathResolver] Adjusted production path: ${o}`);const r=[o,t,t.replace(/^\.\//,""),t.split("/").pop()||"","/"+t.replace(/^\.\//,""),i];return console.log(`[PathResolver] Generated ${r.length} paths to try: ${r.join(", ")}`),r}const a=n?[i,t]:[t,i];return console.log(`[PathResolver] Generated ${a.length} paths to try: ${a.join(", ")}`),a}function bS(){const i=window.location.pathname;console.log(`[PathResolver] Analyzing pathname: ${i}`);const t=i.match(/^\/([^\/]+)(?:\/|\/index\.html)?$/);if(t&&t[1]){const e="/"+t[1]+"/";return console.log(`[PathResolver] Extracted base path: ${e}`),e}return console.log("[PathResolver] No repository name found in pathname, using root path /"),"/"}const wS=[{name:"Puget Sound",lat:47.7237,lng:-122.4713,radius:2400},{name:"Elliot Bay",lat:47.599,lng:-122.38,radius:1600},{name:"Lake Union",lat:47.6392,lng:-122.3337,radius:1e3},{name:"Lake Washington",lat:47.609,lng:-122.255,radius:2e3},{name:"Alki Beach",lat:47.586,lng:-122.411,radius:1200}],_s={minLat:47.5,maxLat:47.75,minLng:-122.5,maxLng:-122.25},dd=1,_n=.5,xs=_n-.01,Fn=100,Ki=8e3;let Ls=null;async function TS(){if(Ls!==null)return Ls;try{console.log("Loading Seattle elevation grid data...");const i=ES("./src/seattle_elevation_grid.json","./assets/seattle_elevation_grid.json");i.push("/seattle_elevation_grid.json"),i.push("/src/seattle_elevation_grid.json"),console.log(`[ElevationGrid] Trying ${i.length} paths for elevation data: ${i.join(", ")}`);const e=await(await SS(i)).json();return Ls=e,console.log("Seattle elevation grid loaded successfully:",`Size: ${e.metadata.size}x${e.metadata.size}`,`Elevation range: ${e.metadata.elevation.min}m to ${e.metadata.elevation.max}m`,`Geographic bounds: ${JSON.stringify(e.metadata.geographicBounds)}`),e}catch(i){throw console.error("Error loading Seattle elevation grid data:",i),i}}async function AS(i){console.log("Creating Seattle terrain from elevation grid data...");try{const t=await TS(),e=t.metadata.geographicBounds;console.log("Setting projection center with bounds:",e),vS(Ki),MS(e.minLon,e.maxLon,e.minLat,e.maxLat);const n=new de({color:26316,metalness:.1,roughness:.2,transparent:!0,opacity:.9,side:Fi}),s=new de({color:2263842,metalness:0,roughness:.8}),a=new Kn(Ki*.8,Ki*.8,Fn-1,Fn-1);a.rotateX(-Math.PI/2);const o=CS(Fn),r=a.attributes.position.array,l=Ki*.4;let h=0,c=1/0;const u=t.metadata.size,d=t.grid;for(let _=0;_<r.length;_+=3){const m=(r[_]+l)/(Ki*.8),p=(r[_+2]+l)/(Ki*.8),b=Math.floor(m*u),S=Math.floor(p*u);let v=0;const R=Math.floor(m*Fn),w=Math.floor(p*Fn),C=w>=0&&w<Fn&&R>=0&&R<Fn&&o[w][R];b>=0&&b<u&&S>=0&&S<u&&d[S]&&typeof d[S][b]=="number"?(v=d[S][b],isNaN(v)&&(v=_n)):v=_n,v<=_n?r[_+1]=xs:r[_+1]=v*dd,h=Math.max(h,v),c=Math.min(c,v)}if(console.log(`Terrain elevation range (data): ${c}m to ${h}m`),console.log(`Water level set at: ${_n}m`),console.log(`Underwater vertices set to: ${xs}m`),a.attributes.position.needsUpdate=!0,a.computeVertexNormals(),a.clearGroups(),a.index){const _=a.index.array,m=a.attributes.position.array,p=_.length/3;let b=-1,S=0;console.log(`Assigning material groups to ${p} faces...`);for(let v=0;v<p;v++){const R=v*3,w=_[R],C=_[R+1],P=_[R+2],E=m[w*3+1],x=m[C*3+1],L=m[P*3+1],z=.001,H=Math.abs(E-xs)<z&&Math.abs(x-xs)<z&&Math.abs(L-xs)<z?1:0;v===0?b=H:H!==b&&(a.addGroup(S,R-S,b),S=R,b=H),v===p-1&&a.addGroup(S,_.length-S,b)}console.log(`Finished assigning material groups. ${a.groups.length} groups created.`)}else console.error("Terrain geometry is not indexed. Cannot assign material groups.");const f=[s,n],g=new Ct(a,f);g.position.y=0,i.add(g),yS(i,g),console.log("Seattle terrain created successfully")}catch(t){console.error("Error creating Seattle terrain:",t)}}function CS(i){const t=[];for(let e=0;e<i;e++){t[e]=[];for(let n=0;n<i;n++)t[e][n]=!1}for(const e of wS){const n=(e.lng-_s.minLng)/(_s.maxLng-_s.minLng),s=(e.lat-_s.minLat)/(_s.maxLat-_s.minLat),a=Math.floor(n*(i-1)),o=Math.floor(s*(i-1)),r=Math.floor(e.radius/8e3*i);for(let l=0;l<i;l++)for(let h=0;h<i;h++){const c=h-a,u=l-o;Math.sqrt(c*c+u*u)<=r&&(t[l][h]=!0)}}return t}function Ga(i,t){if(!Ls)return console.warn("Elevation data not loaded, cannot get terrain elevation."),0;const e=Ls.metadata.size,n=Ls.grid,s=Ki*.4,a=(i+s)/(Ki*.8),o=(t+s)/(Ki*.8),r=Math.floor(a*e),l=Math.floor(o*e);let h=_n;return r>=0&&r<e&&l>=0&&l<e&&n[l]&&typeof n[l][r]=="number"&&!isNaN(n[l][r])&&(h=n[l][r]),h<=_n?xs:h*dd}const Mi=class Mi{constructor(t,e){O(this,"mesh");O(this,"velocity");O(this,"lifespan");O(this,"timeAlive",0);O(this,"flowSpeed",2);O(this,"material");O(this,"scaleFactor",5);const n=new Te(Mi.PROJECTILE_RADIUS,Mi.PROJECTILE_RADIUS,Mi.PROJECTILE_LENGTH,16,8,!1),s=new sn({uniforms:{time:{value:0},length:{value:Mi.PROJECTILE_LENGTH}},vertexShader:`
                // Variables passed from vertex to fragment shader
                varying vec2 vUv;
                varying float vRelativePos;
                
                void main() {
                    // Pass UV coordinates to fragment shader
                    vUv = uv;
                    
                    // Calculate and pass relative position along the laser (0 to 1)
                    // Y component of uv goes from 0 at bottom to 1 at top
                    vRelativePos = uv.y;
                    
                    // Standard vertex position calculation 
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float time;
                uniform float length;
                
                varying vec2 vUv;
                varying float vRelativePos;
                
                // Function to convert HSV to RGB color
                vec3 hsv2rgb(vec3 c) {
                    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
                    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
                    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
                }
                
                void main() {
                    // Create flowing rainbow effect based on position and time
                    float hue = mod(vRelativePos * 3.0 - time, 1.0); // Full rainbow cycle
                    
                    // Create some variation in the rainbow pattern
                    float sinEffect = sin(vRelativePos * 15.0 - time * 5.0) * 0.1;
                    hue = mod(hue + sinEffect, 1.0);
                    
                    // Brightness falloff towards the end of the beam
                    float brightness = 1.0 - (vRelativePos * 0.5);
                    
                    // Edge glow effect
                    float edge = 0.5 - distance(vUv.x, 0.5);
                    float glow = pow(edge * 2.0, 3.0);
                    
                    // Generate rainbow color
                    vec3 rgbColor = hsv2rgb(vec3(hue, 1.0, brightness));
                    
                    // Add some white core for intensity
                    float core = pow(edge * 2.0, 8.0) * 0.8;
                    rgbColor += vec3(core);
                    
                    gl_FragColor = vec4(rgbColor, 1.0);
                }
            `,transparent:!0,blending:va});this.material=s,this.mesh=new Ct(n,this.material);const a=e.clone().multiplyScalar(-75/2);this.mesh.position.copy(t).add(a);const o=new Hi;o.setFromUnitVectors(new T(0,1,0),e),this.mesh.quaternion.copy(o),this.velocity=e.clone().multiplyScalar(Mi.PROJECTILE_SPEED),this.lifespan=Mi.PROJECTILE_LIFESPAN}update(t){const e=this.velocity.clone().multiplyScalar(t);return this.mesh.position.add(e),this.timeAlive+=t,this.material.uniforms.time.value+=t*this.flowSpeed,this.timeAlive<this.lifespan}dispose(){this.mesh&&(this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&this.mesh.material.dispose())}};O(Mi,"PROJECTILE_SPEED",300),O(Mi,"PROJECTILE_LIFESPAN",4),O(Mi,"PROJECTILE_RADIUS",.2*5),O(Mi,"PROJECTILE_LENGTH",15*5);let Nl=Mi;class RS{constructor(){O(this,"mesh");O(this,"propellerGroup");O(this,"engineGlow");O(this,"scaleFactor",5);this.mesh=new Ve,this.propellerGroup=new Ve,this.engineGlow=new Al(65535,2,10),this.createModel(),this.mesh.name="plane",this.mesh.userData={isPlane:!0}}createModel(){const t=new Xn({color:16718362,shininess:100,specular:16777215}),e=new Xn({color:26367,shininess:120,specular:11184895}),n=new Te(.2*this.scaleFactor,.2*this.scaleFactor,1.5*this.scaleFactor,8);n.rotateX(Math.PI/2);const s=new Ct(n,t);this.mesh.add(s);const a=new Te(.2*this.scaleFactor,.15*this.scaleFactor,.5*this.scaleFactor,8);a.rotateX(Math.PI/2);const o=new Ct(a,t);o.position.set(0,0,-1*this.scaleFactor),this.mesh.add(o),this.propellerGroup.position.set(0,0,-1.3*this.scaleFactor);const r=new ni(.5*this.scaleFactor,.05*this.scaleFactor,.05*this.scaleFactor),l=new Ct(r,e);this.propellerGroup.add(l);const h=new ni(.5*this.scaleFactor,.05*this.scaleFactor,.05*this.scaleFactor),c=new Ct(h,e);c.rotation.z=Math.PI/2,this.propellerGroup.add(c),this.mesh.add(this.propellerGroup);const u=new ni(3*this.scaleFactor,.05*this.scaleFactor,.7*this.scaleFactor),d=new Ct(u,t);d.position.set(0,0,.2*this.scaleFactor);const f=new ni(.3*this.scaleFactor,.1*this.scaleFactor,.5*this.scaleFactor),g=new Ct(f,e);g.position.set(-1.5*this.scaleFactor,0,.1*this.scaleFactor),d.add(g);const _=new ni(.3*this.scaleFactor,.1*this.scaleFactor,.5*this.scaleFactor),m=new Ct(_,e);m.position.set(1.5*this.scaleFactor,0,.1*this.scaleFactor),d.add(m),this.mesh.add(d);const p=new ni(1*this.scaleFactor,.05*this.scaleFactor,.3*this.scaleFactor),b=new Ct(p,t);b.position.set(0,0,.9*this.scaleFactor),this.mesh.add(b);const S=new ni(.05*this.scaleFactor,.4*this.scaleFactor,.4*this.scaleFactor),v=new Ct(S,e);v.position.set(0,.2*this.scaleFactor,.9*this.scaleFactor),this.mesh.add(v);const R=new Te(.03*this.scaleFactor,.03*this.scaleFactor,.2*this.scaleFactor,8),w=new Ct(R,e);w.position.set(0,.3*this.scaleFactor,0),this.mesh.add(w),this.engineGlow.position.set(0,0,1.2*this.scaleFactor),this.mesh.add(this.engineGlow);const C=new wa(.15*this.scaleFactor,16,8),P=new $r({color:65535,transparent:!0,opacity:.7}),E=new Ct(C,P);E.position.set(0,0,1.2*this.scaleFactor),this.mesh.add(E)}update(t){this.propellerGroup.rotation.z+=50*t,this.engineGlow&&(this.engineGlow.intensity=2+Math.sin(Date.now()*.01)*.5)}setInitialState(t,e){this.mesh.position.copy(t),this.mesh.quaternion.copy(e)}shoot(){const t=new T(0,0,-1.5*this.scaleFactor),e=this.mesh.localToWorld(t.clone()),n=new T(0,0,-1);return n.applyQuaternion(this.mesh.quaternion),n.normalize(),new Nl(e,n)}}const Ce=class Ce{constructor(t,e){O(this,"points");O(this,"geometry");O(this,"material");O(this,"parentMesh");O(this,"particles",[]);O(this,"maxParticles",200);O(this,"emissionRate",50);O(this,"timeSinceLastEmit",0);O(this,"isActive",!1);O(this,"positions");O(this,"colors");O(this,"sizes");O(this,"particleIndexCounter",0);this.parentMesh=t,this.geometry=new Ue,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry.setAttribute("position",new Le(this.positions,3)),this.geometry.setAttribute("color",new Le(this.colors,3)),this.geometry.setAttribute("size",new Le(this.sizes,1)),this.material=new Yr({vertexColors:!0,transparent:!0,opacity:1,blending:Yn,sizeAttenuation:!0,depthWrite:!1}),this.points=new eh(this.geometry,this.material),e.add(this.points)}start(){this.isActive=!0,this.timeSinceLastEmit=1/this.emissionRate}stop(){this.isActive=!1}update(t){if(this.isActive){this.timeSinceLastEmit+=t;const n=1/this.emissionRate;for(;this.timeSinceLastEmit>=n;)this.emitParticle(),this.timeSinceLastEmit-=n}const e=this.particles.length;for(let n=e-1;n>=0;n--){const s=this.particles[n];if(s.lifespan-=t,s.lifespan>0){s.position.addScaledVector(s.velocity,t);const a=1-s.lifespan/s.initialLifespan;s.size=ii.lerp(s.initialSize,Ce.PARTICLE_END_SIZE,a);const o=ii.lerp(Ce.PARTICLE_START_OPACITY,Ce.PARTICLE_END_OPACITY,a),r=s.baseColor.clone().multiplyScalar(o);this.positions[s.index*3]=s.position.x,this.positions[s.index*3+1]=s.position.y,this.positions[s.index*3+2]=s.position.z,this.sizes[s.index]=s.size,this.colors[s.index*3]=r.r,this.colors[s.index*3+1]=r.g,this.colors[s.index*3+2]=r.b}else this.sizes[s.index]=0,this.particles.splice(n,1)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0}emitParticle(){if(this.particles.length>=this.maxParticles){const r=this.particles.shift();if(r&&(this.sizes[r.index]=0),this.particles.length>=this.maxParticles)return}const t=Ce.PARTICLE_LIFESPAN*(.8+Math.random()*.4),e=Ce.PARTICLE_START_SIZE*(.8+Math.random()*.4),n=new T;this.parentMesh.getWorldPosition(n),n.x+=(Math.random()-.5)*2,n.z+=(Math.random()-.5)*2;const s=new T((Math.random()-.5)*Ce.PARTICLE_SPREAD,Ce.PARTICLE_RISE_SPEED*(.8+Math.random()*.4),(Math.random()-.5)*Ce.PARTICLE_SPREAD),a=this.particleIndexCounter%this.maxParticles;this.particleIndexCounter++;const o={position:n,velocity:s,lifespan:t,initialLifespan:t,size:e,initialSize:e,baseColor:Ce.PARTICLE_BASE_COLOR,index:a};this.particles.push(o),this.positions[a*3]=o.position.x,this.positions[a*3+1]=o.position.y,this.positions[a*3+2]=o.position.z,this.sizes[a]=o.size,this.colors[a*3]=o.baseColor.r,this.colors[a*3+1]=o.baseColor.g,this.colors[a*3+2]=o.baseColor.b}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()}};O(Ce,"PARTICLE_LIFESPAN",2),O(Ce,"PARTICLE_START_SIZE",1.5),O(Ce,"PARTICLE_END_SIZE",4),O(Ce,"PARTICLE_START_OPACITY",.6),O(Ce,"PARTICLE_END_OPACITY",0),O(Ce,"PARTICLE_BASE_COLOR",new _t(3355443)),O(Ce,"PARTICLE_RISE_SPEED",2),O(Ce,"PARTICLE_SPREAD",1.5);let Ul=Ce;const Xr=class Xr{constructor(t,e=new T(0,30,0),n=null){O(this,"mesh");O(this,"state","flying");O(this,"needsCrashEffect",!1);O(this,"sceneRef");O(this,"speed",3);O(this,"rotationSpeed",.005);O(this,"hoverAmplitude",.1);O(this,"hoverFrequency",1.5);O(this,"pathRadius",50);O(this,"pathHeight",30);O(this,"pathAngle",0);O(this,"initialPosition");O(this,"ufoLight",new Al(65535,2,50,1.5));O(this,"verticalVelocity",0);O(this,"smokeEmitter",null);O(this,"laserBeam",null);O(this,"laserMaterial",null);O(this,"laserGeometry",null);O(this,"laserActive",!1);O(this,"laserDuration",.5);O(this,"laserTimer",0);O(this,"laserCooldown",0);O(this,"nextLaserTime",0);O(this,"spaceNeedle",null);O(this,"raycaster",new Rp);this.sceneRef=t,this.initialPosition=e.clone(),this.mesh=new Ve,this.spaceNeedle=n,this.createUfoModel(),this.mesh.position.copy(e),this.smokeEmitter=new Ul(this.mesh,this.sceneRef),this.initializeLaser(),this.nextLaserTime=Math.random()*5}setSpaceNeedle(t){this.spaceNeedle=t}initializeLaser(){this.laserMaterial=new Cu({color:65280,linewidth:1,opacity:.8,transparent:!0}),this.laserGeometry=new Ue,this.laserBeam=new ap(this.laserGeometry,this.laserMaterial),this.laserBeam.visible=!1,this.sceneRef.add(this.laserBeam)}createUfoModel(){const t=new Xn({color:13421772,specular:16777215,shininess:100,flatShading:!1}),e=new Te(24,24,4,24,1,!1),n=e.attributes.position;for(let d=0;d<n.count;d++){const f=n.getX(d),g=n.getY(d),_=n.getZ(d),m=Math.sqrt(f*f+_*_);m>0&&(g>0?n.setY(d,g-m*.1):n.setY(d,g+m*.05))}const s=new wa(12,16,8,0,Math.PI*2,0,Math.PI/2),a=new Ct(s,t);a.position.y=2;const o=new Vs(24,2,8,32),r=new Ct(o,t);r.rotation.x=Math.PI/2,r.position.y=-2;const l=new Ct(e,t);this.ufoLight=new Al(65535,2,100,1.5),this.ufoLight.position.set(0,-4,0);const h=new wa(6,16,8),c=new $r({color:65535,transparent:!0,opacity:.7}),u=new Ct(h,c);u.position.set(0,-4,0),this.mesh.add(l),this.mesh.add(a),this.mesh.add(r),this.mesh.add(this.ufoLight),this.mesh.add(u),this.mesh.rotation.z=.1}hit(){var t;this.state==="flying"&&(this.state="hit",console.log("UFO Hit! Transitioning to falling state."),this.verticalVelocity=0,this.ufoLight&&(this.ufoLight.intensity=0),(t=this.smokeEmitter)==null||t.start(),this.state="falling")}update(t){var e;switch(this.state){case"flying":this.updateFlying(t),this.updateLaser(t);break;case"falling":this.updateFalling(t),(e=this.smokeEmitter)==null||e.update(t);break}}updateFlying(t){this.pathAngle+=this.speed*t*.2;const e=this.initialPosition.x+Math.cos(this.pathAngle)*this.pathRadius,n=this.initialPosition.z+Math.sin(this.pathAngle)*this.pathRadius,s=Math.sin(Date.now()*.001*this.hoverFrequency)*this.hoverAmplitude;this.mesh.position.set(e,this.initialPosition.y+this.pathHeight+s,n),this.mesh.lookAt(this.initialPosition.x,this.mesh.position.y,this.initialPosition.z),this.mesh.rotation.y+=this.rotationSpeed,this.ufoLight&&(this.ufoLight.intensity=1.5+Math.sin(Date.now()*.005)*.5)}updateFalling(t){var e;this.verticalVelocity+=Xr.GRAVITY*t,this.mesh.position.y+=this.verticalVelocity*t,this.mesh.rotation.x+=(Math.random()-.5)*.1,this.mesh.rotation.z+=(Math.random()-.5)*.1,this.mesh.position.y<=0&&(this.mesh.position.y=0,this.state="crashed",this.needsCrashEffect=!0,console.log("UFO crashed!"),(e=this.smokeEmitter)==null||e.stop(),this.mesh.scale.y=.8)}updateLaser(t){this.laserCooldown-=t,this.laserCooldown<=0&&!this.laserActive&&(this.nextLaserTime-=t,this.nextLaserTime<=0&&(this.fireLaser(),this.nextLaserTime=2+Math.random()*4)),this.laserActive&&(this.laserTimer-=t,this.laserTimer<=0&&(this.deactivateLaser(),this.laserCooldown=.5+Math.random()*1.5))}fireLaser(){if(!this.laserGeometry||!this.laserBeam)return;const t=new T(0,-4,0);t.applyMatrix4(this.mesh.matrixWorld);let e;this.spaceNeedle?(e=new T().copy(this.spaceNeedle.mesh.position),e.y+=100+Math.random()*50,e.x+=Math.random()*30-15,e.z+=Math.random()*30-15):e=new T(this.initialPosition.x+(Math.random()*10-5),this.initialPosition.y+Math.random()*10,this.initialPosition.z+(Math.random()*10-5));const n=[t,e];if(this.laserGeometry.setFromPoints(n),this.laserBeam.visible=!0,this.laserActive=!0,this.laserTimer=this.laserDuration,this.spaceNeedle){const s=new T().subVectors(e,t).normalize();this.raycaster.set(t,s);const a=t.distanceTo(e);this.spaceNeedle.mesh.traverse(o=>{var r;if(o instanceof Ct){const l=this.raycaster.intersectObject(o,!1);l.length>0&&l[0].distance<=a&&(console.log("UFO laser hit the Space Needle!"),(r=this.spaceNeedle)==null||r.takeDamage(.5))}})}}deactivateLaser(){this.laserBeam&&(this.laserBeam.visible=!1,this.laserActive=!1)}setPathRadius(t){this.pathRadius=t}setPathHeight(t){this.pathHeight=t}setSpeed(t){this.speed=t}setInitialPosition(t){this.initialPosition=t}setPathAngle(t){this.pathAngle=t}dispose(){this.mesh.traverse(t=>{t instanceof Ct&&(t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()))}),this.ufoLight&&this.ufoLight.dispose(),this.smokeEmitter&&(this.sceneRef.remove(this.smokeEmitter.points),this.smokeEmitter.dispose()),this.laserBeam&&(this.sceneRef.remove(this.laserBeam),this.laserGeometry&&this.laserGeometry.dispose(),this.laserMaterial&&this.laserMaterial.dispose())}};O(Xr,"GRAVITY",-9.8*2);let Ol=Xr;function Mr(){const i=document.createElement("canvas"),t=i.getContext("2d");i.width=512,i.height=512;const e=["#505050","#454d60","#605048","#495c42"],n=e[Math.floor(Math.random()*e.length)];t.fillStyle=n,t.fillRect(0,0,i.width,i.height);const s=60,a=80;t.globalAlpha=.1,t.fillStyle="#ffffff";const o=80;for(let d=0;d<i.width;d+=o)t.fillRect(d,0,2,i.height);t.globalAlpha=1;const r=4,l=4,h=i.height/r,c=i.width/l;for(let d=0;d<r;d++)for(let f=0;f<l;f++){const g=f*c+(c-s)/2,_=d*h+(h-a)/2;PS(t,g,_,s,a)}const u=new Ru(i);return u.needsUpdate=!0,u}function PS(i,t,e,n,s){i.fillStyle="#000000",i.fillRect(t-2,e-2,n+4,s+4),Math.random()>.7?(i.fillStyle="#ffff88",i.fillRect(t,e,n,s)):(i.fillStyle="#1a1a2a",i.fillRect(t,e,n,s))}async function LS(i){console.log("Placing buildings based on distance from downtown...");const t=47.607,e=-122.333,[n,s]=Di(e,t);console.log(`Downtown center projected to game coordinates: (${n}, ${s})`);const a=47.623,o=-122.349,[r,l]=Di(o,a);console.log(`Space Needle location: (${r}, ${l})`);const h=500,c=30,u=55,d=2,f=.5;console.log(`Creating building height restriction zone with radius ${h} around Space Needle`);const g=3500,_=2e4,m=8,p=180,b=5,S=50,v=10,R=2500,w=2,C=[{name:"standard",widthRatio:1,heightMultiplier:1,probability:.5},{name:"tall-thin",widthRatio:.6,heightMultiplier:1.5,probability:.3},{name:"wide-short",widthRatio:1.4,heightMultiplier:.8,probability:.2}],P=[Mr(),Mr(),Mr(),Mr()];P.forEach(B=>{B.wrapS=Ma,B.wrapT=Ma});const E=[new Xn({color:4473924}),new Xn({color:6710886}),new Xn({color:3355460})],x=[],L=[];console.log(`Attempting to place buildings (max ${_} attempts)...`);const z=Math.min(_,15e3);for(let B=0;B<z;B++){const H=(Math.random()-.5)*2*g,q=(Math.random()-.5)*2*g;let W=1;const K=Math.pow(H-r,2)+Math.pow(q-l,2),V=Math.sqrt(K);if(V<h){const F=V/h;if(W=Math.pow(F,1.5)*.3,Math.random()>.7)continue}const st=Math.pow(H-n,2)+Math.pow(q-s,2),mt=Math.sqrt(st);let vt=Math.max(0,1-Math.pow(mt/R,w));if(vt=Math.min(1,Math.max(0,vt)),V<h&&(vt=Math.min(1,vt*d)),Math.random()>vt)continue;let zt=!1;for(const F of L)if(Math.pow(H-F.x,2)+Math.pow(q-F.y,2)<m*m){zt=!0;break}if(zt)continue;const ie=Ga(H,q);if(ie<=.5)continue;let $=C[0];const nt=Math.random();let Et=0;for(const F of C)if(Et+=F.probability,nt<=Et){$=F;break}const ot=b+(p-b)*vt,Pt=b+b*vt*.2;let qt;if(W<1){const F=c+(u-c)*W,j=.3+W*.7;qt=c+Math.random()*j*(F-c)}else qt=Pt+Math.random()*(ot-Pt);qt*=$.heightMultiplier;const It=.7+.5*vt,ge=W<1?f:1,pe=v+Math.random()*(S-v),$t=pe*It*ge*$.widthRatio,I=pe*It*ge/$.widthRatio,Xe=new ni($t,qt,I),Xt=Xe.getAttribute("uv");for(let F=0;F<Xt.count;F++){const j=Xt.getX(F),J=Xt.getY(F),Y=1,bt=Math.max(1,Math.floor(qt/Math.max($t,I)));Xt.setXY(F,j*Y,J*bt)}Xt.needsUpdate=!0;const jt=Math.floor(Math.random()*P.length),At=Math.floor(Math.random()*E.length),ne=new Xn({map:P[jt]}),Tt=E[At],A=[ne,ne,Tt,Tt,ne,ne],M=new Ct(Xe,A);M.position.set(H,ie+qt/2,q),M.castShadow=!0,M.receiveShadow=!0,i.add(M),x.push(M),L.push(new tt(H,q))}return console.log(`Successfully placed ${x.length} buildings.`),x}function IS(i,t=10,e=null){const n=[],s={latitude:47.623,longitude:-122.349},[a,o]=Di(s.longitude,s.latitude),r=Ga(a,o),l=new T(a,r+2,o);console.log(`Creating UFOs to circle around Space Needle at position: (${a}, ${r+2}, ${o})`);for(let h=0;h<t;h++){const c=h/t*Math.PI*2,u=80+h%3*20,d=100+h%5*30,f=a+Math.cos(c)*u,g=o+Math.sin(c)*u,_=r+d,m=new Ol(i,new T(f,_,g),e);m.setInitialPosition(l.clone()),m.setPathRadius(u),m.setSpeed(.9+h%4*.3),m.setPathHeight(d),m.setPathAngle(c),n.push(m),i.add(m.mesh)}return n}class DS{constructor(){O(this,"keysPressed",{});O(this,"pitch",0);O(this,"roll",0);O(this,"accelerate",0);O(this,"decelerate",0);O(this,"toggleCamera",!1);O(this,"togglePause",!1);O(this,"shoot",!1);O(this,"toggleDebug",!1);window.addEventListener("keydown",this.handleKeyDown.bind(this)),window.addEventListener("keyup",this.handleKeyUp.bind(this)),console.log("InputController initialized")}handleKeyDown(t){const e=t.key.toLowerCase();this.keysPressed[e]=!0,e==="c"&&(this.toggleCamera=!0),e==="p"&&(this.togglePause=!0),e===" "&&(t.preventDefault(),this.shoot=!0),e==="b"&&(this.toggleDebug=!0)}handleKeyUp(t){this.keysPressed[t.key.toLowerCase()]=!1}update(){this.pitch=0,(this.keysPressed.w||this.keysPressed.arrowup)&&(this.pitch=1),(this.keysPressed.s||this.keysPressed.arrowdown)&&(this.pitch=-1),this.roll=0,(this.keysPressed.a||this.keysPressed.arrowleft)&&(this.roll=1),(this.keysPressed.d||this.keysPressed.arrowright)&&(this.roll=-1),this.accelerate=this.keysPressed.e?1:0,this.accelerate,this.decelerate=this.keysPressed.q?1:0,this.decelerate}didToggleCamera(){const t=this.toggleCamera;return this.toggleCamera=!1,t}didTogglePause(){const t=this.togglePause;return this.togglePause=!1,t}didShoot(){const t=this.shoot;return this.shoot=!1,t}didToggleDebug(){const t=this.toggleDebug;return this.toggleDebug=!1,t}anyKeyPressed(){for(const t in this.keysPressed)if(this.keysPressed[t])return this.keysPressed[t]=!1,!0;return!1}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),console.log("InputController disposed")}}class NS{constructor(t){O(this,"plane");O(this,"speed",30);O(this,"minSpeed",10);O(this,"maxSpeed",100);O(this,"speedChangeRate",10);O(this,"pitchSensitivity",1);O(this,"rollSensitivity",1.2);O(this,"bankingTurnFactor",1);O(this,"inputSmoothingFactor",.1);O(this,"maxPitchAngle",ii.degToRad(60));O(this,"maxRollAngle",ii.degToRad(45));O(this,"autoLevelFactor",2);O(this,"currentPitchRate",0);O(this,"currentRollRate",0);O(this,"rotationQuaternion");O(this,"moveDirection");O(this,"initialSpeed");O(this,"enabled",!0);this.plane=t,this.speed=25,this.initialSpeed=this.speed,this.rotationQuaternion=new Hi,this.moveDirection=new T(0,0,-1),this.rotationQuaternion.copy(t.quaternion),console.log("PhysicsEngine initialized")}update(t,e){if(!this.enabled)return;t.accelerate>0?this.speed+=this.speedChangeRate*e:t.decelerate>0&&(this.speed-=this.speedChangeRate*e),this.speed=ii.clamp(this.speed,this.minSpeed,this.maxSpeed);const n=t.pitch*this.pitchSensitivity,s=t.roll*this.rollSensitivity;this.currentPitchRate=ii.lerp(this.currentPitchRate,n,this.inputSmoothingFactor),this.currentRollRate=ii.lerp(this.currentRollRate,s,this.inputSmoothingFactor);const a=new fi().setFromQuaternion(this.rotationQuaternion,"YXZ"),o=a.z*this.bankingTurnFactor,r=this.currentPitchRate*e,l=this.currentRollRate*e,h=o*e,c=new fi(a.x+r,a.y+h,a.z+l,"YXZ");t.pitch===0&&t.roll===0&&(c.x=ii.lerp(c.x,0,this.autoLevelFactor*e),c.z=ii.lerp(c.z,0,this.autoLevelFactor*e)),c.x=ii.clamp(c.x,-this.maxPitchAngle,this.maxPitchAngle),c.z=ii.clamp(c.z,-this.maxRollAngle,this.maxRollAngle),this.rotationQuaternion.setFromEuler(c),this.plane.quaternion.copy(this.rotationQuaternion),this.moveDirection=new T(0,0,-1),this.moveDirection.applyQuaternion(this.plane.quaternion),this.plane.position.addScaledVector(this.moveDirection,this.speed*e)}setEnabled(t){this.enabled=t,console.log(`PhysicsEngine ${t?"enabled":"disabled"}`)}isEnabled(){return this.enabled}reset(){console.log("Resetting PhysicsEngine"),this.speed=this.initialSpeed,this.rotationQuaternion.identity(),this.plane.quaternion.copy(this.rotationQuaternion),this.currentPitchRate=0,this.currentRollRate=0}getCurrentSpeed(){return this.speed}}class US{constructor(t,e){O(this,"camera");O(this,"target",null);O(this,"mode",0);O(this,"isOrbitMode",!1);O(this,"orbitControls");O(this,"rendererDomElement");O(this,"followOffset",new T(0,15,30));O(this,"lerpFactor",.05);O(this,"isCrashViewActive",!1);O(this,"crashTargetPosition",new T);O(this,"crashCameraPosition",new T);this.camera=t,this.rendererDomElement=e,console.log("CameraController initialized"),this.orbitControls=new Vu(this.camera,e),this.orbitControls.enabled=!1,this.orbitControls.target.set(0,0,0),this.orbitControls.enableDamping=!0,this.orbitControls.dampingFactor=.1}setTarget(t){this.target=t,this.target&&this.orbitControls.target.copy(this.target.position)}toggleMode(){this.isOrbitMode=!this.isOrbitMode,console.log(`Camera mode toggled: ${this.isOrbitMode?"Orbit":"Follow"}`),this.orbitControls.enabled=this.isOrbitMode,this.isOrbitMode&&this.target&&this.orbitControls.target.copy(this.target.position)}getIsOrbitMode(){return this.isOrbitMode}setCameraMode(t){const e=t.toLowerCase()==="orbit";this.isOrbitMode!==e&&(this.isOrbitMode=e,console.log(`Camera mode set to: ${this.isOrbitMode?"Orbit":"Follow"}`),this.orbitControls.enabled=this.isOrbitMode,this.isOrbitMode&&this.target&&(this.orbitControls.target.copy(this.target.position),this.camera.position.copy(this.target.position).add(new T(0,100,200))))}setCrashView(t,e){this.isCrashViewActive=!0,this.crashCameraPosition.copy(t),this.crashTargetPosition.copy(e),this.isOrbitMode&&(this.orbitControls.enabled=!1,this.isOrbitMode=!1)}reset(){console.log("Resetting CameraController"),this.isCrashViewActive=!1,this.crashTargetPosition.set(0,0,0),this.crashCameraPosition.set(0,0,0),this.target?(this.mode=0,this.orbitControls.enabled=!1,this.isOrbitMode=!1,this.updateFollowCamera(1)):(this.mode=1,this.orbitControls.enabled=!0,this.isOrbitMode=!0,this.orbitControls.target.set(0,0,0),this.orbitControls.update())}update(t){if(this.isCrashViewActive){this.camera.position.copy(this.crashCameraPosition),this.camera.lookAt(this.crashTargetPosition);return}this.mode===0&&this.target?this.updateFollowCamera(this.lerpFactor*(t*60)):this.mode===1&&this.orbitControls.update()}updateFollowCamera(t){if(!this.target){console.warn("UpdateFollowCamera called but no target is set!");return}const e=this.followOffset.clone();e.applyQuaternion(this.target.quaternion),e.add(this.target.position);const n=this.target.position.clone().add(new T(0,.5,-2));this.camera.position.lerp(e,t),new T,this.camera.position.clone().add(this.camera.getWorldDirection(new T)).lerp(n,t*2),this.camera.lookAt(n);const a=new T(0,1,0);a.applyQuaternion(this.target.quaternion),this.camera.up.copy(a)}}class OS{constructor(){O(this,"speedElement",null);O(this,"crashMessageElement",null);O(this,"restartPromptElement",null);O(this,"controlsReference",null);O(this,"scoreElement",null);O(this,"spaceNeedleHealthElement",null);O(this,"spaceNeedleHealthBarElement",null);O(this,"gameOverContainer",null);O(this,"victoryContainer",null);console.log("UI initialized"),this.createControlReference(),this.createCrashElements(),this.createGameElements(),this.speedElement=document.getElementById("speed-indicator"),this.speedElement?(this.speedElement.style.position="absolute",this.speedElement.style.top="auto",this.speedElement.style.left="auto",this.speedElement.style.bottom="20px",this.speedElement.style.right="20px",this.speedElement.style.color="#bbb",this.speedElement.style.backgroundColor="rgba(0,0,0,0.7)",this.speedElement.style.padding="10px 15px",this.speedElement.style.fontFamily="Arial, sans-serif",this.speedElement.style.fontSize="18px",this.speedElement.style.borderRadius="10px",this.speedElement.style.boxShadow="0 0 10px rgba(0,0,0,0.5)",this.speedElement.style.zIndex="1000"):console.error("Speed indicator UI element (#speed-indicator) not found in index.html!"),this.crashMessageElement=document.getElementById("crashMessage"),this.restartPromptElement=document.getElementById("restartPrompt"),this.showControls()}createGameElements(){this.scoreElement=document.createElement("div"),this.scoreElement.id="score-display",this.scoreElement.style.position="absolute",this.scoreElement.style.top="20px",this.scoreElement.style.right="20px",this.scoreElement.style.color="white",this.scoreElement.style.backgroundColor="rgba(0,0,0,0.7)",this.scoreElement.style.padding="10px 15px",this.scoreElement.style.fontFamily="Arial, sans-serif",this.scoreElement.style.fontSize="24px",this.scoreElement.style.fontWeight="bold",this.scoreElement.style.borderRadius="5px",this.scoreElement.style.zIndex="1000",this.scoreElement.textContent="Score: 0",document.body.appendChild(this.scoreElement);const t=document.createElement("div");t.id="space-needle-health-container",t.style.position="absolute",t.style.top="70px",t.style.right="20px",t.style.width="200px",t.style.backgroundColor="rgba(0,0,0,0.7)",t.style.padding="10px",t.style.borderRadius="5px",t.style.zIndex="1000",this.spaceNeedleHealthElement=document.createElement("div"),this.spaceNeedleHealthElement.style.color="white",this.spaceNeedleHealthElement.style.fontFamily="Arial, sans-serif",this.spaceNeedleHealthElement.style.fontSize="16px",this.spaceNeedleHealthElement.style.marginBottom="5px",this.spaceNeedleHealthElement.textContent="Space Needle: 100%";const e=document.createElement("div");e.style.width="100%",e.style.height="15px",e.style.backgroundColor="#444",e.style.borderRadius="3px",e.style.overflow="hidden",this.spaceNeedleHealthBarElement=document.createElement("div"),this.spaceNeedleHealthBarElement.style.width="100%",this.spaceNeedleHealthBarElement.style.height="100%",this.spaceNeedleHealthBarElement.style.backgroundColor="#2ECC71",this.spaceNeedleHealthBarElement.style.transition="width 0.3s, background-color 0.3s",e.appendChild(this.spaceNeedleHealthBarElement),t.appendChild(this.spaceNeedleHealthElement),t.appendChild(e),document.body.appendChild(t),this.gameOverContainer=document.createElement("div"),this.gameOverContainer.id="game-over-container",this.gameOverContainer.style.position="absolute",this.gameOverContainer.style.top="0",this.gameOverContainer.style.left="0",this.gameOverContainer.style.width="100%",this.gameOverContainer.style.height="100%",this.gameOverContainer.style.display="none",this.gameOverContainer.style.flexDirection="column",this.gameOverContainer.style.justifyContent="center",this.gameOverContainer.style.alignItems="center",this.gameOverContainer.style.backgroundColor="rgba(0,0,0,0.8)",this.gameOverContainer.style.zIndex="2000";const n=document.createElement("div");n.style.color="red",n.style.fontSize="60px",n.style.fontWeight="bold",n.style.marginBottom="30px",n.textContent="GAME OVER";const s=document.createElement("div");s.id="game-over-score",s.style.color="white",s.style.fontSize="30px",s.style.marginBottom="30px",s.textContent="Score: 0";const a=document.createElement("div");a.style.color="white",a.style.fontSize="24px",a.style.cursor="pointer",a.style.padding="10px 20px",a.style.border="2px solid white",a.style.borderRadius="5px",a.textContent="Press R to Restart",this.gameOverContainer.appendChild(n),this.gameOverContainer.appendChild(s),this.gameOverContainer.appendChild(a),document.body.appendChild(this.gameOverContainer),this.victoryContainer=document.createElement("div"),this.victoryContainer.id="victory-container",this.victoryContainer.style.position="absolute",this.victoryContainer.style.top="0",this.victoryContainer.style.left="0",this.victoryContainer.style.width="100%",this.victoryContainer.style.height="100%",this.victoryContainer.style.display="none",this.victoryContainer.style.flexDirection="column",this.victoryContainer.style.justifyContent="center",this.victoryContainer.style.alignItems="center",this.victoryContainer.style.backgroundColor="rgba(0,0,0,0.8)",this.victoryContainer.style.zIndex="2000";const o=document.createElement("div");o.style.color="#2ECC71",o.style.fontSize="60px",o.style.fontWeight="bold",o.style.marginBottom="30px",o.textContent="VICTORY!";const r=document.createElement("div");r.id="ufo-score",r.style.color="white",r.style.fontSize="24px",r.style.marginBottom="10px",r.style.textAlign="left",r.textContent="UFOs Destroyed: 0";const l=document.createElement("div");l.id="health-bonus",l.style.color="white",l.style.fontSize="24px",l.style.marginBottom="10px",l.style.textAlign="left",l.textContent="Space Needle Bonus: 0";const h=document.createElement("div");h.id="total-score",h.style.color="white",h.style.fontSize="30px",h.style.fontWeight="bold",h.style.marginTop="20px",h.style.marginBottom="30px",h.textContent="TOTAL SCORE: 0";const c=document.createElement("div");c.style.color="white",c.style.fontSize="24px",c.style.cursor="pointer",c.style.padding="10px 20px",c.style.border="2px solid white",c.style.borderRadius="5px",c.textContent="Press R to Play Again",this.victoryContainer.appendChild(o),this.victoryContainer.appendChild(r),this.victoryContainer.appendChild(l),this.victoryContainer.appendChild(h),this.victoryContainer.appendChild(c),document.body.appendChild(this.victoryContainer)}createControlReference(){const t=document.createElement("div");t.id="controls-reference",t.style.position="absolute",t.style.bottom="20px",t.style.left="20px",t.style.color="white",t.style.backgroundColor="rgba(0,0,0,0.7)",t.style.padding="15px",t.style.fontFamily="Arial, sans-serif",t.style.fontSize="18px",t.style.borderRadius="10px",t.style.boxShadow="0 0 10px rgba(0,0,0,0.5)",t.style.zIndex="1000",t.style.lineHeight="1.6",t.style.display="block",t.style.width="auto",t.style.maxWidth="300px",t.style.maxHeight="auto",t.style.overflow="hidden",t.innerHTML=`
            <div style="font-weight: bold; margin-bottom: 8px; font-size: 20px; text-align: center; text-decoration: underline;">CONTROLS</div>
            <div><span style="font-weight: bold;">Flight:</span> W/S or ↑/↓ = Pitch</div>
            <div><span style="font-weight: bold;">Turn:</span> A/D or ←/→ = Roll</div>
            <div><span style="font-weight: bold;">Speed:</span> E = Accelerate, Q = Brake</div>
            <div><span style="font-weight: bold;">Shoot:</span> SPACE</div>
            <div><span style="font-weight: bold;">Camera:</span> C = Change View</div>
            <div><span style="font-weight: bold;">Pause:</span> P</div>
        `,document.body.appendChild(t),this.controlsReference=t}createCrashElements(){this.crashMessageElement=document.getElementById("crashMessage"),this.restartPromptElement=document.getElementById("restartPrompt");const t=document.getElementById("crash-container");if(!t||!this.crashMessageElement||!this.restartPromptElement){let e=t;e?e.style.display="none":(e=document.createElement("div"),e.id="crash-container",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="rgba(0,0,0,0.7)",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex="1000",e.style.display="none",document.body.appendChild(e));let n=this.crashMessageElement;n||(n=document.createElement("div"),n.id="crashMessage",n.style.color="red",n.style.fontFamily="Arial, sans-serif",n.style.fontSize="4em",n.style.fontWeight="bold",n.style.textTransform="uppercase",n.style.border="3px solid red",n.style.padding="20px 40px",n.style.borderRadius="10px",n.style.backgroundColor="black",n.style.textAlign="center",n.style.marginBottom="50px",n.textContent="CRASHED!",e.appendChild(n)),this.crashMessageElement=n;let s=this.restartPromptElement;s||(s=document.createElement("div"),s.id="restartPrompt",s.style.color="white",s.style.fontFamily="Arial, sans-serif",s.style.fontSize="1.5em",s.style.marginTop="20px",s.style.textAlign="center",s.textContent="Press any key to restart",s.style.display="none",e.appendChild(s)),this.restartPromptElement=s}else t.style.display="none",this.crashMessageElement.style.display="none",this.restartPromptElement.style.display="none";this.showControls()}showControls(){this.controlsReference&&(this.controlsReference.style.display="block")}update(t){this.speedElement&&(this.speedElement.textContent=`Speed: ${t.toFixed(1)}`,t<15?this.speedElement.style.color="#ff6666":t>45?this.speedElement.style.color="#66ffff":this.speedElement.style.color="white"),this.showControls()}updateScore(t){this.scoreElement&&(this.scoreElement.textContent=`Score: ${t.toLocaleString()}`)}updateSpaceNeedleHealth(t){const e=Math.max(0,Math.min(100,t));this.spaceNeedleHealthElement&&(this.spaceNeedleHealthElement.textContent=`Space Needle: ${e.toFixed(0)}%`),this.spaceNeedleHealthBarElement&&(this.spaceNeedleHealthBarElement.style.width=`${e}%`,e>60?this.spaceNeedleHealthBarElement.style.backgroundColor="#2ECC71":e>30?this.spaceNeedleHealthBarElement.style.backgroundColor="#F39C12":this.spaceNeedleHealthBarElement.style.backgroundColor="#E74C3C")}showGameOver(t){if(this.gameOverContainer){this.gameOverContainer.style.display="flex";const e=document.getElementById("game-over-score");e&&(e.textContent=`Final Score: ${t.toLocaleString()}`);const n=this.gameOverContainer.querySelector("div:last-child");n&&(n.style.cursor="pointer",n.addEventListener("click",()=>{window.location.reload()}))}}showVictory(t,e,n){if(this.victoryContainer){this.victoryContainer.style.display="flex";const s=document.getElementById("ufo-score"),a=document.getElementById("health-bonus"),o=document.getElementById("total-score");s&&(s.textContent=`UFOs Destroyed: ${t.toLocaleString()}`),a&&(a.textContent=`Space Needle Bonus: ${e.toLocaleString()}`),o&&(o.textContent=`TOTAL SCORE: ${n.toLocaleString()}`);const r=this.victoryContainer.querySelector("div:last-child");r&&(r.style.cursor="pointer",r.addEventListener("click",()=>{window.location.reload()}))}}showCrashScreen(t=!0){const e=document.getElementById("crash-container");e&&this.crashMessageElement&&(e.style.display="flex",this.crashMessageElement.style.display="block",t&&this.restartPromptElement?this.restartPromptElement.style.display="block":this.restartPromptElement&&(this.restartPromptElement.style.display="none"))}showRestartPrompt(){this.restartPromptElement&&(this.restartPromptElement.style.display="block")}hideCrashScreen(){const t=document.getElementById("crash-container");t&&(t.style.display="none"),this.crashMessageElement&&(this.crashMessageElement.style.display="none"),this.restartPromptElement&&(this.restartPromptElement.style.display="none")}}class FS{constructor(t="/audio/spaceman_showdown.mp3"){O(this,"audioContext",null);O(this,"backgroundMusicSource",null);O(this,"backgroundMusicBuffer",null);O(this,"backgroundMusicGain",null);O(this,"effectsGain",null);O(this,"soundBuffers",new Map);O(this,"isInitialized",!1);O(this,"defaultMusicVolume",.05);O(this,"defaultEffectsVolume",.8);O(this,"isMusicPlaying",!1);O(this,"areEffectsEnabled",!0);O(this,"musicPath");O(this,"refDistance",10);O(this,"rolloffFactor",1);O(this,"maxDistance",1e4);this.musicPath=t,console.log("AudioManager created")}async initialize(){if(!this.isInitialized)try{this.audioContext=new(window.AudioContext||window.webkitAudioContext),console.log("AudioContext created."),this.backgroundMusicGain=this.audioContext.createGain(),this.backgroundMusicGain.gain.value=this.defaultMusicVolume,this.backgroundMusicGain.connect(this.audioContext.destination),this.effectsGain=this.audioContext.createGain(),this.effectsGain.gain.value=this.areEffectsEnabled?this.defaultEffectsVolume:0,this.effectsGain.connect(this.audioContext.destination),await Promise.all([this.loadAudioBuffer(this.musicPath).then(t=>{this.backgroundMusicBuffer=t,console.log("Background music loaded.")}),this.loadSoundEffect("laserShoot","/audio/laser_shoot.mp3"),this.loadSoundEffect("ufoHit","/audio/loud-thud.mp3"),this.loadSoundEffect("ufoCrash","/audio/explosion.mp3")]),this.isInitialized=!0,console.log("AudioManager initialized successfully."),this.isMusicPlaying&&this.playBackgroundMusic()}catch(t){console.error("Error initializing AudioManager or loading audio:",t),this.isInitialized=!1,this.audioContext=null,this.backgroundMusicGain=null,this.effectsGain=null}}async loadAudioBuffer(t){if(!this.audioContext)throw new Error("AudioContext not initialized.");try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! status: ${e.status} for ${t}`);const n=await e.arrayBuffer();return await this.audioContext.decodeAudioData(n)}catch(e){throw console.error(`Failed to load or decode audio from ${t}:`,e),e}}async loadSoundEffect(t,e){try{const n=await this.loadAudioBuffer(e);this.soundBuffers.set(t,n),console.log(`Sound effect '${t}' loaded from ${e}`)}catch{console.error(`Could not load sound effect: ${t}`)}}playBackgroundMusic(){!this.audioContext||!this.backgroundMusicGain||!this.backgroundMusicBuffer||this.backgroundMusicSource||(this.backgroundMusicSource=this.audioContext.createBufferSource(),this.backgroundMusicSource.buffer=this.backgroundMusicBuffer,this.backgroundMusicSource.loop=!0,this.backgroundMusicSource.connect(this.backgroundMusicGain),this.backgroundMusicSource.start(),console.log("Background music started."),this.backgroundMusicSource.onended=()=>{this.backgroundMusicSource&&(this.backgroundMusicSource.disconnect(),this.backgroundMusicSource=null,console.log("Background music source ended and disconnected."))})}stopBackgroundMusic(){this.backgroundMusicSource&&(this.backgroundMusicSource.stop(),console.log("Background music stopped."))}setMusicVolume(t){this.backgroundMusicGain&&(t=Math.max(0,Math.min(1,t)),this.backgroundMusicGain.gain.setTargetAtTime(t,this.audioContext.currentTime,.01),console.log(`AudioManager: Music volume set to ${t}`))}setMusicEnabled(t){var e;if(console.log(`AudioManager: Setting music enabled state to: ${t}`),this.isMusicPlaying=t,!this.isInitialized||!this.audioContext){console.warn("AudioManager: Cannot change music state, not initialized yet.");return}t?!this.backgroundMusicSource&&this.backgroundMusicBuffer?this.playBackgroundMusic():this.audioContext.state==="suspended"?this.audioContext.resume().then(()=>{console.log("AudioContext resumed for music."),!this.backgroundMusicSource&&this.backgroundMusicBuffer&&this.playBackgroundMusic()}).catch(n=>console.error("Error resuming AudioContext:",n)):this.setMusicVolume(((e=this.backgroundMusicGain)==null?void 0:e.gain.value)??this.defaultMusicVolume):this.stopBackgroundMusic()}playSound(t,e=1){if(!this.audioContext||!this.effectsGain||!this.areEffectsEnabled)return;const n=this.soundBuffers.get(t);if(!n){console.warn(`Sound effect '${t}' not found or not loaded.`);return}this.audioContext.state==="suspended"&&this.audioContext.resume().catch(o=>console.error("Error resuming AudioContext for effect:",o));const s=this.audioContext.createBufferSource();s.buffer=n;const a=this.audioContext.createGain();a.gain.value=Math.max(0,Math.min(1,e)),s.connect(a),a.connect(this.effectsGain),s.start(),s.onended=()=>{s.disconnect(),a.disconnect()}}playPositionalSound(t,e,n=1){if(!this.audioContext||!this.effectsGain||!this.areEffectsEnabled)return;const s=this.soundBuffers.get(t);if(!s){console.warn(`Positional sound effect '${t}' not found or not loaded.`);return}this.audioContext.state==="suspended"&&this.audioContext.resume().catch(l=>console.error("Error resuming AudioContext for positional effect:",l));const a=this.audioContext.createBufferSource();a.buffer=s;const o=this.audioContext.createPanner();o.panningModel="HRTF",o.distanceModel="inverse",o.refDistance=this.refDistance,o.maxDistance=this.maxDistance,o.rolloffFactor=this.rolloffFactor,o.coneInnerAngle=360,o.coneOuterAngle=360,o.coneOuterGain=0,o.positionX.setValueAtTime(e.x,this.audioContext.currentTime),o.positionY.setValueAtTime(e.y,this.audioContext.currentTime),o.positionZ.setValueAtTime(e.z,this.audioContext.currentTime);const r=this.audioContext.createGain();r.gain.value=Math.max(0,n),a.connect(o),o.connect(r),r.connect(this.effectsGain),a.start(),a.onended=()=>{a.disconnect(),o.disconnect()}}playLaserShoot(){this.playSound("laserShoot",.7)}playUfoHit(t){this.playPositionalSound("ufoHit",t,2.5)}playUfoCrash(t){this.playPositionalSound("ufoCrash",t,2.5)}updateListenerPosition(t,e,n){if(!this.audioContext||!this.isInitialized)return;const s=this.audioContext.listener;s.positionX?(s.positionX.setValueAtTime(t.x,this.audioContext.currentTime),s.positionY.setValueAtTime(t.y,this.audioContext.currentTime),s.positionZ.setValueAtTime(t.z,this.audioContext.currentTime),s.forwardX.setValueAtTime(e.x,this.audioContext.currentTime),s.forwardY.setValueAtTime(e.y,this.audioContext.currentTime),s.forwardZ.setValueAtTime(e.z,this.audioContext.currentTime),s.upX.setValueAtTime(n.x,this.audioContext.currentTime),s.upY.setValueAtTime(n.y,this.audioContext.currentTime),s.upZ.setValueAtTime(n.z,this.audioContext.currentTime)):(s.setPosition(t.x,t.y,t.z),s.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}setEffectsVolume(t){this.effectsGain&&(t=Math.max(0,Math.min(1,t)),this.defaultEffectsVolume=t,this.areEffectsEnabled&&this.effectsGain.gain.setTargetAtTime(t,this.audioContext.currentTime,.01),console.log(`AudioManager: Effects volume set to ${t}`))}setSoundEffectsEnabled(t){if(console.log(`AudioManager: Setting sound effects enabled state to: ${t}`),this.areEffectsEnabled=t,!this.isInitialized||!this.effectsGain||!this.audioContext){console.warn("AudioManager: Cannot change effects state, not initialized yet.");return}const e=t?this.defaultEffectsVolume:0;this.effectsGain.gain.setTargetAtTime(e,this.audioContext.currentTime,.01),console.log(`AudioManager: Effects master gain set to ${e}`)}dispose(){console.log("Disposing AudioManager..."),this.audioContext&&(this.stopBackgroundMusic(),this.backgroundMusicGain&&(this.backgroundMusicGain.disconnect(),this.backgroundMusicGain=null),this.effectsGain&&(this.effectsGain.disconnect(),this.effectsGain=null),this.audioContext.close().then(()=>{console.log("AudioContext closed.")}).catch(t=>console.error("Error closing AudioContext:",t)),this.audioContext=null),this.backgroundMusicBuffer=null,this.soundBuffers.clear(),this.isInitialized=!1,this.isMusicPlaying=!1,console.log("AudioManager disposed.")}}const Qt=class Qt{constructor(t){O(this,"points");O(this,"geometry");O(this,"material");O(this,"particles",[]);O(this,"maxParticles",800);O(this,"lifespan");O(this,"timeElapsed",0);O(this,"positions");O(this,"colors");O(this,"sizes");this.lifespan=Qt.EXPLOSION_LIFESPAN,this.geometry=new Ue,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles);const e=Math.floor(this.maxParticles*Qt.STEM_PARTICLE_COUNT_RATIO);this.maxParticles-e;for(let n=0;n<this.maxParticles;n++){let s,a=t.clone(),o=Qt.EXPLOSION_LIFESPAN*(.7+Math.random()*.6),r=Qt.PARTICLE_START_SIZE*(.8+Math.random()*.4);n<e?s=new T((Math.random()-.5)*Qt.STEM_RADIUS*.2,Qt.STEM_SPEED*(.9+Math.random()*.2),(Math.random()-.5)*Qt.STEM_RADIUS*.2):(a.y+=Qt.CAP_CENTER_Y_OFFSET*Math.random()*.5,s=new T(Math.random()-.5,(Math.random()-.5)*.5,Math.random()-.5),s.normalize().multiplyScalar(Qt.CAP_SPEED*(.5+Math.random())),s.y=Math.abs(s.y)*.5+2);const l={position:a,velocity:s,lifespan:o,initialLifespan:o,size:r,initialSize:r,baseColor:Qt.START_COLOR_FIRE,targetColor:Qt.MID_COLOR_FIRE,index:n};this.particles.push(l),this.positions[n*3]=a.x,this.positions[n*3+1]=a.y,this.positions[n*3+2]=a.z,this.sizes[n]=r,this.colors[n*3]=l.baseColor.r,this.colors[n*3+1]=l.baseColor.g,this.colors[n*3+2]=l.baseColor.b}this.geometry.setAttribute("position",new Le(this.positions,3)),this.geometry.setAttribute("color",new Le(this.colors,3)),this.geometry.setAttribute("size",new Le(this.sizes,1)),this.material=new Yr({vertexColors:!0,transparent:!0,blending:va,sizeAttenuation:!0,depthWrite:!1}),this.points=new eh(this.geometry,this.material)}update(t){if(this.timeElapsed+=t,this.timeElapsed>=this.lifespan)return!1;this.timeElapsed/this.lifespan;for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];if(n.lifespan-=t,n.lifespan>0){n.position.addScaledVector(n.velocity,t),n.velocity.y-=1.5*t;const s=1-n.lifespan/n.initialLifespan,a=.3;s<a?n.size=ii.lerp(n.initialSize,Qt.PARTICLE_MID_SIZE,s/a):n.size=ii.lerp(Qt.PARTICLE_MID_SIZE,Qt.PARTICLE_END_SIZE,(s-a)/(1-a));const o=.5;let r;s<o?r=n.baseColor.clone().lerp(Qt.MID_COLOR_FIRE,s/o):r=Qt.MID_COLOR_FIRE.clone().lerp(Qt.END_COLOR_SMOKE,(s-o)/(1-o));const l=Math.max(0,Math.pow(1-s,.25));r.multiplyScalar(l),this.positions[n.index*3]=n.position.x,this.positions[n.index*3+1]=n.position.y,this.positions[n.index*3+2]=n.position.z,this.sizes[n.index]=Math.max(0,n.size),this.colors[n.index*3]=r.r,this.colors[n.index*3+1]=r.g,this.colors[n.index*3+2]=r.b}else this.sizes[n.index]!==0&&(this.sizes[n.index]=0,this.particles.splice(e,1))}return this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,!0}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()}};O(Qt,"EXPLOSION_LIFESPAN",4),O(Qt,"STEM_PARTICLE_COUNT_RATIO",.3),O(Qt,"STEM_HEIGHT",25),O(Qt,"STEM_RADIUS",3),O(Qt,"STEM_SPEED",15),O(Qt,"CAP_CENTER_Y_OFFSET",20),O(Qt,"CAP_RADIUS",25),O(Qt,"CAP_SPEED",35),O(Qt,"PARTICLE_START_SIZE",1),O(Qt,"PARTICLE_MID_SIZE",5),O(Qt,"PARTICLE_END_SIZE",.5),O(Qt,"START_COLOR_FIRE",new _t(16774558)),O(Qt,"MID_COLOR_FIRE",new _t(16733986)),O(Qt,"END_COLOR_SMOKE",new _t(2236962));let Fl=Qt;const Se=class Se{constructor(t){O(this,"points");O(this,"geometry");O(this,"material");O(this,"velocities",[]);O(this,"particleColors",[]);O(this,"particleSizes",[]);O(this,"lifespan");O(this,"timeElapsed",0);O(this,"scaleFactor",5);this.lifespan=Se.EXPLOSION_LIFESPAN,this.geometry=new Ue;const e=new Float32Array(Se.PARTICLE_COUNT*3),n=new Float32Array(Se.PARTICLE_COUNT*3),s=new Float32Array(Se.PARTICLE_COUNT);for(let a=0;a<Se.PARTICLE_COUNT;a++){e[a*3]=(Math.random()-.5)*10,e[a*3+1]=(Math.random()-.5)*10,e[a*3+2]=(Math.random()-.5)*10;const o=Math.floor(Math.random()*Se.RAINBOW_COLORS.length),r=Se.RAINBOW_COLORS[o].clone();r.r=Math.min(1,r.r*1.2),r.g=Math.min(1,r.g*1.2),r.b=Math.min(1,r.b*1.2),this.particleColors.push(r),n[a*3]=r.r,n[a*3+1]=r.g,n[a*3+2]=r.b;const l=Se.PARTICLE_SIZE_MIN+Math.random()*(Se.PARTICLE_SIZE_MAX-Se.PARTICLE_SIZE_MIN);this.particleSizes.push(l),s[a]=l;let h;if(Math.random()<.7){const c=Math.random()*Math.PI*2,u=Math.random()*Math.PI*.7;h=new T(Math.sin(u)*Math.cos(c),Math.cos(u)+Math.random()*.5,Math.sin(u)*Math.sin(c))}else{const c=Math.random()*Math.PI*10,u=.2+Math.random()*.8,d=.5+Math.random()*1.5;h=new T(Math.cos(c)*u,d,Math.sin(c)*u)}h.normalize().multiplyScalar(Se.EXPLOSION_SPEED*(.4+Math.random()*1.2)),this.velocities.push(h)}this.geometry.setAttribute("position",new Le(e,3)),this.geometry.setAttribute("color",new Le(n,3)),this.geometry.setAttribute("size",new Le(s,1)),this.material=new Yr({size:5,vertexColors:!0,transparent:!0,opacity:1,blending:va,sizeAttenuation:!0,depthWrite:!1}),this.material.sizeAttenuation=!0,this.points=new eh(this.geometry,this.material),this.points.position.copy(t)}update(t){if(this.timeElapsed+=t,this.timeElapsed>=this.lifespan)return!1;const e=this.geometry.attributes.position,n=this.geometry.attributes.color,s=this.geometry.attributes.size,a=this.timeElapsed/this.lifespan,o=new T(0,-12*this.scaleFactor,0),r=this.timeElapsed*2,l=2*this.scaleFactor,h=new T(Math.sin(r)*l,0,Math.cos(r)*l*.5);for(let c=0;c<Se.PARTICLE_COUNT;c++){const u=this.velocities[c],d=o.clone().multiplyScalar(t*(.8+Math.random()*.4));u.add(d),this.particleSizes[c]<Se.PARTICLE_SIZE_MIN+2?u.add(h.clone().multiplyScalar(t*1.5)):u.add(h.clone().multiplyScalar(t*.8)),u.multiplyScalar(.99),e.setX(c,e.getX(c)+u.x*t),e.setY(c,e.getY(c)+u.y*t),e.setZ(c,e.getZ(c)+u.z*t);let f;const g=this.particleColors[c];if(a<.4){const _=1+(.4-a)*1.5;f=g.clone().multiplyScalar(_)}else if(a<.8)f=g.clone();else{const _=(a-.8)/.2;f=g.clone().lerp(new _t(1,1,1),_);let m=s.getX(c);m*=1-(a-.8)*2,s.setX(c,Math.max(.1,m))}n.setXYZ(c,f.r,f.g,f.b),Math.random()>.9&&n.setXYZ(c,1,1,1)}return e.needsUpdate=!0,n.needsUpdate=!0,s.needsUpdate=!0,a>.8&&(this.material.opacity=1-(a-.8)/.2),!0}dispose(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()}};O(Se,"PARTICLE_COUNT",500),O(Se,"EXPLOSION_SPEED",45*5),O(Se,"EXPLOSION_LIFESPAN",2.5),O(Se,"PARTICLE_SIZE_MIN",4),O(Se,"PARTICLE_SIZE_MAX",10),O(Se,"RAINBOW_COLORS",[new _t(16711680),new _t(16719872),new _t(16728064),new _t(16744192),new _t(16755200),new _t(16776960),new _t(11206400),new _t(65280),new _t(65450),new _t(65535),new _t(43775),new _t(35071),new _t(255),new _t(4915330),new _t(7799039),new _t(9699539),new _t(16711935),new _t(16711850),new _t(16711765)]);let Bl=Se;const Zc={latitude:47.623,longitude:-122.349},ct={baseRadius:30,baseHeight:8,numLegs:3,legRadius:6,legHeight:230,legAngleOffset:0,legDistance:22,bracingLevels:3,bracingThickness:3,shaftRadius:14,shaftHeight:20,shaftTaper:.85,deckLowerRadius:42,deckUpperRadius:48,deckHeight:25,deckEdgeThickness:6,restaurantRadius:30,restaurantHeight:12,spireBottomRadius:4,spireTopRadius:1,spireHeight:55},Ui={base:4473924,legs:16776688,bracing:16775920,shaft:16776688,deckEdge:16729088,deckBody:16776688,deckWindows:2263244,restaurant:16776688,spire:16776688};class fh{constructor(t){O(this,"mesh");O(this,"_health",100);O(this,"initialPosition");this.mesh=t,this.initialPosition=t.position.clone()}getHealth(){return this._health}takeDamage(t=.5){if(this._health=Math.max(0,this._health-t),this._health<=75&&this._health>74.5)console.log("Space Needle at 75% health!");else if(this._health<=50&&this._health>49.5)console.log("Space Needle at 50% health!");else if(this._health<=25&&this._health>24.5)console.log("Space Needle at 25% health!");else if(this._health<=0)return console.log("Space Needle destroyed!"),!0;return!1}}function BS(){const i=new Ve,t=new Te(ct.baseRadius,ct.baseRadius*1.1,ct.baseHeight,32),e=new de({color:Ui.base,roughness:.6,metalness:.2}),n=new Ct(t,e);n.position.y=ct.baseHeight/2,n.castShadow=!0,n.receiveShadow=!0,i.add(n);const s=new Ve;for(let L=0;L<ct.numLegs;L++){const z=L/ct.numLegs*Math.PI*2+ct.legAngleOffset,B=new jr(new T(Math.cos(z)*ct.legDistance,ct.baseHeight,Math.sin(z)*ct.legDistance),new T(Math.cos(z)*ct.legDistance*1.3,ct.legHeight*.3,Math.sin(z)*ct.legDistance*1.3),new T(Math.cos(z)*ct.legDistance*.8,ct.legHeight*.7,Math.sin(z)*ct.legDistance*.8),new T(0,ct.baseHeight+ct.legHeight,0)),H=new Bs(B,32,ct.legRadius,12,!1),q=new de({color:Ui.legs,roughness:.3,metalness:.5,emissive:16776688,emissiveIntensity:.15}),W=new Ct(H,q);W.castShadow=!0,W.receiveShadow=!0,s.add(W)}for(let L=1;L<=ct.bracingLevels;L++){const z=ct.legHeight*L/(ct.bracingLevels+1),B=ct.legDistance*(1-L/(ct.bracingLevels+1)*.7);for(let H=0;H<ct.numLegs;H++){const q=H/ct.numLegs*Math.PI*2+ct.legAngleOffset,W=(H+1)/ct.numLegs*Math.PI*2+ct.legAngleOffset,K=new T(Math.cos(q)*B,ct.baseHeight+z,Math.sin(q)*B),V=new T(Math.cos(W)*B,ct.baseHeight+z,Math.sin(W)*B),st=new Iu(K,V),mt=new Bs(st,8,ct.bracingThickness,8,!1),vt=new de({color:Ui.bracing,roughness:.4,metalness:.6,emissive:16775920,emissiveIntensity:.15}),zt=new Ct(mt,vt);zt.castShadow=!0,zt.receiveShadow=!0,s.add(zt)}}i.add(s);const a=ct.baseHeight+ct.legHeight,o=new Te(ct.shaftRadius*ct.shaftTaper,ct.shaftRadius,ct.shaftHeight,24),r=new de({color:Ui.shaft,roughness:.3,metalness:.6,emissive:16776688,emissiveIntensity:.15}),l=new Ct(o,r);l.position.y=a+ct.shaftHeight/2,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const h=a+ct.shaftHeight,c=new Ve;c.position.y=h;const u=[];u.push(new tt(ct.shaftRadius*.9,0)),u.push(new tt(ct.deckLowerRadius*.7,2)),u.push(new tt(ct.deckLowerRadius,4)),u.push(new tt(ct.deckUpperRadius,ct.deckHeight*.4)),u.push(new tt(ct.deckUpperRadius*.97,ct.deckHeight*.7)),u.push(new tt(ct.deckUpperRadius*.85,ct.deckHeight*.9)),u.push(new tt(ct.restaurantRadius,ct.deckHeight)),u.push(new tt(ct.shaftRadius*.95,ct.deckHeight)),u.push(new tt(ct.shaftRadius*.9,0));const d=new Ua(u,48,0,2*Math.PI),f=new de({color:Ui.deckBody,roughness:.2,metalness:.7,emissive:16776688,emissiveIntensity:.15}),g=new Ct(d,f);g.castShadow=!0,g.receiveShadow=!0,c.add(g);const _=new Vs(ct.deckUpperRadius,ct.deckEdgeThickness,16,96),m=new de({color:Ui.deckEdge,roughness:.3,metalness:.5,emissive:16729088,emissiveIntensity:.5}),p=new Ct(_,m);p.position.y=ct.deckHeight*.4,p.rotation.x=Math.PI/2,p.castShadow=!0,p.receiveShadow=!0,c.add(p);const b=new Te(ct.deckUpperRadius*1.02,ct.deckUpperRadius*1.02,ct.deckHeight*.5,48,1,!0),S=new Nu({color:Ui.deckWindows,roughness:.05,metalness:.1,transparent:!0,opacity:.8,transmission:.5,ior:1.5,emissive:Ui.deckWindows,emissiveIntensity:.2}),v=new Ct(b,S);v.position.y=ct.deckHeight*.45,v.castShadow=!1,v.receiveShadow=!0,c.add(v);const R=new Te(ct.restaurantRadius,ct.restaurantRadius,ct.restaurantHeight,32),w=new de({color:Ui.restaurant,roughness:.2,metalness:.7,emissive:16776688,emissiveIntensity:.15}),C=new Ct(R,w);C.position.y=ct.deckHeight+ct.restaurantHeight/2,C.castShadow=!0,C.receiveShadow=!0,c.add(C);const P=new Te(ct.spireTopRadius,ct.spireBottomRadius,ct.spireHeight,16),E=new de({color:Ui.spire,roughness:.1,metalness:.9,emissive:16776688,emissiveIntensity:.15}),x=new Ct(P,E);return x.position.y=ct.deckHeight+ct.restaurantHeight+ct.spireHeight/2,x.castShadow=!0,x.receiveShadow=!0,c.add(x),i.add(c),i}function zS(i){console.log("Adding improved architectural Space Needle (Version 1) to scene");const t=BS(),[e,n]=Di(Zc.longitude,Zc.latitude);console.log(`Space Needle positioned at game coordinates: (${e}, ${n})`);const s=Ga(e,n);return console.log(`Terrain elevation at Space Needle: ${s}`),t.position.set(e,s+2,n),i.add(t),new fh(t)}const Kc={latitude:47.623,longitude:-122.349},wt={baseRadius:25,baseHeight:10,numLegs:3,legRadius:8,legHeight:120,legAngleOffset:0,legDistanceFromCenter:20,legCurveStrength:2.2,shaftBottomRadius:18,shaftTopRadius:15,shaftHeight:130,deckLowerRadius:20,deckUpperRadius:85,deckHeight:30,deckThickness:10,spireHeight:70,spireBottomRadius:6,spireTopRadius:2},fn={base:4473924,legs:16777215,shaft:16119285,deckEdge:16724736,deckBody:16777215,deckWindows:43775,spire:15790320};function kS(){const i=new Ve,t=new Te(wt.baseRadius,wt.baseRadius*1.2,wt.baseHeight,32),e=new de({color:fn.base,roughness:.7,metalness:.3}),n=new Ct(t,e);n.position.y=wt.baseHeight/2,n.castShadow=!0,n.receiveShadow=!0,i.add(n);const s=new Ve;for(let P=0;P<wt.numLegs;P++){const E=P/wt.numLegs*Math.PI*2+wt.legAngleOffset,x=new jr(new T(Math.cos(E)*wt.legDistanceFromCenter,wt.baseHeight,Math.sin(E)*wt.legDistanceFromCenter),new T(Math.cos(E)*wt.legDistanceFromCenter*wt.legCurveStrength,wt.legHeight*.25,Math.sin(E)*wt.legDistanceFromCenter*wt.legCurveStrength),new T(Math.cos(E)*wt.legDistanceFromCenter*.5,wt.legHeight*.75,Math.sin(E)*wt.legDistanceFromCenter*.5),new T(0,wt.baseHeight+wt.legHeight,0)),L=new Bs(x,32,wt.legRadius,12,!1),z=new de({color:fn.legs,roughness:.2,metalness:.7,emissive:14540253,emissiveIntensity:.2}),B=new Ct(L,z);B.castShadow=!0,B.receiveShadow=!0,s.add(B)}i.add(s);const a=wt.baseHeight+wt.legHeight,o=new Te(wt.shaftTopRadius,wt.shaftBottomRadius,wt.shaftHeight,24),r=new de({color:fn.shaft,roughness:.2,metalness:.6,emissive:14540253,emissiveIntensity:.1}),l=new Ct(o,r);l.position.y=a+wt.shaftHeight/2,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const h=new Ve,c=a+wt.shaftHeight;h.position.y=c;const u=[];u.push(new tt(wt.shaftTopRadius*.95,0)),u.push(new tt(wt.deckLowerRadius,wt.deckHeight*.05)),u.push(new tt(wt.deckUpperRadius*.7,wt.deckHeight*.2)),u.push(new tt(wt.deckUpperRadius*.9,wt.deckHeight*.3)),u.push(new tt(wt.deckUpperRadius,wt.deckHeight*.5)),u.push(new tt(wt.deckUpperRadius*.85,wt.deckHeight*.7)),u.push(new tt(wt.deckUpperRadius*.6,wt.deckHeight*.9)),u.push(new tt(wt.deckUpperRadius*.4,wt.deckHeight)),u.push(new tt(wt.shaftTopRadius*.95,wt.deckHeight)),u.push(new tt(wt.shaftTopRadius*.95,0));const d=new Ua(u,32,0,2*Math.PI),f=new de({color:fn.deckBody,roughness:.3,metalness:.5}),g=new Ct(d,f);g.castShadow=!0,g.receiveShadow=!0,h.add(g);const _=new Vs(wt.deckUpperRadius,wt.deckThickness,16,96),m=new de({color:fn.deckEdge,roughness:.3,metalness:.6,emissive:16720384,emissiveIntensity:.4}),p=new Ct(_,m);p.position.y=wt.deckHeight*.5,p.rotation.x=Math.PI/2,p.castShadow=!0,p.receiveShadow=!0,h.add(p);const b=new Te(wt.deckUpperRadius*1.02,wt.deckUpperRadius*1.02,wt.deckHeight*.4,48,1,!0),S=new Nu({color:fn.deckWindows,roughness:.1,metalness:.2,transparent:!0,opacity:.8,transmission:.3,emissive:fn.deckWindows,emissiveIntensity:.8}),v=new Ct(b,S);v.position.y=wt.deckHeight*.5,v.castShadow=!1,v.receiveShadow=!0,h.add(v);const R=new Te(wt.spireTopRadius,wt.spireBottomRadius,wt.spireHeight,16),w=new de({color:fn.spire,roughness:.1,metalness:.8,emissive:16777215,emissiveIntensity:.2}),C=new Ct(R,w);return C.position.y=wt.deckHeight+wt.spireHeight/2,C.castShadow=!0,C.receiveShadow=!0,h.add(C),i.add(h),i}function GS(i){console.log("Adding improved stylized Space Needle (Version 2) to scene");const t=kS(),[e,n]=Di(Kc.longitude,Kc.latitude);console.log(`Space Needle positioned at game coordinates: (${e}, ${n})`);const s=Ga(e,n);return console.log(`Terrain elevation at Space Needle: ${s}`),t.position.set(e,s+2,n),i.add(t),new fh(t)}const Jc={latitude:47.623,longitude:-122.349},Nt={baseRadius:20,baseHeight:5,numLegs:3,legWidth:8,legHeight:95,legOutwardFactor:2.5,shaftBottomRadius:15,shaftTopRadius:12,shaftHeight:140,deckRadius:70,deckHeight:20,spireHeight:50,spireRadius:5},pn={base:10066329,legs:16777215,shaft:16777215,deck:16729088,deckTop:16737792,deckWindows:43775,spire:16777215};function HS(){const i=new Ve,t=new Te(Nt.baseRadius,Nt.baseRadius*1.2,Nt.baseHeight,24),e=new de({color:pn.base,roughness:.5,metalness:.5}),n=new Ct(t,e);n.position.y=Nt.baseHeight/2,n.castShadow=!0,n.receiveShadow=!0,i.add(n);const s=new Ve;for(let C=0;C<Nt.numLegs;C++){const P=C/Nt.numLegs*Math.PI*2,E=new jr(new T(Math.cos(P)*Nt.baseRadius,0,Math.sin(P)*Nt.baseRadius),new T(Math.cos(P)*Nt.baseRadius*Nt.legOutwardFactor,Nt.legHeight*.3,Math.sin(P)*Nt.baseRadius*Nt.legOutwardFactor),new T(Math.cos(P)*Nt.baseRadius*.7,Nt.legHeight*.8,Math.sin(P)*Nt.baseRadius*.7),new T(0,Nt.legHeight,0)),x=new Bs(E,24,Nt.legWidth/2,8,!1),L=new de({color:pn.legs,roughness:.3,metalness:.7,emissive:13421772,emissiveIntensity:.1}),z=new Ct(x,L);z.castShadow=!0,z.receiveShadow=!0,s.add(z)}i.add(s);const a=new Te(Nt.shaftTopRadius,Nt.shaftBottomRadius,Nt.shaftHeight,20),o=new de({color:pn.shaft,roughness:.3,metalness:.7,emissive:13421772,emissiveIntensity:.1}),r=new Ct(a,o);r.position.y=Nt.baseHeight+Nt.legHeight+Nt.shaftHeight/2,r.castShadow=!0,r.receiveShadow=!0,i.add(r);const l=new Ve,h=Nt.baseHeight+Nt.legHeight+Nt.shaftHeight,c=[];c.push(new tt(Nt.deckRadius*.8,0)),c.push(new tt(Nt.deckRadius*1,Nt.deckHeight*.2)),c.push(new tt(Nt.deckRadius*1.1,Nt.deckHeight*.5)),c.push(new tt(Nt.deckRadius*.9,Nt.deckHeight*.8)),c.push(new tt(Nt.deckRadius*.5,Nt.deckHeight)),c.push(new tt(0,Nt.deckHeight)),c.push(new tt(0,0));const u=new Ua(c,32,0,2*Math.PI),d=new de({color:pn.deck,roughness:.2,metalness:.6,emissive:16720384,emissiveIntensity:.4}),f=new Ct(u,d);f.position.y=h,f.castShadow=!0,f.receiveShadow=!0,l.add(f);const g=new Te(Nt.deckRadius*1.09,Nt.deckRadius*1.09,Nt.deckHeight*.3,32),_=new de({color:pn.deckWindows,roughness:.1,metalness:.3,transparent:!0,opacity:.9,emissive:pn.deckWindows,emissiveIntensity:.7}),m=new Ct(g,_);m.position.y=h+Nt.deckHeight*.5,m.castShadow=!1,m.receiveShadow=!0,l.add(m);const p=new Vs(Nt.deckRadius*.5,3,8,32),b=new de({color:pn.deckTop,roughness:.3,metalness:.7,emissive:16729088,emissiveIntensity:.3}),S=new Ct(p,b);S.position.y=h+Nt.deckHeight,S.rotation.x=Math.PI/2,S.castShadow=!0,S.receiveShadow=!0,l.add(S);const v=new nh(Nt.spireRadius,Nt.spireHeight,12),R=new de({color:pn.spire,roughness:.1,metalness:.9,emissive:16777215,emissiveIntensity:.3}),w=new Ct(v,R);return w.position.y=h+Nt.deckHeight+Nt.spireHeight/2,w.castShadow=!0,w.receiveShadow=!0,l.add(w),i.add(l),i}function VS(i){console.log("Adding improved minimalist Space Needle (Version 3) to scene");const t=HS(),[e,n]=Di(Jc.longitude,Jc.latitude);console.log(`Space Needle positioned at game coordinates: (${e}, ${n})`);const s=Ga(e,n);return console.log(`Terrain elevation at Space Needle: ${s}`),t.position.set(e,s+2,n),i.add(t),new fh(t)}const ph=new URLSearchParams(window.location.search),Is=ph.get("mode")||"game",zl=Is==="layout",mh=ph.get("needle")||"1",fd=ph.get("quickstart")==="true";console.log(`Running in ${zl?"layout design":"game"} mode with URL mode parameter: "${Is}"`);console.log(`Using Space Needle version: ${mh}`);console.log(`Quick start mode: ${fd?"enabled":"disabled"}`);const ko=[0,1e3,1e3],WS=60,Qc={latitude:47.623,longitude:-122.349},[tu,eu]=Di(Qc.longitude,Qc.latitude),Re=new ip;Re.background=new _t(8900331);let Ee=new ui(WS,window.innerWidth/window.innerHeight,.1,1e4);const Cn=new fv({antialias:!0});Cn.setSize(window.innerWidth,window.innerHeight);Cn.setPixelRatio(window.devicePixelRatio);Cn.shadowMap.enabled=!0;document.body.appendChild(Cn.domElement);Ee.position.set(ko[0],ko[1],ko[2]);const Pa=new Vu(Ee,Cn.domElement);Pa.enableDamping=!0;Pa.dampingFactor=.05;const Bn=new DS;let Ji=null,Mn=null,qn=null,Yt=new FS("/audio/spaceman_showdown.mp3"),ta=[],vn=[],iu=0;const XS=.3;let kn=!1,Bi=!0,di=!1,yi=!1,vi=!0,ci=!1;const nu=new Cp;let Go=0,Pi=null,Gs=0,pd=0,su=0,ts="playing";qS();$S();YS();let Ze=null,kl=()=>{};window.addEventListener("keydown",i=>{(ts==="won"||ts==="lost")&&(i.key==="r"||i.key==="R")&&(console.log("Restart key pressed, reloading game..."),window.location.reload())});document.addEventListener("DOMContentLoaded",()=>{console.log("DOM content loaded event fired - initializing UI and starting animation");const i=document.getElementById("start-modal"),t=document.getElementById("sound-toggle"),e=document.getElementById("music-toggle"),n=document.getElementById("pause-modal"),s=document.getElementById("pause-sound-toggle"),a=document.getElementById("pause-music-toggle"),o=document.getElementById("about-modal"),r=document.getElementById("hamburger-menu"),l=document.getElementById("about-close-button"),h=document.getElementById("pause-about-button"),c=document.getElementById("pause-share-button"),u=document.getElementById("about-share-button");if(!i||!t||!e||!n||!s||!a||!o||!r||!l||!h||!c||!u)console.error("One or more required modal/button elements not found!"),Bi=!1,di=!1,kn=!0;else{vi=t.checked,ci=e.checked,console.log(`Initial settings: Sound FX = ${vi}, Music = ${ci}`);const d=async f=>{if(!kn){console.log("User interaction detected (keydown), attempting to start game and initialize audio...");try{await(Yt==null?void 0:Yt.initialize()),console.log("AudioManager initialized after user interaction."),Yt==null||Yt.setSoundEffectsEnabled(vi),Yt==null||Yt.setMusicEnabled(ci),console.log(`Initial audio settings applied: Sound FX = ${vi}, Music = ${ci}`)}catch(g){console.error("Failed to initialize AudioManager:",g)}console.log("Hiding start modal and unpausing game..."),i.style.display="none",di=!1,kn=!0,$n(),console.log("Removing start game event listener."),window.removeEventListener("keydown",d),console.log("Game started.")}};window.addEventListener("keydown",d),t.addEventListener("change",()=>{vi=t.checked,console.log("Start modal - Sound FX toggled:",vi),kn&&Yt&&Yt.setSoundEffectsEnabled(vi)}),e.addEventListener("change",()=>{ci=e.checked,console.log("Start modal - Music toggled:",ci),kn&&Yt&&Yt.setMusicEnabled(ci)}),s.addEventListener("change",()=>{vi=s.checked,console.log("Pause modal - Sound FX toggled:",vi),Yt==null||Yt.setSoundEffectsEnabled(vi)}),a.addEventListener("change",()=>{ci=a.checked,console.log("Pause modal - Music toggled:",ci),Yt==null||Yt.setMusicEnabled(ci)}),r.addEventListener("click",()=>{console.log("Hamburger menu clicked, opening About modal..."),au()}),l.addEventListener("click",()=>{console.log("About modal close button clicked..."),Ir()}),h.addEventListener("click",()=>{console.log("Pause modal 'About Game' button clicked..."),au()}),c.addEventListener("click",()=>{console.log("Pause modal 'Share Game' button clicked..."),ru()}),u.addEventListener("click",()=>{console.log("About modal 'Share Game' button clicked..."),ru()})}if(Ze=new OS,console.log("UI initialized: ",Ze?"success":"failed"),window.addEventListener("resize",KS),Gl(),console.log("Animation loop started"),Ze.updateScore(Gs),Pi&&Ze.updateSpaceNeedleHealth(Pi.getHealth()),fd){console.log("Quick start mode enabled, automatically starting game"),kn=!0,Bi=!1,di=!1;const d=document.getElementById("start-modal");d&&(d.style.display="none"),Yt==null||Yt.initialize().catch(f=>{console.error("Failed to initialize audio in quick start mode:",f)})}});function qS(){const i=new wp(16777215,1.5);i.position.set(500,1e3,500),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=5e3,i.shadow.bias=-1e-4;const t=2e3;i.shadow.camera.left=-2e3,i.shadow.camera.right=t,i.shadow.camera.top=t,i.shadow.camera.bottom=-2e3,Re.add(i);const e=new Tp(5592405);Re.add(e);const n=new Sp(11184895,8413248,.6);Re.add(n),console.log("Scene lighting configured")}function $S(){Ee.position.set(1500,500,2e3),Ee.lookAt(new T(0,0,0)),Is==="layout"?(console.log("Layout mode: Using top-down camera"),Ee.position.set(0,1e3,0),Ee.lookAt(new T(0,0,0))):Is==="terrain"?(console.log("Terrain mode: Using terrain-focused camera"),Ee.position.set(2e3,400,2e3),Ee.lookAt(new T(0,10,0))):Is==="battle"&&(console.log("Battle mode: Using action camera"),Ee.position.set(-1e3,200,1e3),Ee.lookAt(new T(0,20,0))),Pa.update(),console.log(`Camera positioned at (${Ee.position.x}, ${Ee.position.y}, ${Ee.position.z})`)}async function YS(){console.log("Starting to load Seattle terrain and environment..."),console.log(`Current mode: ${Is}, isLayoutMode: ${zl}`);try{console.log("Adding camera to scene and loading terrain..."),Re.add(Ee),await AS(Re),console.log("Seattle terrain loaded successfully"),console.log("Creating city buildings..."),await LS(Re),console.log("City created using original system"),console.log(`Adding Space Needle version ${mh} to scene...`),Pi=ZS(Re),console.log("Space Needle added to the scene");const i=Pi.mesh.position.y;if(console.log(`Terrain elevation at Space Needle position: ${i}`),zl)console.log("Layout mode active - skipping player and UFO initialization");else{console.log("Initializing player plane in game mode..."),Ji=new RS,Re.add(Ji.mesh);const t=i+200,e=500,n=new T(tu-e,t,eu-e),s=new T(tu-n.x,0,eu-n.z).normalize(),a=-Math.PI/4,o=new T(s.x*Math.cos(a)-s.z*Math.sin(a),0,s.x*Math.sin(a)+s.z*Math.cos(a)).normalize(),r=new Hi,l=new T(0,0,-1);r.setFromUnitVectors(l,o),Ji.setInitialState(n,r),console.log(`Player plane positioned at (${n.x}, ${n.y}, ${n.z})`),console.log("Player plane created and rotated clockwise 45° to provide a clear view of the Space Needle"),console.log("Initializing physics engine..."),Mn=new NS(Ji.mesh),console.log("Setting up camera controller to follow plane..."),qn=new US(Ee,Cn.domElement),qn.setTarget(Ji.mesh),qn.setCameraMode("follow"),console.log("Creating UFOs..."),vn=IS(Re,10,Pi),pd=vn.length,console.log(`Created ${vn.length} UFOs`),console.log("Game initialization complete - ready to play!")}}catch(i){console.error("Failed to load terrain and environment:",i),jS()}}function jS(){console.error("❌ USING EMERGENCY FALLBACK PLANE - TERRAIN LOADING FAILED");const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d");t&&(t.fillStyle="red",t.fillRect(0,0,i.width,i.height),t.fillStyle="white",t.font="48px Arial",t.textAlign="center",t.fillText("ERROR: TERRAIN LOADING FAILED",i.width/2,i.height/2-100),t.fillText("USING FALLBACK PLANE",i.width/2,i.height/2),t.font="24px Arial",t.fillText("Check console for details",i.width/2,i.height/2+100));const e=new Ru(i),n=new Kn(5e3,5e3);n.rotateX(-Math.PI/2);const s=new de({map:e,color:16711680,metalness:.1,roughness:.7}),a=new Ct(n,s);a.receiveShadow=!0,Re.add(a);const o=new Kn(1e4,1e4);o.rotateX(-Math.PI/2);const r=new de({color:17578,metalness:.3,roughness:.2,transparent:!0,opacity:.8}),l=new Ct(o,r);l.position.y=-5,Re.add(l);const h=new ni(200,200,200),c=new de({color:16711680,emissive:16711680,emissiveIntensity:.5}),u=new Ct(h,c);u.position.set(0,100,0),Re.add(u),console.error("⚠️ Fallback terrain added - game will not function correctly")}function ZS(i){let t;switch(mh){case"1":t=zS(i);break;case"2":t=GS(i);break;case"3":default:t=VS(i);break}return t}function KS(){Ee.aspect=window.innerWidth/window.innerHeight,Ee.updateProjectionMatrix(),Cn.setSize(window.innerWidth,window.innerHeight)}function Gl(){Go++,Go%300===0&&console.log(`Animation frame: ${Go} - Game state: ${ts}, Paused: ${Bi}`);const i=nu.getDelta();if(Cn.render(Re,Ee),Bn.update(),document.getElementById("pause-modal"),document.getElementById("pause-sound-toggle"),document.getElementById("pause-music-toggle"),$n(),kl=t=>{if(t.key==="Escape"){yi?Ir():di&&(di=!1,$n());return}if(t.key==="p"||t.key==="P"){yi?Ir():di&&(di=!1,$n());return}Bi&&!yi&&(t.key==="r"||t.key==="R")&&window.location.reload()},kn&&Bn.didTogglePause()&&(yi?Ir():(di=!di,$n())),Bi){Pa.update(),requestAnimationFrame(Gl);return}if(Pa.update(),qn==null||qn.update(i),Yt&&qn){const t=new T;Ee.getWorldPosition(t);const e=new T;Ee.getWorldDirection(e);const n=new T().copy(Ee.up);Yt.updateListenerPosition(t,e,n)}if(Ji&&Bn.didShoot()){const t=nu.elapsedTime;if(t-iu>XS){const e=Ji.shoot();Re.add(e.mesh),ta.push(e),iu=t,Yt==null||Yt.playLaserShoot()}}if(Ji&&Mn){const t={pitch:Bn.pitch,roll:Bn.roll,accelerate:Bn.accelerate,decelerate:Bn.decelerate};Mn.update(t,i),Ji.update(i),Ze==null||Ze.update(Mn.getCurrentSpeed())}vn.forEach(t=>{t.update(i)});for(let t=ta.length-1;t>=0;t--){const e=ta[t];if(!e.update(i)){Re.remove(e.mesh),ta.splice(t,1);continue}for(let s=0;s<vn.length;s++){const a=vn[s];if(a.state!=="flying")continue;if(e.mesh.position.distanceTo(a.mesh.position)<25){a.hit(),Yt==null||Yt.playUfoHit(a.mesh.position.clone());const r=new Bl(a.mesh.position.clone());Re.add(r.points),Gs+=1e4,su++,su>=pd&&QS(),Ze&&Ze.updateScore(Gs),Re.remove(e.mesh),ta.splice(t,1);break}}}Pi&&Pi.getHealth()<=0&&JS(),Pi&&Ze&&Ze.updateSpaceNeedleHealth(Pi.getHealth());for(let t=vn.length-1;t>=0;t--){const e=vn[t];if(e.needsCrashEffect){Yt==null||Yt.playUfoCrash(e.mesh.position.clone());const n=new Fl(e.mesh.position.clone());Re.add(n.points),e.needsCrashEffect=!1}}requestAnimationFrame(Gl)}function au(){if(yi)return;const i=document.getElementById("about-modal");i?(yi=!0,i.style.display="flex",$n(),console.log("About modal opened.")):console.error("About modal element not found!")}function Ir(){if(!yi)return;const i=document.getElementById("about-modal");i?(yi=!1,i.style.display="none",$n(),console.log("About modal closed.")):console.error("About modal element not found!")}let xr=!1;function $n(){const i=document.getElementById("pause-modal"),t=document.getElementById("pause-sound-toggle"),e=document.getElementById("pause-music-toggle"),n=di||yi;n!==Bi?(console.log(`Pause state changing from ${Bi} to ${n} (UserPaused: ${di}, AboutOpen: ${yi})`),Bi=n,Bi?(Yt&&Yt.setMusicEnabled(!1),Mn&&Mn.setEnabled(!1),di&&!yi&&i&&t&&e?(t.checked=vi,e.checked=ci,i.style.display="flex"):i&&(i.style.display="none"),xr||(window.addEventListener("keydown",kl),xr=!0,console.log("Added pause key listener."))):(i&&(i.style.display="none"),Yt&&Yt.setMusicEnabled(ci),Mn&&Mn.setEnabled(!0),xr&&(window.removeEventListener("keydown",kl),xr=!1,console.log("Removed pause key listener.")))):Bi&&i&&(di&&!yi?i.style.display==="none"&&(t&&(t.checked=vi),e&&(e.checked=ci),i.style.display="flex"):i.style.display!=="none"&&(i.style.display="none"))}async function ru(){const i={title:"Seattle UFO Battle",text:"Help defend Seattle from UFOs in this retro flying game!",url:window.location.href};if(navigator.share)try{await navigator.share(i),console.log("Game shared successfully!")}catch(t){t instanceof Error&&t.name!=="AbortError"?console.error("Error sharing game:",t):(!(t instanceof Error)||t instanceof Error&&t.name==="AbortError")&&console.log("Share cancelled by user or non-standard error occurred.")}else console.warn("Web Share API not supported in this browser. Cannot share automatically.")}function JS(){ts==="playing"&&(console.log("Game Over! Space Needle has been destroyed."),ts="lost",Ze&&Ze.showGameOver(Gs))}function QS(){if(ts!=="playing")return;console.log("Victory! All UFOs have been destroyed."),ts="won";const i=Math.round(Pi?Pi.getHealth()*1e3:0),t=Gs+i;Ze&&Ze.showVictory(Gs,i,t)}});export default tE();
//# sourceMappingURL=index-DTrkSKB8.js.map
