import { TabsContent } from "./ui/tabs";

const Content = ({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) => {
  return (
    <TabsContent value={value} className={className}>
      {children}
    </TabsContent>
  );
};

export default Content;
