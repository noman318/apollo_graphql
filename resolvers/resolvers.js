import Recipe from "../models/recipe.model.js";
import User from "../models/user.model.js";

const resolvers = {
  Query: {
    async recipe(_, args) {
      console.log("args", args);
      return await Recipe.findById(args.id);
    },
    async getRecipes(_, { amount }) {
      //   console.log("args_amount", amount);
      return await Recipe.find().limit(amount);
    },
  },
  Mutation: {
    async addRecipe(
      _,
      { recipeInput: { name, description, thumbsDown, thumbsUp } }
    ) {
      const createRecipe = new Recipe({
        name,
        description,
        thumbsDown,
        thumbsUp,
      });
      const res = await createRecipe.save();
      //   console.log("res", res);
      return { id: res.id, ...res._doc };
    },
    async deleteRecipe(_, { id }) {
      //   console.log("args", id);
      const deleted = await Recipe.findByIdAndDelete({ _id: id });
      console.log("deleted", deleted);
      return deleted;
    },
    async updateRecipe(_, args) {
      //   console.log("args", args);
      const updateId = args.id;
      const { name, description, thumbsDown, thumbsUp } = args.recipeInput;
      const updateData = { name, description, thumbsDown, thumbsUp };
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        updateId,
        updateData,
        { new: true }
      );
      return updatedRecipe;
    },
    async addUser(_, { userValues: { name, username, gender, age } }) {
      const createNewUser = new User({
        name,
        username,
        gender,
        age,
      });
      const res = await createNewUser.save();
      return res;
    },

    async updateUser(_, args) {
      const createNewUser = new User({
        name,
        username,
        gender,
        age,
      });
      const res = await createNewUser.save();
      return res;
    },
  },
};

export default resolvers;
