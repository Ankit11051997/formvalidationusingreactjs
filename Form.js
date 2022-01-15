import React ,{useState} from 'react';
import FormSingup from './FormSingup';
import FormSuccess from './FormSuccess';
 const Form = () => {
     const [isSubmitted,setIsSummitted]=useState(false);

    function submitForm(){
        setIsSummitted(true); 
     }
    return (
        <div>
        {!isSubmitted ? (
            <FormSingup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>   
    )
}

export default Form
