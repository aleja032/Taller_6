import { fetchInterceptor } from '../interceptor/interceptor.js';

class DogService{
    constructor(){
        this.url = import.meta.env.VITE_API_DOG_URL;
        this.key = import.meta.env.VITE_API_DOG_KEY;
    }

    async getDogs(){
        try{
            const response = await fetchInterceptor({url: this.url, key: this.key});
            if(!response.ok){
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        }catch(err){
            console.log(err);
        }
    }
}export default new DogService();
