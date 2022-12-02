import { FaTrash } from 'react-icons/fa'

const Item = ({ item, remove, handleDone }) => {
    const { id, name, done } = item

    return (
        <article className="item">
            <div>
                <input type="checkbox" checked={done}
                    onChange={() => handleDone(id)} />
                <h3>{name}</h3>
            </div>
            <button className="btn-rm" onClick={() => remove(id)}>
                <FaTrash />
            </button>
        </ article>
    )
}

export default Item