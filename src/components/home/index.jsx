import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { getSearch, searchReset } from "../store/search/searchSlice";

const Home = () => {
  const { data } = useSelector((state) => state.user);
  const searchData = useSelector((state) => state.search.data);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState({
    title: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setKeyword({ ...keyword, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (keyword.title != "") {
      dispatch(getSearch(keyword));
      setKeyword({ title: "" });
    } else {
      dispatch(searchReset());
    }
  };

  return (
    <div className="container text-center p-4 items-center">
      <p className="text-2xl font-bold bg-red-400 text-white rounded-md">
        내가 원하는 물건! 요기요기!!
      </p>
      <div className="flex justify-center mt-5 rounded-md">
        <img
          className="w-1/5 h-1/6"
          src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media"
        />
        <img
          className="w-1/5 h-1/6"
          src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media"
        />
        <img
          className="w-1/5 h-1/6"
          src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media"
        />
        <img
          className="w-1/5 h-1/6"
          src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media"
        />
      </div>
      <form onSubmit={onSubmit}>
        <input
          className="border mt-5 w-1/2"
          type="text"
          name="title"
          value={keyword.title}
          onChange={onChangeHandler}
        />
        <button className="border">검색</button>
      </form>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-5">
          검색결과
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {searchData?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.url}
                  alt={product.url}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.isSold === true || (
                      <Link to={`/productsell/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </Link>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.sellerNickName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              {product.isSold === true && (
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500 text-6xl">판매완료</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
