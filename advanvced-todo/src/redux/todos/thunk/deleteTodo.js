import { deleted } from "../actions";

const deleteTodo = (todoId, color) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
