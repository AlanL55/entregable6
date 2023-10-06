import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import './styles/loginAndRegister.css'

const LoginPage = () => {

    const { reset, handleSubmit, register} = useForm()
    const { loginUser } = useAuth()

    const submit = (data) => {
        loginUser(data)
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <div className="login__page">
            <img className="login__img" src="/images/img-login.png" alt="" />
            <article className="login__article">
                <h2 className="login__title">Log In</h2>
                <form className="login__form" onSubmit={handleSubmit(submit)}>
                    <div className="login__space">
                        <label className="login__label" htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id="email" />
                        <hr />
                    </div>
                    <div  className="login__space">
                        <label className="login__label" htmlFor="password">Password</label>
                        <input {...register('password')} type="password" id="password" />
                        <hr />
                    </div>
                    <button className="login__button">Submit</button>
                </form>
                <p className="login__register">Do you have an account? <Link className="login__link" to ='/auth/register'>Go to Register</Link></p>
            </article>
        </div>
    )
}

export default LoginPage