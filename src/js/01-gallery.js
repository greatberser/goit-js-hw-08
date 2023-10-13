// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox'; 
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createGalleryItems() {
    galleryItems.forEach((item) => {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery__item');
  
      const galleryLink = document.createElement('a');
      galleryLink.classList.add('gallery__link');
      galleryLink.href = item.original;
  
      const galleryImage = document.createElement('img');
      galleryImage.classList.add('gallery__image');
      galleryImage.src = item.preview;
      galleryImage.alt = item.description;
  
      galleryLink.appendChild(galleryImage);
      galleryItem.appendChild(galleryLink);
      gallery.appendChild(galleryItem);
    });
}
  
createGalleryItems();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

lightbox.on('show.simplelightbox', (e) => {
    // Your custom code here, if needed
    console.log('Image shown', e);
});

lightbox.on('close.simplelightbox', (e) => {
    // Your custom code here, if needed
    console.log('Lightbox closed', e);
});
