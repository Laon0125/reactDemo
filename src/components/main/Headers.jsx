import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../store/user/userSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.user);
  // 실행시 getMe로 정보 가져옴
  useEffect(() => {
    dispatch(getMe());
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    //로그인 안되어 있을떄 다른데 접근 불가
    if (
      !token &&
      location.pathname !== "/login" &&
      location.pathname !== "/signup"
    ) {
      onClickLogout();
    }
  }, [location, status]);

  const onClickLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-slate-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2"
        aria-label="Global"
      >
        <div className="flex w-1/6">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/pooh.png?alt=media&token=90933c26-0a3b-4729-9b87-231fbab9af3d"
              alt=""
            />
          </Link>
        </div>
        <div className="mr-40">
          <Link
            to="/productsell"
            className="text-2xl font-semibold leading-6 text-red-400 mr-10"
          >
            중고거래
          </Link>
          <Link
            to="/auctionBuy"
            className="text-2xl font-semibold leading-6 text-red-400"
          >
            역경매
          </Link>
        </div>

        {data.nickName ? (
          <div>
            <Link
              to="/mypage"
              className="text-2xl font-semibold leading-6 text-red-400"
            >
              마이페이지
            </Link>
            <button
              className="text-2xl font-semibold leading-6 text-red-400 ml-5"
              onClick={onClickLogout}
            >
              로그아웃 <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        ) : (
          <>
            <div>
              <Link
                to="/login"
                className="text-xl font-semibold leading-6 text-red-400"
              >
                로그인 <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/signup"
                className="text-xl font-semibold leading-6 text-red-400 ml-5"
              >
                회원가입 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
