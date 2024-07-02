"use client";
import { Button } from "@/components/ui/button";
import CustomForm from "@/forms/CustomForm";
import CustomInput from "@/forms/CustomInput";
import fetcher from "@/helpers/fetcher";
import { Degree, GradType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomSelect from "./CustomSelect";

const validation = z.object({
  degree: z.string({ required_error: "Degree is required" }),
  institution: z.string({ required_error: "Institution is required" }),
  result: z.string({ required_error: "Result is required" }),
  startDate: z.string({ required_error: "Start Date is required" }),
  endDate: z.string().optional(),
  gradType: z.string({ required_error: "Grad type is required" }),
});

const CreateEducationForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      if (!values.endDate) {
        values.ongoing = true;
        values.endDate = null;
      }
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/education`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.success) {
        toast.info("Education Created successfully");
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
    <CustomForm onSubmit={handleSubmit} resolver={zodResolver(validation)} className='space-y-3'>
      <CustomSelect
        label='Degree'
        name='degree'
        placeholder='Select degree'
        options={Object.keys(Degree).map((key) => ({ value: key, name: key }))}
      />
      <CustomInput
        label='Institution'
        name='institution'
        placeholder='Enter your institution'
        type='text'
      />
      <CustomInput label='Result' name='result' placeholder='Enter your result' type='text' />
      <CustomSelect
        label='Grad Type'
        name='gradType'
        placeholder='Select grad type'
        options={Object.keys(GradType).map((key) => ({ value: key, name: key }))}
      />
      <CustomInput
        label='Start Date'
        name='startDate'
        placeholder='Enter your start date'
        type='date'
      />
      <CustomInput label='End Date' name='endDate' placeholder='Enter your end date' type='date' />
      <Button disabled={loading} type='submit' className='w-full'>
        Save
      </Button>
    </CustomForm>
  );
};

export default CreateEducationForm;
