let numeroAleatorio = 0;
let tentativas = 0;
let limite = 10;

function setDificuldade(max) {
	limite = max;
	numeroAleatorio = Math.floor(Math.random() * limite) + 1;
	tentativas = 0; 
	document.getElementById('res').innerHTML = `Dificuldade definida: 1 a ${limite}. Você tem 3 tentativas!`;
}

function verificar() {
	if (!numeroAleatorio) {
		alert("Escolha uma dificuldade antes de começar!");
		return;
	}

	let numeroUsuario = parseInt(document.getElementById('inputNumero').value);
	let res = document.getElementById('res');

	if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > limite) {
		res.innerHTML = `Por favor, insira um número válido entre 1 e ${limite}.`;
		return;
	}

	tentativas++;
	if (numeroUsuario === numeroAleatorio) {
		res.innerHTML = `Parabéns! Você acertou! O número era ${numeroAleatorio}. Reiniciando...`;
		document.body.style.background = '#05c46b';
		resetarJogo();
	} else if (tentativas >= 3) {
		res.innerHTML = `Você esgotou suas 3 tentativas! O número era ${numeroAleatorio}. Reiniciando...`;
		document.body.style.background = '#ff4757';
		resetarJogo();
	} else if (Math.abs(numeroUsuario - numeroAleatorio) >= limite / 4) {
		res.innerHTML = `Muito longe! O número é ${numeroUsuario > numeroAleatorio ? 'menor' : 'maior'}. Tentativa ${tentativas}/3.`;
		document.body.style.background = '#f39c12';
	} else {
		res.innerHTML = `Está perto, mas é um pouco ${numeroUsuario > numeroAleatorio ? 'menor' : 'maior'}. Tentativa ${tentativas}/3.`;
		document.body.style.background = '#ff7f50';
	}
}

function resetarJogo() {
	numeroAleatorio = Math.floor(Math.random() * limite) + 1;
	tentativas = 0;
	setTimeout(() => {
		document.body.style.background = '#f1f1f1';
		document.getElementById('res').innerHTML = `Novo número gerado! Dificuldade: 1 a ${limite}.`;
	}, 5000);
}