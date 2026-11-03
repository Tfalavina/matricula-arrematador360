# Matrícula Arrematador 360

Página de vendas do Arrematador 360. Fica antes do checkout da Hubla.

## Links dos vendedores

Cada link do WordPress tem um código, que é o final dele sem `matricula-360-`. O redirect aponta para a página com `?c=codigo`.

Exemplo: `brunolucarelli.com.br/matricula-360-com-gnz` → `https://matricula.arrematador.com/?c=com-gnz`

A tabela completa está em `redirects-wordpress.csv`.

- Os botões "Quero entrar" levam para o checkout da Hubla daquele vendedor.
- Os botões "Falar com um especialista" abrem o WhatsApp do comercial.
- Link da live: `brunolucarelli.com.br/matricula-360` → `https://matricula.arrematador.com/?c=live`. Sem código ou com `?c=live`, os botões vão para o checkout da live com o cupom 360BLACK.
- Vale o primeiro acesso. A origem (live ou vendedor) fica salva por 30 dias no navegador do lead e não é trocada por outro link depois. Para testar do zero, use `?reset=1`.
- Os parâmetros `utm_*` do link são repassados para o checkout.

## Onde cadastrar

Tudo fica no arquivo `vendedores.js`. Para incluir, trocar ou tirar um link, edite esse arquivo e publique.

## Redirects do WordPress

Os links curtos que os vendedores já usam continuam iguais. Só muda o destino:

- Antes: link do vendedor → checkout da Hubla
- Agora: link do vendedor → `https://matricula.arrematador.com/?c=codigo`

Importante: os botões desta página apontam direto para a Hubla. Nunca aponte um link desta página para um redirect do WordPress que volta para ela, senão o lead fica preso em um loop.
