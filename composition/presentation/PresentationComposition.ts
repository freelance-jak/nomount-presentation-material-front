import PresentationDataSources from "@/datasources/PresentationDataSources";
import PresentationComposition from '@/composition/presentation/PresentationComposition';

type presentationListData = {
    id: number
    user_id: number
    title: string
    name: string
    document_path: string
    presentation_date: string
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
                user_id: item.user_id,
                title: item.title,
                name: item.name,
                document_path: item.document_path,
                presentation_date: item.presentation_date
            }
        });
    };

    return {
        loadPresentationList,
        allPresentationState
    }
}
