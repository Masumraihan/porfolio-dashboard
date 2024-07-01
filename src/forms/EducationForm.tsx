"use client";
import { Button } from "@/components/ui/button";
import CustomForm from "@/forms/CustomForm";
import CustomInput from "@/forms/CustomInput";
import fetcher from "@/helpers/fetcher";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export type TEducation = {
  id: string;
  degree: "HSC" | "SSC" | "HONOURS" | "MASTERS" | "OTHER";
  institution: string;
  result: string;
  startDate: Date;
  endDate: Date | null;
  ongoing: boolean;
};
const validation = z.object({
  degree: z.string().optional(),
  institution: z.string().optional(),
  result: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  ongoing: z.boolean().optional(),
});

const EducationForm = ({ education }: { education: TEducation[] }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`, {
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
      //defaultValues={education}
      className='grid md:grid-cols-2 gap-3'
    >
      <CustomInput label='Degree' name='degree' placeholder='Enter your degree' type='text' />
      <CustomInput
        label='Institution'
        name='institution'
        placeholder='Enter your institution'
        type='text'
      />
      <CustomInput label='Result' name='result' placeholder='Enter your result' type='text' />
      <CustomInput
        label='Start Date'
        name='startDate'
        placeholder='Enter your start date'
        type='date'
      />
      <CustomInput label='End Date' name='endDate' placeholder='Enter your end date' type='date' />
      <Button disabled={loading} type='submit' className='md:col-span-2'>
        Save
      </Button>
    </CustomForm>
  );
};

export default EducationForm;
