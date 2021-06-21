import profilePageReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let initialState = {
   posts: [{
      id: 1,
      name: "newPost",
      likesOnPost: 12
   },
      {
         id: 2,
         name: "newPost 2 ",
         likesOnPost: 11
      },

   ]
};
// eslint-disable-next-line jest/valid-title
it('new post should be added', () => {

   //test DATA
   let action = addPostActionCreator("it");

   //ACTION
   let test = profilePageReducer(initialState, action);


   //EXPECTSTION

   expect(test.posts.length).toBe(3);

})

it('new post should be added with expected value', () => {

   //test DATA
   let action = addPostActionCreator("it");

   //ACTION
   let test = profilePageReducer(initialState, action);


   //EXPECTSTION
   expect(test.posts[2].name).toBe("it");

})



it('delete post is  correct', () =>{
   let action = deletePost(1);
   let test = profilePageReducer(initialState, action);

   //EXPECTSTION
   expect(test.posts.length).toBe(1);

})


