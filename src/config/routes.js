import { lazy } from 'react';

const ForgotPassword = lazy(() => import('../pages/ForgotPassword/ForgotPassword'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieDetail = lazy(() => import('../pages/MovieDetail/MovieDetail'));
const Register = lazy(() => import('../pages/Register/Register'));
const ResetPassword = lazy(() => import('../pages/ResetPassword/ResetPassword'));
const VerifyEmail = lazy(() => import('../pages/VerifyEmail/VerifyEmail'));
const Watch = lazy(() => import('../pages/Watch/Watch'));

export const routes = [
  {
    path: '/',
    protected: false,
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    protected: false,
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    protected: false,
    exact: true,
    component: Register,
  },
  {
    path: '/forgot-password',
    protected: false,
    exact: true,
    component: ForgotPassword,
  },
  {
    path: '/recovery-password',
    protected: false,
    exact: true,
    component: ResetPassword,
  },
  {
    path: '/activation',
    protected: false,
    exact: true,
    component: VerifyEmail,
  },
  {
    path: '/detail/:id',
    protected: false,
    exact: true,
    component: MovieDetail,
  },
  {
    path: '/watch/:id',
    protected: false,
    exact: true,
    component: Watch,
  },
  {
    path: '/movie',
    protected: false,
    exact: true,
    component: Movie,
  },
];
