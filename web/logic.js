function crearCards() {
  setTimeout(() => {
    const info = [
      {
        title: "",
        category: "Entretenimiento",
      },
      {
        title: "",
        category: "Entretenimiento",
      },
      {
        title: "",
        category: "Entretenimiento",
      },
    ];

    const containerRef = document.getElementsByClassName("container")[0];
    // usamos backticks ``
    const containerHtml = info.map(
      (art) => `<div class="card">
        <div class="card-left"></div>
        <div class="card-right">
            <h2>Entretenimiento</h2>
            <p>‘Thor: Love and Thunder’ hace de los cortos de Darryl canon en el MCU</p>
        </div>
    </div>`
    );
    containerRef.innerHTML = containerHtml;
  }, 800);
}

crearCards();
