!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0,e.addEventListener("click",(function(n){t.disabled=!1,e.disabled=!0,d(),a=setInterval(d,1e3)}));var a=null;function d(){document.querySelector("body").style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(d){e.disabled=!1,t.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.af5b5783.js.map