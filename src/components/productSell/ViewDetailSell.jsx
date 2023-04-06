import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "../store/productSell/detailProductSellSlice";
import {
  getProduct,
  putDetailProduct,
} from "../store/productSell/productSellSlice";

const ViewDetailSell = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.detailProduct.data);
  const [data, setData] = useState({
    title: "",
    url: "",
    sellerNickName: "",
    category: "",
    price: 0,
  });
  //   const location = useLocation();
  const param = useParams();
  useEffect(() => {
    dispatch(getDetailProduct(param.id));
  }, []);

  useEffect(() => {
    if (reduxData.id == param.id) {
      setData(reduxData);
    }
  }, [reduxData]);

  const buyProductSell = () => {
    dispatch(putDetailProduct(param.id));
    navigate("/productsell", {
      state: {
        data,
      },
    });
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
                    {data.sellerNickName}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{data.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {data.price}
                </p>
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
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end mr-5">
        <button
          className="group relative flex w-1/5 justify-center rounded-md border border-transparent 
              bg-slate-900 py-2 px-4 text-sm font-semibold text-red-400 hover:bg-indigo-700 focus:outline-none 
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-10"
          onClick={buyProductSell}
        >
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ViewDetailSell;
