import CreateExperienceForm from "@/forms/CreateExperienceForm";
import { ExperienceTable } from "./ExperienceTable";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { TExperience } from "@/types";
import fetcher from "@/helpers/fetcher";
const Experience = async () => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}?filter=experience`, {
    next: { revalidate: 3600 },
  });
  const experienceData = res?.data as TExperience[];
  return (
    <div>
      <div className='flex justify-between items-center py-4 flex-shrink'>
        <h1 className='text-2xl font-semibold text-balance'>Experience List</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Experience</Button>
          </DialogTrigger>
          <DialogContent className='overflow-y-auto sm:max-w-2xl w-full'>
            <DialogHeader>
              <DialogTitle>Create Experience</DialogTitle>
              <DialogDescription>{"Create a new experience."}</DialogDescription>
            </DialogHeader>
            <CreateExperienceForm />
          </DialogContent>
        </Dialog>
      </div>
      <ExperienceTable experienceData={experienceData} />
    </div>
  );
};

export default Experience;
