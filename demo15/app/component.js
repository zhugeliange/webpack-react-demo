export default (text = 'hello word!', class1, class2) => {
  const element = document.createElement('div');
  element.innerHTML = text;
  element.className = class1;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.innerText = 'this is p!';
  input.className = class2;
  element.appendChild(input);

  return element;
};