import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      //в createSlice редакс тулкита редьюсерах можно изменять существующий стейт, т.к. redux toolkit сам клонирует
      // и автоматически переписывает объект стейта на новый, разработчику самому это делать не нужно
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//createSlice создает actions сам
//counterSlice.actions.toggleCounter(); //этот вызов возвращает объект с автоматически сгенерированным типом, если раньше придумывали название сами и передавали, то тут автоматически
//объект типа { type: 'сгенерированный уникальный айди' }

const store = configureStore({
  //reducer: { counter: counterSlice.reducer } //если slice-ов много, то можно передать через объект и при сборке они объединяться в один редьюсер, ключ (counter) придумываешь сама
  reducer: counterSlice.reducer, //.reducer - это верно, хоть и в counterSlice написано reducers
});

export const counterActions = counterSlice.actions;

export default store;
