"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1487],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4163:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={id:"behaviour",title:"Behaviour"},s=void 0,c={unversionedId:"behaviour",id:"version-7.2.x/behaviour",title:"Behaviour",description:"1. Any request passing through the proxy (and not matched by --skip-auth-regex) is checked for the proxy's session cookie (--cookie-name) (or, if allowed, a JWT token - see --skip-jwt-bearer-tokens).",source:"@site/versioned_docs/version-7.2.x/behaviour.md",sourceDirName:".",slug:"/behaviour",permalink:"/oauth2-proxy/docs/behaviour",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.2.x/behaviour.md",tags:[],version:"7.2.x",frontMatter:{id:"behaviour",title:"Behaviour"},sidebar:"version-7.2.x/docs",previous:{title:"Installation",permalink:"/oauth2-proxy/docs/"},next:{title:"Overview",permalink:"/oauth2-proxy/docs/configuration/overview"}},p=[],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Any request passing through the proxy (and not matched by ",(0,i.kt)("inlineCode",{parentName:"li"},"--skip-auth-regex"),") is checked for the proxy's session cookie (",(0,i.kt)("inlineCode",{parentName:"li"},"--cookie-name"),") (or, if allowed, a JWT token - see ",(0,i.kt)("inlineCode",{parentName:"li"},"--skip-jwt-bearer-tokens"),")."),(0,i.kt)("li",{parentName:"ol"},"If authentication is required but missing then the user is asked to log in and redirected to the authentication provider (unless it is an Ajax request, i.e. one with ",(0,i.kt)("inlineCode",{parentName:"li"},"Accept: application/json"),", in which case 401 Unauthorized is returned)"),(0,i.kt)("li",{parentName:"ol"},"After returning from the authentication provider, the oauth tokens are stored in the configured session store (cookie, redis, ...) and a cookie is set"),(0,i.kt)("li",{parentName:"ol"},"The request is forwarded to the upstream server with added user info and authentication headers (depending on the configuration)")),(0,i.kt)("p",null,"Notice that the proxy also provides a number of useful ",(0,i.kt)("a",{parentName:"p",href:"/oauth2-proxy/docs/features/endpoints"},"endpoints"),"."))}d.isMDXComponent=!0}}]);