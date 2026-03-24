// Dados dos Cavaleiros de Ouro e seus signos
const cavaleiros = {
    aries: {
        nome: "Mû de Áries",
        signo: "♈ Áries (21/03 - 19/04)",
        descricao: "Ataque frontal do carro de guerra celestial. Cosmo explosivo e poder destrutivo incomparável.",
        emoji: "🐏",
        poder: "Explosion Carina"
    },
    touro: {
        nome: "Aldebaran de Touro",
        signo: "♉ Touro (20/04 - 20/05)",
        descricao: "Defesa intransponível e força bruta irresistível. Seu escudo não pode ser penetrado.",
        emoji: "🐂",
        poder: "Grande Chifre"
    },
    gemeos: {
        nome: "Saga de Gêmeos",
        signo: "♊ Gêmeos (21/05 - 20/06)",
        descricao: "Velocidade vertiginosa e ataque simultâneo de dois lados. Técnicas de luta aprimoradas.",
        emoji: "👯",
        poder: "Gold Saint Ressorección"
    },
    cancer: {
        nome: "Máscara da Morte de Câncer",
        signo: "♋ Câncer (21/06 - 22/07)",
        descricao: "Regeneração infinita e poder de ressurreição. Imortal e inesgotável.",
        emoji: "🦀",
        poder: "Ressurreición"
    },
    leao: {
        nome: "Aiolia de Leão",
        signo: "♌ Leão (23/07 - 22/08)",
        descricao: "Poder solar absoluto. Rei indiscutível com cosmo brilhante como o ouro.",
        emoji: "🦁",
        poder: "Railgun"
    },
    virgem: {
        nome: "Shaka de Virgem",
        signo: "♍ Virgem (23/08 - 22/09)",
        descricao: "Ilusões e trabalho psíquico perfeito. Equilibra yin e yang em harmonia total.",
        emoji: "👩",
        poder: "Tenma Kofuku"
    },
    libra: {
        nome: "Dohko de Libra",
        signo: "♎ Libra (23/09 - 22/10)",
        descricao: "Equilíbrio perfeito entre ofensiva e defensiva. Sabedoria e tempo estão ao seu lado.",
        emoji: "⚖️",
        poder: "Reversal of Time"
    },
    escorpiao: {
        nome: "Milo de Escorpião",
        signo: "♏ Escorpião (23/10 - 21/11)",
        descricao: "Velocidade letal e técnica mortal. Seu veneno dissolve até mesmo armaduras de ouro.",
        emoji: "🦂",
        poder: "Antares Chaos"
    },
    sagitario: {
        nome: "Aiolos de Sagitário",
        signo: "♐ Sagitário (22/11 - 21/12)",
        descricao: "Flechas de luz e precisão absoluta. Fogo e velocidade combinados em perfeição.",
        emoji: "🏹",
        poder: "Phoebus Catastrophe"
    },
    capricornio: {
        nome: "Shura de Capricórnio",
        signo: "♑ Capricórnio (22/12 - 19/01)",
        descricao: "Espada e técnica lendária. Guerreiro inabalável com karmá absoluto.",
        emoji: "🐐",
        poder: "Heavens-Shaking Star Shattering Strike"
    },
    aquario: {
        nome: "Camus de Aquário",
        signo: "♒ Aquário (20/01 - 18/02)",
        descricao: "Gelo absoluto e conhecimento místico. Freezer aquático é seu poder derradeiro.",
        emoji: "💧",
        poder: "Aurora Execution"
    },
    peixes: {
        nome: "Afrodite de Peixes",
        signo: "♓ Peixes (19/02 - 20/03)",
        descricao: "Flores envenenadas e ilusões florais. Beleza e morte em uma única armadura.",
        emoji: "🐠",
        poder: "Piranha Rose"
    }
};

// Função para determinar em qual intervalo a data se encaixa
function obterSigno(dia, mes) {
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "touro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "gemeos";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "cancer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "leao";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "virgem";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "escorpiao";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "capricornio";
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "aquario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "peixes";
}

// Função para exibir o cavaleiro
function exibirCavaleiro(signo) {
    const cavaleiro = cavaleiros[signo];
    
    if (!cavaleiro) {
        alert("Data inválida!");
        return;
    }

    document.getElementById("nomeCavaleiro").textContent = cavaleiro.nome;
    document.getElementById("sinalZodiaco").textContent = cavaleiro.signo;
    document.getElementById("descricaoPoder").textContent = cavaleiro.descricao;
    document.getElementById("statusVida").textContent = `⚡ Poder Especial: ${cavaleiro.poder}`;
    document.getElementById("imagemCavaleiro").textContent = cavaleiro.emoji;

    document.getElementById("resultado").classList.remove("hidden");
}

// Evento do botão Descobrir
document.getElementById("btnDescobrir").addEventListener("click", function() {
    const inputData = document.getElementById("dataNascimento").value;

    if (!inputData) {
        alert("Por favor, digite sua data de nascimento!");
        return;
    }

    // Converter a data do input
    const [ano, mes, dia] = inputData.split("-").map(Number);

    // Obter o signo
    const signo = obterSigno(dia, mes);

    if (signo) {
        exibirCavaleiro(signo);
    } else {
        alert("Data inválida!");
    }
});

// Permitir Enter para enviar
document.getElementById("dataNascimento").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("btnDescobrir").click();
    }
});
