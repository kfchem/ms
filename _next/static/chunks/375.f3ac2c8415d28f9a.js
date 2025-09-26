"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{1375:(e,t,r)=>{r.d(t,{USDZExporter:()=>V});var n=r(5339),a=Uint8Array,o=Uint16Array,i=Int32Array,s=new a([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l=new a([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),u=new a([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),f=function(e,t){for(var r=new o(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var a=new i(r[30]),n=1;n<30;++n)for(var s=r[n];s<r[n+1];++s)a[s]=s-r[n]<<5|n;return{b:r,r:a}},c=f(s,2),p=c.b,h=c.r;p[28]=258,h[258]=28;for(var m=f(l,0),d=(m.b,m.r),v=new o(32768),g=0;g<32768;++g){var $=(43690&g)>>1|(21845&g)<<1;$=(61680&($=(52428&$)>>2|(13107&$)<<2))>>4|(3855&$)<<4,v[g]=((65280&$)>>8|(255&$)<<8)>>1}for(var M=function(e,t,r){for(var n,a=e.length,i=0,s=new o(t);i<a;++i)e[i]&&++s[e[i]-1];var l=new o(t);for(i=1;i<t;++i)l[i]=l[i-1]+s[i-1]<<1;if(r){n=new o(1<<t);var u=15-t;for(i=0;i<a;++i)if(e[i])for(var f=i<<4|e[i],c=t-e[i],p=l[e[i]-1]++<<c,h=p|(1<<c)-1;p<=h;++p)n[v[p]>>u]=f}else for(i=0,n=new o(a);i<a;++i)e[i]&&(n[i]=v[l[e[i]-1]++]>>15-e[i]);return n},x=new a(288),g=0;g<144;++g)x[g]=8;for(var g=144;g<256;++g)x[g]=9;for(var g=256;g<280;++g)x[g]=7;for(var g=280;g<288;++g)x[g]=8;for(var w=new a(32),g=0;g<32;++g)w[g]=5;var y=M(x,9,0),_=M(w,5,0),b=function(e){return(e+7)/8|0},T=function(e,t,r){return(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length),new a(e.subarray(t,r))},S=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],k=function(e,t,r){var n=Error(t||S[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,k),!r)throw n;return n},E=function(e,t,r){r<<=7&t;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8},U=function(e,t,r){r<<=7&t;var n=t/8|0;e[n]|=r,e[n+1]|=r>>8,e[n+2]|=r>>16},P=function(e,t){for(var r=[],n=0;n<e.length;++n)e[n]&&r.push({s:n,f:e[n]});var i=r.length,s=r.slice();if(!i)return{t:j,l:0};if(1==i){var l=new a(r[0].s+1);return l[r[0].s]=1,{t:l,l:1}}r.sort(function(e,t){return e.f-t.f}),r.push({s:-1,f:25001});var u=r[0],f=r[1],c=0,p=1,h=2;for(r[0]={s:-1,f:u.f+f.f,l:u,r:f};p!=i-1;)u=r[r[c].f<r[h].f?c++:h++],f=r[c!=p&&r[c].f<r[h].f?c++:h++],r[p++]={s:-1,f:u.f+f.f,l:u,r:f};for(var m=s[0].s,n=1;n<i;++n)s[n].s>m&&(m=s[n].s);var d=new o(m+1),v=A(r[p-1],d,0);if(v>t){var n=0,g=0,$=v-t,M=1<<$;for(s.sort(function(e,t){return d[t.s]-d[e.s]||e.f-t.f});n<i;++n){var x=s[n].s;if(d[x]>t)g+=M-(1<<v-d[x]),d[x]=t;else break}for(g>>=$;g>0;){var w=s[n].s;d[w]<t?g-=1<<t-d[w]++-1:++n}for(;n>=0&&g;--n){var y=s[n].s;d[y]==t&&(--d[y],++g)}v=t}return{t:new a(d),l:v}},A=function(e,t,r){return -1==e.s?Math.max(A(e.l,t,r+1),A(e.r,t,r+1)):t[e.s]=r},C=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new o(++t),n=0,a=e[0],i=1,s=function(e){r[n++]=e},l=1;l<=t;++l)if(e[l]==a&&l!=t)++i;else{if(!a&&i>2){for(;i>138;i-=138)s(32754);i>2&&(s(i>10?i-11<<5|28690:i-3<<5|12305),i=0)}else if(i>3){for(s(a),--i;i>6;i-=6)s(8304);i>2&&(s(i-3<<5|8208),i=0)}for(;i--;)s(a);i=1,a=e[l]}return{c:r.subarray(0,n),n:t}},R=function(e,t){for(var r=0,n=0;n<t.length;++n)r+=e[n]*t[n];return r},D=function(e,t,r){var n=r.length,a=b(t+2);e[a]=255&n,e[a+1]=n>>8,e[a+2]=255^e[a],e[a+3]=255^e[a+1];for(var o=0;o<n;++o)e[a+o+4]=r[o];return(a+4+n)*8},O=function(e,t,r,n,a,i,f,c,p,h,m){E(t,m++,r),++a[256];for(var d,v,g,$,b=P(a,15),T=b.t,S=b.l,k=P(i,15),A=k.t,O=k.l,I=C(T),j=I.c,Z=I.n,H=C(A),L=H.c,z=H.n,B=new o(19),F=0;F<j.length;++F)++B[31&j[F]];for(var F=0;F<L.length;++F)++B[31&L[F]];for(var W=P(B,7),G=W.t,N=W.l,Q=19;Q>4&&!G[u[Q-1]];--Q);var X=h+5<<3,Y=R(a,x)+R(i,w)+f,q=R(a,T)+R(i,A)+f+14+3*Q+R(B,G)+2*B[16]+3*B[17]+7*B[18];if(p>=0&&X<=Y&&X<=q)return D(t,m,e.subarray(p,p+h));if(E(t,m,1+(q<Y)),m+=2,q<Y){d=M(T,S,0),v=T,g=M(A,O,0),$=A;var V=M(G,N,0);E(t,m,Z-257),E(t,m+5,z-1),E(t,m+10,Q-4),m+=14;for(var F=0;F<Q;++F)E(t,m+3*F,G[u[F]]);m+=3*Q;for(var J=[j,L],K=0;K<2;++K)for(var ee=J[K],F=0;F<ee.length;++F){var et=31&ee[F];E(t,m,V[et]),m+=G[et],et>15&&(E(t,m,ee[F]>>5&127),m+=ee[F]>>12)}}else d=y,v=x,g=_,$=w;for(var F=0;F<c;++F){var er=n[F];if(er>255){var et=er>>18&31;U(t,m,d[et+257]),m+=v[et+257],et>7&&(E(t,m,er>>23&31),m+=s[et]);var en=31&er;U(t,m,g[en]),m+=$[en],en>3&&(U(t,m,er>>5&8191),m+=l[en])}else U(t,m,d[er]),m+=v[er]}return U(t,m,d[256]),m+v[256]},I=new i([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),j=new a(0),Z=function(e,t,r,n,u,f){var c=f.z||e.length,p=new a(n+c+5*(1+Math.ceil(c/7e3))+u),m=p.subarray(n,p.length-u),v=f.l,g=7&(f.r||0);if(t){g&&(m[0]=f.r>>3);for(var $=I[t-1],M=$>>13,x=8191&$,w=(1<<r)-1,y=f.p||new o(32768),_=f.h||new o(w+1),S=Math.ceil(r/3),k=2*S,E=function(t){return(e[t]^e[t+1]<<S^e[t+2]<<k)&w},U=new i(25e3),P=new o(288),A=new o(32),C=0,R=0,j=f.i||0,Z=0,H=f.w||0,L=0;j+2<c;++j){var z=E(j),B=32767&j,F=_[z];if(y[B]=F,_[z]=B,H<=j){var W=c-j;if((C>7e3||Z>24576)&&(W>423||!v)){g=O(e,m,0,U,P,A,R,Z,L,j-L,g),Z=C=R=0,L=j;for(var G=0;G<286;++G)P[G]=0;for(var G=0;G<30;++G)A[G]=0}var N=2,Q=0,X=x,Y=B-F&32767;if(W>2&&z==E(j-Y))for(var q=Math.min(M,W)-1,V=Math.min(32767,j),J=Math.min(258,W);Y<=V&&--X&&B!=F;){if(e[j+N]==e[j+N-Y]){for(var K=0;K<J&&e[j+K]==e[j+K-Y];++K);if(K>N){if(N=K,Q=Y,K>q)break;for(var ee=Math.min(Y,K-2),et=0,G=0;G<ee;++G){var er=j-Y+G&32767,en=y[er],ea=er-en&32767;ea>et&&(et=ea,F=er)}}}F=y[B=F],Y+=B-F&32767}if(Q){U[Z++]=0x10000000|h[N]<<18|d[Q];var eo=31&h[N],ei=31&d[Q];R+=s[eo]+l[ei],++P[257+eo],++A[ei],H=j+N,++C}else U[Z++]=e[j],++P[e[j]]}}for(j=Math.max(j,H);j<c;++j)U[Z++]=e[j],++P[e[j]];g=O(e,m,v,U,P,A,R,Z,L,j-L,g),v||(f.r=7&g|m[g/8|0]<<3,g-=7,f.h=_,f.p=y,f.i=j,f.w=H)}else{for(var j=f.w||0;j<c+v;j+=65535){var es=j+65535;es>=c&&(m[g/8|0]=v,es=c),g=D(m,g+1,e.subarray(j,es))}f.i=c}return T(p,0,n+b(g)+u)},H=function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var r=t,n=9;--n;)r=(1&r&&-0x12477ce0)^r>>>1;e[t]=r}return e}(),L=function(){var e=-1;return{p:function(t){for(var r=e,n=0;n<t.length;++n)r=H[255&r^t[n]]^r>>>8;e=r},d:function(){return~e}}},z=function(e,t,r,n,o){if(!o&&(o={l:1},t.dictionary)){var i=t.dictionary.subarray(-32768),s=new a(i.length+e.length);s.set(i),s.set(e,i.length),e=s,o.w=i.length}return Z(e,null==t.level?6:t.level,null==t.mem?o.l?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):20:12+t.mem,r,n,o)},B=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},F=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},W=function(e,t,r,n){for(var o in e){var i=e[o],s=t+o,l=n;Array.isArray(i)&&(l=B(n,i[1]),i=i[0]),i instanceof a?r[s]=[i,l]:(r[s+="/"]=[new a(0),l],W(i,s,r,n))}},G="undefined"!=typeof TextEncoder&&new TextEncoder,N="undefined"!=typeof TextDecoder&&new TextDecoder;try{N.decode(j,{stream:!0})}catch(e){}function Q(e,t){if(t){for(var r=new a(e.length),n=0;n<e.length;++n)r[n]=e.charCodeAt(n);return r}if(G)return G.encode(e);for(var o=e.length,i=new a(e.length+(e.length>>1)),s=0,l=function(e){i[s++]=e},n=0;n<o;++n){if(s+5>i.length){var u=new a(s+8+(o-n<<1));u.set(i),i=u}var f=e.charCodeAt(n);f<128||t?l(f):(f<2048?l(192|f>>6):(f>55295&&f<57344?(l(240|(f=65536+(1047552&f)|1023&e.charCodeAt(++n))>>18),l(128|f>>12&63)):l(224|f>>12),l(128|f>>6&63)),l(128|63&f))}return T(i,0,s)}var X=function(e){var t=0;if(e)for(var r in e){var n=e[r].length;n>65535&&k(9),t+=n+4}return t},Y=function(e,t,r,n,a,o,i,s){var l=n.length,u=r.extra,f=s&&s.length,c=X(u);F(e,t,null!=i?0x2014b50:0x4034b50),t+=4,null!=i&&(e[t++]=20,e[t++]=r.os),e[t]=20,t+=2,e[t++]=r.flag<<1|(o<0&&8),e[t++]=a&&8,e[t++]=255&r.compression,e[t++]=r.compression>>8;var p=new Date(null==r.mtime?Date.now():r.mtime),h=p.getFullYear()-1980;if((h<0||h>119)&&k(10),F(e,t,h<<25|p.getMonth()+1<<21|p.getDate()<<16|p.getHours()<<11|p.getMinutes()<<5|p.getSeconds()>>1),t+=4,-1!=o&&(F(e,t,r.crc),F(e,t+4,o<0?-o-2:o),F(e,t+8,r.size)),F(e,t+12,l),F(e,t+14,c),t+=16,null!=i&&(F(e,t,f),F(e,t+6,r.attrs),F(e,t+10,i),t+=14),e.set(n,t),t+=l,c)for(var m in u){var d=u[m],v=d.length;F(e,t,+m),F(e,t+2,v),e.set(d,t+4),t+=4+v}return f&&(e.set(s,t),t+=f),t},q=function(e,t,r,n,a){F(e,t,0x6054b50),F(e,t+8,r),F(e,t+10,r),F(e,t+12,n),F(e,t+16,a)};"function"==typeof queueMicrotask&&queueMicrotask;class V{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,r,n){this.parseAsync(e,n).then(t).catch(r)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let r={},o="model.usda";r[o]=null;let i=J();i+=function(e){let t=!0===e.includeAnchoringProperties?`
		token preliminary:anchoring:type = "${e.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"
	`:"";return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{${t}
`}(t);let s={},l={};for(let a in e.traverseVisible(e=>{if(e.isMesh){let n=e.geometry,a=e.material;if(a.isMeshStandardMaterial){let o="geometries/Geometry_"+n.id+".usda";if(!(o in r)){var t;let e,a=function(e){let t=function(e){var t;let r=e.attributes,n=r.position.count;return`
	def Mesh "Geometry"
	{
		int[] faceVertexCounts = [${Array((null!==(t=e).index?t.index.count:t.attributes.position.count)/3).fill(3).join(", ")}]
		int[] faceVertexIndices = [${function(e){let t=e.index,r=[];if(null!==t)for(let e=0;e<t.count;e++)r.push(t.getX(e));else{let t=e.attributes.position.count;for(let e=0;e<t;e++)r.push(e)}return r.join(", ")}(e)}]
		normal3f[] normals = [${et(r.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${et(r.position,n)}]
${function(e){let t="";for(let r=0;r<4;r++){let n=r>0?r:"",a=e["uv"+n];void 0!==a&&(t+=`
		texCoord2f[] primvars:st${n} = [${function(e){let t=[];for(let r=0;r<e.count;r++){let n=e.getX(r),a=e.getY(r);t.push(`(${n.toPrecision(7)}, ${1-a.toPrecision(7)})`)}return t.join(", ")}(a)}] (
			interpolation = "vertex"
		)`)}let r=e.color;if(void 0!==r){let e=r.count;t+=`
	color3f[] primvars:displayColor = [${et(r,e)}] (
		interpolation = "vertex"
		)`}return t}(r)}
		uniform token subdivisionScheme = "none"
	}
`}(e);return`
def "Geometry"
{
${t}
}
`}(n);r[o]=(t=a,Q(e=J()+t))}a.uuid in s||(s[a.uuid]=a),i+=function(e,t,r){let n="Object_"+e.id,a=K(e.matrixWorld);return 0>e.matrixWorld.determinant()&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",e),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${t.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${a}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${r.id}>
}

`}(e,n,a)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",e)}else e.isCamera&&(i+=function(e){let t=e.name?e.name:"Camera_"+e.id,r=K(e.matrixWorld);return(0>e.matrixWorld.determinant()&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",e),e.isOrthographicCamera)?`def Camera "${t}"
		{
			matrix4d xformOp:transform = ${r}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${e.near.toPrecision(7)}, ${e.far.toPrecision(7)})
			float horizontalAperture = ${((Math.abs(e.left)+Math.abs(e.right))*10).toPrecision(7)}
			float verticalAperture = ${((Math.abs(e.top)+Math.abs(e.bottom))*10).toPrecision(7)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${t}"
		{
			matrix4d xformOp:transform = ${r}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${e.near.toPrecision(7)}, ${e.far.toPrecision(7)})
			float focalLength = ${e.getFocalLength().toPrecision(7)}
			float focusDistance = ${e.focus.toPrecision(7)}
			float horizontalAperture = ${e.getFilmWidth().toPrecision(7)}
			token projection = "perspective"
			float verticalAperture = ${e.getFilmHeight().toPrecision(7)}
		}
	
	`}(e))}),i+=`
		}
	}
}

`,i+=function(e,t,r=!1){let a=[];for(let o in e){let i=e[o];a.push(function(e,t,r=!1){let a=[],o=[];function i(a,o,i){var s;let l=a.source.id+"_"+a.flipY;t[l]=a;let u=a.channel>0?"st"+a.channel:"st",f={1e3:"repeat",1001:"clamp",1002:"mirror"},c=a.repeat.clone(),p=a.offset.clone(),h=a.rotation,m=Math.sin(h),d=Math.cos(h);return p.y=1-p.y-c.y,r?(p.x=p.x/c.x,p.y=p.y/c.y,p.x+=m/c.x,p.y+=d-1):(p.x+=m*c.x,p.y+=(1-d)*c.y),`
		def Shader "PrimvarReader_${o}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${u}"
			float2 outputs:result
		}

		def Shader "Transform2d_${o}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${e.id}/PrimvarReader_${o}.outputs:result>
			float inputs:rotation = ${(180/Math.PI*h).toFixed(7)}
			float2 inputs:scale = ${en(c)}
			float2 inputs:translation = ${en(p)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${o}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${l}.png@
			float2 inputs:st.connect = </Materials/Material_${e.id}/Transform2d_${o}.outputs:result>
			${void 0!==i?"float4 inputs:scale = "+(s=i,`(${s.r}, ${s.g}, ${s.b}, 1.0)`):""}
			token inputs:sourceColorSpace = "${a.colorSpace===n.jf0?"raw":"sRGB"}"
			token inputs:wrapS = "${f[a.wrapS]}"
			token inputs:wrapT = "${f[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${e.transparent||e.alphaTest>0?"float outputs:a":""}
		}`}return e.side===n.$EB&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",e),null!==e.map?(a.push(`			color3f inputs:diffuseColor.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:rgb>`),e.transparent?a.push(`			float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`):e.alphaTest>0&&(a.push(`			float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`),a.push(`			float inputs:opacityThreshold = ${e.alphaTest}`)),o.push(i(e.map,"diffuse",e.color))):a.push(`			color3f inputs:diffuseColor = ${er(e.color)}`),null!==e.emissiveMap?(a.push(`			color3f inputs:emissiveColor.connect = </Materials/Material_${e.id}/Texture_${e.emissiveMap.id}_emissive.outputs:rgb>`),o.push(i(e.emissiveMap,"emissive",new n.Q1f(e.emissive.r*e.emissiveIntensity,e.emissive.g*e.emissiveIntensity,e.emissive.b*e.emissiveIntensity)))):e.emissive.getHex()>0&&a.push(`			color3f inputs:emissiveColor = ${er(e.emissive)}`),null!==e.normalMap&&(a.push(`			normal3f inputs:normal.connect = </Materials/Material_${e.id}/Texture_${e.normalMap.id}_normal.outputs:rgb>`),o.push(i(e.normalMap,"normal"))),null!==e.aoMap&&(a.push(`			float inputs:occlusion.connect = </Materials/Material_${e.id}/Texture_${e.aoMap.id}_occlusion.outputs:r>`),o.push(i(e.aoMap,"occlusion",new n.Q1f(e.aoMapIntensity,e.aoMapIntensity,e.aoMapIntensity)))),null!==e.roughnessMap?(a.push(`			float inputs:roughness.connect = </Materials/Material_${e.id}/Texture_${e.roughnessMap.id}_roughness.outputs:g>`),o.push(i(e.roughnessMap,"roughness",new n.Q1f(e.roughness,e.roughness,e.roughness)))):a.push(`			float inputs:roughness = ${e.roughness}`),null!==e.metalnessMap?(a.push(`			float inputs:metallic.connect = </Materials/Material_${e.id}/Texture_${e.metalnessMap.id}_metallic.outputs:b>`),o.push(i(e.metalnessMap,"metallic",new n.Q1f(e.metalness,e.metalness,e.metalness)))):a.push(`			float inputs:metallic = ${e.metalness}`),null!==e.alphaMap?(a.push(`			float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.alphaMap.id}_opacity.outputs:r>`),a.push(`			float inputs:opacityThreshold = 0.0001`),o.push(i(e.alphaMap,"opacity"))):a.push(`			float inputs:opacity = ${e.opacity}`),e.isMeshPhysicalMaterial&&(null!==e.clearcoatMap?(a.push(`			float inputs:clearcoat.connect = </Materials/Material_${e.id}/Texture_${e.clearcoatMap.id}_clearcoat.outputs:r>`),o.push(i(e.clearcoatMap,"clearcoat",new n.Q1f(e.clearcoat,e.clearcoat,e.clearcoat)))):a.push(`			float inputs:clearcoat = ${e.clearcoat}`),null!==e.clearcoatRoughnessMap?(a.push(`			float inputs:clearcoatRoughness.connect = </Materials/Material_${e.id}/Texture_${e.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`),o.push(i(e.clearcoatRoughnessMap,"clearcoatRoughness",new n.Q1f(e.clearcoatRoughness,e.clearcoatRoughness,e.clearcoatRoughness)))):a.push(`			float inputs:clearcoatRoughness = ${e.clearcoatRoughness}`),a.push(`			float inputs:ior = ${e.ior}`)),`
	def Material "Material_${e.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${a.join("\n")}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${e.id}/PreviewSurface.outputs:surface>

${o.join("\n")}

	}
