import getProductAction from "@/services/actions/products/getProductAction";
import { TypeProductResponse } from "@/services/actions/products/interfaces";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery<TypeProductResponse>({
    queryKey: ["products"],
    queryFn: getProductAction,
    retry: 1,
  });
};
