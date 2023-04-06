import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import ViewAuctionCommentList from "../auctionComment/ViewAuctionCommentList";
import { getDetailAuctionBuy } from "../store/auctionBuy/detailAuctionBuySlice";
import { getDetailProduct } from "../store/productSell/detailProductSellSlice";
import { getProduct } from "../store/productSell/productSellSlice";

const ViewDetailAuctionBuy = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.detailAuctionBuy);
  const myData = useSelector((state) => state.user.data);
  //   const location = useLocation();
  const param = useParams();
  useEffect(() => {
    dispatch(getDetailAuctionBuy(param.id));
  }, []);

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="p-1">
              <h1 className="p-1">{data.title}</h1>
            </div>
            <div className="p-1">
              <h1 className="p-1">내용</h1>
              <pre
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-20 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
            whitespace-pre-wrap break-all overflow-auto"
              >
                {data.content}
              </pre>
            </div>
            <div className="p-1 flex justify-between">
              <p className="p-1 w-auto">{data.category} </p>
              <p className="p-1 w-auto">{data.minCondition}급 이상</p>
            </div>

            <div className="p-1 relative flex justify-between">
              <h1 className="p-1">희망가격</h1>
              <h1 className="p-1">
                {data.lowWishPrice}원 ~ {data.highWishPrice}원
              </h1>
            </div>
            <div className="p-1 relative flex justify-between">
              <h1 className="p-1">마감기간</h1>
              <h1 className="p-1">{data.timeout}</h1>
            </div>
            <div className="p-1 relative flex justify-between">
              <h1 className="p-1"></h1>
              <h1 className="p-1">{data.commentCount}개 Comment</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-end">
        <Link
          to="post"
          className="flex text-xl font-semibold leading-6 text-red-400 justify-end mr-10"
        >
          <button
            className="group relative flex w-1/5 justify-center rounded-md border border-transparent 
            bg-slate-900 py-2 px-4 text-sm font-semibold text-red-400 hover:bg-red-400 hover:text-black focus:outline-none 
            focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mb-10"
          >
            상품 제시
          </button>
        </Link>
      </div>
      <div>
        {data.buyerNickName == myData.nickName && <ViewAuctionCommentList />}{" "}
      </div>
    </div>
  );
};

export default ViewDetailAuctionBuy;
