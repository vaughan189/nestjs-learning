export class ListAllEntities {
    data: Array<Entities>;
    limit: string;
}


class Entities {
    name: string;
    age: number;
    breed: string;
}