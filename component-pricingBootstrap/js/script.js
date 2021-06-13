function positionTable(newPosition) {
    let table = document.getElementById('pricingTable');
    let value = table.attributes['option'].value*1 + newPosition;

    if (value >= 1 && value <= 5) {
        table.attributes['option'].value = value;
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    this.addEventListener('hide.bs.tooltip', function () {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
