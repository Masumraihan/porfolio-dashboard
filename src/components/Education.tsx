import EducationForm from "@/forms/EducationForm";
import fetcher from "@/helpers/fetcher";
import { TEducation } from "@/types";
import { EducationTable } from "./EducationTable";

const Education = async () => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}?filter=education`, {
    cache: "no-store",
  });
  const educationData = res?.data as TEducation[];
  return (
    <div className='w-full'>
      <EducationTable educationData={educationData} />
    </div>
  );
};

export default Education;
