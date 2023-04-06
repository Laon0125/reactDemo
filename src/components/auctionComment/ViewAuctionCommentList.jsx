import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAuctionComment } from "../store/auctionComment/auctionCommentSlice";

const ViewAuctionCommentList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auctionComment);
  const param = useParams();

  useEffect(() => {
    dispatch(getAuctionComment(param.id));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          제안된 상품
        </h2>
        {data.length !== 0 ? (
          <div className="mt-6 xl:gap-x-8">
            {data?.map((auctionComment) => (
              <div
                key={auctionComment.id}
                className="group relative border border-red-300 rounded-lg"
              >
                <div className="mt-2 flex justify-between m-2">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link
                        to={`/auctionbuy/${auctionComment.auctionId}/${auctionComment.id}`}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {auctionComment.bidderNickName}님
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {auctionComment.category}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {auctionComment.pcondition}급
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 mt-3">
                      {auctionComment.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mt-3">
                      {auctionComment.biddingPrice}원
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 bg-slate-200 p-2 rounded-md font-semibold text-center">제안된 상품이 없습니다</div>
        )}
      </div>
    </div>
  );
};

export default ViewAuctionCommentList;
