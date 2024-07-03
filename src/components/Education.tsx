import CreateEducationForm from "@/forms/CreateEducationForm";
import fetcher from "@/helpers/fetcher";
import { TEducation } from "@/types";
import { EducationTable } from "./EducationTable";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const Education = async () => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}?filter=education`, {
  next: { revalidate: 3600 },
  });
  const educationData = res?.data as TEducation[];
  return (
    <div className='w-full'>
      <div className='flex justify-between py-4'>
        <h1 className='text-2xl font-semibold'>Education List</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Education</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>{"Create Education"}</DialogTitle>
              <DialogDescription>{"Create a new education."}</DialogDescription>
            </DialogHeader>
            <CreateEducationForm />
          </DialogContent>
        </Dialog>
      </div>
      <EducationTable educationData={educationData} />
    </div>
  );
};

export default Education;
