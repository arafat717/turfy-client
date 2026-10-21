/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import stadium from "../../../public/images/turf1.jpg"
import logo from "../../../public/images/football.png";
import Form from '@/components/Form/Form';
import { FieldValues } from 'react-hook-form';
import { useRegisterMutation } from '@/redux/api/authApi';
import { toast } from 'sonner';
import NOtp from '@/components/Form/NOtp';


export default function VerifyMail() {
   const [register] = useRegisterMutation()


  const handleRegister = async (data:FieldValues)=>{
    const {
      terms,
      confirmPassword,
      ...others
    } = data;
        console.log(others)
    const toastId = toast.loading("Signing...")
    try{
      const res = await register(others)
      console.log("data==>", res)
      if(res?.data){
        toast.success("Register successfull!")
      }
    }catch(err:any){
      toast.error(err.message)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-800 lg:min-h-dvh lg:flex-row">
      <div className="relative hidden overflow-hidden lg:flex lg:min-h-dvh lg:w-1/2 lg:flex-col lg:justify-end lg:p-12">
        {/* Background Image */}
        <Image
          src={stadium}
          alt="Shuttlecock and Badminton Racket"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient Overlay for backdrop intensity */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Right Section - Registration Form */}
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:min-h-dvh lg:w-1/2 lg:px-8">
        <div className="w-full max-w-2xl space-y-6 bg-white px-0 py-2 sm:px-4 sm:py-6 lg:px-6">
          {/* Logo Header */}
       <div className='flex items-center justify-center'>
           <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-2xl font-black text-slate-900">
               {/* Logo Section */}
              <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
             <div className="relative flex items-center justify-center">
              <Image src={logo} width={50} height={50} alt="Turfy Logo" />
             </div>
            
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-3xl font-black tracking-tight text-black uppercase italic">
                  Turfy
                </span>
              </div>
              <span className="text-[13px] text-[#83c400] font-semibold tracking-wider uppercase -mt-1 self-end pr-1">
                Sports
              </span>
            </div>
          </Link>
            </div>
          </div>
       </div>

          {/* Form Header */}
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-center text-[#192335] sm:text-4xl">
             Verify your mail
            </h1>
          </div>

          {/* Form Controls */}
          <Form
            onSubmit={handleRegister}
          >
            <div className='flex justify-center items-center'>
                <NOtp name='otp'></NOtp>
            </div>
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#1a2332] py-3.5 text-[20px] font-semibold text-white shadow transition hover:bg-green-800 cursor-pointer"
            >
              <span>Verify</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </Form>

        </div>
      </div>
    </div>
  );
}