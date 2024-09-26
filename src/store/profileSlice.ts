import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  age: number;
}

const initialState: ProfileState = {
  name: 'John Doe',
  age: 30,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const { updateName, updateAge } = profileSlice.actions;
export default profileSlice.reducer;


// updateName: (state, action: PayloadAction<string>) => { state.name = action.payload; }
// Это один из редюсеров, который изменяет состояние profileSlice, обновляя имя пользователя (state.name).
// state представляет текущее состояние профиля, а action — это объект, который содержит информацию о том,
//  как нужно изменить состояние.

// Подробное объяснение:
// 2. state
// state — это текущий срез состояния, с которым работает этот редюсер.

// В данном случае, это объект, который хранит состояние профиля, например:

// ts
// Копировать код
// {
//   name: "John Doe",
//   age: 30
// }
// Когда вызывается редюсер updateName, state представляет текущее состояние профиля, которое может быть изменено внутри функции.

// 3. action
// action — это объект, который передаётся в редюсер для того, чтобы изменить состояние.
// Объект action всегда имеет как минимум два свойства:
// type — строка, которая описывает, какое действие должно произойти. В нашем случае тип действия будет "profile/updateName".
// payload — полезная нагрузка (данные), переданные вместе с действием, которые содержат информацию для обновления состояния.
// В данном случае это строка, которая передаётся при вызове действия updateName, и которая будет новым именем пользователя.


// 4. PayloadAction<string>
// PayloadAction<string> — это тип действия (action) в Redux Toolkit, где:
// PayloadAction — это типизированное действие, в котором хранится полезная нагрузка (payload).
// <string> — тип данных, который будет содержаться в payload. В данном случае ожидается, что payload будет
//  строкой (то есть новое имя пользователя).
// 5. action.payload
// payload — это данные, переданные в действие. В данном случае это строка, которая содержит новое имя пользователя.
//  Например, если вы вызовете dispatch(updateName("Jane Doe")), то action.payload будет "Jane Doe".
// Затем редюсер берёт эти данные и обновляет соответствующее свойство в состоянии: state.name = action.payload.

// Пример работы:
// Допустим, текущее состояние профиля выглядит так:

// ts
// Копировать код
// {
//   name: "John Doe",
//   age: 30
// }
// Когда вызывается dispatch(updateName("Jane Doe")), Redux передаёт это действие в редюсер updateName. В этот момент:

// state содержит текущее состояние профиля.
// action.payload содержит "Jane Doe".
// Внутри редюсера выполняется строка state.name = action.payload, и состояние изменяется на:
// ts
// Копировать код
// {
//   name: "Jane Doe",
//   age: 30
// }
// Таким образом, state — это текущее состояние, action — это объект с инструкцией, что изменить, 
// а payload содержит данные для обновления состояния.