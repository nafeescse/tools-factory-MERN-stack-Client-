import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';
import Loading from '../components/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };

    let errorMsg;
    let load;
    const navigate = useNavigate();

    if (error || gError) {
        errorMsg = <p>{error?.message || gError?.message}</p>
    }


    if (loading || gLoading) {
        load = <Loading />

    }
    if (user || gUser) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className="card max-w-sm mx-auto  text-accent shadow-2xl">
                <div className="card-body ">
                    <h2 className="card-title text-center">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs text-accent">
                            <label className="label">
                                <span className="">Email</span>

                            </label>
                            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Invalid Email' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            <label >
                                {errors.email?.type === 'required' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-xs text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs text-accent">
                            <label>
                                <span className="">Password</span>

                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 char long' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-xs text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-xs text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <div className='flex justify-center mb-3'>
                            {load} <small className='text-red-500'>{errorMsg}</small>
                        </div>

                        <input type='submit' value="Login" className="btn btn-error text-white
                         w-full" />
                    </form>
                    <p>New to Doctors Portal? <Link className='text-error' to="/signup">Create new account</Link></p>


                    <div className="divider">OR</div>

                    <button onClick={() => { signInWithGoogle() }} className="btn btn-outline btn-success">SignIn with GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;