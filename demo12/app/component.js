export default (text = 'hello word!', class1, class2) => {
  const element = document.createElement('div');
  element.innerHTML = text;
  element.className = class1;

  const p = document.createElement('p');
  p.innerText = 'this is p!';
  p.className = class2;
  element.appendChild(p);

  return element;
};