import styled from "styled-components"
import { Input, FormFeedback } from "reactstrap"


export const InputBoxStyled = styled(Input)`
  border-color : blue ;
 
`

export const FormFedbackBox = styled(FormFeedback)`
color : red;
font-weight: 400;
font-size:20px;
display : ${props => props.error ? "block" : "none"}
`