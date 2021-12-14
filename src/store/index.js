import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

const store = configureStore({
  //reducer: counterSlice.reducer, //.reducer - это верно, хоть и в counterSlice написано reducers
  //reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //если slice-ов много, то можно передать через объект и при сборке они объединяться в один редьюсер, ключ (counter) придумываешь сама
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  }, //если slice-ов много, то можно передать через объект и при сборке они объединяться в один редьюсер, ключ (counter) придумываешь сама
});

//createSlice создает actions сам
//counterSlice.actions.toggleCounter(); //этот вызов возвращает объект с автоматически сгенерированным типом, если раньше придумывали название сами и передавали, то тут автоматически
//объект типа { type: 'сгенерированный уникальный айди' }

export default store;
