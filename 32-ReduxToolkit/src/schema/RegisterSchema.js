import * as yup  from 'yup';

 export let userShecma=yup.object({
    name:yup.string().min(3,"Name must be at least 3 charachter").required("name is required"),
    username:yup.string().min(8,"Surname must be at least 8 charachter").required("username is required").lowercase(),
    email:yup.string().required("email is required").email("email must be only email format"),
    password: yup.string().required('Please Enter your password').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    confirmpassword:yup.string()
    .required('Please Enter your confirmpassword')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})