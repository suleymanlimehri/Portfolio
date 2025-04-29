import * as yup  from 'yup';

 export let LoginShecma=yup.object({

    username:yup.string().min(8,"Surname must be at least 8 charachter").required("username is required").lowercase(),
        password: yup.string().required('Please Enter your password').matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
})