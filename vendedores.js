/* =========================================================
   LINKS DOS VENDEDORES, PÁGINA DE MATRÍCULA DO ARREMATADOR 360

   Como funciona
   - Cada link do WordPress (ex.: brunolucarelli.com.br/matricula-360-com-gnz)
     redireciona para esta página com o código no final:
       https://matricula.arrematador.com/?c=com-gnz
   - A página lê o código e faz todos os botões "Quero entrar" irem
     para o checkout da Hubla daquele código, com as UTMs dele.
   - Vale o PRIMEIRO acesso: o código fica salvo por 30 dias no navegador
     do lead e não é trocado por outro link depois.
     Ex.: o lead entrou pela live; se depois um vendedor mandar o link dele,
     a venda continua como live. E vice-versa.
   - Quem chega pela live (?c=live) ou sem código vai para o checkout padrão.
   - Para testar do zero, abra a página com ?reset=1

   Para incluir um link novo: copie uma linha, troque o código
   (o final do link do WordPress, sem "matricula-360-"), o vendedor,
   a oferta e o checkout completo com UTM. Salve e publique.
   ========================================================= */

window.MATRICULA = {
  // Checkout padrão: live, já com o cupom 360BLACK
  // Vale para quem chega com ?c=live ou sem código nenhum
  checkoutPadrao: "https://pay.hub.la/IZRWRBGDT9MS0Cv9UTE2?coupon=360BLACK&src=trafego-organico&utm_source=ao-vivo&utm_medium=org_live&utm_campaign=LMAR26&utm_term=mentoria_org",
  // WhatsApp dos botões "Falar com um especialista"
  whatsapp: "5519996697060",
  mensagemWhatsapp: "Quero saber mais sobre o Arrematador 360",

  links: {
    // 12 meses comercial (Black e live)
    "com-gnz":  { vendedor: "Genilza", oferta: "12M comercial", checkout: "https://pay.hub.la/IZRWRBGDT9MS0Cv9UTE2?src=organico2611_T26-ckt-comercial-gnz&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_gnz" },
    "com-gby":  { vendedor: "Gaby", oferta: "12M comercial", checkout: "https://pay.hub.la/kgjRtCTkwWjcMftWolUh?src=organico2611_T26-ckt-comercial-gby&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_gby" },
    "com-r":    { vendedor: "Rudnei", oferta: "12M comercial", checkout: "https://pay.hub.la/uIUSWzBpvFGZiX12mOEG?src=organico2611_T26-ckt-comercial-r&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_r" },
    "com-krn":  { vendedor: "Karine", oferta: "12M comercial", checkout: "https://pay.hub.la/WfDjIe55AC7tKNl37FRP?src=organico2611_T26-ckt-comercial-krn&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_krn" },
    "com-ths":  { vendedor: "Thais", oferta: "12M comercial", checkout: "https://pay.hub.la/pvmHZhycm7Otpxj5zArP?src=organico2611_T26-ckt-comercial-ths&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_ths" },
    "com-mn":   { vendedor: "Manu", oferta: "12M comercial", checkout: "https://pay.hub.la/6vueKTBNaNcS5dFMKP7Z?src=organico2611_T26-ckt-comercial-mn&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_mn" },
    "com-ts":   { vendedor: "Thais Souza", oferta: "12M comercial", checkout: "https://pay.hub.la/WpsMMO0QGl3P142NtEtZ?src=organico2611_T26-ckt-comercial-ts&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_ts" },
    "com-wil":  { vendedor: "Willian", oferta: "12M comercial", checkout: "https://pay.hub.la/FJRZ3ULCVLLiQaBqeJ3O?src=organico2611_T26-ckt-comercial-wil&utm_source=comercial&utm_medium=org_com&utm_campaign=2611_T26&utm_term=360_wil" },

    // 6 meses comercial
    "com2-gnz": { vendedor: "Genilza", oferta: "6M comercial", checkout: "https://pay.hub.la/NW6pjlSn6PwOOarmMB0B?src=organico2801_T24-ckt2-comercial-gnz&utm_source=comercial&utm_medium=org_com&utm_campaign=2801_T24&utm_term=360_gnz" },
    "com2-gby": { vendedor: "Gaby", oferta: "6M comercial", checkout: "https://pay.hub.la/ccMJ5jSjO0WtT5oRIg6K?src=organico2801_T24-ckt2-comercial-gby&utm_source=comercial&utm_medium=org_com&utm_campaign=2801_T24&utm_term=360_gby" },
    "com2-cml": { vendedor: "Camila", oferta: "6M comercial", checkout: "https://brunolucarelli.com.br/CKT2?src=organico2801_T24-ckt2-comercial-cml&utm_source=comercial&utm_medium=org_com&utm_campaign=2801_T24&utm_term=360_cml" },
    "com2-krn": { vendedor: "Karine", oferta: "6M comercial", checkout: "https://pay.hub.la/P22Q3EeX2hDHk8FSixpY?src=organico2801_T24-ckt2-comercial-krn&utm_source=comercial&utm_medium=org_com&utm_campaign=2801_T24&utm_term=360_krn" },
    "com2-ths": { vendedor: "Thais", oferta: "6M comercial", checkout: "https://pay.hub.la/3NCMoZL5E4ePy5SVJGNa?src=organico2801_T24-ckt2-comercial-ths&utm_source=comercial&utm_medium=org_com&utm_campaign=2801_T24&utm_term=360_ths" },

    // 6 meses perpétuo (orgânico)
    "per2-gnz": { vendedor: "Genilza", oferta: "6M perpétuo", checkout: "https://pay.hub.la/YxAnzcXiTZRW5veROsOl?src=organico2801_T24-cktp2-comercial-gnz&utm_source=comercial&utm_medium=org_per2&utm_campaign=2801_T24&utm_term=360_gnz" },
    "per2-gby": { vendedor: "Gaby", oferta: "6M perpétuo", checkout: "https://pay.hub.la/g87RflN27NQF0MtNI52W?src=organico2801_T24-cktp2-comercial-gby&utm_source=comercial&utm_medium=org_per2&utm_campaign=2801_T24&utm_term=360_gby" },
    "per2-r":   { vendedor: "Rudnei", oferta: "6M perpétuo", checkout: "https://pay.hub.la/DByIOXX72FIYnFHRwU07?src=organico2801_T24-ckt2-comercial-r&utm_source=comercial&utm_medium=org_per2&utm_campaign=2801_T24&utm_term=360_r" },
    "per2-krn": { vendedor: "Karine", oferta: "6M perpétuo", checkout: "https://pay.hub.la/eoPDPemCsgYoC4qgjrb3?src=organico2801_T24-cktp2-comercial-krn&utm_source=comercial&utm_medium=org_per2&utm_campaign=2801_T24&utm_term=360_krn" },
    "per2-ths": { vendedor: "Thais", oferta: "6M perpétuo", checkout: "https://pay.hub.la/nS2bKtQWRsRb1mxgKRhc?src=organico2801_T24-cktp2-comercial-ths&utm_source=comercial&utm_medium=org_per2&utm_campaign=2801_T24&utm_term=360_ths" },

    // 12 meses perpétuo (orgânico)
    "per-gnz":  { vendedor: "Genilza", oferta: "12M perpétuo", checkout: "https://pay.hub.la/wV07OHQxCV9eJ9n5dpyP?src=organico2611_T26-cktp-comercial-gnz&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_gnz" },
    "per-gby":  { vendedor: "Gaby", oferta: "12M perpétuo", checkout: "https://pay.hub.la/EWBZerE0tsfJokBTSfbV?src=organico2611_T26-cktp-comercial-gby&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_gby" },
    "per-r":    { vendedor: "Rudnei", oferta: "12M perpétuo", checkout: "https://pay.hub.la/DByIOXX72FIYnFHRwU07?src=organico2611_T26-ckt-comercial-r&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_r" },
    "per-krn":  { vendedor: "Karine", oferta: "12M perpétuo", checkout: "https://pay.hub.la/fEFHb9raynQMcFt5TyMi?src=organico2611_T26-cktp-comercial-krn&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_krn" },
    "per-ths":  { vendedor: "Thais", oferta: "12M perpétuo", checkout: "https://pay.hub.la/4xXrxjc8w7x5O3KD1Ev6?src=organico2611_T26-cktp-comercial-ths&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_ths" },
    "per-mn":   { vendedor: "Manu", oferta: "12M perpétuo", checkout: "https://pay.hub.la/PylMo1abDAsvZrSjRmOZ?src=organico2611_T26-cktp-comercial-mn&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_mn" },
    "per-ts":   { vendedor: "Thais Souza", oferta: "12M perpétuo", checkout: "https://pay.hub.la/dde9jugwLCmFX86wtqqR?src=organico2611_T26-cktp-comercial-ts&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_ts" },
    "per-wil":  { vendedor: "Willian", oferta: "12M perpétuo", checkout: "https://pay.hub.la/ysSPFwynARrrjGxBVh4t?src=organico2611_T26-cktp-comercial-wil&utm_source=comercial&utm_medium=org_per&utm_campaign=2611_T26&utm_term=360_wil" },
  }
};
