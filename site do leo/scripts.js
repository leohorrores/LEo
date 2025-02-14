// Seleciona a tabela e o contêiner do gráfico
const table = document.getElementById('impact-table');
const graphContainer = document.getElementById('graph-container');
const graphImage = document.getElementById('graph-image');

// Adiciona eventos de mouseover e mouseout à tabela
table.addEventListener('mouseover', function(e) {
    const row = e.target.closest('tr');
    if (row && row.dataset.graph) {
        graphImage.src = row.dataset.graph;
        graphContainer.style.display = 'block';
    }
});

table.addEventListener('mouseout', function(e) {
    const row = e.target.closest('tr');
    if (row) {
        graphContainer.style.display = 'none';
    }
});
