import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme/theme";
import Layout from "./layout/Layout/Layout";
import Login from "./pages/Login/Login";
// import Home from "./pages/Home/Home";
// import HwList from "./pages/Hw-list/Hw-list";
// import HwSubmit from "./pages/Hw-submit/Hw-submit";
// import Contact from "./pages/Contact/Contact";
// import Notification from "./pages/Notification/Notification";
// import Profile from "./pages/Profile/Profile";
// import Qna from "./pages/Qna/Qna";
import React, { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home/Home"));
const HwList = React.lazy(() => import("./pages/Hw-list/Hw-list"));
const HwSubmit = React.lazy(() => import("./pages/Hw-submit/Hw-submit"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Notification = React.lazy(
  () => import("./pages/Notification/Notification")
);
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Qna = React.lazy(() => import("./pages/Qna/Qna"));
import { LoginInfoProvider } from "./context/LoginUser/User";
import UploadHW from "./pages/Admin/UploadAssignment";
import UploadNotice from "./pages/Admin/UploadNotification";
import QuestionUpload from "./pages/QnaUpload";
import QnaDetail from "./pages/QnaDetail/Detail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoExist from "./pages/Error/404";
import ErrorPage from "./pages/Error/error";
import { ErrorProvider } from "./context/Error/Error";
import Detail from "./pages/Hw-list/Hw-detail/detail";
import Loader from "./pages/Loader/Loader";
import { ThemeContextProvider } from "./context/IsDark/IsDark";
import { CookiesProvider } from "react-cookie";
import { URL_MAP } from "./constants/url";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: URL_MAP.ASSIGNMENT,
        element: (
          <Suspense fallback={<Loader />}>
            <HwList />
          </Suspense>
        ),
      },
      {
        path: `${URL_MAP.ASSIGNMENT}/detail/:id`,
        element: <Detail />,
      },
      {
        path: `${URL_MAP.ASSIGNMENT}/:id`,
        element: (
          <Suspense fallback={<Loader />}>
            <HwList />
          </Suspense>
        ),
      },

      {
        path: `${URL_MAP.ASSIGNMENT}/upload`,
        element: <UploadHW />,
        loader: () => {
          const part = localStorage.getItem("part");

          return part === "STAFF" ? "ALLOWED" : "LIMIT";
        },
      },
      {
        path: `${URL_MAP.ASSIGNMENT_SUBMIT}/:id`,
        element: (
          <Suspense fallback={<Loader />}>
            <HwSubmit />
          </Suspense>
        ),
      },

      {
        path: URL_MAP.CONTACT,
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: URL_MAP.NOTIFICATION,
        element: (
          <Suspense fallback={<Loader />}>
            <Notification />
          </Suspense>
        ),
      },
      {
        path: `${URL_MAP.NOTIFICATION}/upload`,
        element: <UploadNotice />,
        loader: () => {
          const part = localStorage.getItem("part");

          return part === "STAFF" ? "ALLOWED" : "LIMIT";
        },
      },

      {
        path: URL_MAP.PROFILE,
        element: (
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: URL_MAP.QNA,
        element: (
          <Suspense fallback={<Loader />}>
            <Qna />
          </Suspense>
        ),
      },
      {
        path: `${URL_MAP.QNA}/:id`,
        element: <QnaDetail />,
      },
      {
        path: `${URL_MAP.QNA}/upload`,
        element: <QuestionUpload />,
      },
    ],
  },
  {
    path: `/${URL_MAP.LOGIN}`,
    element: <Login />,
  },
  {
    path: "/*",
    element: <NoExist />,
  },
]);

function App() {
  return (
    <>
      <CookiesProvider>
        <ThemeContextProvider>
          <ErrorProvider>
            <LoginInfoProvider>
              <ThemeProvider theme={theme}>
                <Global styles={GlobalStyle} />
                <RouterProvider router={router} />
                <ToastContainer
                  position="bottom-center"
                  limit={1}
                  autoClose={3000}
                  hideProgressBar
                />
              </ThemeProvider>
            </LoginInfoProvider>
          </ErrorProvider>
        </ThemeContextProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
