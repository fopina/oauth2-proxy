"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8249],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6647:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"tls",title:"TLS Configuration"},l=void 0,c={unversionedId:"configuration/tls",id:"configuration/tls",title:"TLS Configuration",description:"There are two recommended configurations:",source:"@site/docs/configuration/tls.md",sourceDirName:"configuration",slug:"/configuration/tls",permalink:"/oauth2-proxy/docs/next/configuration/tls",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/tls.md",tags:[],version:"current",frontMatter:{id:"tls",title:"TLS Configuration"},sidebar:"docs",previous:{title:"Session Storage",permalink:"/oauth2-proxy/docs/next/configuration/session_storage"},next:{title:"Alpha Configuration",permalink:"/oauth2-proxy/docs/next/configuration/alpha-config"}},s=[{value:"Terminate TLS at OAuth2 Proxy",id:"terminate-tls-at-oauth2-proxy",children:[],level:3},{value:"Terminate TLS at Reverse Proxy, e.g. Nginx",id:"terminate-tls-at-reverse-proxy-eg-nginx",children:[],level:3}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two recommended configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#terminate-tls-at-oauth2-proxy"},"At OAuth2 Proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#terminate-tls-at-reverse-proxy-eg-nginx"},"At Reverse Proxy"))),(0,a.kt)("h3",{id:"terminate-tls-at-oauth2-proxy"},"Terminate TLS at OAuth2 Proxy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure SSL Termination with OAuth2 Proxy by providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"--tls-cert-file=/path/to/cert.pem")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--tls-key-file=/path/to/cert.key"),"."),(0,a.kt)("p",{parentName:"li"},"The command line to run ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth2-proxy")," in this configuration would look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./oauth2-proxy \\\n    --email-domain="yourcompany.com"  \\\n    --upstream=http://127.0.0.1:8080/ \\\n    --tls-cert-file=/path/to/cert.pem \\\n    --tls-key-file=/path/to/cert.key \\\n    --cookie-secret=... \\\n    --cookie-secure=true \\\n    --provider=... \\\n    --client-id=... \\\n    --client-secret=...\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With this configuration approach the customization of the TLS settings is limited."),(0,a.kt)("p",{parentName:"li"},"The minimal acceptable TLS version can be set with ",(0,a.kt)("inlineCode",{parentName:"p"},"--tls-min-version=TLS1.3"),".\nThe defaults set ",(0,a.kt)("inlineCode",{parentName:"p"},"TLS1.2")," as the minimal version.\nRegardless of the minimum version configured, ",(0,a.kt)("inlineCode",{parentName:"p"},"TLS1.3")," is currently always used as the maximal version."),(0,a.kt)("p",{parentName:"li"},"The server side cipher suites are the defaults from ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/crypto/tls#CipherSuites"},(0,a.kt)("inlineCode",{parentName:"a"},"crypto/tls"))," of\nthe currently used ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," version for building ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth2-proxy"),"."))),(0,a.kt)("h3",{id:"terminate-tls-at-reverse-proxy-eg-nginx"},"Terminate TLS at Reverse Proxy, e.g. Nginx"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure SSL Termination with ",(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/"},"Nginx")," (example config below), Amazon ELB, Google Cloud Platform Load Balancing, or ..."),(0,a.kt)("p",{parentName:"li"},"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth2-proxy")," listens on ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:4180")," by default, to listen on all interfaces (needed when using an\nexternal load balancer like Amazon ELB or Google Platform Load Balancing) use ",(0,a.kt)("inlineCode",{parentName:"p"},'--http-address="0.0.0.0:4180"')," or\n",(0,a.kt)("inlineCode",{parentName:"p"},'--http-address="http://:4180"'),"."),(0,a.kt)("p",{parentName:"li"},"Nginx will listen on port ",(0,a.kt)("inlineCode",{parentName:"p"},"443")," and handle SSL connections while proxying to ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth2-proxy")," on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4180"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"oauth2-proxy")," will then authenticate requests for an upstream application. The external endpoint for this example\nwould be ",(0,a.kt)("inlineCode",{parentName:"p"},"https://internal.yourcompany.com/"),"."),(0,a.kt)("p",{parentName:"li"},"An example Nginx config follows. Note the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"Strict-Transport-Security")," header to pin requests to SSL\nvia ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security"},"HSTS"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"server {\n    listen 443 default ssl;\n    server_name internal.yourcompany.com;\n    ssl_certificate /path/to/cert.pem;\n    ssl_certificate_key /path/to/cert.key;\n    add_header Strict-Transport-Security max-age=2592000;\n\n    location / {\n        proxy_pass http://127.0.0.1:4180;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Scheme $scheme;\n        proxy_connect_timeout 1;\n        proxy_send_timeout 30;\n        proxy_read_timeout 30;\n    }\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The command line to run ",(0,a.kt)("inlineCode",{parentName:"p"},"oauth2-proxy")," in this configuration would look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'./oauth2-proxy \\\n   --email-domain="yourcompany.com"  \\\n   --upstream=http://127.0.0.1:8080/ \\\n   --cookie-secret=... \\\n   --cookie-secure=true \\\n   --provider=... \\\n   --reverse-proxy=true \\\n   --client-id=... \\\n   --client-secret=...\n')))))}m.isMDXComponent=!0}}]);