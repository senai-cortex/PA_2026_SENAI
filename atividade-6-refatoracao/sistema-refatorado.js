// sistema-refatorado.js
// gerenciador de playlist de musicas

var playlist = []
var duracaoTotalSegundos = 0
var ultimoRelatorio = ""



// converte minutos e segundos pra total de segundos
function converterParaSegundos(minutos, segundos) {
  var totalSegundos = minutos * 60 + segundos
  return totalSegundos
}

// formata os segundos no formato minuto:segundo tipo 3:05
function formatarSegundos(totalSegundos) {
  var minutos = Math.floor(totalSegundos / 60)
  var segundos = totalSegundos % 60
  if (segundos < 10) {
    return minutos + ":0" + segundos
  }
  return minutos + ":" + segundos
}

// procura uma musica pelo nome na lista e retorna ela se achar
function buscarMusicaPorNome(lista, nome) {
  var resultado = null
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].nome == nome) {
      resultado = lista[i]
    }
  }
  return resultado
}

// verifica se o valor e numero e ta entre 0 e 100
function validarNota(valor) {
  if (valor == null) return false
  if (valor < 0) return false
  if (valor > 100) return false
  if (typeof valor !== "number") return false
  return true
}

// soma a duracao de todas as musicas e salva na variavel global
function calcularDuracaoTotal(lista) {
  var total = 0
  for (var i = 0; i < lista.length; i++) {
    total = total + lista[i].duracao
  }
  duracaoTotalSegundos = total
  return total
}

// marca ou desmarca uma musica como favorita pelo indice
function alternarFavorita(indice) {
  if (indice >= 0 && indice < playlist.length) {
    playlist[indice].fav = !playlist[indice].fav
  }
}

// filtra as musicas por qualquer propriedade que eu passar tipo artista ou genero
function filtrarPorPropriedade(lista, propriedade, valor) {
  var resultado = []
  for (var i = 0; i < lista.length; i++) {
    if (lista[i][propriedade] == valor) {
      resultado.push(lista[i])
    }
  }
  return resultado
}

// conta quantas musicas estao marcadas como favoritas
function contarFavoritas(lista) {
  var total = 0
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].fav == true) {
      total = total + 1
    }
  }
  return total
}

// retorna a lista ordenada em ordem alfabetica pelo nome da musica
function ordenarPorNome(lista) {
  var copia = lista.slice()
  copia.sort(function (x, y) {
    if (x.nome < y.nome) return -1
    if (x.nome > y.nome) return 1
    return 0
  })
  return copia
}

// troca duas musicas de lugar na lista
function trocarPosicoes(lista, posicao1, posicao2) {
  if (posicao1 < 0 || posicao1 >= lista.length) return
  if (posicao2 < 0 || posicao2 >= lista.length) return
  var temporario = lista[posicao1]
  lista[posicao1] = lista[posicao2]
  lista[posicao2] = temporario
}

// retorna so as musicas que tem duracao menor ou igual ao limite
function filtrarPorDuracaoMaxima(lista, duracaoMaxima) {
  var resultado = []
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].duracao <= duracaoMaxima) {
      resultado.push(lista[i])
    }
  }
  return resultado
}

// cria uma musica nova e adiciona na playlist
function adicionarMusica(nome, artista, genero, minutos, segundos) {
  var musica = {}
  musica.nome = nome
  musica.artista = artista
  musica.genero = genero
  musica.duracao = converterParaSegundos(minutos, segundos)
  musica.fav = false
  playlist.push(musica)
}


// mostra as musicas na tela atualizando os elementos do HTML
function mostrarPlaylist() {
  for (var i = 0; i < playlist.length; i++) {
    var musica = playlist[i]
    var texto = musica.nome + " - " + musica.artista + " (" + formatarSegundos(musica.duracao) + ")"
    document.getElementById('musica' + i).innerHTML = texto
  }
}


// gera o relatorio completo com total de musicas favoritas e duracao
function gerarRelatorio() {
  var texto = ""
  texto = texto + "=== RELATORIO DA PLAYLIST ===\n"
  texto = texto + "Total de musicas: " + playlist.length + "\n"
  texto = texto + "Favoritas: " + contarFavoritas(playlist) + "\n"
  texto = texto + "Duracao total: " + formatarSegundos(calcularDuracaoTotal(playlist)) + "\n"
  texto = texto + "\n"
  for (var i = 0; i < playlist.length; i++) {
    var favorito = ""
    if (playlist[i].fav == true) {
      favorito = " [FAVORITA]"
    }
    texto = texto + (i + 1) + ". " + playlist[i].nome + " - " + playlist[i].artista + " (" + formatarSegundos(playlist[i].duracao) + ")" + favorito + "\n"
  }
  ultimoRelatorio = texto
  console.log(texto)
  return texto
}
