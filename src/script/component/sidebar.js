class Sideabr extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <aside id="sidebar">
                <a class="navigation active" href="#home">Home</a>
                <a class="navigation" href="#about">About</a>
                <a class="navigation" href="#symp">Symptoms</a>
                <a class="navigation" href="#prec">Precautions</a>
            </aside>
            `
    }
}

customElements.define("side-bar", Sideabr);