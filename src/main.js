import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

const queryForm = document.querySelector('.form');
queryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search-text').trim();
    if (!query) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query)
      .then(({ hits }) => {
        if (hits.length === 0) {
          iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
          });
          return;
        }
        createGallery(hits);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      })
      .finally(() => {
        hideLoader();
      });
    e.target.reset();
  },
);