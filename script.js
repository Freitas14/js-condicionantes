function mostrarNome() {
    // Obter os valores selecionados para mês e dia
    const mes = parseInt(document.getElementById("mes").value);
    const dia = parseInt(document.getElementById("dia").value);
  
    // Mapeamento de meses para nomes
    const nomesMes = {
      1: "bugado(a)",
      2: "do CTRL C, CTRL V",
      3: "das gambiarras",
      4: "que culpa o cache",
      5: "que esquece o que faz",
      6: "do git vazio",
      7: "das try/catch vazia",
      8: "famosinho do linkedin",
      9: "caçador de bugs",
      10: "do windows pirata",
      11: "do update sem where",
      12: "do commit bugado"
    };
  
    // Determinar o nome baseado no mês
    const nomeMes = nomesMes[mes] || "Mês inválido!";
  
    // Determinar o nome baseado no dia
    let nomeDia = "";
    if (dia >= 1 && dia <= 8) {
      nomeDia = "Desenvolvedor(a)";
    } else if (dia >= 9 && dia <= 18) {
      nomeDia = "Programador(a)";
    } else if (dia >= 19 && dia <= 26) {
      nomeDia = "Estagiário(a)";
    } else if (dia >= 27 && dia <= 31) {
      nomeDia = "Sênior(a)";
    } else {
      nomeDia = "Dia inválido!";
    }
  
    // Combinar os resultados
    const nomeCompleto = `${nomeDia} ${nomeMes}`;
  
    // Mostrar o nome no parágrafo
    document.getElementById("resultado").textContent = ` ${nomeCompleto}.`;
  }
  