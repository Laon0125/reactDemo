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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

// 입력값의 state
export default function SignUp() {
  const [user, setUser] = useState({
    userId: "",
    userPw: "",
    nickName: "",
    birth: "",
    phoneNumber: "",
    email: "",
  });
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const checkSignUp = async () => {
    if (user.userPw.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    } else if (user.birth.length < 6) {
      alert("생년월일은 6자 이상이어야 합니다.");
      return;
    } else if (user.birth.length === 6) {
      let month = Number(user.birth.substring(2, 4));
      let day = Number(user.birth.substring(4, 6));
      if (month < 1 || month > 12) {
        alert("생년월일은 1~12월이어야 합니다.");
        return;
      } else if (day < 1 || day > 31) {
        alert("생년월일은 1~31일이어야 합니다.");
        return;
      }
    }
    if (user.phoneNumber.length < 11) {
      alert("잘못된 핸드폰 번호 입력");
      return;
    }
    if (!regex.test(user.email)) {
      alert("잘못된 이메일 형식입니다.");
      return;
    }
    return true;
  };

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const check = await checkSignUp();
    if (check) {
      const response = //
        await api("post", "/user/signup", user) //
          .catch((e) => {
            alert("이미 사용중안 아이디입니다.");
          });
      if (response?.status === 201) {
        navigate("/login");
      }
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "birth") {
      if (/^\d{6}$/.test(value)) {
        setUser({ ...user, [name]: value });
      } else if (value.length > 6) {
        alert("유효하지않은 생년월일값입니다.");
        value = value.slice(0, 6);
      }
    } else if (name == "phoneNumber") {
      if (/^\d{11}$/.test(value)) {
        setUser({ ...user, [name]: value });
      } else if (value.length > 11) {
        alert("유효하지않은 전화번호값입니다.");
        value = value.slice(0, 1);
      }
    }

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
                  placeholder="아이디를 입력하세요."
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
                  className="relative block w-full appearance-none rounded-none border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="비밀번호를 입력하세요."
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="nickName"
                  name="nickName"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="닉네임을 입력해주세요."
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="birth"
                  name="birth"
                  type="number"
                  value={user.birth}
                  autoComplete="current-password"
                  required
                  pattern="[0-9]{6}"
                  className="relative block w-full appearance-none rounded-none border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="생년월일을 입력해주세요. 예)230101"
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  value={user.phoneNumber}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="전화번호를 입력해주세요. 예)01012341234"
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border 
                  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="이메일을 입력해주세요."
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
                    className="h-5 w-5 text-red-400 group-hover:text-slate-900"
                    aria-hidden="true"
                  />
                </span>
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
