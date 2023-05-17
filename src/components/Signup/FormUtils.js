import * as Yup from "yup";

export const initialValues = {
    name:'',
    profilePhoto:null,
    email:'',
    phoneNo:'9428551650',
    password:'',
    confirmPassword:''
}

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    email:Yup.string().email('Invalid Email').required('Email is required'),
    phoneNo: Yup.string().length(10,'Phone no is have to be 10 character').matches(/^[0-9]{10}$/,'Only digits are allowed').required('Phone no is required'),
    password:Yup.string().required('password is required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'Password must match').required('Confirm Password is required'),
    profilePhoto:Yup.mixed().test('fileType', 'Invalid file format', (value) => {
        if (!value) {
          return true // No file selected, validation passes
        }
        const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        return supportedFormats.includes(value.type)
      }).test('fileType',"Image size should be less than 2MB",(value)=>{
        if (!value) {
            return true // No file selected, validation passes
        }
        return value.size<=2*1024*1024; // 2MB
      }).required('Profile photo is required')
})

export const submitHandler = (values)=>{
    console.log(values)
}


// REGEX="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/";