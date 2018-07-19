function Popup(popupSel, popupLayerSel) {

    /**
     * Типу інкапсуляція
     * Змінні не доступні зовні але за рахунок замикань
     * доступні в середені
     */

    var popupSel = document.querySelector(popupSel);
    var popupLayer = document.querySelector(popupLayerSel);

    this.open = function(content) {
        popupLayer.style.display = 'block';
        popupSel.style.display = 'block';
        popupSel.innerHTML = content;
    };

    this.close = function() {
        popupLayer.style.display = 'none';
        popupSel.style.display = 'none';
    };
};