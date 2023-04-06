import { useSelector } from "react-redux";
import ViewMyAuctionBuy from "./ViewMyAuctionBuy";
import ViewMyProductSell from "./ViewMyProductSell";

const MyPage = () => {
  const { data, status } = useSelector((state) => state.user);
  return (
    <div className="container text-center p-4 items-center text-2xl font-bold">
      <p>{data.nickName}님의 마이페이지</p>
      <ViewMyProductSell />
      <ViewMyAuctionBuy />
    </div>
  );
};

export default MyPage;
