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
import CustomTextArea from "./CustomTextArea";

const validation = z.object({
  company: z.string({ required_error: "Company is required" }),
  position: z.string({ required_error: "Position is required" }),
  description: z.string().optional(),
  startDate: z.string({ required_error: "Start Date is required" }),
  endDate: z.string().optional(),
  responsibility_1: z.string({ required_error: "Responsibility is required" }),
  responsibility_2: z.string().optional(),
  responsibility_3: z.string().optional(),
  responsibility_4: z.string().optional(),
  responsibility_5: z.string().optional(),
});

const CreateExperienceForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const payload = {
        company: values.company,
        position: values.position,
        description: values.description,
        startDate: values.startDate,
        endDate: values.endDate,
        ongoing: false,
        responsibilities: [values.responsibility_1],
      };
      if (!values.endDate) {
        payload.ongoing = true;
        payload.endDate = null;
      }

      if (values.responsibility_2) payload.responsibilities.push(values.responsibility_2);
      if (values.responsibility_3) payload.responsibilities.push(values.responsibility_3);
      if (values.responsibility_4) payload.responsibilities.push(values.responsibility_4);
      if (values.responsibility_5) payload.responsibilities.push(values.responsibility_5);

      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/experience`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      if (res.success) {
        toast.info("Experience Created successfully");
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
      className='grid grid-cols-2 gap-3 w-full'
    >
      <CustomInput label='Company' name='company' placeholder='Enter your company' type='text' />
      <CustomInput label='Position' name='position' placeholder='Enter your position' type='text' />
      <CustomInput
        label='Start Date'
        name='startDate'
        placeholder='Enter your start date'
        type='date'
      />
      <CustomInput label='End Date' name='endDate' placeholder='Enter your end date' type='date' />

      <CustomTextArea label='Description' name='description' placeholder='Enter your description' />
      <CustomTextArea
        label='Responsibility 1'
        name='responsibility_1'
        placeholder='Enter your responsibility'
      />
      <CustomTextArea
        label='Responsibility 2'
        name='responsibility_2'
        placeholder='Enter your responsibility'
      />
      <CustomTextArea
        label='Responsibility 3'
        name='responsibility_3'
        placeholder='Enter your responsibility'
      />
      <CustomTextArea
        label='Responsibility 4'
        name='responsibility_4'
        placeholder='Enter your responsibility'
      />
      <CustomTextArea
        label='Responsibility 5'
        name='responsibility_5'
        placeholder='Enter your responsibility'
      />
      <Button disabled={loading} type='submit' className='w-full col-span-full'>
        Save
      </Button>
    </CustomForm>
  );
};

export default CreateExperienceForm;