`}(i,t,r))}return`def "Materials"
{
${a.join("")}
}

`}(s,l,t.quickLookCompatible),r[o]=Q(i),i=null,l){let e=l[a];if(!0===e.isCompressedTexture)if(null===this.textureUtils)throw Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");else e=await this.textureUtils.decompress(e);let n=function(e,t,r){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){let n=r/Math.max(e.width,e.height),a=document.createElement("canvas");a.width=e.width*Math.min(1,n),a.height=e.height*Math.min(1,n);let o=a.getContext("2d");return!0===t&&(o.translate(0,a.height),o.scale(1,-1)),o.drawImage(e,0,0,a.width,a.height),a}throw Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}(e.image,e.flipY,t.maxTextureSize),o=await new Promise(e=>n.toBlob(e,"image/png",1));r[`textures/Texture_${a}.png`]=new Uint8Array(await o.arrayBuffer())}let u=0;for(let e in r){let t=r[e],n=63&(u+=34+e.length);if(4!==n){let a=new Uint8Array(64-n);r[e]=[t,{extra:{12345:a}}]}u=t.length}return function(e,t){t||(t={});var r={},n=[];W(e,"",r,t);var o=0,i=0;for(var s in r){var l=r[s],u=l[0],f=l[1],c=8*(0!=f.level),p=Q(s),h=p.length,m=f.comment,d=m&&Q(m),v=d&&d.length,g=X(f.extra);h>65535&&k(11);var $=c?z(u,f||{},0,0):u,M=$.length,x=L();x.p(u),n.push(B(f,{size:u.length,crc:x.d(),c:$,f:p,m:d,u:h!=s.length||d&&m.length!=v,o:o,compression:c})),o+=30+h+g+M,i+=76+2*(h+g)+(v||0)+M}for(var w=new a(i+22),y=o,_=i-o,b=0;b<n.length;++b){var p=n[b];Y(w,p.o,p,p.f,p.u,p.c.length);var T=30+p.f.length+X(p.extra);w.set(p.c,p.o+T),Y(w,o,p,p.f,p.u,p.c.length,p.o,p.m),o+=16+T+(p.m?p.m.length:0)}return q(w,o,n.length,_,y),w}(r,{level:0})}}function J(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function K(e){let t=e.elements;return`( ${ee(t,0)}, ${ee(t,4)}, ${ee(t,8)}, ${ee(t,12)} )`}function ee(e,t){return`(${e[t+0]}, ${e[t+1]}, ${e[t+2]}, ${e[t+3]})`}function et(e,t){if(void 0===e)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");let r=[];for(let t=0;t<e.count;t++){let n=e.getX(t),a=e.getY(t),o=e.getZ(t);r.push(`(${n.toPrecision(7)}, ${a.toPrecision(7)}, ${o.toPrecision(7)})`)}return r.join(", ")}function er(e){return`(${e.r}, ${e.g}, ${e.b})`}function en(e){return`(${e.x}, ${e.y})`}}}]);