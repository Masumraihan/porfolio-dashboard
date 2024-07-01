import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <main className='container py-[50px]'>
      <Tabs defaultValue='general' className='w-full'>
        <TabsList className='grid w-full grid-cols-7'>
          <TabsTrigger value='general'>General</TabsTrigger>
          <TabsTrigger value='social'>Social</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='experience'>Experience</TabsTrigger>
          <TabsTrigger value='project'>Project</TabsTrigger>
          <TabsTrigger value='skill'>Skill</TabsTrigger>
          <TabsTrigger value='certification'>Certification</TabsTrigger>
        </TabsList>
        <TabsContent value='general'>
          <Card>
            <CardHeader>
              <CardTitle>General</CardTitle>
              <CardDescription>Update general information about your profile.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='social'>
          <Card>
            <CardHeader>
              <CardTitle>Social</CardTitle>
              <CardDescription>Update your social media links here.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='education'>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Update your educational background here.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='experience'>
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>Update your work experience here.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='project'>
          <Card>
            <CardHeader>
              <CardTitle>Project</CardTitle>
              <CardDescription>Update your project details here.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='skill'>
          <Card>
            <CardHeader>
              <CardTitle>Skill</CardTitle>
              <CardDescription>Update your skill set here.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='certification'>
          <Card>
            <CardHeader>
              <CardTitle>Certification</CardTitle>
              <CardDescription>Update your certifications here.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};
export default page;
