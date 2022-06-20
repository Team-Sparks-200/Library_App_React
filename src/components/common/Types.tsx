export interface IAuthor {
    name: string
}

export interface IBook {
    name: string;
    price: string;
    author: IAuthor;
}

export interface IPopupMessage {
    message: string;
    className: string;
}

export interface selectorOptionType {
    label: string;
    value: IAuthor;
}
