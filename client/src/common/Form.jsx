import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/operations/userApi';
import { captainLogin } from '../services/operations/captainApi';
import { UserDataContext } from '../context/UserContext';
import { CaptainDataContext } from '../context/CaptainContext';


const Form = ({text1 , text2 , user}) => {

    const{ register , handleSubmit , formState:{errors}} = useForm();
    const navigate = useNavigate();
    const {setUser} = useContext(UserDataContext);
    const {setCaptain} = useContext(CaptainDataContext);

    const onSubmit = async(data) => {
        const credentials = {
            email:data.email,
            password:data.password,
        }

        if(user){
            userLogin(credentials , navigate , setUser);
        }
        else{
            captainLogin(credentials , navigate , setCaptain);
        }
    };

    return (
      <div>
            <form onSubmit={handleSubmit(onSubmit)}
              className='sm:flex flex-col'>
                      <div className='flex flex-col'>
                              <label htmlFor='email' className='text-2xl font-semibold mb-2'>
                                      What's your Email
                              </label>
                              <input
                                      placeholder='example@email.com'
                                      id='email'
                                      {...register('email' , { required:true})}
                                      className='bg-[#eeeeee] px-8 py-4 my-2 rounded-xl '
                              />
                              {
                                      errors.email &&(
                                              <span className="ml-2 text-xs tracking-wide text-red-400">
                                                      Email is required
                                              </span>
                                      )
                              }
                      </div>
                      <div className='flex flex-col'>
                              <label htmlFor='password' className='text-2xl font-semibold mb-2'>
                                      Password
                              </label>
                              <input
                                      placeholder='Password'
                                      id='password'
                                      {...register('password' , {required:true})}
                                      className='bg-[#eeeeee] px-8 py-4 my-2 rounded-xl '
                              />
                              {
                                  errors.password && (
                                      <span className="ml-2 text-xs tracking-wide text-red-400">
                                                      password is required
                                              </span>
                                  )
                              }
  
                      </div>
                      <div className='flex justify-center w-full'>
                              <button type='submit'
                                      className='bg-[#111] text-white font-semibold px-4 py-2 rounded-lg w-full my-2 duration-200 hover:scale-110'
                              >
                                      Login
                              </button>
                      </div>
                      <p className='text-center font-medium'>{text1} <Link to={user ? '/signup' : "/captain-signup"} className='text-blue-600'>{text2}</Link></p>
              </form>
      </div>
    )
  }

export default Form