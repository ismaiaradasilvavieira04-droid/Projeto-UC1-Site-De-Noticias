class Headercomplement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <section id="complemento_cabecalho">
                <img src="../Componentes_reutilizaveis/Imagens/Logo_com_nome.png" alt="Logo da Suspiro News">
                <aside>Área de propaganda</aside>
            </section>`;
    }
}

customElements.define('complemento-header', Headercomplement);