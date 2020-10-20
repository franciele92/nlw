// create map
const map = L.map("mapid") .setView([-30.0415789,-51.1962634], 15)

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon
const icon = L.icon ({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;


// create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


// remove icon 
marker && map.removeLayer(marker)

// add icon layer
marker = L.marker([lat, lng], {icon})
.addTo(map)

})

// adicionar o campo de fotos
function addPhotoField () {
        // pegar o container de fotos #images
        const container = document.querySelector ('#images')
        // pegar o container para duplicar .new-image
        const fieldsContainer = document.querySelectorAll ('new-image')
        // realizar o clone da última imagem adicionada. 
        const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        // adicionar o clone a container de #images
        container.appendChild
}