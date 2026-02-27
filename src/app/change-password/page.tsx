import ChangePasswordForm from '@/components/features/auth/ChangePasswordForm';

export default function ChangePasswordPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="h-screen w-1/2 lg:block">
        <img
          src="/Images/Rectangle3.png"
          alt="Change password illustration"
          className="h-full w-full object-fill"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="flex w-full items-center justify-center px-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="mb-8 text-center text-2xl font-bold text-gray-900">Change Password</h1>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
