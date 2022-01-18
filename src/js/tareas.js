(function () {
    // Botón para mostrar el Modal Agregar Tarea
    const nuevaTareaBtn = document.querySelector('#agregar-tarea');
    nuevaTareaBtn.addEventListener('click', mostrarFormulario);

    function mostrarFormulario() {
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
            <form class="formulario nueva-tarea" action="">
                <legend>Añade una nueva tarea</legend>
                <div className="campo">
                    <label htmlFor="">Tarea</label>
                    <input type="text" name="tarea" placeholder="Añadir Tarea al Proyecto Actual" id="tarea" />
                </div>
                <div className="opciones">
                    <input type="submit" class="submit-nueva.tarea" value="Añadir tarea" />
                    <button type="button" class="Cerrar Modal">Cancelar</button>
                </div>
            </form>
        `;
        document.querySelector('body').appendChild(modal);
    }
})();