!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i={form:document.querySelector("form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')};function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(n){var t=Number(i.delay.value),o=Number(i.step.value),r=Number(i.amount.value);n.preventDefault();for(var l=t,c=1;c<=r;c+=1)a(1+c,l).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})).finally((function(){return console.log("Promise settled")})),l+=o}))}();
//# sourceMappingURL=03-promises.e16bb0e6.js.map