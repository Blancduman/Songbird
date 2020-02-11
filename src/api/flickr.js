import axios from 'axios';

const API_KEY = '989af5cd212f2521d3e6c61123cf2dec';

export default axios.create({
  baseURL: `https://www.flickr.com/services/rest/?method=flickr.photos.search&apikey=${API_KEY}&tagmode=all&extras=urlm&format=json&nojsoncallback&tags=`,
});
