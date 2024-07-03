import CustomForm from "@/forms/CustomForm";
import LoginForm from "@/forms/LoginForm";

const LoginPage = () => {
  return (
    <div className='w-full h-full min-h-screen gap-3 flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-center font-semibold'>Login</h1>
      <div className='max-w-md mx-auto w-full p-7 bg-gray-100 rounded-md'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
