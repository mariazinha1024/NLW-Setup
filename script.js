//array é uma estrutura de dados, uma sequencia de vários dados. Diferente de uma varável, que só recebe um dado.

const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

//---- EVENTOS ---- os clicks e em seguida para salvar
button.addEventListener("click", add)
form.addEventListener("change", save)

// criar uma nova data + transformar pt-br + recorte da data + if se existe ou nn
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Esse dia já existe! 🌼")
    return
  }
  nlwSetup.addDay(today)
}

//informações salvas no localStorage que guarda no navegador, especificamente no navegador q há no seu dispositivo
function save() {
  //converte em texto
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//vai converter em objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
