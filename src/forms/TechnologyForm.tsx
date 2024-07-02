"use client";
import CustomMultiSelect from "@/components/CustomMultiSelect";
import { Button } from "@/components/ui/button";
import CustomForm from "@/forms/CustomForm";
import fetcher from "@/helpers/fetcher";
import { Technology } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomSelect from "./CustomSelect";
const validation = z.object({
  technology: z.string(),
  technologies: z.any(),
});

const TechnologyForm = ({ projectId }: { projectId: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const payload = {
        technology: values.technology,
        technologies: values.technologies.map(
          (technology: { value: string; name: string }) => technology.value,
        ),
        projectId,
      };

      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/project-technology/${projectId}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
        },
      );
      if (res.success) {
        toast.info("Technology updated successfully");
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
        name='technology'
        label='Technology'
        placeholder='Select technology'
        options={Object.values(Technology).map((technology) => ({
          name: technology,
          value: technology,
        }))}
      />

      <CustomMultiSelect
        name='technologies'
        label='Technologies'
        placeholder='Select technologies'
        creatable
      />

      <Button disabled={loading} type='submit' className='w-full'>
        Save
      </Button>
    </CustomForm>
  );
};

export default TechnologyForm;
