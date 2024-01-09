const typeDefs = `#graphql
  type User{
    name: String!
    username:String
    gender: String
    age: Int   
  }
  type Recipe {
    name: String!
    description: String
    thumbsUp: Int
    thumbsDown: Int
    userId: User!
  }
  input UserInput{
    name: String!
    username:String
    gender: String
    age: Int   
  }
  input RecipeInput {
    name: String
    description: String
    thumbsUp: Int
    thumbsDown: Int
  }

  type Query{
    recipe(id:ID!):Recipe,
    getRecipes(amount:Int):[Recipe]
    user(id:ID!):User,
    getUsers(amount:Int):[User]
  }

  type Mutation{
    addRecipe(recipeInput: RecipeInput) : Recipe!
    deleteRecipe(id:ID!) : Recipe
    updateRecipe(id:ID!,recipeInput: RecipeInput) : Recipe
    addUser(userValues:UserInput) : User!
    updateUser(id:ID!, userValues:UserInput) : User!
    deleteUser(id:ID!): User!
  }
`;

export default typeDefs;
