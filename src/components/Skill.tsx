import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateSkillForm from "@/forms/CreateSkillForm";
import { Button } from "./ui/button";
import { SkillTable } from "./SkillTable";
import fetcher from "@/helpers/fetcher";
import { TSkill } from "@/types";
const Skill = async () => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}?filter=skill-list`, {
    next: { revalidate: 3600 },
  });
  const skillData = res?.data as TSkill[];
  return (
    <div className='w-full'>
      <div className='flex justify-between py-4'>
        <h1 className='text-2xl font-semibold'>Project List</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Skill</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-2xl overflow-y-auto h-full'>
            <DialogHeader>
              <DialogTitle>{"Create Skill"}</DialogTitle>
              <DialogDescription>{"Create a new skill."}</DialogDescription>
            </DialogHeader>
            <CreateSkillForm />
          </DialogContent>
        </Dialog>
      </div>
      <SkillTable skillData={skillData} />
    </div>
  );
};

export default Skill;
