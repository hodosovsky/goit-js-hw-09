!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form"),u=document.querySelector('.form input[name="delay"]'),a=document.querySelector('.form input[name="step"]'),l=document.querySelector('.form input[name="amount"]');function c(e,o){var n=Math.random()>.3;return console.log(o),new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();var o=0,n=0;console.log("step",a.value),o=+u.value;for(var t=1;t<=+l.value;t+=1)setTimeout((function(){c(n+=1,o).then((function(e){var o=e.position,n=e.delay;i.Notify.success("Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("Rejected promise ".concat(o," in ").concat(n,"ms"))})),o+=+a.value}),+u.value)}))}();
//# sourceMappingURL=03-promises.80f5dc7b.js.map
