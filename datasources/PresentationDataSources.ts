import axios from "axios";
import { Presentation } from '../domain/entity/presentation';

export default class PresentationDataSources {
    async getPresentation(): Promise<Presentation[]> {
        try {
            // テスト用URL
            const response = await axios.get('http://localhost/api/presentation');
            console.log(response.data)
            return response.data.map((e: any) => new Presentation(e));
        } catch (e) {
            return e;
        }
    }
}
