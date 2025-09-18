import { AuthHeader } from "@/components/auth-header";
import { LoginForm } from "@/components/forms/login-form";

export default function SignInPage() {
  return (
    <div className="w-full">
      <AuthHeader text="Welcome Back!" />
      <p className="mt-2 font-semibold text-center">
        Ready to continue your journey on
        <span className="text-secondary"> Bisame</span>
      </p>
      <LoginForm />
    </div>
  );
}
