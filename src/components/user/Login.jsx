/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/user/userSlice";

export default function Login() {
  const {
    data,
    error,
    status,
  } = //
    useSelector((state) => state.user);
  const [user, setUser] = useState({
    userId: "",
    userPw: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  useEffect(() => {
    if (status === "successed" && data.token) navigate("/");
  }, [status, data]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="userId"
                  name="userId"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="아이디를 입력해주세요."
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="userPw"
                  name="userPw"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent 
                bg-slate-900 py-2 px-4 text-sm font-medium text-red-400 hover:bg-red-400 hover:text-black 
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-5"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-red-500 group-hover:text-slate-900"
                    aria-hidden="true"
                  />
                </span>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
