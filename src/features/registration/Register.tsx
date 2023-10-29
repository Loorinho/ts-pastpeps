import axios from 'axios'
import { RegistrationSchema, RegistrationSchemaType } from "../zod/Schemas";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';

function Register(){

    const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<RegistrationSchemaType>({
    resolver: zodResolver(RegistrationSchema),
  });

   const Register = async (data: RegistrationSchemaType) => {
    console.log("Data: ", data);

    
   };
  
  return (

    <section className="h-[100dvh] flex justify-center items-center " >  
    <form onSubmit={handleSubmit(Register)} className='min-h-[300px] pt-10 pb-3 rounded-lg ring-1 ring-[#007791] w-[450px] px-2 '>
      {/* <div className="grid grid-cols-12 gap-2"> */}

      <p className='text-center font-medium text-2xl mb-2'>Past<span className='text-[#007791]'>PEPS</span></p>

      <p className='text-center text-xl'>Create an account</p>

       <div className="mt-2">
        <label htmlFor="" className="block text-gray-500 text-sm">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter your full name"
          className={`border-2 rounded-md px-2 py-1 outline-none w-full focus:ring-1 ${
            errors.name?.message
              ? "border-red-500 focus:ring-red-700"
              : " focus:ring-blue-700 "
          } `}
        />
        {errors.name && (
          <span className="text-red-500 mb-2">{`${errors.name.message}`}</span>
        )}
      </div>
      <div className="mt-2">
        <label htmlFor="" className="block text-gray-500 text-sm">
          Email
        </label>
        <input
          type="text"
          {...register("username")}
          placeholder="Enter your university email address"
          className={`border-2 rounded-md px-2 py-1 outline-none w-full focus:ring-1 ${
            errors.username?.message
              ? "border-red-500 focus:ring-red-700"
              : " focus:ring-blue-700 "
          } `}
        />
        {errors.username && (
          <span className="text-red-500 mb-2">{`${errors.username.message}`}</span>
        )}
        </div>
      <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
              <label htmlFor="" className="block text-gray-500 text-sm">
                University
              </label>
              <input
                type="text"
                {...register("university")}
                placeholder="Enter your university email address"
                className={`border-2 rounded-md px-2 py-1 outline-none w-full focus:ring-1 ${
                  errors.university?.message
                    ? "border-red-500 focus:ring-red-700"
                    : " focus:ring-blue-700 "
                } `}
              />
              {errors.university && (
                <span className="text-red-500 mb-2">{`${errors.university.message}`}</span>
              )}
          </div>
          
           <div className="col-span-6">
              <label htmlFor="" className="block text-gray-500 text-sm">
                Registration Number
              </label>
              <input
                type="text"
                {...register("registrationNumber")}
                placeholder="Enter your university email address"
                className={`border-2 rounded-md px-2 py-1 outline-none w-full focus:ring-1 ${
                  errors.registrationNumber?.message
                    ? "border-red-500 focus:ring-red-700"
                    : " focus:ring-blue-700 "
                } `}
              />
              {errors.registrationNumber && (
                <span className="text-red-500 mb-2">{`${errors.registrationNumber.message}`}</span>
              )}
          </div>

      </div>
      <div className="mt-2 relative">
        <label htmlFor="" className="block text-gray-500 text-sm">
          Password
        </label>
        <input
          // type={inputType}
          type="password"
          {...register("password")}
          placeholder="Enter your password"
          className={`rounded-md px-2 py-1 outline-none w-full ring-1 ring-[#007791] ${
            errors.password?.message
              ? "focus:ring-red-700 focus:ring-2 "
              : "focus:ring-[#007791] focus:ring-2"
          } `}
        />
        {errors.password && (
          <span className="text-red-500 mb-2">{`${errors.password.message}`}</span>
        )}

        {/* <span
          className="absolute right-2 top-8 cursor-pointer text-green-700"
          onClick={handleToggle}
        >
          {visible ? (
            <BsEye style={{ width: 20, height: 20 }} />
          ) : (
            <BsEyeSlash style={{ width: 20, height: 20 }} />
          )}
        </span> */}
      </div>
       <div className="mt-2 relative">
        <label htmlFor="" className="block text-gray-500 text-sm">
          Confirm Password
        </label>
        <input
          // type={inputType}
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm your password"
          className={`rounded-md px-2 py-1 outline-none w-full ring-1 ring-[#007791] ${
            errors.confirmPassword?.message
              ? "focus:ring-red-700 focus:ring-2 "
              : "focus:ring-[#007791] focus:ring-2"
          } `}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 mb-2">{`${errors.confirmPassword.message}`}</span>
        )}

       
      </div>
      {/* </div> */}
      <div className="flex justify-center items-center w-full">
        <button
          className="w-full text-white px-4 rounded py-2 bg-[#007791] mt-2 hover:scale-95 disabled:bg-opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </div>

      <p className='mt-3'>Already have an account? <Link to={"/"}><span className='text-[#007791]'>Login</span></Link></p>
    </form>
      </section>
  )
}

export default Register