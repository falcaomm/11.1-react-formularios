import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  //desestruturação de array não precisa manter o mesmo nome
  const [forms, onChange, clear ] = useForm({
    nome: "",
    idade: "",
    email: "",
    cpf: "",
  })

  const handleClick = (event) => {
    event.preventDefault()
    console.log(forms);
    clear()
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          name='nome'
          id="nome"
          value={forms.nome}
          onChange={onChange}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          name='idade'
          id="idade"
          value={forms.idade}
          onChange={onChange}
          type="number"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          name='email'
          id="email"
          value={forms.email}
          onChange={onChange}
          type='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          title='seuEmail@email.com'
          required
        />

        <label htmlFor="cpf">CPF:</label>
        <Input
          name='cpf'
          id="cpf"
          value={forms.cpf}
          onChange={onChange}
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}"
          required
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
