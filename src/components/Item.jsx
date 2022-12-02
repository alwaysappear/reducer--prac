import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const Item = ({ item, remove }) => {
    const [done, setDone] = useState(false)
    const { id, name } = item

    return (
        <article className="item">
            <div>
                <input type="checkbox"
                    value={done} onChange={(e) => setDone(e.target.value)} />
                <h3>{name}</h3>
            </div>
            <button className="btn-rm" onClick={() => remove(id)}>
                <FaTrash />
            </button>
        </ article>
    )
}

export default Item