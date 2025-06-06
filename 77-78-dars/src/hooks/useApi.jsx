import axios from "axios";
import React, { useState } from "react";
import loadingStore from "../stores/Loading";

function useApi() {
  const {loader} = loadingStore()
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  async function getApi(url) {
    setloading(true)
    try {
      let {data} = await axios({
        method: "GET",
        url: import.meta.env.VITE_URL + url,
        params: { language: "ru-RU", page: page },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      if (data.results) {
        setdata(data.results);
      } else {
        setdata(data);
      }
      setloading(false);
      loader()
    } catch (error) {
      throw error;
    }
  }
  return { data, getApi, page, setpage, loading };
}

export default useApi;
