const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0,e.addEventListener("click",(function(a){t.disabled=!1,e.disabled=!0,n(),d=setInterval(n,1e3)}));let d=null;function n(){document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(n){e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.6f221970.js.map