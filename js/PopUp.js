function Popup() {

    var popup = document.querySelector('.popup');
    var popupLayer = document.querySelector('.popup-layer');

    this.open = function(content) {
        popupLayer.style.display = 'block';
        popup.style.display = 'block';
        popup.innerHTML = content;
    };

    this.close = function() {
        popupLayer.style.display = 'none';
        popup.style.display = 'none';
    };
};