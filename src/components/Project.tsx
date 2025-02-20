import CreateProjectForm from "@/forms/CreateProjectForm";
import fetcher from "@/helpers/fetcher";
import { TProject } from "@/types";
import { ProjectTable } from "./ProjectTable";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const Project = async () => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}?filter=projects`, {
    next: { revalidate: 3600 },
  });
  const projectData = res?.data as TProject[];
  return (
    <div className='w-full'>
      <div className='flex justify-between py-4'>
        <h1 className='text-2xl font-semibold'>Project List</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Project</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-2xl overflow-y-auto h-full'>
            <DialogHeader>
              <DialogTitle>{"Create Project"}</DialogTitle>
              <DialogDescription>{"Create a new project."}</DialogDescription>
            </DialogHeader>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
      </div>
      <ProjectTable projectData={projectData} />
    </div>
  );
};

export default Project;
