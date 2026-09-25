import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import './signup-form.css';

export interface SignupFormProps {
  showHeading?: boolean;
  defaultValues?: { name?: string; email?: string; password?: string };
  errors?: { email?: string; password?: string };
}

export function SignupForm({
  showHeading = true,
  defaultValues = {},
  errors = {},
}: SignupFormProps) {
  return (
    <form className="signup-form" onSubmit={event => event.preventDefault()}>
      {showHeading && (
        <div className="signup-form__heading">
          <h2>Create your account</h2>
          <p>Start your 14-day free trial. No credit card needed.</p>
        </div>
      )}
      <TextField
        label="Full name"
        name="name"
        autoComplete="name"
        placeholder="Maya Chen"
        defaultValue={defaultValues.name}
      />
      <TextField
        label="Work email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="maya@company.com"
        defaultValue={defaultValues.email}
        error={errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        hint="At least 8 characters."
        defaultValue={defaultValues.password}
        error={errors.password}
      />
      <div className="signup-form__terms">
        <input type="checkbox" name="terms" />
        <span>
          I agree to the <a href="#">Terms</a> and{' '}
          <a href="#">Privacy Policy</a>.
        </span>
      </div>
      <Button type="submit" size="lg" fullWidth>
        Create account
      </Button>
      <p className="signup-form__footer">
        Already have an account? <a href="#">Log in</a>
      </p>
    </form>
  );
}
