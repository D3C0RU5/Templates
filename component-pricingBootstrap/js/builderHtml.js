
window.onload = () => {
    let head = document.getElementById('table-head');

    head.innerHTML = feedPricing.plansTypes.map((p) => (
        "<div class=\"col-md-2 text-center\">" +
        "<span class=\"title-head\" style=\"color: " + p.color + "\">" + p.title + "</span>" +
        (p.button ?
            "<a class=\"btn btn-outline-primary\" href=\"" + p.button.link + "\">" + p.button.text + "</a>" : "") +
        "</div>"
    )).join('')
    head.innerHTML += (
        "<div class=\"d-md-none nav-options\">" +
        "<span class=\"btn btn-prev btn-outline-secondary\" onclick=\"javascript: positionTable(-1)\"><i class=\"fas fa-chevron-left\"></i></span>" +
        "<span class=\"btn btn-next btn-outline-secondary\" onclick=\"javascript: positionTable(1)\"><i class=\"fas fa-chevron-right\"></i></span>" +
        "</div>"
    )

    let body = document.getElementById('table-body');
    body.innerHTML = feedPricing.plansItems.map((i) => (
        "<div class=\"col-12\">" +
        "  <div class=\"title-item\">" +
        "    <h3>" + i.title + "</h3>" +
        "  </div>" +
        "</div>" +
        "<div class=\"col-12\">" +
        getTemplateItem(i.items) +
        "</div>"
    )).join('')
}

function getTemplateItem(item) {

    function getHead(item) {
        return (
            "<div class=\"col-7 col-md-2\">" +
            "  <div class=\"feature-head\">" +
            "    <div class=\"feature-head--title\">" + item.head + "</div>" +
            "    <div>" +
            "      <span tabindex=\"0\" data-bs-toggle=\"tooltip\" title=\"" + item.info + "\"><i class=\"fas fa-info-circle\"></i></span>" +
            "    </div>" +
            "  </div>" +
            "</div>"
        )
    }
    function getItem(item, type) {
        return (
            "<div class=\"col-5 col-md-2\">" +
            "  <div class=\"feature-item check-" + type + " \">" + (item[type] === true ? "<i class=\"fas fa-check-circle\"></i>" : item[type]) + "</div>" +
            "</div>"
        )
    }

    return (item.map((i) => (
        "<div class=\"features-list mt-2\">" +
        "  <div class=\"row align-items-center\">" +
        getHead(i) +
        getItem(i, 'individual') +
        getItem(i, 'basic') +
        getItem(i, 'standard') +
        getItem(i, 'pro') +
        getItem(i, 'enterprise') +
        "  </div>" +
        "</div>"
    )).join(''))
}