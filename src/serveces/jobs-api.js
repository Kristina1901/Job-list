import axios from 'axios';
export async function getJobsList(page) {
    const { data } = await axios.get(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu&page=${page}&limit=10`,
     
    );
  
    return data;
  }
  