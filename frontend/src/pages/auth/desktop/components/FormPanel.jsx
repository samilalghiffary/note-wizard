import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, registerSchema } from '@/utils/validator/authSchema';

const FormPanel = ({ isLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(isLogin ? loginSchema : registerSchema) });

  const onSubmitHandler = (data) => {
    console.log(data);
    if (isLogin) {
      navigate('/notes');
    } else {
      reset();
      navigate('/login');
    }
  };

  const onShowPasswordHandler = (e) => {
    if (e.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className="w-full lg:basis-5/12 flex justify-center items-center flex-col p-5">
      <h3 className="text-2xl self-start mb-3">{isLogin ? 'Login' : 'Register'}</h3>
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={`form-control ${errors.username ? '' : 'mb-1'}`}>
          <label htmlFor="username" className="label">
            <span className={`label-text ${errors.username ? 'text-error' : ''}`}>Username</span>
          </label>

          <input
            id="username"
            type="text"
            autoComplete="true"
            placeholder="username"
            {...register('username')}
            className={`input lg:input-sm ${errors.username ? 'input-error' : ''}`}
          />
          {errors.username ? (
            <label className="label pb-0">
              <span className="label-text-alt text-error">{errors.username.message}</span>
            </label>
          ) : null}
        </div>

        <div className={`form-control ${errors.password ? '' : 'mb-1'}`}>
          <label htmlFor="password" className="label">
            <span className={`label-text ${errors.password ? 'text-error' : ''}`}>Password</span>
          </label>

          <input
            id="password"
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            className={`input lg:input-sm ${errors.password ? 'input-error' : ''}`}
            {...register('password')}
          />
          {errors.password ? (
            <label className="label pb-0">
              <span className="label-text-alt text-error">{errors.password.message}</span>
            </label>
          ) : null}
        </div>

        {!isLogin ? (
          <div className="form-control">
            <label htmlFor="confirmPassword" className="label">
              <span className={`label-text ${errors.confirmPassword ? 'text-error' : ''}`}>
                Confirm password
              </span>
            </label>

            <input
              id="confirmPassword"
              placeholder="Confirm password"
              type={showPassword ? 'text' : 'password'}
              className={`input lg:input-sm ${errors.confirmPassword ? 'input-error' : ''}`}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword ? (
              <label className="label pb-0">
                <span className="label-text-alt text-error">{errors.confirmPassword.message}</span>
              </label>
            ) : null}
          </div>
        ) : null}

        <div className="form-control mb-4">
          <label className="label cursor-pointer">
            <span className="label-text">Show password</span>
            <input
              type="checkbox"
              id="show-password-toggle"
              onChange={onShowPasswordHandler}
              className="toggle toggle-secondary toggle-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn lg:btn-sm btn-secondary w-full normal-case">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      {!isLogin ? (
        <p className="text-sm mt-2">
          Already have an account?{' '}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      ) : (
        <p className="text-sm mt-2">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="link">
            register
          </Link>
        </p>
      )}
    </div>
  );
};

export default FormPanel;
