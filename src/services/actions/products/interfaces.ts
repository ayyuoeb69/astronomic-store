export enum ApiUrlEnum {
  LIST = "/product.json",
  IMAGE = "/image.json",
}

export interface IListResponse {
  data: IListData[];
}

export interface IImageResponse {
  data: IImageData[];
}

export type TypeProductResponse = IProductData[];

export interface IListData {
  id: string;
  name: string;
}

export interface IImageData {
  id: string[];
  image: string;
}

export interface IProductData {
  id: string;
  name: string;
  image: string;
}
