import ProfileForm from "@/forms/ProfileForm";
import fetcher from "@/helpers/fetcher";
import { TProfile } from "@/types";

const Profile = async () => {
  const profile = await fetcher(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
    next: { revalidate: 3600 },
  });
  const profileData = profile?.data as TProfile;
  return (
    <div className='w-full h-full'>
      <ProfileForm profile={profileData} />
    </div>
  );
};

export default Profile;
