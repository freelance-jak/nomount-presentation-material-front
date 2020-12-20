import PresentationDataSources from "@/datasources/PresentationDataSources";
import PresentationComposition from '@/composition/presentation/PresentationComposition';

type presentationListData = {
    /*id: number,
    name: string,
    path: string,
    createdDate: string*/

    //↓後で消す
    id: number,
    name:string,
    email: string
}

type presentationState = {
    PresentationList: presentationListData[]
}

export default function PresentationComposiotion() {
    const allPresentationState: presentationState = {
        PresentationList: []
    };

    const loadPresentationList = async () => {
        const datasources = new PresentationDataSources();
        
        const result = await datasources.getPresentation();

        allPresentationState.PresentationList = result.map(item => {
            return {
                id: item.id,
                name: item.name,
                email: item.email
            }
        });
    };

    return {
        loadPresentationList,
        allPresentationState
    }
}
