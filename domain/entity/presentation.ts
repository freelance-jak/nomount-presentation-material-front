export class Presentation {
    id!: number
    user_id!: number
    name!: string
    title!: string
    document_path!: string
    presentation_date!: string

    constructor(init: Partial<Presentation>) {
        Object.assign(this, init)
    }
}