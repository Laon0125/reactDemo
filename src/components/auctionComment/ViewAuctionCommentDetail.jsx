import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getDetailAuctionComment,
  putDetailComment,
} from "../store/auctionComment/detailAuctionCommentSlice";

const ViewAuctionCommentDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.detailAuctionComment); //만들어야함
  const { auctionId, commentId } = useParams();
  console.log("컴포넌트", data);
  useEffect(() => {
    dispatch(getDetailAuctionComment({ auctionId, commentId }));
  }, []);

  const buyAuctionComment = () => {
    dispatch(putDetailComment({ auctionId, commentId }));
    navigate("/auctionbuy");
  };

  return (
    <div className="bg-white whitespace-nowrap">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          {data.title}
        </h2>

        <div className="mt-6 flex justify-center">
          {data && (
            <div className="group relative w-1/3">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={data.url}
                  alt={data.url}
                  className="h-full w-full object-fill"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="mt-1 text-sm text-gray-500">
                    {data.bidderNickName}님
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {data.pcondition}급
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {data.biddingPrice}원
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-left mt-5">
                  내용
                </h2>
                <div className="overflow-hidden rounded-md bg-gray-200">
                  <pre
                    className="mt-1 text-sm text-black p-2 
                  whitespace-pre-wrap break-all overflow-auto"
                  >
                    {data.content}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end mr-5">
        <button
          className="group relative flex w-1/5 justify-center rounded-md border border-transparent 
              bg-slate-900 py-2 px-4 text-sm font-semibold text-red-400 hover:bg-indigo-700 focus:outline-none 
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-10"
          onClick={buyAuctionComment}
        >
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ViewAuctionCommentDetail;
