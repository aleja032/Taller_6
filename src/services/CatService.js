import { fetchInterceptor } from '../interceptor/interceptor.js';

class CatService {
    constructor() {
        this.url = import.meta.env.VITE_API_CAT_URL;
        this.key = import.meta.env.VITE_API_CAT_KEY;
    }

    async getCats() {
        try{
            const response = await fetchInterceptor({ url: this.url, key: this.key });
            if(!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        }catch(err){
            console.log(err);
        }

    }
} export default new CatService();