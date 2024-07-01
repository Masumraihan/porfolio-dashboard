"use client";
import CustomForm from "@/forms/CustomForm";
import CustomInput from "@/forms/CustomInput";
import CustomTextArea from "@/forms/CustomTextArea";
import fetcher from "@/helpers/fetcher";
import { TProfile } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const validation = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  about: z.string().optional(),
  shortBio: z.string().optional(),
  email: z.string().optional(),
  photo: z.string().optional(),
  resumeURL: z.string().optional(),
  logoURL: z.string().optional(),
});

const ProfileForm = ({ profile }: { profile: TProfile }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${profile.id}`, {
        method: "PATCH",
        body: JSON.stringify(values),
      });
      if (res.success) {
        toast.info("Profile updated successfully");
        router.refresh();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <CustomForm
      onSubmit={handleSubmit}
      resolver={zodResolver(validation)}
      defaultValues={profile}
      className='grid md:grid-cols-2 gap-3'
    >
      <CustomInput label='Name' name='name' placeholder='Enter your name' type='text' />
      <CustomInput label='Address' name='address' placeholder='Enter your address' type='text' />
      <CustomInput label='Phone' name='phone' placeholder='Enter your phone' type='text' />
      <CustomInput label='About' name='about' placeholder='Enter your about' type='text' />

      <CustomInput label='Email' name='email' placeholder='Enter your email' type='email' />
      <CustomInput label='Photo' name='photo' placeholder='Enter your photo' type='url' />
      <CustomInput
        label='Resume URL'
        name='resumeURL'
        placeholder='Enter your resume URL'
        type='url'
      />
      <CustomInput label='Logo URL' name='logoURL' placeholder='Enter your logo URL' type='url' />
      <CustomTextArea
        label='Short Bio'
        name='shortBio'
        placeholder='Enter your short bio'
        className='md:col-span-2'
      />
      <Button disabled={loading} type='submit' className='md:col-span-2'>
        Save
      </Button>
    </CustomForm>
  );
};

export default ProfileForm;
