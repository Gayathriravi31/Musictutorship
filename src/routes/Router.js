import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../components/layout/FullLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const AboutMePage = lazy(() => import("../pages/AboutMePage"));
const CoursesPage = lazy(() => import("../pages/course/CourseListPage"));
const CourseDetails = lazy(() => import("../pages/course/courseDetails"));
const RegisterPage = lazy(() => import("../pages/register/RegisterPage"));

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-me", element: <AboutMePage /> },
      { path: "/courses-page", element: <CoursesPage /> },
      { path: "/course-details/:courseName", element: <CourseDetails /> },
      { path: "/auth/register-page", element: <RegisterPage /> },
    ],
  },
];

export default Router;
