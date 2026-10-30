/* =========================================================
   VENDEDORES DA PÁGINA DE MATRÍCULA DO ARREMATADOR 360

   Como funciona
   - O link de cada vendedor é a página com ?v=CODIGO no final.
     Exemplo: https://SEU-DOMINIO/?v=joao
   - Quando o lead abre esse link, todos os botões "Quero entrar"
     da página passam a levar para o checkout da Hubla DESSE vendedor.
   - Os botões "Falar com um especialista" abrem o WhatsApp do vendedor
     (se ele tiver número cadastrado aqui).
   - A página guarda o vendedor por 30 dias no navegador do lead.
     Se ele voltar depois sem o ?v=, a venda continua com o mesmo vendedor.
   - Quem chega sem ?v= vai para o checkout padrão.

   Para adicionar um vendedor: copie uma linha, troque o código,
   o nome, o link do checkout e o WhatsApp. Salve e publique.
   O código vai no link, então use letras minúsculas, sem espaço e sem acento.
   ========================================================= */

window.MATRICULA = {
  // Checkout padrão, para quem chega sem código de vendedor
  checkoutPadrao: "COLE_AQUI_O_LINK_DO_CHECKOUT_PADRAO_DA_HUBLA",
  // WhatsApp padrão do comercial (só números, com 55 e DDD)
  whatsappPadrao: "5519996697060",
  mensagemWhatsapp: "Quero saber mais sobre o Arrematador 360",

  vendedores: {
    // codigo:   { nome: "Nome", checkout: "link do checkout da Hubla do vendedor", whatsapp: "5519999999999" },
    "exemplo":   { nome: "Vendedor Exemplo", checkout: "COLE_AQUI_O_CHECKOUT_DO_VENDEDOR", whatsapp: "" },
  }
};
