import axios from "axios";
import { Presentation } from '../domain/entity/presentation';
export default class PresentationDataSources {
    async getPresentation(): Promise<Presentation[]> {
        try {
            const response = await axios.get(process.env.BASE_URL + 'presentation');
            console.log(response.data);
            return response.data.map((e: any) => new Presentation(e));
        } catch (e) {
            return e;
        }
    }

    async postPresentation(params: any) {
        try {
            const response = await axios.post(process.env.BASE_URL + 'presentation', params, {
                headers: {
                    'enctype': 'multipart/form-data',
                },
            });
        } catch (e) {
            return e;
        }
        
    }
}
