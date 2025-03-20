import { publicRequest } from "@/lib/axiosRequest";
import { ApiUrlEnum, IImageResponse, IListResponse } from "./interfaces";
import ImgPicture from "@/assets/images/img-picture.webp";

export default async function getProductAction() {
  const [productRes, imageRes] = await Promise.all([
    publicRequest.get<IListResponse>(ApiUrlEnum.LIST),
    publicRequest.get<IImageResponse>(ApiUrlEnum.IMAGE),
  ]);

  const productData = productRes.data?.data;
  const imageData = imageRes.data?.data;

  return productData.map((product) => {
    const imageObj = imageData.find((img) => img.id.includes(product.id));
    return {
      id: product.id,
      name: product.name || "",
      image: imageObj ? imageObj.image : ImgPicture.src,
    };
  });
}
