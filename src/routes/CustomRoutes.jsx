import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AuctionBuy from "../components/auctionBuy";
import PostAuctionBuy from "../components/auctionBuy/PostAuctionBuy";
import ViewDetailAuctionBuy from "../components/auctionBuy/ViewDetailAuctionBuy";
import PostAuctionComment from "../components/auctionComment/PostAuctionComment";
import ViewAuctionCommentDetail from "../components/auctionComment/ViewAuctionCommentDetail";
import ViewAuctionCommentList from "../components/auctionComment/ViewAuctionCommentList";
import Home from "../components/home";
import Main from "../components/main";
import MyPage from "../components/mypage";
import Productsell from "../components/productSell";
import PostSell from "../components/productSell/PostSell";
import ViewDetailSell from "../components/productSell/ViewDetailSell";
import Login from "../components/user/Login";
import SignUp from "../components/user/SignUp";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

          <Route path="productsell" element={<Productsell />} />
          <Route path="productsell/post" element={<PostSell />} />
          <Route path="productsell/:id" element={<ViewDetailSell />} />

          <Route path="auctionbuy" element={<AuctionBuy />} />
          <Route path="auctionbuy/:id" element={<ViewDetailAuctionBuy />} />
          <Route path="auctionbuy/post" element={<PostAuctionBuy />} />

          <Route path="auctionbuy/:id/post" element={<PostAuctionComment />} />
          <Route
            path="auctionbuy/:auctionId/:commentId"
            element={<ViewAuctionCommentDetail />}
          />

          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
