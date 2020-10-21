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
        const fieldsContainer = document.querySelectorAll ('.new-upload')
        // realizar o clone da última imagem adicionada. 
        const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

        // verificar se o campo está vazio, se si, nao adicionar ao container de imagens
        const input = newFieldContainer.children [0]

        // if(input.value=="") {
        //   return
        // }

        // limpar o campo ants de adicionar ao container de imagens
        input.value =""

        // adicionar o clone a container de #images
        container.appendChild(newFieldContainer)
}

        function deleteField(event) {
        const span = event.currentTarget

        const fieldsContainer = document.querySelectorAll('.new-upload')

        if (fieldsContainer.length < 2) {
            // limpar o valor do campo
            span.parentNode.children[0].value = ""
            return
        }

        // deletar o campo
       span.parentNode.remove();
    }
