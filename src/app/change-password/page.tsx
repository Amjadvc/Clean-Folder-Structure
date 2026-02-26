import ChangePasswordForm from '../../components/features/auth/ChangePasswordForm';

export default function ChangePasswordPage() {
  return (
    <div className="mx-auto mt-12 max-w-md text-red-200">
      <h1 className="mb-6 flex items-center justify-center text-2xl font-bold text-red-200">
        Change Password
      </h1>
      <ChangePasswordForm />
    </div>
  );
}
