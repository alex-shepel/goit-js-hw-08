import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const createItemMarkup = ({ preview, original, description }) =>
  `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>
	</div>`;

const renderGalleryMarkup = galleryItems => {
  refs.gallery.innerHTML = [...galleryItems].map(item => createItemMarkup(item)).join('');
};

renderGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery__link');
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = 250;
