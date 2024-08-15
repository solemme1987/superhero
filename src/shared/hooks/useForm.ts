import { useState } from "react"

export const useForm = <T>(initialForm: T) => {

  const [formState, setFormState] = useState<T>(initialForm)

  
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormState({
      ...formState,//me agrega todos los campos que tenga el formulario actualmente
      [name]: value // me modifica solo el campo de texto que esta cambiando.
    })
   
  /*   console.log(`${name}: ${value}`) */
  }
  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
