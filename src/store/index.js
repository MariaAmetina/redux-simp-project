import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    //state.counter++; // НЕЛЬЗЯ ИЗМЕНЯТЬ СУЩЕСТВУЮЩИЙ СТЕЙТ, ВСЕГДА НУЖНО ПЕРЕПИСЫВАТЬ ЕГО return-ОМ
    return {
      //нужно указывать каждый раз все поля initialState, потому что в редюсере они не merge-тся, а заменяются на новые
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.increaseAmount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if ((action.type = "toggle")) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
