"use client";
import { Button } from "@/components/ui/button";
import CustomForm from "@/forms/CustomForm";
import CustomInput from "@/forms/CustomInput";
import fetcher from "@/helpers/fetcher";
import { SkillLevel, TSkill } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomSelect from "./CustomSelect";

const validation = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  level: z.string().optional(),
});

const SkillForm = ({ skill }: { skill: TSkill }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/skill/${skill.id}`, {
        method: "PATCH",
        body: JSON.stringify(values),
      });
      if (res.success) {
        toast.info("Skill updated successfully");
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

  const defaultValues = {
    name: skill.name,
    description: skill.description,
    icon: skill.icon,
    level: skill.level,
  };

  return (
    <CustomForm
      onSubmit={handleSubmit}
      resolver={zodResolver(validation)}
      defaultValues={defaultValues}
      className='grid grid-cols-2 gap-3'
    >
      <CustomInput label='Name' name='name' placeholder='Enter skill name' type='text' />
      <CustomInput
        label='Description'
        name='description'
        placeholder='Enter skill description'
        type='text'
      />
      <CustomSelect
        label='Level'
        name='level'
        options={Object.keys(SkillLevel).map((key) => ({ name: key, value: key }))}
      />
      <CustomInput label='Icon' name='icon' placeholder='Enter skill icon' type='text' />
      <Button disabled={loading} type='submit' className='w-full col-span-full'>
        Save
      </Button>
    </CustomForm>
  );
};

export default SkillForm;
