document.querySelector("#agregar-tarea").addEventListener("click",(function(){const e=document.createElement("DIV");e.classList.add("modal"),e.innerHTML='\n            <form class="formulario nueva-tarea" action="">\n                <legend>Añade una nueva tarea</legend>\n                <div class="campo">\n                    <label htmlFor="">Tarea</label>\n                    <input type="text" name="tarea" placeholder="Añadir Tarea al Proyecto Actual" id="tarea" />\n                </div>\n                <div class="opciones">\n                    <input type="submit" class="submit-nueva-tarea" value="Añadir tarea" />\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),e.addEventListener("click",(function(t){t.preventDefault(),t.target.classList.contains("cerrar-modal")&&(document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{e.remove()},500)),t.target.classList.contains("submit-nueva-tarea")&&function(){const e=document.querySelector("#tarea").value.trim();""===e&&function(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const r=document.createElement("DIV");r.classList.add("alerta",t),r.textContent=e,a.parentElement.insertBefore(r,a.nextElementSibling),setTimeout(()=>{r.remove()},3e3)}("El nombre de la tarea es obligatorio","error",document.querySelector(".formulario legend")),async function(e){const t=new FormData;t.append("nombre",e);try{const e="http://localhost:3000/api/tarea",a=(await fetch(e,{method:"POST",body:t})).json();console.log(a)}catch(e){console.log(e)}}(e)}()})),document.querySelector(".dashboard").appendChild(e)}));