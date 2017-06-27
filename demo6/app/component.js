export default (text = 'hello word!') => {
  const element = document.createElement('div');
  element.innerHTML = text;

  return element;
};