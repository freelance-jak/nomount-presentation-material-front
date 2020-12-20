export class Presentation {
    /*id!: number,
    name!: string,
    path!: string,
    createdDate!: string*/

    //↓後で消す
    id!: number
    name!: string
    email!: string

    constructor(init: Partial<Presentation>) {
        Object.assign(this, init)
    }
}