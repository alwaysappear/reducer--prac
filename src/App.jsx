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
    const newItem = { id: setID, name: name.toLowerCase() }
    if (name) {
      dispatch({ type: 'ADD', payload: newItem })
    }
    setName('')
    nameEl.current.focus()
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const deleteItem = id => {
    const newItems = state.items.filter(item => item.id !== id)
    dispatch({ type: 'DELETE', payload: newItems })
  }

  return (
    <main>
      {state.modal && <ModalContent content={state.modalContent} close={closeModal} />}
      <form onSubmit={(e) => submit(e)}>
        <input type="text" ref={nameEl} autoFocus
          value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn-add">add</button>
      </form>
      <section className="item-container">
        {state.items.map(item => (
          <Item item={item} key={item.id} remove={deleteItem} />
        ))}
      </section>
    </main>
  )
}

export default App