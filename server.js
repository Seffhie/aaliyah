document.addEventListener('DOMContentLoaded', function () {
    const flowerBed = document.querySelector('.flower-bed');
    const messageContainer = document.querySelector('.message-container');

    // Sample flower data (you can replace this with real data or generate dynamically)
    const flowers = [
        {
            name: 'Rose',
            imageUrl: 'rose.jpg',
            message: 'Roses symbolize love, beauty, and passion. They are classic symbols of romance and are often given as expressions of love or admiration.'
        },
        {
            name: 'Sunflower',
            imageUrl: 'sunflower.jpg',
            message: 'Sunflowers symbolize adoration, loyalty, and longevity. They are known for their large size and bright yellow petals that resemble the sun.'
        },
        {
            name: 'tulip',
            imageUrl: 'tulips.jpg',
            message: 'Tulips signify perfect love, elegance, and grace. They are popular spring flowers that come in various colors and are cherished for their beauty.'
        },
        {
            name: 'Daisy',
            imageUrl: 'daisy.jpg',
            message: 'Daisies symbolize innocence, purity, and new beginnings. They are simple yet charming flowers that are often associated with happiness and positivity.'
        },
        {
            name: 'Lily',
            imageUrl: 'lily.jpg',
            message: 'Lilies symbolize purity, refined beauty, and royalty. They are elegant flowers often used in floral arrangements and are associated with spirituality.'
        },
        {
            name: 'Orchid',
            imageUrl: 'orchid.jpg',
            message: 'Orchids symbolize luxury, strength, and beauty. They are exotic flowers known for their intricate shapes and vibrant colors, often used as symbols of love and admiration.'
        },
        {
            name: 'Cherry Blossom',
            imageUrl: 'cheery.jpg',
            message: 'Cherry blossoms symbolize the fleeting beauty of life, renewal, and the arrival of spring. They are cherished in Japanese culture and celebrated during Hanami festivals.'
        },
        {
            name: 'Peony',
            imageUrl: 'peony.jpg',
            message: 'Peonies symbolize prosperity, good fortune, and a happy marriage. They are large, fragrant flowers that bloom in spring and are often used in bridal bouquets.'
        }
        // Add more flowers as needed
    ];

    // Function to create flower elements and add click event listeners
    function renderFlowers() {
        flowers.forEach(flower => {
            const flowerElement = document.createElement('div');
            flowerElement.classList.add('flower');
            flowerElement.innerHTML = `
                <img src="${flower.imageUrl}" alt="${flower.name}">
                <h3>${flower.name}</h3>
            `;

            // Add click event listener to each flower element
            flowerElement.addEventListener('click', () => {
                showMessage(flower);
            });

            flowerBed.appendChild(flowerElement);
        });
    }

    // Function to display flower message below the flower bed
    function showMessage(flower) {
        const message = document.createElement('p');
        message.textContent = flower.message;

        // Clear previous messages
        messageContainer.innerHTML = '';

        // Append new message
        messageContainer.appendChild(message);
    }

    // Call renderFlowers function to populate the flower bed on page load
    renderFlowers();
});
