class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>

            <div id="data">
                <time id="data_atual"></time>
            </div>
            
            <div id="cabecalho">

                <button id="menu" aria-label="Abrir menu">
                <img src="./Imagens/Menu.png" alt="">
                </button>

                <p>Um suspiro de esperança todos os dias</p>

                <img src="./Imagens/Logo.png" alt="Logo da Suspiro News" id="logo">

                <form role="search" id="form_pesquisa">
                <img src="./Imagens/Lupa.png" alt="" id="lupa_estatica">
                <input type="search" id="pesquisa" placeholder="Buscar boas notícias..." />
                <button type="submit" id="lupa_pesquisa"><img src="./Imagens/Lupa.png" alt="" /></button>
                </form>

            </div>

            </header>`;
            const data = new Date(); /*Date é um objeto do JS que trabalha com data e horário, e new date cria uma nova data baseada na máquina do usuário*/

            /*Abaixo criamos um objeto de configuração ele diz como a data deve ser exibida*/
            const opcoes = { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric'
            };

            /*Abaixo ocorre a formatação da data de acordo com idioma e região*/
            const dataFormatada = data.toLocaleDateString('pt-BR', opcoes);

            /*Procura o elemento com o nome data_atual no html e muda o texto*/
            document.getElementById("data_atual").textContent = dataFormatada;
    }
}

customElements.define('main-header', Header);