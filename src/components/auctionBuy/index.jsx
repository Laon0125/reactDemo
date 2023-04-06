import { Link } from "react-router-dom";
import ViewAuctionBuy from "./ViewAuctionBuy";

const AuctionBuy = () => {
  return (
    <div>
      <ViewAuctionBuy />
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
            경매등록
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuctionBuy;
