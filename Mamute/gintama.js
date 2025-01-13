// Função para inicializar os saldos e histórico
function inicializar() {
    // Carregar os dados do localStorage ou definir valores iniciais
    if (localStorage.getItem('saldoCredito') === null) {
        localStorage.setItem('saldoCredito', 258.91); // Exemplo de valor inicial
    }
    if (localStorage.getItem('saldoContaCorrente') === null) {
        localStorage.setItem('saldoContaCorrente', 42,43); // Exemplo de valor inicial
    }
    if (localStorage.getItem('saldoPoupanca') === null) {
        localStorage.setItem('saldoPoupanca', 107,76); // Exemplo de valor inicial
    }
    if (localStorage.getItem('historicoGastos') === null) {
        localStorage.setItem('historicoGastos', JSON.stringify([])); // Inicializando o histórico vazio
    }

    // Atualizar os saldos a partir do localStorage
    saldoCredito = parseFloat(localStorage.getItem('saldoCredito'));
    saldoContaCorrente = parseFloat(localStorage.getItem('saldoContaCorrente'));
    saldoPoupanca = parseFloat(localStorage.getItem('saldoPoupanca'));

    // Atualizar o histórico
    historicoGastos = JSON.parse(localStorage.getItem('historicoGastos'));

    // Atualizar os saldos na página
    atualizarSaldos();

    // Atualizar o histórico de gastos na página
    atualizarHistorico();
}

// Função para atualizar os valores na página
function atualizarSaldos() {
    document.getElementById('credito').innerText = saldoCredito.toFixed(2);
    document.getElementById('contaCorrente').innerText = saldoContaCorrente.toFixed(2);
    document.getElementById('poupanca').innerText = saldoPoupanca.toFixed(2);
}

// Função para registrar o gasto
function registrarGasto() {
    const valor = parseFloat(document.getElementById('valor').value);
    const origem = document.getElementById('origem').value;

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    let tipoGasto = "";
    if (origem === "credito") {
        saldoCredito += valor;
        tipoGasto = "Cartão de Crédito";
    } else if (origem === "debito") {
        saldoContaCorrente -= valor;
        tipoGasto = "Conta Corrente";
    } else if (origem === "poupanca") {
        saldoPoupanca -= valor;
        tipoGasto = "Poupança";
    }

    // Adicionando o gasto no histórico
    const gasto = {
        valor: valor,
        tipo: tipoGasto,
        data: new Date().toLocaleString()
    };
    historicoGastos.push(gasto);

    // Salvar os novos valores no localStorage
    localStorage.setItem('saldoCredito', saldoCredito);
    localStorage.setItem('saldoContaCorrente', saldoContaCorrente);
    localStorage.setItem('saldoPoupanca', saldoPoupanca);
    localStorage.setItem('historicoGastos', JSON.stringify(historicoGastos));

    // Atualizando os saldos e o histórico na tela
    atualizarSaldos();
    atualizarHistorico();
}

// Função para atualizar o histórico na tela
function atualizarHistorico() {
    const historico = document.getElementById('historicoGastos');
    historico.innerHTML = ''; // Limpar o histórico atual

    historicoGastos.forEach(gasto => {
        const gastoElement = document.createElement('li');
        gastoElement.textContent = `Gasto de R$${gasto.valor.toFixed(2)} de ${gasto.tipo} em ${gasto.data}`;
        historico.appendChild(gastoElement);
    });
}

// Função para limpar todos os dados
function limparTudo() {
    if (confirm("Tem certeza que deseja limpar todos os dados?")) {
        // Limpar os dados do localStorage
        localStorage.removeItem('saldoCredito');
        localStorage.removeItem('saldoContaCorrente');
        localStorage.removeItem('saldoPoupanca');
        localStorage.removeItem('historicoGastos');

        // Reiniciar a página com os valores iniciais
        inicializar();
    }
}

// Função para verificar a senha
function verificarSenha() {
    const senha = document.getElementById('senha').value;
    const senhaCorreta = 'mamute'; // Defina sua senha simples aqui

    if (senha === senhaCorreta) {
        // Esconder a tela de acesso e mostrar a tela de controle
        document.getElementById('acesso').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
        inicializar();
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}

// Variáveis de controle de saldo
let saldoCredito = 0;
let saldoContaCorrente = 0;
let saldoPoupanca = 0;
let historicoGastos = [];

// Inicializar os dados quando a página for carregada
window.onload = function() {
    document.getElementById('conteudo').style.display = 'none'; // Esconder conteúdo até a senha ser verificada
};
