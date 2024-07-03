import SocialForm from "@/forms/SocialForm";
import fetcher from "@/helpers/fetcher";
import { TSocial } from "@/types";

const Social = async () => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}?filter=socialLinks`, {
    next: { revalidate: 3600 },
  });
  const socialLinks = res?.data as TSocial;
  return (
    <div className='w-full'>
      <SocialForm socialLinks={socialLinks} />
    </div>
  );
};

export default Social;
