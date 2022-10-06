//state ở đây không phải là state của react,
//nó được hiểu là nơi lưu trữ data của redux
const initState = {
  users: [
    { id: 1, name: "giang" },
    { id: 2, name: "ly" },
    { id: 3, name: "ccc" },
  ],
  post: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      // console.log("run", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10001);
      let user = {
        id: id,
        name: `random - ${id}`,
      };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default rootReducer;
//rootReducer hiểu là 1 công nhân đã nạp được data mình gán vào từ initState
