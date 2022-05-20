import('./scss/main.scss');
import Axios from 'axios';

async function App() {
    const preview = document.querySelector('#preview');
    const showcaseLamp = document.querySelector('#showcase-lamp');
    const showcaseRoom = document.querySelector('.showcase__room');
    const productImageWrappers = document.querySelectorAll('.product__image-wrapper');
    const productImages = document.querySelectorAll('.product__images img');
    const productModeButtons = document.querySelectorAll('.product__mode-button');

    const material = document.querySelector('#material');
    const weight = document.querySelector('#weight');
    const dimenshions = document.querySelector('#dimenshions');
    const electrification = document.querySelector('#electrification');

    const { data } = await Axios.get('https://private-anon-4c2731cd3a-lampshop.apiary-mock.com/lamps')

    preview.src = data[0].image;
    showcaseLamp.src = data[0].image;

    fillCharacteristics(data[0]);

    productImages.forEach((image, id) => {
        image.src = data[id].image;

        image.parentElement.addEventListener('click', () => {
            const itemData = data[id];
            preview.src = itemData.image;
            showcaseLamp.src = itemData.image;

            clearActiveClasses();
            image.parentElement.classList.add('product__image-wrapper--active')


            fillCharacteristics(itemData);
        })
    })


    productModeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('product__mode-button--dark')) {
                showcaseLamp.classList.add('showcase__lamp--hidden');
                return showcaseRoom.classList.add('showcase__room--dark');
            }

            showcaseLamp.classList.remove('showcase__lamp--hidden');
            return showcaseRoom.classList.remove('showcase__room--dark')
        });
    })

    function fillCharacteristics(itemData) {
        material.textContent = itemData.material;
        weight.textContent = `${itemData.weight} kg`;
        electrification.textContent = itemData.electrification;
        dimenshions.textContent = `H ${itemData.height} x W ${itemData.width} x D ${itemData.width}`
    }

    function clearActiveClasses() {
        productImageWrappers.forEach((wrapper) => {
            wrapper.classList.remove('product__image-wrapper--active')
        })
    }
}
App()



