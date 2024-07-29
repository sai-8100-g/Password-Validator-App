import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh; 
    background-color: #24263c;
    display: flex; 
    justify-content: center; 
    align-items : center; /
`

export const PasswordContainer = styled.div`
   background-color: #383a4e;
   border-radius: 10px;
   height: fit-content; 
   padding: 3%; /
`

export const Heading = styled.h1`
font-family: Roboto;
text-align: center; 
   color: #ffffff;/
`

export const Para = styled.p`
text-align: center;
   color:   ${props => (props.error ? ' #ef4444' : '#edeeff')};/
`

export const Input = styled.input`
   padding: 2%; 
   width: 100%; 
   border: none; 
   border-radius: 4px; 


   &:focus {
    outline: none;
   }/
`
