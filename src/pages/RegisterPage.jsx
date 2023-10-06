import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import './styles/loginAndRegister.css'

const RegisterPage = () => {

    const { reset, handleSubmit, register } = useForm()
    const { registerUser } = useAuth()

    const submit = data => {
        registerUser(data)
        reset({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className="register__page">
            <img className="register__img" src="/images/img-register.png" alt="" />
            <article className="register__article">
                <h2 className="register__title">Create a new account</h2>
                <form className="register__form" onSubmit={handleSubmit(submit)}>
                    <div className="register__space">
                        <label className="register__label" htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id="email" />
                        <hr />
                    </div>
                    <div className="register__space">
                        <label className="register__label" htmlFor="name">Name</label>
                        <input {...register('name')} type="text" id="name" />
                        <hr />
                    </div>
                    <div className="register__space">
                        <label className="register__label" htmlFor="password">Password</label>
                        <input {...register('password')} type="password" id="password" />
                        <hr />
                    </div>
                    <button className="register__button">Create</button>
                </form>
                <p className="register__login">Are you register? <Link className="register__link" to ='/auth/login'>Go to Login</Link></p>
            </article>
        </div>
    )
}

export default RegisterPage