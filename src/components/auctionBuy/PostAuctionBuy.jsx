import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

const PostAuctionBuy = () => {
  const [auction, setAuction] = useState({
    title: "",
    content: "",
    category: null,
    minCondition: null,
    lowWishPrice: 0,
    highWishPrice: 0,
    inputTime: 0,
  });

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(auction);
    const response = //
      await api("post", "/auction/post", auction); //
    // .catch((e) => {
    //   alert(e.response.data);
    // });
    console.log(response);
    if (response?.status === 201) {
      navigate("/auctionBuy");
    }
  };
  const onChangeTime = (e) => {
    setAuction({ ...auction, inputTime: Date.parse(e.target.value) });
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAuction({ ...auction, [name]: value });
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="p-1">
              <h1 className="p-1">제목</h1>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                placeholder="OOO 싸게 팝니다! 얼마 안 썼어요~~!"
                onChange={onChangeHandler}
              />
            </div>
            <div className="p-1">
              <h1 className="p-1">내용</h1>
              <textarea
                id="content"
                name="content"
                required
                className="resize-none border border-gray-300 w-full h-40 rounded-md placeholder:text-center 
                placeholder:font-medium placeholder:text-sm p-2
                focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                placeholder="진짜 아끼던 상품이에요! 생활기스 조금 있어요.."
                onChange={onChangeHandler}
              />
            </div>
            <div className="p-1">
              <h1 className="p-1">카테고리</h1>
              <select
                id="category"
                name="category"
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                onChange={onChangeHandler}
              >
                <option>-- 눌러서 선택해주세요! --</option>
                <option value={"ELECTRONICS"}>전자기기</option>
                <option value={"CAMERA"}>카메라</option>
                <option value={"GAME"}>게임</option>
                <option value={"CLOTH"}>의류</option>
                <option value={"SHOES"}>신발</option>
                <option value={"ETC"}>그 외</option>
              </select>
            </div>
            <div className="p-1">
              <h1 className="p-1">최소상태 등급</h1>
              <select
                id="minCondition"
                name="minCondition"
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                onChange={onChangeHandler}
              >
                <option>-- 이정도는 되야해요! --</option>
                <option>S</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </div>
            <div className="p-1 relative">
              <h1 className="p-1">희망가격</h1>
              <div className="relative w-3/4">
                <input
                  type="number"
                  id="lowWishPrice"
                  name="lowWishPrice"
                  className="py-2 px-3 pl-9 pr-16 block w-full border border-gray-300 rounded-md text-sm focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="1,000"
                  onChange={onChangeHandler}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">￦</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                  <span className="text-gray-500">원 부터</span>
                </div>
              </div>
              <div className="relative w-3/4">
                <input
                  type="number"
                  id="highWishPrice"
                  name="highWishPrice"
                  className="py-2 px-3 pl-9 pr-16 block w-full border border-gray-300 rounded-md text-sm focus:z-10 
                  focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                  placeholder="1,000"
                  onChange={onChangeHandler}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">￦</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                  <span className="text-gray-500">원 까지</span>
                </div>
              </div>
            </div>
            <div className="p-1">
              <h1 className="p-1">마감기간</h1>
              <input
                id="inputTime"
                name="inputTime"
                type="datetime-local"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-red-400 focus:outline-none focus:ring-red-400 sm:text-sm"
                placeholder="OOO 싸게 팝니다! 얼마 안 썼어요~~!"
                onChange={onChangeTime}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative flex w-1/2 justify-center rounded-md border border-transparent 
                bg-slate-900 py-2 px-4 text-sm font-medium text-red-400 hover:bg-red-400 hover:text-black 
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-5"
              >
                등록
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAuctionBuy;