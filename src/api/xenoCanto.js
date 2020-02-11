import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.xeno-canto.org/api/2/recordings?query=',
});
