import { IProductData } from "@/services/actions/products/interfaces";
import { useFetchProducts } from "@/services/hooks/products/useFetchProducts";
import { useMemo, useRef, useState } from "react";

const DEFAULT_PRODUCT: IProductData = {
  id: "",
  name: "",
  image: "",
};

const ITEMS_PER_PAGE = 12;

export const useProduct = () => {
  const productQuery = useFetchProducts();
  const [previewProduct, setPreviewProduct] =
    useState<IProductData>(DEFAULT_PRODUCT);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<"id" | "name">("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const topSectionRef = useRef<HTMLDivElement | null>(null);

  const filteredProducts = useMemo(() => {
    setCurrentPage(1);
    if (!productQuery.data) return [];

    return productQuery.data
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.id.toString().includes(searchQuery)
      )
      .sort((a, b) => {
        const compareA = sortKey === "id" ? Number(a.id) : a.name.toLowerCase();
        const compareB = sortKey === "id" ? Number(b.id) : b.name.toLowerCase();

        if (compareA < compareB) return sortOrder === "asc" ? -1 : 1;
        if (compareA > compareB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [productQuery.data, searchQuery, sortKey, sortOrder]);

  const totalPages =
    filteredProducts.length > 0
      ? Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
      : 0;

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleClosePreview = () => setPreviewProduct(DEFAULT_PRODUCT);
  const handleOpenPreview = (productSelected: IProductData) =>
    setPreviewProduct(productSelected);
  const handleSearch = (query: string) => setSearchQuery(query);
  const handleSort = (key: "id" | "name", order: "asc" | "desc") => {
    setSortKey(key);
    setSortOrder(order);
  };
  const handlePageChange = (page: number) => {
    if (topSectionRef.current) {
      topSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setCurrentPage(page);
  };

  return {
    currentPage,
    isLoading: productQuery.isLoading || productQuery.isFetching,
    previewProduct,
    products: paginatedProducts,
    sortKey,
    sortOrder,
    topSectionRef,
    totalPages,
    handleClosePreview,
    handleOpenPreview,
    handlePageChange,
    handleSearch,
    handleSort,
  };
};
