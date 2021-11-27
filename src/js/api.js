import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '24409833-1a93e7bc2e210ce3f7f0d3f0b';

export async function fetchImages(query, page, pageSize) {
    const response = await axios.get(`${BASE_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`,);
  return response;
}

