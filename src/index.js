const url = "./contatos.json";

fetch(url)
  .then(res => res.json())
  .then(data => {
    /*
    ao invés de usar for de 0 à <4 você pode usar forEach
    que vai fazer um loop no array que você passar, nesse
    caso o array é 'data.clients'.
    */
    data.clients.forEach(client => {
      let list = document.querySelector(".res");
      let dados = document.createElement("li");
      dados.textContent = client.name;
      list.appendChild(dados);
    });
  });

const addNewClient = function() {
  const list = document.querySelector(".res");
  const name = document.querySelector("#text1").value;
  if (name && name !== "") {
    const newClient = document.createElement("li");
    newClient.textContent = name;
    list.appendChild(newClient);
  }
};

const removeClient = function() {
  const links = document.getElementsByTagName("li");
  const removeBt = document.createElement("a");
  removeBt.textContent = "remove";
  links.appendChild(removeBt);
};
/*
Agora basta chamar a função toda vez que o usuário clicar
no botão 'Checar dados'. Para fazer isso basta adicionar
um evento no click no botão.
*/
const btCheck = document.querySelector("#btCheck");
btCheck.addEventListener("click", addNewClient);
