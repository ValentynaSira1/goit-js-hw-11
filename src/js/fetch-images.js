import axios from 'axios' 
export { fetchImages } 
 
axios.defaults.baseURL = 'https://pixabay.com/api/' 
const KEY = '34273212-6f91d5118e6c23bc46d55d806' 
 
async function fetchImages(query, page, perPage) { 
  const response = await axios.get( 
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`, 
  ) 
  return response 
}