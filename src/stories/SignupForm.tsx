import React from 'react';

import './signup-form.css';
import { Button } from './Button';

export const SignupForm: React.FC = () => {
  return (
    <article>
      <section className="signup-form">
        <h2>Sign up</h2>
        <p>Fill out the form below to create an account.</p>
        <form>
          <div className="signup-form__field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="signup-form__field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="signup-form__actions">
            <Button label="Sign up" size="large" />
          </div>
        </form>
      </section>
    </article>
  );
};
