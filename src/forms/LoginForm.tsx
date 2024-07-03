"use client";

import { Button } from "@/components/ui/button";
import fetcher from "@/helpers/fetcher";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import CustomForm from "./CustomForm";
import CustomInput from "./CustomInput";

const validation = z.object({
  email: z.string().email(),
  password: z.string(),
});

const LoginForm = () => {
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.success) {
        toast.success("login success");
        localStorage.setItem("token", res.data.token);
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomForm onSubmit={onSubmit} resolver={zodResolver(validation)} className='space-y-3'>
      <CustomInput label='Email' name='email' placeholder='Enter your email' type='email' />
      <CustomInput
        label='Password'
        name='password'
        placeholder='Enter your password'
        type='password'
      />
      <Button type='submit' className='w-full'>
        Login
      </Button>
    </CustomForm>
  );
};

export default LoginForm;
