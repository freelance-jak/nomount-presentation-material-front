import axios from "axios";
import { Presentation } from '../domain/entity/presentation';

export default class PresentationDataSources {
    async getPresentation(): Promise<Presentation[]> {
        try {
            // テスト用URL
            const response = await axios.get('http://jsonplaceholder.typicode.com/users');
            return response.data.map((e: any) => new Presentation(e));
        } catch (e) {
            return e;
        }
    }
}
