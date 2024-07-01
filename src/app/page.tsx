import Certification from "@/components/Certification";
import Content from "@/components/Content";
import Experience from "@/components/Experience";
import { MobileDisplayTabList } from "@/components/MobileDisplayTabList";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Social from "@/components/Social";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import fetcher from "@/helpers/fetcher";
import { TProfile } from "@/types";

const tablist = [
  {
    name: "profile",
    label: "Profile",
  },
  {
    name: "social",
    label: "Social",
  },
  {
    name: "education",
    label: "Education",
  },
  {
    name: "experience",
    label: "Experience",
  },
  {
    name: "project",
    label: "Project",
  },
  {
    name: "skill",
    label: "Skill",
  },
  {
    name: "certification",
    label: "Certification",
  },
];
const page = async () => {
  const profile = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
    cache: "no-store",
  });
  const profileData = profile?.data as TProfile;

  return (
    <main className='container py-[50px]'>
      <Tabs defaultValue='profile' className='w-full'>
        <TabsList className='hidden lg:grid w-full lg:grid-cols-7 gap-4'>
          {tablist.map((tab) => (
            <TabsTrigger key={tab.name} value={tab.name}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsList className='lg:hidden w-full'>
          <MobileDisplayTabList tablist={tablist} />
        </TabsList>
        <Content value='profile'>
          <Profile profile={profileData} />
        </Content>{" "}
        <Content value='social'>
          <Social />
        </Content>
        <Content value='education'>
          <p>education</p>
        </Content>
        <Content value='experience'>
          <Experience />
        </Content>
        <Content value='project'>
          <Project />
        </Content>
        <Content value='skill'>
          <Skill />
        </Content>
        <Content value='certification'>
          <Certification />
        </Content>
      </Tabs>
    </main>
  );
};
export default page;
