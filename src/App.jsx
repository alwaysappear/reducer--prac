import Item from './components/Item'
import reducer from './components/reducer'
import { useReducer, useState, useRef } from 'react'
import ModalContent from './components/ModalContent'

const defaultStates = {
  items: [],
  modal: false,
  modalContent: ''
}

function App() {
  const nameEl = useRef(null)
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultStates)

  const submit = (e) => {
    e.preventDefault()
    const setID = new Date().getTime().toString()
    const newItem = { id: setID, name }
    if (name) {
      dispatch({ type: 'ADD', payload: newItem })
    }
    setName('')
    nameEl.current.focus()
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <main>
      {state.modal && <ModalContent content={state.modalContent} close={closeModal} />}
      <form onSubmit={(e) => submit(e)}>
        <div>
          <input type="text" ref={nameEl} autoFocus
            value={name} onChange={(e) => setName(e.target.value)} />
          <button className="btn-add">add</button>
        </div>
      </form>
      <section className="item-container">
        {state.items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </section>
    </main>
  )
}

export default App