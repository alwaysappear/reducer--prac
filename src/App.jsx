import { useReducer, useState, useRef } from 'react'
import reducer from './components/reducer'
import { FaTrash } from 'react-icons/fa'

const defaultStates = {
  items: [],
  modal: false,
  modalContent: ''
}

function App() {
  const [nameEl] = useRef(null)
  const [name, setName] = useState('')
  const [done, setDone] = useState(false)
  const [state, dispatch] = useReducer(reducer, defaultStates)

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <form onSubmit={(e) => submit(e)}>
        <div>
          <input type="text" ref={nameEl}
            value={name} onChange={() => setName(e.target.value)} />
          <button className="btn-add">add</button>
        </div>
      </form>
      <section className="item-container">
        {state.items.map(item => (
          <article className="item" key={item.id}>
            <div>
              <input type="checkbox" autoFocus
                value={done} onChange={() => setDone(e.target.value)} />
              <h3>{item.name}</h3>
            </div>
            <button className="btn-rm">
              <FaTrash />
            </button>
          </ article>
        ))}
      </section>
    </main>
  )
}

export default App