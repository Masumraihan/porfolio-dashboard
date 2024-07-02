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
import { TProject } from "@/types";

const validation = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  thumbnail: z.string().optional(),
  image_1: z.string().optional(),
  image_2: z.string().optional(),
  image_3: z.string().optional(),
  image_4: z.string().optional(),
  image_5: z.string().optional(),
  image_6: z.string().optional(),
  isTeamProject: z.string().optional(),
  frontendGithub: z.string().optional(),
  backendGithub: z.string().optional(),
  preview: z.string().optional(),
});

const ProjectForm = ({ project }: { project: TProject }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit: SubmitHandler<FieldValues> = async (values) => {
    setLoading(true);
    try {
      const payload = {
        title: values.title,
        description: values.description,
        startDate: values.startDate,
        endDate: values.endDate,
        thumbnail: values.thumbnail,
        images: [values.image_1],
        isTeamProject: values.isTeamProject,
        frontendGithub: values.frontendGithub,
        backendGithub: values.backendGithub,
        preview: values.preview,
        ongoing: false,
      };
      if (!values.endDate) {
        payload.ongoing = true;
        payload.endDate = null;
      }

      if (values.isTeamProject === "true") {
        payload.isTeamProject = true;
      } else {
        payload.isTeamProject = false;
      }
      if (values.image_2) payload.images.push(values.image_2);
      if (values.image_3) payload.images.push(values.image_3);
      if (values.image_4) payload.images.push(values.image_4);
      if (values.image_5) payload.images.push(values.image_5);
      if (values.image_6) payload.images.push(values.image_6);

      const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}/project/${project.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });
      if (res.success) {
        toast.info("Project updated successfully");
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
    title: project.title,
    description: project.description,
    startDate: project.startDate,
    endDate: project.endDate,
    thumbnail: project.thumbnail,
    image_1: project.images[0] || "",
    image_2: project.images[1] || "",
    image_3: project.images[2] || "",
    image_4: project.images[3] || "",
    image_5: project.images[4] || "",
    image_6: project.images[5] || "",
    isTeamProject: project.isTeamProject.toString(),
    frontendGithub: project.frontendGithub,
    backendGithub: project.backendGithub,
    preview: project.preview,
  };

  return (
    <CustomForm
      onSubmit={handleSubmit}
      resolver={zodResolver(validation)}
      defaultValues={defaultValues}
      className='grid grid-cols-2 gap-3'
    >
      <CustomInput label='Title' name='title' placeholder='Enter your title' type='text' />
      <CustomInput
        label='Description'
        name='description'
        placeholder='Enter your description'
        type='text'
      />
      <CustomInput
        label='Thumbnail'
        name='thumbnail'
        placeholder='Enter your thumbnail'
        type='text'
      />

      <CustomInput
        label='Start Date'
        name='startDate'
        placeholder='Enter your start date'
        type='date'
      />
      <CustomSelect
        label='Is Team Project'
        name='isTeamProject'
        placeholder='Select is team project'
        options={[
          { value: "true", name: "Yes" },
          { value: "false", name: "No" },
        ]}
      />
      <CustomInput label='End Date' name='endDate' placeholder='Enter your end date' type='date' />
      <CustomInput
        label='Frontend Github'
        name='frontendGithub'
        placeholder='Enter your github'
        type='text'
      />
      <CustomInput
        label='Backend Github'
        name='backendGithub'
        placeholder='Enter your github'
        type='text'
      />
      <CustomInput label='Preview' name='preview' placeholder='Enter your preview' type='text' />
      <CustomInput label='Image 1' name='image_1' placeholder='Enter your images 1' type='text' />
      <CustomInput label='Image 2' name='image_2' placeholder='Enter your images 2' type='text' />
      <CustomInput label='Image 3' name='image_3' placeholder='Enter your images 3' type='text' />
      <CustomInput label='Image 4' name='image_4' placeholder='Enter your images 4' type='text' />
      <CustomInput label='Image 5' name='image_5' placeholder='Enter your images 5' type='text' />
      <CustomInput label='Image 6' name='image_6' placeholder='Enter your images 6' type='text' />
      <Button disabled={loading} type='submit' className='w-full col-span-full'>
        Save
      </Button>
    </CustomForm>
  );
};

export default ProjectForm;
