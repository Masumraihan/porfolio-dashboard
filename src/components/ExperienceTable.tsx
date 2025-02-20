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
import ExperienceForm from "@/forms/ExperienceForm";
import { TExperience } from "@/types";
import DeleteInfo from "./DeleteInfo";

export function ExperienceTable({ experienceData }: { experienceData: TExperience[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className='text-right'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {experienceData.map((experience) => (
          <TableRow key={experience.id}>
            <TableCell className='font-medium'>{experience.company}</TableCell>
            <TableCell>{experience.position}</TableCell>
            <TableCell>{experience.startDate}</TableCell>
            <TableCell>{experience.ongoing ? "Ongoing" : experience.endDate}</TableCell>
            <TableCell className='flex justify-end'>
              <div className='flex gap-x-5 items-center'>
                <ExperienceModal experience={experience}>
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
                </ExperienceModal>
                <DeleteInfo url={`/experience/${experience.id}`} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export const ExperienceModal = ({
  experience,
  children,
}: {
  experience?: TExperience;
  children: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>{"Edit Education"}</DialogTitle>
          <DialogDescription>{"Edit your education details."}</DialogDescription>
        </DialogHeader>
        <ExperienceForm experience={experience!} />
      </DialogContent>
    </Dialog>
  );
};
