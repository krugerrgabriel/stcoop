export interface IRotaCard{
    item: {
        _id: Number;
        title: String;
        tag: String;
        description: String;
        image: String,
        author: String;
        createdAt: String;
    }
    large?: Boolean;
}