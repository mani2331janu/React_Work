import React from 'react'
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Sign_in = () => {
    let paperStyle = {
        width: 400,
        margin: "20px auto",
        padding: "20px",
        display: "grid",
        gap: "20px"
    };
    const schema = Yup.object().shape({
        name: Yup.string().required("Name is Required").matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Full Name"),
        email: Yup.string().required("Enter a Email").matches(/^[a-z]+@[a-z]{3,5}\.[a-z]{2,4}$/, "Enter Valid Email"),
        age: Yup.number().integer().positive().required("Enter Your Age").min(18, "Enter Age Between 18 to 30").max(30, "Enter Age Between 18 to 30"),
        password: Yup.string().required("Password is Required"),
        confrm_password: Yup.string().oneOf([Yup.ref("password"), null], "Password Must Match")
    })

    let { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    let handleData = (data) => {
        console.log("data:", data);
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <div>
            <Paper elevation={20} style={paperStyle} component="form" onSubmit={handleSubmit(handleData)}>
                <Typography
                    variant='h6'
                    textAlign='center'>
                    Create Account
                </Typography>
                <TextField
                    label="Name"
                    fullWidth
                    {...register("name")}
                    helperText={errors.name?.message}
                    error={!!errors.name} />
                <TextField
                    label="Email"
                    fullWidth
                    {...register("email")}
                    helperText={errors.email?.message}
                    error={!!errors.email} />
                <TextField
                    label="Age"
                    fullWidth
                    {...register("age")}
                    helperText={errors.age?.message}
                    error={!!errors.age} />
                <TextField
                    label="Password"
                    fullWidth
                    {...register("password")}
                    helperText={errors.password?.message}
                    error={!!errors.password} />
                <TextField
                    label="Confrim Password"
                    fullWidth {...register("confrm_password")}
                    helperText={errors.confrm_password?.message}
                    error={!!errors.confrm_password} />
                <Button variant="contained" type="submit">Save</Button>

            </Paper>
        </div>
    )
}

export default Sign_in
