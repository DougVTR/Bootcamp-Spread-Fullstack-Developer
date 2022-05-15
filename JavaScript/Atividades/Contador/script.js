const form = document.getElementById('formulario');
const listaTarefas = document.getElementById('tarefas');

form.onsubmit = function (enviar) {
	enviar.preventDefault();
	const inputField = document.getElementById('tarefa');
	addTarefa(inputField.value);
	form.reset();
};

function addTarefa(description) {
	const containerTarefa = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const labelTarefa = document.createElement('label');
	const descricaoTarefa = document.createTextNode(description);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', description);
	novaTarefa.setAttribute('id', description);
	novaTarefa.setAttribute('onclick', 'visto()');

	labelTarefa.setAttribute('for', description);
	labelTarefa.appendChild(descricaoTarefa);

	containerTarefa.classList.add('task-item');
	containerTarefa.appendChild(novaTarefa);
	containerTarefa.appendChild(labelTarefa);

	listaTarefas.appendChild(containerTarefa);
}
