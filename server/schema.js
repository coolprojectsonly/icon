import { buildSchema } from "graphql";

const schema = buildSchema(`
type User{
    id:ID!
    icon:String
    label:String
}
type Query{
    users:[User],
    user(id:ID!):User

}
`);

export default schema;
