import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const novoForm = {
            ...form,
            [name]: value
        }
        setForm(novoForm)
    }

    const clear = () => {
        setForm(initialState)
    }

    return [ form, onChange, clear ]; 
}