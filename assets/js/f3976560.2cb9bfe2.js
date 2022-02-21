"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2844],{3905:function(M,N,D){D.d(N,{Zo:function(){return e},kt:function(){return c}});var L=D(7294);function w(M,N,D){return N in M?Object.defineProperty(M,N,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[N]=D,M}function j(M,N){var D=Object.keys(M);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(M);N&&(L=L.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),D.push.apply(D,L)}return D}function T(M){for(var N=1;N<arguments.length;N++){var D=null!=arguments[N]?arguments[N]:{};N%2?j(Object(D),!0).forEach((function(N){w(M,N,D[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(D)):j(Object(D)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(D,N))}))}return M}function t(M,N){if(null==M)return{};var D,L,w=function(M,N){if(null==M)return{};var D,L,w={},j=Object.keys(M);for(L=0;L<j.length;L++)D=j[L],N.indexOf(D)>=0||(w[D]=M[D]);return w}(M,N);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);for(L=0;L<j.length;L++)D=j[L],N.indexOf(D)>=0||Object.prototype.propertyIsEnumerable.call(M,D)&&(w[D]=M[D])}return w}var u=L.createContext({}),z=function(M){var N=L.useContext(u),D=N;return M&&(D="function"==typeof M?M(N):T(T({},N),M)),D},e=function(M){var N=z(M.components);return L.createElement(u.Provider,{value:N},M.children)},s={inlineCode:"code",wrapper:function(M){var N=M.children;return L.createElement(L.Fragment,{},N)}},i=L.forwardRef((function(M,N){var D=M.components,w=M.mdxType,j=M.originalType,u=M.parentName,e=t(M,["components","mdxType","originalType","parentName"]),i=z(D),c=w,y=i["".concat(u,".").concat(c)]||i[c]||s[c]||j;return D?L.createElement(y,T(T({ref:N},e),{},{components:D})):L.createElement(y,T({ref:N},e))}));function c(M,N){var D=arguments,w=N&&N.mdxType;if("string"==typeof M||w){var j=D.length,T=new Array(j);T[0]=i;var t={};for(var u in N)hasOwnProperty.call(N,u)&&(t[u]=N[u]);t.originalType=M,t.mdxType="string"==typeof M?M:w,T[1]=t;for(var z=2;z<j;z++)T[z]=D[z];return L.createElement.apply(null,T)}return L.createElement.apply(null,D)}i.displayName="MDXCreateElement"},672:function(M,N,D){D.r(N),D.d(N,{frontMatter:function(){return t},contentTitle:function(){return u},metadata:function(){return z},toc:function(){return e},default:function(){return i}});var L=D(7462),w=D(3366),j=(D(7294),D(3905)),T=["components"],t={title:"Welcome to OAuth2 Proxy",hide_table_of_contents:!0},u=void 0,z={type:"mdx",permalink:"/oauth2-proxy/",source:"@site/src/pages/index.md",title:"Welcome to OAuth2 Proxy",description:"OAuth2 Proxy",frontMatter:{title:"Welcome to OAuth2 Proxy",hide_table_of_contents:!0}},e=[{value:"Architecture",id:"architecture",children:[],level:2}],s={toc:e};function i(M){var N=M.components,t=(0,w.Z)(M,T);return(0,j.kt)("wrapper",(0,L.Z)({},s,t,{components:N,mdxType:"MDXLayout"}),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"OAuth2 Proxy",src:D(3218).Z,width:"841",height:"412"})),(0,j.kt)("p",null,"A reverse proxy and static file server that provides authentication using Providers (Google, GitHub, and others)\nto validate accounts by email, domain or group."),(0,j.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,j.kt)("div",{parentName:"div",className:"admonition-heading"},(0,j.kt)("h5",{parentName:"div"},(0,j.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,j.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,j.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,j.kt)("div",{parentName:"div",className:"admonition-content"},(0,j.kt)("p",{parentName:"div"},"This repository was forked from ",(0,j.kt)("a",{parentName:"p",href:"https://github.com/bitly/oauth2_proxy"},"bitly/OAuth2_Proxy")," on 27/11/2018.\nVersions v3.0.0 and up are from this fork and will have diverged from any changes in the original fork.\nA list of changes can be seen in the ",(0,j.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy/blob/master/CHANGELOG.md"},"CHANGELOG"),"."))),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"Sign In Page",src:D(1364).Z,width:"509",height:"234"})),(0,j.kt)("h2",{id:"architecture"},"Architecture"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"OAuth2 Proxy Architecture",src:D(183).Z,width:"584",height:"373"})))}i.isMDXComponent=!0},183:function(M,N,D){N.Z=D.p+"assets/images/architecture-08b382c30c02b227fa4c86cb158b600e.png"},3218:function(M,N){N.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDAuNTU2NDUgNDEyLjQ1OTA0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzMzMzt9LmNscy0ye2ZpbGw6IzdjN2M4Mjt9LmNscy0ze2ZpbGw6IzA2ZWQ5NDt9LmNscy00e2ZpbGw6IzA1OWI2MTt9LmNscy01e2ZpbGw6IzE5NTdiYTt9LmNscy02e2ZpbGw6IzZjYThmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPk9BdXRoMl9Qcm94eV9sb2dvX3YzPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NzQuMjA5MzMsMTk2LjYzMTE2YTQxLjQ2Njc5LDQxLjQ2Njc5LDAsMCwxLTE2LjMzNTA2LTMuMTg5NjQsMzkuODA3NTcsMzkuODA3NTcsMCwwLDEtMjEuNjcwOTItMjEuODM1MTgsNDIuOTk0MDksNDIuOTk0MDksMCwwLDEsMC0zMi4yMywzOS44MDc2NSwzOS44MDc2NSwwLDAsMSwyMS42NzA5Mi0yMS44MzUxOCw0My40MTY2NSw0My40MTY2NSwwLDAsMSwzMi42NzAxMiwwLDM5LjgxMDEsMzkuODEwMSwwLDAsMSwyMS42Njk4OSwyMS44MzUxOCw0Mi45OTQsNDIuOTk0LDAsMCwxLDAsMzIuMjMsMzkuODEsMzkuODEsMCwwLDEtMjEuNjY5ODksMjEuODM1MThBNDEuNDg1LDQxLjQ4NSwwLDAsMSw0NzQuMjA5MzMsMTk2LjYzMTE2Wm0wLTE0LjA3OTg1YTI2LjYzNzE0LDI2LjYzNzE0LDAsMCwwLDEwLjI4NDMxLTEuOTc5OSwyNS44OTg4OSwyNS44OTg4OSwwLDAsMCw4LjM2MDcyLTUuNTAwMTIsMjUuMDQyMjksMjUuMDQyMjksMCwwLDAsNS42MDk2My04LjUyNSwzMS4wNDI5NCwzMS4wNDI5NCwwLDAsMCwwLTIyLjExLDI1LjA3OTYzLDI1LjA3OTYzLDAsMCwwLTUuNjA5NjMtOC41MjU0OSwyNS45MTQ1LDI1LjkxNDUsMCwwLDAtOC4zNjA3Mi01LjQ5OTYxLDI3LjY5NjIsMjcuNjk2MiwwLDAsMC0yMC41Njk2NSwwLDI1Ljg5MjMzLDI1Ljg5MjMzLDAsMCwwLTguMzYwNzIsNS40OTk2MSwyNS4wMzQzNCwyNS4wMzQzNCwwLDAsMC01LjYwOTYyLDguNTI1NDksMzEuMDQyNzksMzEuMDQyNzksMCwwLDAsMCwyMi4xMSwyNC45OTcxNCwyNC45OTcxNCwwLDAsMCw1LjYwOTYyLDguNTI1LDI1Ljg3Njc1LDI1Ljg3Njc1LDAsMCwwLDguMzYwNzIsNS41MDAxMkEyNi42MzExMiwyNi42MzExMiwwLDAsMCw0NzQuMjA5MzMsMTgyLjU1MTMxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU0OC4xMjkzMSwxMTYuMTEwODNoMTYuOTQwNDRsMjkuNTkwNTEsNzguNzYwNDhINTc4LjI2OTQyTDU3MS43Nzk2MSwxNzYuMDYxSDU0MS40MTk0NWwtNi40ODk4MSwxOC44MTAzM0g1MTguNTM5ODNabTE4LjgxMDMyLDQ2LjMxMDQtNy4wMzk0MS0xOS42OS0yLjg2MDYtOS41Njk5NGgtLjg4MDE4bC0yLjg1OTU3LDkuNTY5OTQtNy4wNDA0NCwxOS42OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzYuNjc4NzMsMTg3LjgzMTM4aC0uODgwMTlhMTguMjY0NjksMTguMjY0NjksMCwwLDEtNi44MjAzOSw2LjQzNTA2LDE5Ljk0NTQxLDE5Ljk0NTQxLDAsMCwxLTkuNzg5NDcsMi4zNjQ3MnEtMTAuMjMwNTksMC0xNS4yMzQ4My02LjI2OTc3LTUuMDA2ODItNi4yNzA1Mi01LjAwNTI3LTE2LjcyMDRWMTQwLjk3MDg3SDYxMy4zNTl2MzAuOTEwMjdxMCw1LjgzMiwyLjU4NDc3LDguNjM1LDIuNTgzMjEsMi44MDQ4Miw3LjUzNDI1LDIuODA1MzNhMTAuNTAwMDYsMTAuNTAwMDYsMCwwLDAsNS4yMjUzMi0xLjI2NSwxMi4yMTQwNywxMi4yMTQwNywwLDAsMCwzLjg1MDI5LTMuNDEwMTksMTUuNDQyOTMsMTUuNDQyOTMsMCwwLDAsMi40MTk0Ny01LjA2LDIyLjY5NzQ2LDIyLjY5NzQ2LDAsMCwwLC44MjU0My02LjIxNVYxNDAuOTcwODdINjUwLjIwOXY1My45MDA0NEg2MzYuNjc4NzNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjY5LjAxNzIzLDE1My4yOTEzOGgtOS40NjFWMTQwLjk3MDg3aDkuNDYxVjEyNC40NzFoMTQuNDA5NHYxNi40OTk4NGgxMy4yMDA3djEyLjMyMDUxaC0xMy4yMDA3VjE3NC44MjlhMTUuNTQ1NjEsMTUuNTQ1NjEsMCwwLDAsLjM4NTM0LDMuNTcxMzUsNS43OTM2LDUuNzkzNiwwLDAsMCwxLjQ4NDU0LDIuNzc3NDQsNS40NDkxNCw1LjQ0OTE0LDAsMCwwLDQuMzk5ODgsMS44MTM1Nyw4LjAwNTQ3LDguMDA1NDcsMCwwLDAsNS4wNi0xLjQzMDNsNC4wNzAzNCwxMi42NTAwN2EyMy44MzkyNCwyMy44MzkyNCwwLDAsMS01LjQ0NDM0LDEuODE1MTIsMzEuODAyOSwzMS44MDI5LDAsMCwxLTYuNDM1MDUuNjA0ODcsMTkuNjY1MjgsMTkuNjY1MjgsMCwwLDEtNy4zMTUyNC0xLjI5MDg0LDE1LjU0MTUxLDE1LjU0MTUxLDAsMCwxLTUuNDQ1MzctMy41MzY3NXEtNS4xNzEwNy01LjA1MzMxLTUuMTY5NTMtMTQuMzcyNzJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzA3LjczNSwxMTYuMTEwODNoMTQuNDA5NHYyMi4xMTA1bC0uODc5MTUsOS43OWguODc5MTVhMTcuODU0NDcsMTcuODU0NDcsMCwwLDEsNi42NTUxMS02LjMyNSwxOS4zMTQ5MiwxOS4zMTQ5MiwwLDAsMSw5LjczNTc0LTIuNDc1MjZxMTAuNDQ5MDksMCwxNS40NTQ4OCw2LjE2MDI2LDUuMDAzNzEsNi4xNjEyOCw1LjAwNTI3LDE2LjgyOTl2MzIuNjcwMTNINzQ0LjU4NVYxNjMuOTYxcTAtNS42MDk2Mi0yLjY0MDU1LTguNTI1YTkuNDQwMTgsOS40NDAxOCwwLDAsMC03LjM3LTIuOTE0ODQsMTAuODI0ODIsMTAuODI0ODIsMCwwLDAtNS4yODAwNywxLjI2NSwxMS43NjA5MiwxMS43NjA5MiwwLDAsMC0zLjkwNCwzLjQ2NSwxNi4wOTQyOSwxNi4wOTQyOSwwLDAsMC0yLjQyMDUsNS4xMTQ3OCwyMi43NDgsMjIuNzQ4LDAsMCwwLS44MjU0NCw2LjIxNXYyNi4yOTAzNEg3MDcuNzM1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc2OS43NzM1MywxOTQuODcxMzFWMTgxLjc4MTE1cTYuNDg5NzktNi4zNzgyNCwxMS45ODk5Mi0xMS44Nzk5MSwyLjMxMDQ4LTIuMzA5Nyw0LjczMDQ4LTQuNzMsMi40MTc0LTIuNDE4MTgsNC41MDkzOS00LjUwOTkxLDIuMDg4ODgtMi4wODg4OSwzLjc0MDc4LTMuNzk1LDEuNjQ4OC0xLjcwNDU4LDIuNTMtMi42OTUzMSwxLjc1NzI2LTIuMDg4MTEsMy4xMzQzNi0zLjczOTc1YTE4LjE2NDEzLDE4LjE2NDEzLDAsMCwwLDIuMjAwNDYtMy4yNDU0MiwxNi40NzQ3MiwxNi40NzQ3MiwwLDAsMCwxLjI2NDQ5LTMuMTg5NjMsMTMuMDI0NDUsMTMuMDI0NDUsMCwwLDAsLjQ0MDA5LTMuNDY1LDguNDI3Niw4LjQyNzYsMCwwLDAtMi44NTk1Ni02LjMyNSwxMC45MzMwOCwxMC45MzMwOCwwLDAsMC03LjgxMDA5LTIuNjk1M3EtNC45NTEsMC03LjcwMDU4LDIuODA1MzNhMTQuNTk3NzMsMTQuNTk3NzMsMCwwLDAtMy43Mzk3NSw2LjMyNWwtMTMuMDkwMTUtNS4zOTAxYTI0LjU1NTQ3LDI0LjU1NTQ3LDAsMCwxLDIuODYwNi02LjEwNSwyMi43NjYzNywyMi43NjYzNywwLDAsMSw1LjA2LTUuNjEwMTQsMjYuNDQ4NzUsMjYuNDQ4NzUsMCwwLDEsNy4zMTQyMS00LjA3MDM0LDI2Ljg2MTg0LDI2Ljg2MTg0LDAsMCwxLDkuNTE1Ny0xLjU5NDU2LDI5LjcxODc4LDI5LjcxODc4LDAsMCwxLDEwLjM0MDEsMS43MDQ1OCwyMy4wMDg4MywyMy4wMDg4MywwLDAsMSw3LjgxMDA4LDQuNjc1MjEsMjAuOTI5MjMsMjAuOTI5MjMsMCwwLDEsNC45NDk0OSw2Ljk4NTE3LDIxLjI4NTUxLDIxLjI4NTUxLDAsMCwxLDEuNzYwMzcsOC42MzUsMjUuMDA2MTIsMjUuMDA2MTIsMCwwLDEtMy40NjUsMTIuOTI0ODYsNTYuODc2NjQsNTYuODc2NjQsMCwwLDEtOC40MTU0NiwxMC45NDVsLTkuNDU5OTIsOS40NjA0M3EtMy43NDA3NywzLjc0MDc3LTguNDcwMjIsOC4zNTk2OGwuNDQwMDkuNjYwMTRoMzAuNDcwN3YxMi42NTAwN1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00NDcuMDM2MjMsMjY1LjA1ODI0djMxLjloLTEwLjEyVjIxOC4xOTc3NGgyNi44NDA0NWEyNC4yNTY2NCwyNC4yNTY2NCwwLDAsMSwxNy4zODA1NCw2LjgyMDM5LDIyLjc1NzYxLDIyLjc1NzYxLDAsMCwxLDAsMzMuMzI5NzQsMjQuMjI0NjMsMjQuMjI0NjMsMCwwLDEtMTcuMzgwNTQsNi43MTAzN1ptMC0zNy4xODA1NXYyNy41MDA1OWgxNi45NDA0NWExMy4zNzgsMTMuMzc4LDAsMCwwLDEwLjAxMDU0LTQuMDcwMzMsMTMuODA1NzcsMTMuODA1NzcsMCwwLDAtMTAuMDEwNTQtMjMuNDMwMjZaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTA3LjMxNjQ1LDI5Ni45NTgyMWgtMTAuMTJWMjQzLjA1Nzc3aDkuNjh2OC44MDAyOWguNDQwMDlhMTQuNjA4MDUsMTQuNjA4MDUsMCwwLDEsNi4zMjQ1MS03LjMxNTIzLDE3LjU2MDM1LDE3LjU2MDM1LDAsMCwxLDkuNDA1MTYtMy4wMjQ4NiwxOC45NzcwNiwxOC45NzcwNiwwLDAsMSw3LjQ4MDU0LDEuMzE5NzZsLTMuMDgwNjUsOS43OTA1YTE2Ljc5MTgyLDE2Ljc5MTgyLDAsMCwwLTUuOTQwMjEtLjc3MDE3QTEzLjA5Njc0LDEzLjA5Njc0LDAsMCwwLDUxMS41NTEsMjU2LjQ3OGExNS40NTI3OCwxNS40NTI3OCwwLDAsMC00LjIzNDU5LDEwLjc4MDE5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTUzMC43NDU2NywyNzAuMDA4MjVxMC0xMi40Mjk1MSw3LjgxMDA5LTIwLjU3MDE4YTI2LjYyMjIsMjYuNjIyMiwwLDAsMSwxOS45MTA1NS04LjE0MDE1cTExLjk4Nzg1LDAsMTkuOCw4LjE0MDE1LDcuOTIwMTEsOC4xNDE3Miw3LjkxOTU5LDIwLjU3MDE4LDAsMTIuNTM5NTItNy45MTk1OSwyMC41NzAxNy03LjgxMTY0LDguMTQxNy0xOS44LDguMTM5NjRhMjYuNjE2LDI2LjYxNiwwLDAsMS0xOS45MTA1NS04LjEzOTY0UTUzMC43NDQxMiwyODIuNDM5LDUzMC43NDU2NywyNzAuMDA4MjVabTEwLjEyLDBxMCw4LjY5MSw1LjA2LDE0LjA3OTg0YTE3LjI4MjIyLDE3LjI4MjIyLDAsMCwwLDI1LjA4MDA4LDBxNS4wNTk1Mi01LjM4OCw1LjA2LTE0LjA3OTg0LDAtOC41ODAyNS01LjA2LTEzLjk3MDM0YTE3LjA0NTQ0LDE3LjA0NTQ0LDAsMCwwLTI1LjA4MDA4LDBRNTQwLjg2NDY5LDI2MS40MjksNTQwLjg2NTcyLDI3MC4wMDgyNVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02MTkuOTU2MjYsMjY5LjU2ODE2bDE5LjI1MDQxLDI3LjM5MDA1SDYyNy4zMjYyNWwtMTMuMzEwMi0xOS45MS0xMy4wOTAxNiwxOS45MUg1ODkuMDQ2NTFsMTkuMDMwMzYtMjcuMzkwMDVMNTg5LjQ4NjYsMjQzLjA1Nzc3aDExLjQzOTI5bDEzLjMxMDIxLDE5LjAzMDM3LDEyLjY1MDA2LTE5LjAzMDM3aDExLjg4MDQyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTY5NC40MjQ4LDI0My4wNTc3N2wtMzMuNzcwMzUsNzcuNjYwNzZINjUwLjIwNDg0TDY2Mi43NDQzNywyOTMuNTQ4bC0yMi4yMTk0OS01MC40OTAyNGgxMS4wMDAyNGwxNi4wNjAyNiwzOC43MjAzNmguMjE5bDE1LjYyMDE3LTM4LjcyMDM2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTIxMS45MzEsMzkyLjYzNTM2Yy0xMDEuMzgwMjcsMC0xODMuODU5MzItODIuNDc4NTItMTgzLjg1OTMyLTE4My44NTg4UzExMC41NTA3MSwyNC45MTc3NiwyMTEuOTMxLDI0LjkxNzc2LDM5NS43OTAzLDEwNy4zOTYyOSwzOTUuNzkwMywyMDguNzc2NTYsMzEzLjMxMTI1LDM5Mi42MzUzNiwyMTEuOTMxLDM5Mi42MzUzNlptMC0zNTQuNzAzODljLTk0LjIwNDUsMC0xNzAuODQ0NTcsNzYuNjQxMTEtMTcwLjg0NDU3LDE3MC44NDUwOVMxMTcuNzI2NDgsMzc5LjYyMTY1LDIxMS45MzEsMzc5LjYyMTY1czE3MC44NDQ1Ny03Ni42NDExLDE3MC44NDQ1Ny0xNzAuODQ1MDlTMzA2LjEzNTQ4LDM3LjkzMTQ3LDIxMS45MzEsMzcuOTMxNDdaIi8+PHBvbHlnb24gY2xhc3M9ImNscy00IiBwb2ludHM9IjI0NC42MDIgMTEyLjAwNyAyMzkuMjk1IDEzMS44NDMgMjgxLjk1OSAxNjYuODU2IDMyMi4wNTUgMTYxLjkxMiAyNDQuNjAyIDExMi4wMDciLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMzQ4LjQ0OSAxOTUuNTYyIDM0OC40NDkgMTU4LjczNCAyOTAuMjA5IDEwOS4xNzkgMjQ0LjYwMiAxMTIuMDA3IDMwMC4yMDkgMTU2LjY3IDc2LjY0MiAxNTYuNjcgNzYuNjQyIDE5OC4wNSAzNDguNDQ5IDE5NS41NjIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTUiIHBvaW50cz0iMTgwLjQ4OSAyOTcuMTc1IDE4NS43OTYgMjc3LjM0IDE0MS44NyAyNDAuNTU4IDEwMy4wMzcgMjQ3LjI3MSAxODAuNDg5IDI5Ny4xNzUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTYiIHBvaW50cz0iNzYuNjQyIDIxMy42MiA3Ni42NDIgMjUwLjQ0OCAxMzQuODgyIDMwMC4wMDQgMTgwLjQ4OSAyOTcuMTc1IDEyNC44ODIgMjUyLjUxMiAzNDguNDQ5IDI1Mi41MTIgMzQ4LjQ0OSAyMTEuMTMyIDc2LjY0MiAyMTMuNjIiLz48L3N2Zz4="},1364:function(M,N,D){N.Z=D.p+"assets/images/sign-in-page-947a0ef7ee9fb0aa2b7179b8c7a1cc76.png"}}]);