/*Abaixo estamos criando uma classe chamada header que erda de HTMLElement*/
class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>

            <div id="data">
                <time id="data_atual"></time>
            </div>
            
            <div id="cabecalho">

                <button id="menu" aria-label="Abrir menu">
                <img src="../Componentes_reutilizaveis/Imagens/Menu.png" alt="">
                </button>

                <p id="slogan">Um suspiro de esperança todos os dias</p>

                <img src="../Componentes_reutilizaveis/Imagens/Logo.png" alt="Logo da Suspiro News" id="logo">

                <form role="search" id="form_pesquisa">
                <img src="../Componentes_reutilizaveis/Imagens/Lupa.png" alt="" id="lupa_estatica">
                <input type="search" id="pesquisa" placeholder="Buscar boas notícias..." />
                <button type="submit" id="lupa_pesquisa"><img src="../Componentes_reutilizaveis/Imagens/Lupa.png" alt="" /></button>
                </form>

            </div>

            <input type="checkbox" id="abre-menu" />


            <label for="abre-menu" class="fundo-escuro"></label>


            <div class="menu-lateral">
                <label for="abre-menu" class="btn-fechar">✕</label>

                <div class="menu-topo">
                <img src="../Componentes_reutilizaveis/Imagens/Logo.png" class="menu-icone"   alt="">
                
                <span id="nome_logo_menu">Suspiro News</span>
                </div>
                

                <a href="#">Educação <b>›</b></a>
                <a href="#">Meio Ambiente <b>›</b></a>
                <a href="#">Ciência <b>›</b></a>
                <a href="#">Inovação e Tecnologia <b>›</b></a>
                <a href="#">Cultura & Arte <b>›</b></a>
                <a href="#">Saúde <b>›</b></a>

                <hr />

                <a href="#">Sobre o SN</a>
                <a href="#">Entre em Contato</a>
                <a href="#">Equipe</a>
            </div>

            </header>
            `;
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

document.addEventListener('click', function (e) {
  if (e.target.closest('#menu')) {
    document.getElementById('abre-menu').checked =
      !document.getElementById('abre-menu').checked;
  } 
});