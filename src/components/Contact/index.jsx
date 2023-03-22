import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
    fullName: yup
        .string()
        .min(3, 'Your full name should be at least 3 characters.')
        .required('Please enter your full name'),
    email: yup
        .string()
        .email()
        .required('Please enter your email'),
    subject: yup
        .string()
        .min(3, 'Your subject must be 3 or higher')
        .required('Please enter your subject'),
    body: yup
        .string()
        .min(18, 'Your body must be 3 or higher')
        .required('Please enter your body'),
    })
    .required();

export default function ContactForm() {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    } = useForm({
    resolver: yupResolver(schema),
});

function onSubmit(data) {
  console.log(data);
  reset();
}

return (
    <div>
        <h1>Contact form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
            <input {...register('subject')} />
            <p>{errors.subject?.message}</p>
            <input {...register('body')} />
            <p>{errors.body?.message}</p>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}