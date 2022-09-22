//state ở đây không phải là state của react,
//nó được hiểu là nơi lưu trữ data của redux
const initState = {
  users: [
    { id: 1, name: "giang" },
    { id: 2, name: "ly" },
  ],
};
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
//rootReducer hiểu là 1 công nhân đã nạp được data mình gán vào từ initState
