import * as Yup from "yup";

export const initialValues = {
    name:'',
    email:'',
    phoneNo:'',
    password:'',
    confirmPassword:''
}

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    email:Yup.string().email('Invalid Email').required('Email is required'),
    phoneNo: Yup.string().length(10,'Phone no is have to be 10 character').matches(/^[0-9]{10}$/,'Only digits are allowed').required('Phone no is required'),
    password:Yup.string().required('password is required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Confirm Password is required'),
})

export const submitHandler = (values)=>{
    console.log(values)
}


// REGEX="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/";