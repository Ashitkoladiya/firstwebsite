import React from 'react';
import { FormFedbackBox, InputBoxStyled } from './Input.style';

function InputBox({ children, error = "false", errormsg= "" , ...rest}) {
    
    return (
       <>
       <InputBoxStyled {...rest}>
        {children}
       </InputBoxStyled>

       <FormFedbackBox error={error}>
        {errormsg}
       </FormFedbackBox>
       </>
    );
}

export default InputBox;