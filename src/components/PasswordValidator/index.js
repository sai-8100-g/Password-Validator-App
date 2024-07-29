import {useState} from 'react'
import {
  Container,
  PasswordContainer,
  Heading,
  Para,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangeSetPassword = event => {
    setPassword(event.target.value)
  }
  const isFragilePassword = password.length < 8
  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input
          type="password"
          value={password}
          onChange={onChangeSetPassword}
        />
        {isFragilePassword && (
          <Para error>Your password must be at least 8 characters</Para>
        )}
      </PasswordContainer>
    </Container>
  )
}

export default PasswordValidator
