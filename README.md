# Matrícula Arrematador 360

Página de vendas do Arrematador 360. Fica antes do checkout da Hubla.

## Links dos vendedores

Cada vendedor tem um código. O link dele é a página com `?v=codigo` no final.

Exemplo: `https://SEU-DOMINIO/?v=joao`

- Os botões "Quero entrar" levam para o checkout da Hubla daquele vendedor.
- Os botões "Falar com um especialista" abrem o WhatsApp do vendedor, se ele tiver número cadastrado.
- O vendedor fica salvo por 30 dias no navegador do lead.
- Os parâmetros `utm_*` do link são repassados para o checkout.

## Onde cadastrar

Tudo fica no arquivo `vendedores.js`. Para incluir, trocar ou tirar um vendedor, edite esse arquivo e publique.

## Redirects do WordPress

Os links curtos que os vendedores já usam continuam iguais. Só muda o destino:

- Antes: link do vendedor → checkout da Hubla
- Agora: link do vendedor → `https://SEU-DOMINIO/?v=codigo`

Importante: os botões desta página apontam direto para a Hubla. Nunca aponte um link desta página para um redirect do WordPress que volta para ela, senão o lead fica preso em um loop.
