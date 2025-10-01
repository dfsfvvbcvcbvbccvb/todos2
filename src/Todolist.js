import { useLoaderData, Link, useSubmit } from "react-router-dom"

export default function TodoList () {
    const submit = useSubmit()
    const handleDoneClick = key => {
        submit(null, {action: `/${key}`, method: 'patch'})
    }
    const handleDeleteClick = key => {
        submit(null, {action: `/${key}`, method: 'delete'})
    }
    const list = useLoaderData()
    return (
        <section>
            <h1>Дела</h1>
            <table className="table is-hoverable is-fullwidth">
                <tbody>
                    {list.map(item => (
                        <tr key={item.key}>
                            <td>
                                <Link to={`/${item.key}`}>
                                {item.done && <del>{item.title}</del>}
                                {!item.done && item.title}
                                </Link>
                            </td>
                            <td>
                                <button
                                className="button is-success"
                                title="Выполнено"
                                disabled={item.done}
                                onClick={() => {handleDoneClick(item.key)}}
                                >
                                ✅
                                </button>
                            </td>
                            <td>
                                <button
                                className="button is-danger"
                                title="Удалить"
                                onClick={() => {handleDeleteClick(item.key)}}
                                >
                                💩
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}