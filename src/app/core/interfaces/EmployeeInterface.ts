export interface IResponseEmployees {
    data: IEmployee[]
}

export interface IResponseEmployee {
    data: IEmployee
}

export interface IEmployee {
    id?: number;
    name: string;
    dateofBirthday: Date;
    countrie: string;
    username: string;
    hiringDate: Date;
    state: boolean;
    areaofWork: string;
    position: string;
    comission: number;
    age?: number;
}