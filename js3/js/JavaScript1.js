var doc = document,
	body = doc.getElementsByTagName('body'),
	center = doc.createElement('div'),
	wrapper = doc.createElement('div'),
	h2 = doc.createElement('h2'),
	h4 = doc.createElement('h4'),
	form = doc.createElement('form'),
	item = doc.createElement('div'),
	checks = doc.createElement('div'),
	checkbox = doc.createElement('div'),
	label = doc.createElement('label'),
	input = doc.createElement('input'),
	button = doc.createElement('button');

center.classList.add('center');
wrapper.classList.add('wrapper');
h2.innerHTML = 'Тест по программированию';
item.classList.add('item');
checks.classList.add('checks');
checkbox.classList.add('checkbox');
input.type = "checkbox";
button.type = "submit";
button.classList.add('btn', 'btn-default');
button.innerHTML = 'Проверить мои результаты';

body[0].appendChild(center);
center.appendChild(wrapper);
wrapper.appendChild(h2);
wrapper.appendChild(form);
for (var i = 0; i < 3; i++) {
    form.appendChild(item.cloneNode(true)).appendChild(h4.cloneNode(true)).innerHTML = (i + 1) + '. Вопрос №' + (i + 1);
}
label.appendChild(input.cloneNode(true));
for (var i = 0; i < 3; i++) {
    checks.appendChild(checkbox.cloneNode(true)).appendChild(label.cloneNode(true)).appendChild(doc.createTextNode('Вариант ответа №' + (i + 1)));
}
for (var i = 0; i < form.children.length; i++) {
    form.children[i].appendChild(checks.cloneNode(true));
}
form.appendChild(button);