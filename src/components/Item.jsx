import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const Item = (item) => {

    return (
        <article className="item">
            <div>
                {/* <input type="checkbox" autoFocus
                    value={done} onChange={() => setDone(e.target.value)} /> */}
                <h3>{item.name}</h3>
            </div>
            <button className="btn-rm">
                <FaTrash />
            </button>
        </ article>
    )
}

export default Item