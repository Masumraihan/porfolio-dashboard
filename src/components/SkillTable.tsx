import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProjectForm from "@/forms/ProjectForm";
import SkillForm from "@/forms/SkillForm";
import TechnologyForm from "@/forms/TechnologyForm";
import { TProject, TSkill } from "@/types";
import Image from "next/image";
import DeleteInfo from "./DeleteInfo";

export function SkillTable({ skillData }: { skillData: TSkill[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Icon</TableHead>
          <TableHead>Skill Name</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className='text-right'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skillData?.map((skill) => (
          <TableRow key={skill.id}>
            <TableCell>
              <Image src={skill.icon} width={100} height={100} alt={skill.name} />
            </TableCell>
            <TableCell className='font-medium'>{skill.name}</TableCell>
            <TableCell>{skill.level}</TableCell>
            <TableCell>{skill.description}</TableCell>
            <TableCell className='flex justify-end'>
              <div className='flex gap-x-5 items-center'>
                <SkillModal skill={skill}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-5 cursor-pointer'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                    />
                  </svg>
                </SkillModal>
                <DeleteInfo url={`/skill/${skill.id}`} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export const SkillModal = ({ skill, children }: { skill: TSkill; children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-2xl overflow-y-auto h-full'>
        <DialogHeader>
          <DialogTitle>{"Edit Project"}</DialogTitle>
          <DialogDescription>{"Edit your project details."}</DialogDescription>
        </DialogHeader>
        <SkillForm skill={skill} />
      </DialogContent>
    </Dialog>
  );
};
