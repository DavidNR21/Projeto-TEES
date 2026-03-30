# language: pt
Funcionalidade: Fluxo de Compra para o teste

História: Como usuário do e-commerce, quero gerenciar meu carrinho e finalizar compras para garantir a aquisição dos produtos.

  Contexto:
    Dado que eu estou na página de login

  Cenário: Login com Sucesso
    Quando eu digito o usuário "standard_user" e a senha "secret_sauce"
    E clico no botão de login
    Então eu devo ver a página de produtos

  Cenário: Adicionar Produto ao Carrinho
    Dado que eu realizei o login
    Quando eu clico em "Add to cart" no primeiro produto
    Então o ícone do carrinho deve mostrar "1" item

  Cenário: Remover Produto do Carrinho
    Dado que eu tenho um item no carrinho
    Quando eu clico em "Remove"
    Então o ícone do carrinho não deve mostrar nenhum número

  Cenário: Finalizar Checkout com Sucesso
    Dado que eu tenho um item no carrinho
    E eu sigo para a página de Checkout
    Quando eu preencho as informações: "Nome", "Sobrenome" e "12345"
    E clico em "Finish"
    Então eu devo ver a mensagem de agradecimento "Thank you for your order!"
