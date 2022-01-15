export default function validateInfo(values){
    let errors={};

    if(!values.firstname){
        errors.firstname="firstname required"
    }
    if(!values.lastname){
        errors.lastname="lastname required"
    }

    if(!values.email){
        errors.email="email required"
    }
    else if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email))
    {
        errors.email="email is invalid"
    }
    
    if(!values.password){
        errors.password="password required"
    }
    else if(values.password.length<6){
        errors.password="password should be more than 6 words"
    }
    if(!values.phone){
        errors.phone="phone required"
    } 
    return errors; 
}


