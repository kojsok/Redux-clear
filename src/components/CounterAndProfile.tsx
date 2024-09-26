import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateName, updateAge } from '../store/profileSlice';
import { increment, decrement } from '../store/counterSlice';


export const CounterAndProfile: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const profile = useSelector((state: RootState) => state.profile);
    const counter = useSelector((state: RootState) => state.counter.value);

    const changeProfile = () => {
        dispatch(updateName('Jane Doe'));
        dispatch(updateAge(25));
    };

    const changeName = () => {
        dispatch(updateName('Вася'));
    };


    return (
        <div className="app">
            <h1>Profile</h1>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <button onClick={changeProfile}>Update Profile</button>
            <button onClick={changeName}>Update Name</button>

            <h2>Counter</h2>
            <p>Counter value: {counter}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default CounterAndProfile;


// В данном коде useSelector используется для доступа к состоянию Redux в компонентах React. 
// Он позволяет выбрать часть состояния из Redux-хранилища (store) и использовать его в компонентах.

// Как это работает в коде:
// const profile = useSelector((state: RootState) => state.profile);

// Этот вызов useSelector извлекает объект профиля (свойства name и age) из Redux-хранилища. 
// Функция внутри useSelector принимает текущее состояние всего хранилища (state: RootState) и возвращает именно ту часть состояния, 
// которая нужна — в данном случае, это state.profile.
// Теперь переменная profile содержит объект профиля из хранилища.
// const counter = useSelector((state: RootState) => state.counter.value);

// Здесь useSelector используется для получения значения счётчика (state.counter.value) из состояния. 
// В данном случае, возвращается только значение счётчика value, и оно сохраняется в переменной counter.

// Почему используется useSelector?
// useSelector позволяет связать React-компоненты с состоянием Redux без необходимости вручную подписываться
// на изменения в Redux и отписываться от изменений в состоянии. Когда состояние в хранилище изменяется,
// компоненты автоматически перерисовываются с новыми данными.

// Пример процесса:
// Когда вызывается действие (например, dispatch(updateName('Jane Doe'))), Redux обновляет состояние профиля.
// Поскольку компонент использует useSelector, React автоматически обновит отображение данных
// (например, отобразит новое имя и возраст), потому что profile был изменён в хранилище.
// Таким образом, useSelector связывает Redux-состояние с компонентом и автоматически обновляет
// его при изменении данных в хранилище.