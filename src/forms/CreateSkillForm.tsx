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
import CustomSelect from "./CustomSelect";
import { SkillLevel } from "@/types";

const validation = z.object({
  name: z.string({
    required_error: "Title is required",
  }),
  description: z.string().optional(),
  icon: z.string({
    required_error: "Icon is required",
  }),
  level: z.string({
    required_error: "Level is required",
  }),
});

const CreateSkillForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/skill`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.success) {
        toast.info("Project Created successfully");
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
      className='grid grid-cols-2 gap-3'
    >
      <CustomInput label='Name' name='name' placeholder='Enter skill name' type='text' />
      <CustomInput
        label='Description'
        name='description'
        placeholder='Enter skill description'
        type='text'
      />
      <CustomInput label='Icon' name='icon' placeholder='Enter skill icon' type='text' />
      <CustomSelect
        label='Level'
        name='level'
        placeholder='Select skill level'
        options={Object.keys(SkillLevel).map((key) => ({ value: key, name: key }))}
      />
      <Button disabled={loading} type='submit' className='w-full col-span-full'>
        Save
      </Button>
    </CustomForm>
  );
};

export default CreateSkillForm;
