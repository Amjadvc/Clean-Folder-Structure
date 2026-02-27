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
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-26">
          <div className="img-raper flex items-center justify-center">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
