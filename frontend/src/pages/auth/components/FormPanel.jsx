import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToken } from '@/utils/context/Token';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, registerSchema } from '@/utils/validator/authSchema';

const FormPanel = ({ isLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(isLogin ? loginSchema : registerSchema) });

  const { authLogin, authRegister } = useToken();

  const onSubmitHandler = async (data) => {
    const { username, password, fullname } = data;

    try {
      if (!isLogin) {
        const message = await authRegister(username, password, fullname);
        alert(message);
        reset();
        navigate('/login');
      } else {
        const message = await authLogin(username, password);
        alert(message);
        navigate('/notes');
      }
    } catch (error) {
      if (error === 'Kredensial yang Anda berikan salah') {
        alert('Incorrect username and password');
      }
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
    <div className="w-11/12 lg:w-5/12 flex justify-center flex-col px-5">
      <h3 className="text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h3>
      <form className="w-full" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={`${!isLogin ? 'flex gap-1' : ''}`}>
          <div
            className={`form-control ${!isLogin ? 'w-1/2' : ''} ${errors.username ? '' : 'mb-1'}`}
          >
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

          {!isLogin && (
            <div
              className={`form-control ${!isLogin ? 'w-1/2' : ''} ${errors.fullname ? '' : 'mb-1'}`}
            >
              <label htmlFor="fullname" className="label">
                <span className={`label-text ${errors.fullname ? 'text-error' : ''}`}>
                  Fullname
                </span>
              </label>

              <input
                id="fullname"
                type="text"
                autoComplete="true"
                placeholder="username"
                {...register('fullname')}
                className={`input lg:input-sm ${errors.fullname ? 'input-error' : ''}`}
              />
              {errors.fullname ? (
                <label className="label pb-0">
                  <span className="label-text-alt text-error">{errors.fullname.message}</span>
                </label>
              ) : null}
            </div>
          )}
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
              className="toggle toggle-primary toggle-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn lg:btn-sm btn-neutral w-full normal-case">
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
