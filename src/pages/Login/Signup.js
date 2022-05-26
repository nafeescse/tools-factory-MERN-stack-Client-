import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(user || gUser);

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ Name: data.displayName });
        console.log(data);
        alert('Profile name updated successfully.');
    };

    let errorMsg;
    let load;
    const navigate = useNavigate();

    if (error || gError || updateError) {
        errorMsg = <p>{error?.message || gError?.message || updateError?.message}</p>
    }


    if (loading || gLoading || updating) {
        load = <div >
            <button className="btn btn-circle loading bg-accent"></button>
            <button className="btn btn-circle loading bg-accent"></button>
            <button className="btn btn-circle loading bg-accent"></button>
        </div>

    }
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    },[token, navigate])

    return (
        <div>
            <div className="card max-w-sm mx-auto  text-accent shadow-2xl">
                <div className="card-body ">
                    <h2 className="card-title text-center">Signup</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs text-accent">
                            <label className="label">
                                <span className="">Name</span>

                            </label>
                            <input type="name" className="input input-bordered w-full max-w-xs" {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })} />
                            <label >
                                {errors.name?.type === 'required' && <span className="text-xs text-red-500">{errors.name.message}</span>}



                            </label>
                        </div>
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
                                    message: 'Invalid Email'
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
                    <p className='text-center'>Already Joined? <Link className='text-error' to="/login">Login Now</Link></p>


                    <div className="divider">OR</div>

                    <button onClick={() => { signInWithGoogle() }} className="btn btn-outline btn-success">SignIn with GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;