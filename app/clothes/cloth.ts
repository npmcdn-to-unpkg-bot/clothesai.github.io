/**
 * @author Rizart Dokollari <r.dokollari@gmail.com>
 * @since 24/03/16
 */
export class Cloth {
    name:string;
    slug:string;
    description:string;

    constructor(public slug:string, public name:string, public description?:string) {
        this.slug = slug;
        this.name = name;
        this.description = description || '';
    }
}