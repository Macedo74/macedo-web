
const ano = document.getElementById("ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}

// Troque pelo número oficial da Macedo Web antes de divulgar.
const numeroWhatsApp = "5541998274698";

const formulario = document.getElementById("form-contato");

if (formulario) {
  formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
      `Olá! Meu nome é ${nome}.\n` +
      `Meu e-mail: ${email}\n` +
      `Serviço: ${servico}\n` +
      `Mensagem: ${mensagem}`;

    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
  });
}
