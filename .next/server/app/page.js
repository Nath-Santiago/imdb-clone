(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2686:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9049)),"C:\\Users\\lucky\\OneDrive\\Desktop\\Workspace\\Personal Projects\\imdb-next\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4894)),"C:\\Users\\lucky\\OneDrive\\Desktop\\Workspace\\Personal Projects\\imdb-next\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,6510)),"C:\\Users\\lucky\\OneDrive\\Desktop\\Workspace\\Personal Projects\\imdb-next\\src\\app\\error.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,5536)),"C:\\Users\\lucky\\OneDrive\\Desktop\\Workspace\\Personal Projects\\imdb-next\\src\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\lucky\\OneDrive\\Desktop\\Workspace\\Personal Projects\\imdb-next\\src\\app\\page.js"],u="/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6528:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},1969:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},1504:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23))},9987:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23)),Promise.resolve().then(r.bind(r,8823)),Promise.resolve().then(r.bind(r,4303)),Promise.resolve().then(r.bind(r,2705))},156:(e,t,r)=>{Promise.resolve().then(r.bind(r,7738))},8823:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5344),a=r(3729),n=r(5739),i=r(9558);function o(){let{theme:e,setTheme:t,systemTheme:r}=(0,i.F)(),[o,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{l(!0)},[]),s.jsx("div",{children:o&&("dark"===("system"===e?r:e)?s.jsx(n.Mei,{className:"text-xl cursor-pointer hover:text-amber-500",onClick:()=>{t("light")}}):s.jsx(n.TLr,{className:"text-xl cursor-pointer hover:text-zinc-500",onClick:()=>{t("dark")}}))})}},4303:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(5344),a=r(6506);r(3729);var n=r(8428);function i({title:e,param:t}){let r=(0,n.useSearchParams)().get("genre");return s.jsx("div",{className:`hover:text-amber-600 font-semibold 
        ${r===t&&"underline underline-offset-8 decoration-4 decoration-amber-500 rounded-full"}`,children:s.jsx(a.default,{href:`/?genre=${t}`,children:e})})}},7738:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344),a=r(3729);function n({error:e,reset:t}){return(0,a.useEffect)(()=>{console.log(e)},[e]),(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Something went wrong. Please try again later."}),s.jsx("button",{className:"hover:text-amber-600 size-full",onClick:()=>{t()},children:"Try Again"})]})}},2705:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344);r(3729);var a=r(9558);function n({children:e}){return s.jsx(a.f,{defaultTheme:"system",attribute:"class",children:s.jsx("div",{className:"text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300",children:e})})}},6510:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`C:\Users\lucky\OneDrive\Desktop\Workspace\Personal Projects\imdb-next\src\app\error.jsx`),{__esModule:a,$$typeof:n}=s,i=s.default},4894:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w,metadata:()=>_});var s=r(5036),a=r(1457),n=r.n(a);r(5023),r(2);var i=r(6274);function o({title:e,address:t,Icon:r}){return s.jsx("div",{children:(0,s.jsxs)(i.default,{href:t,className:"hover:text-amber-500",children:[s.jsx(r,{className:"text-2xl sm:hidden"}),s.jsx("p",{className:"uppercase hidden sm:inline text-sm",children:e})]})})}var l=r(4399),c=r(6843);let d=(0,c.createProxy)(String.raw`C:\Users\lucky\OneDrive\Desktop\Workspace\Personal Projects\imdb-next\src\app\components\DarkModeSwitch.jsx`),{__esModule:u,$$typeof:m}=d,p=d.default;function x(){return(0,s.jsxs)("div",{className:"flex justify-between items-center p-3 max-w-6xl mx-auto",children:[(0,s.jsxs)("div",{className:"flex gap-4",children:[s.jsx(o,{title:"Home",address:"/",Icon:l.V9Z}),s.jsx(o,{title:"About",address:"/about",Icon:l.kA6})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[s.jsx(p,{}),(0,s.jsxs)(i.default,{href:"/",className:"flex gap-1 items-center",children:[s.jsx("span",{className:"text-2xl font-bold bg-amber-500 py-1 px-1 rounded-lg",children:"IMDb"}),s.jsx("span",{className:"text-xl hidden sm:inline",children:"Clone"})]})]})]})}let h=(0,c.createProxy)(String.raw`C:\Users\lucky\OneDrive\Desktop\Workspace\Personal Projects\imdb-next\src\app\providers.jsx`),{__esModule:f,$$typeof:v}=h,g=h.default,j=(0,c.createProxy)(String.raw`C:\Users\lucky\OneDrive\Desktop\Workspace\Personal Projects\imdb-next\src\app\components\NavBarItem.jsx`),{__esModule:b,$$typeof:P}=j,k=j.default;function y(){return(0,s.jsxs)("div",{className:"flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6",children:[s.jsx(k,{title:"Trending",param:"fetchTrending"}),s.jsx(k,{title:"Top Rated",param:"fetchTopRated"})]})}let _={title:"IMDb Clone",description:"A practice website for IMDB Clone"};function w({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:(0,s.jsxs)(g,{children:[s.jsx(x,{})," ",s.jsx(y,{}),e]})})})}},5536:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5036),a=r(2813);function n(){return s.jsx("div",{className:"flex justify-center",children:s.jsx(a.default,{className:"h-60",src:"loader.svg",height:500,width:500,alt:"Loading..."})})}},9049:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5036),a=r(2813);r(2);var n=r(6274),i=r(2498);function o(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"},child:[]}]})(e)}function l({show:e}){let t="";return e.title?t=e.title:e.name?t=e.name:e.original_title&&(t=e.original_title),s.jsx("div",{className:"group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2",children:(0,s.jsxs)(n.default,{href:`/movie/${e.id}`,children:[s.jsx(a.default,{className:"sm:rounded-t-lg  w-full group-hover:opacity-75 transition-opacity duration-300",src:`https://image.tmdb.org/t/p/w500${e.poster_path}`,alt:t,height:500,width:500}),(0,s.jsxs)("div",{className:"",children:[s.jsx("p",{className:"line-clamp-2 text-md",children:e.overview}),s.jsx("h2",{className:"text-lg font-bold truncate",children:t}),(0,s.jsxs)("p",{className:"flex items-center",children:[e.release_date||e.first_air_date,s.jsx(o,{className:"h-5 mr-1 ml-3"}),e.vote_count]})]})]})})}async function c({results:e}){return s.jsx("div",{className:"sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4",children:e.map((e,t)=>s.jsx(l,{show:e},t))})}let d=process.env.API_KEY_TMDB;async function u({searchParams:e}){let t=e.genre||"fetchTrending",r=await fetch(`https://api.themoviedb.org/3${"fetchTopRated"===t?"/movie/top_rated":"/trending/all/week"}?api_key=${d}&language=en-US&page=1`),a=await r.json();if(!r.ok)throw Error("Failed to fetch");let n=a.results;return s.jsx("div",{className:"size-full",children:s.jsx(c,{results:n})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,876,337],()=>r(2686));module.exports=s})();