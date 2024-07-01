"use client";
import CustomForm from "@/forms/CustomForm";
import CustomInput from "@/forms/CustomInput";
import CustomTextArea from "@/forms/CustomTextArea";
import fetcher from "@/helpers/fetcher";
import { TProfile, TSocial } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
const validation = z.object({
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  gmail: z.string().optional(),
  whatsapp: z.string().optional(),
});

const SocialForm = ({ socialLinks }: { socialLinks: TSocial }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/social-links/${socialLinks.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(values),
        },
      );
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
      defaultValues={socialLinks}
      className='grid md:grid-cols-2 gap-3'
    >
      <CustomInput label='Facebook' name='facebook' placeholder='Enter your facebook' type='text' />
      <CustomInput label='Twitter' name='twitter' placeholder='Enter your twitter' type='text' />
      <CustomInput label='Linkedin' name='linkedin' placeholder='Enter your linkedin' type='text' />
      <CustomInput label='Github' name='github' placeholder='Enter your github' type='text' />
      <CustomInput label='Gmail' name='gmail' placeholder='Enter your gmail' type='text' />
      <CustomInput label='Whatsapp' name='whatsapp' placeholder='Enter your whatsapp' type='text' />
      <Button disabled={loading} type='submit' className='md:col-span-2'>
        Save
      </Button>
    </CustomForm>
  );
};

export default SocialForm;
