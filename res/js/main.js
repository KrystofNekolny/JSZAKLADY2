    const send = document.getElementById("send");
    const input = document.getElementById("input");
    const content = document.getElementById("content");

  send.onmouseover = () => {
    const inputValue = input.value;
    content.innerHTML += `<button>${inputValue}</button>`;
    content.style.backgroundColor = inputValue;
    content.onmouseover = inputValue;
  }
  send.onclick = () => {
    changeColor();
  }

  content.onmouseover = () => {
    changeColor();
  }