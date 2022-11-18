(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{L:()=>p});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.completed=!1,this.createdAt=new Date,this.description=t,this.id=(new Date).getTime()}var n,r,o;return n=e,o=[{key:"fromJson",value:function(t){var n=t.completed,r=t.createdAt,o=t.description,a=t.id,i=new e(o);return i.completed=n,i.createdAt=r,i.id=a,i}}],(r=null)&&t(n.prototype,r),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadFromLocalStorage()}var t,o,i;return t=e,(o=[{key:"newTodo",value:function(e){this.todos.push(e),this.saveToLocalStorage()}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveToLocalStorage()}},{key:"toggleCompleted",value:function(e){var t,n=r(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id==e){o.completed=!o.completed,this.saveToLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.saveToLocalStorage()}},{key:"saveToLocalStorage",value:function(){localStorage.setItem("To-Dos",JSON.stringify(this.todos))}},{key:"loadFromLocalStorage",value:function(){this.todos=localStorage.getItem("To-Dos")?JSON.parse(localStorage.getItem("To-Dos")):[],this.todos=this.todos.map(n.fromJson)}}])&&a(t.prototype,o),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),m=function(e){var t='\n  <li class="'.concat(e.completed?"completed":"",'" data-id="').concat(e.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(e.completed?"checked":"",">\n\t\t\t<label>").concat(e.description,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>\n  '),n=document.createElement("div");return n.innerHTML=t,s.append(n.firstElementChild),n.firstElementChild};u.addEventListener("keyup",(function(e){if(13===e.keyCode&&u.value.trim().length>0){var t=new n(u.value);p.newTodo(t),m(t),u.value=""}})),s.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(p.toggleCompleted(r),n.classList.toggle("completed")):t.includes("button")&&(p.deleteTodo(r),s.removeChild(n))})),d.addEventListener("click",(function(){p.deleteCompleted();for(var e=s.children.length-1;e>=0;e--){var t=s.children[e];t.classList.contains("completed")&&s.removeChild(t)}})),f.addEventListener("click",(function(e){var t=e.target.text;if(t){v.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=l(s.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Active":a&&o.classList.add("hidden");break;case"Completed":a||o.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var p=new i;p.todos.forEach(m)})();