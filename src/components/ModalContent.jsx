import { useEffect } from 'react'

const ModalContent = ({ content, close }) => {

    useEffect(() => {
        setTimeout(() => {
            close()
        }, 3200);
    })

    return (
        <div className='modal'>
            <span>{content}</span>
        </div>
    )
}

export default ModalContent