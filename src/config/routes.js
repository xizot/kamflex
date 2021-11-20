import { lazy } from 'react';
import Banned from '../pages/Banned/Banned';
import Logout from '../pages/Logout/Logout';

const ForgotPassword = lazy(() => import('../pages/ForgotPassword/ForgotPassword'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieDetail = lazy(() => import('../pages/MovieDetail/MovieDetail'));
const Register = lazy(() => import('../pages/Register/Register'));
const ResetPassword = lazy(() => import('../pages/ResetPassword/ResetPassword'));
const VerifyEmail = lazy(() => import('../pages/VerifyEmail/VerifyEmail'));
const Watch = lazy(() => import('../pages/Watch/Watch'));
const Search = lazy(() => import('../pages/Search/Search'));
const MyList = lazy(() => import('../pages/AUTH/MyList/MyList'));
const History = lazy(() => import('../pages/AUTH/History/History'));
const Profile = lazy(() => import('../pages/AUTH/Profile/Profile'));

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
    path: '/banned',
    protected: false,
    exact: true,
    component: Banned,
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
    path: '/reset-password',
    protected: false,
    exact: true,
    component: ResetPassword,
  },
  {
    path: '/confirm-email',
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
  {
    path: '/search',
    protected: false,
    exact: true,
    component: Search,
  },
  {
    path: '/my-list',
    protected: true,
    exact: true,
    component: MyList,
  },
  {
    path: '/history',
    protected: true,
    exact: true,
    component: History,
  },
  {
    path: '/account',
    protected: true,
    exact: true,
    component: Profile,
  },
  {
    path: '/logout',
    protected: false,
    exact: true,
    component: Logout,
  },
];
