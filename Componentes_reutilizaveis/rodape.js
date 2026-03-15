class rodape_reutilizavel extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
      <div id="parte_superior">
        <div id="editais">
          <h4>Editais</h4>
          <ul>
            <li>
              <a href="#">Saúde</a>
            </li>
            <li>
              <a href="#">Educação</a>
            </li>
            <li>
              <a href="#">Arte e Cultura</a>
            </li>
            <li>
              <a href="#">Inovação<br />e tecnologia</a>
            </li>
            <li> 
              <a href="#">Meio Ambiente</a>
            </li>
            <li> 
              <a href="#">Ciência</a>
            </li>
          </ul>
        </div>

        <div id="redes">
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/suspironews?igsh=bzV6dGd5a2pqbGdm" target="_blank"><img src="../Componentes_reutilizaveis/Imagens/Instagram.png" alt="">@suspironews</a>
        </div>

        <div id="linha_vertical"></div>

        <div id="sobre_nos">
          <h4>Sobre nós</h4>
          <ul>
            <li>
              <a href="#">Quem somos</a>
            </li>
            <li>
              <a href="#">Equipe</a>
            </li>
          </ul>
        </div>
        <div id="suporte">
          <h4>Suporte</h4>
          <a href="#">Fale conosco</a>
        </div>
      </div>
      <div id="linha_horizontal">
        <hr />
      </div>

      <div id="parte_inferior">
        <img src="../Componentes_reutilizaveis/Imagens/Logo_nome_lateral.png" alt="Logo Suspiro News">
        <p>&copy; 2026 Suspiro News. Um suspiro de esperança todos os dias.</p>
      </div>

    </footer>`;
    }
}

customElements.define('sn-rodape', rodape_reutilizavel);