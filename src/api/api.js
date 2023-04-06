import axios from "axios";
axios.defaults.baseURL = "http://34.64.69.238"; // 스프링부트 주소
export const api = async (method, url, data) => {
  const token = localStorage.getItem("token");
  const headers = token
    ? {
        Authorization: token,
      }
    : {};
  const response = await axios({
    method,
    data,
    url,
    headers,
  });
  return response;
};

export const apiFile = async (method, url, data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("category", data.category);
  formData.append("price", data.price);
  formData.append("pCondition", data.pCondition);
  formData.append("file", data.file);
  formData.append("content", data.content);
  formData.append("nameFile", data.nameFile);
  const token = localStorage.getItem("token");
  const headers = token
    ? {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      }
    : {};
  const response = await axios({
    method,
    data: formData,
    url,
    headers,
  });
  return response;
};

export const apiFileComment = async (method, url, data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("biddingPrice", data.biddingPrice);
  formData.append("pCondition", data.pCondition);
  formData.append("file", data.file);
  formData.append("content", data.content);
  formData.append("nameFile", data.nameFile);
  const token = localStorage.getItem("token");
  const headers = token
    ? {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      }
    : {};
  const response = await axios({
    method,
    data: formData,
    url,
    headers,
  });
  return response;
};
