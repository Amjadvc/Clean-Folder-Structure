import ChangePasswordForm from '@/components/features/auth/ChangePasswordForm';

export default function ChangePasswordPage() {
  return (
    <div className="flex w-full py-10 md:min-h-screen md:py-0">
      <div className="hidden h-screen lg:block lg:w-1/2">
        <img
          src="/Images/Rectangle3.png"
          alt="Change password illustration"
          className="h-full w-full object-fill"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="flex w-full items-center justify-center px-4 md:px-8 lg:w-1/2">
        <div className="flex w-full max-w-145 flex-col items-center justify-center gap-20 md:gap-26">
          <div className="img-raper flex items-center justify-center">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
