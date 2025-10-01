import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import TodoDetail from './TodoDetail.js'
import { getTodos, addTodo, getTodo, actTodo, register, login, logout } from './api.js'
import Error404 from './Error404.js'
import Register from './Register.js'
import Login from './Login.js'

import App from './App.js'
import TodoList from './Todolist.js'
import TodoAdd from './TodoAdd.js'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} element={<TodoList/>}
                loader={getTodos} action={actTodo} />
            <Route path="add" element={<TodoAdd />}
                action={addTodo} />
             <Route path=':key' element={<TodoDetail />}
                 loader={getTodo} action={actTodo}
                 errorElement={<Error404 />} />
                 <Route path='register' element={<Register />}
                        action={register} />
                 <Route path='login' element={<Login />}
                      action={login} />
                 <Route path='logout' loader={logout} />
        </Route>
    )
)
export default router;
