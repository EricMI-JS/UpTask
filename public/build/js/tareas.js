!function(){!async function(){try{const a="/api/tareas?id="+o(),n=await fetch(a),r=await n.json();e=r.tareas,t()}catch(e){console.log(e)}}();let e=[];function t(){if(function(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}(),0===e.length){const e=document.querySelector("#listado-tareas"),t=document.createElement("LI");return t.textContent="No hay tareas",t.classList.add("no-tareas"),void e.appendChild(t)}const t={0:"Pendiente",1:"Completa"};e.forEach(e=>{const a=document.createElement("LI");a.dataset.tareaId=e.id,a.classList.add("tarea");const o=document.createElement("P");o.textContent=e.nombre;const n=document.createElement("DIV");n.classList.add("opciones");const r=document.createElement("BUTTON");r.classList.add("estado-tarea"),r.classList.add(""+t[e.estado].toLowerCase()),r.textContent=t[e.estado],r.dataset.estadoTarea=e.estado,r.ondblclick=function(){!function(e){const t="1"===e.estado?"0":"1";e.estado=t,function(e){console.log(e)}(e)}({...e})};const c=document.createElement("BUTTON");c.classList.add("eliminar-tarea"),c.dataset.idTarea=e.id,c.textContent="Eliminar",n.appendChild(r),n.appendChild(c),a.appendChild(o),a.appendChild(n);document.querySelector("#listado-tareas").appendChild(a)})}function a(e,t,a){const o=document.querySelector(".alerta");o&&o.remove();const n=document.createElement("DIV");n.classList.add("alerta",t),n.textContent=e,a.parentElement.insertBefore(n,a.nextElementSibling),setTimeout(()=>{n.remove()},3e3)}function o(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}document.querySelector("#agregar-tarea").addEventListener("click",(function(){const n=document.createElement("DIV");n.classList.add("modal"),n.innerHTML='\n            <form class="formulario nueva-tarea" action="">\n                <legend>Añade una nueva tarea</legend>\n                <div class="campo">\n                    <label htmlFor="">Tarea</label>\n                    <input type="text" name="tarea" placeholder="Añadir Tarea al Proyecto Actual" id="tarea" />\n                </div>\n                <div class="opciones">\n                    <input type="submit" class="submit-nueva-tarea" value="Añadir tarea" />\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),n.addEventListener("click",(function(r){if(r.preventDefault(),r.target.classList.contains("cerrar-modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{n.remove()},500)}r.target.classList.contains("submit-nueva-tarea")&&function(){const n=document.querySelector("#tarea").value.trim();""===n&&a("El nombre de la tarea es obligatorio","error",document.querySelector(".formulario legend"));!async function(n){const r=new FormData;r.append("nombre",n),r.append("proyectoId",o());try{const o="http://localhost:3000/api/tarea",c=await fetch(o,{method:"POST",body:r}),s=await c.json();if(console.log(s),a(s.mensaje,s.tipo,document.querySelector(".formulario legend")),"exito"===s.tipo){const a=document.querySelector(".modal");setTimeout(()=>{a.remove()},3e3);const o={id:String(s.id),nombre:n,estado:"0",proyectoId:s.proyectoId};e=[...e,o],t()}}catch(e){console.log(e)}}(n)}()})),document.querySelector(".dashboard").appendChild(n)}))}();