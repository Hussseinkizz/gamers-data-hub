import { useDebugValue } from "react";
import { useQuery } from "react-query";
import axios from 'axios'

// fetching data with axios with ES7 - no query mutations
const getData = async () => {
  const { data } = await axios.get("http://localhost:8080/data");
return data;
};


// ⚛ hook without params
export function useGetData() {
  useDebugValue(getData ?? 'loading...')
  return useQuery("receive-data-all", getData);
}

// fetching data with axios with ES7 + mutable params
// const getData = async (query) => {
//   const { data } = await axios.get(`http://localhost:8080/${query}`);
// return data;
// };

// ⚛ hook with params
// export function useGetData1(queryString) {
//   useDebugValue(getData ?? 'loading...')
//   return useQuery(["receive-data", queryString], () => getData(queryString));
// }
