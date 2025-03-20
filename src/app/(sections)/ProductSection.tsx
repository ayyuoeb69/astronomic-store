"use client";

import { motion } from "framer-motion";
import TitleComponent from "../(components)/TitleComponent";
import ProductCardComponent from "../(components)/ProductCardComponent";
import { useProduct } from "../(usecases)/useProduct";
import { Shimmer } from "react-shimmer";
import ProductPreviewComponent from "../(components)/ProductPreviewComponent";
import { Input } from "@/components/commons/Input";
import { ArrowDownNarrowWide, ArrowUpNarrowWide, Search } from "lucide-react";
import { Button } from "@/components/commons/ButtonSort";
import { useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/commons/Pagination";
import { cn } from "@/lib/utils";

const ProductSection = () => {
  const {
    currentPage,
    isLoading,
    previewProduct,
    products,
    sortKey,
    sortOrder,
    topSectionRef,
    totalPages,
    handleClosePreview,
    handleOpenPreview,
    handlePageChange,
    handleSearch,
    handleSort,
  } = useProduct();

  const sortIcon = useMemo(() => {
    if (sortOrder === "asc") {
      return <ArrowDownNarrowWide size={16} />;
    }
    return <ArrowUpNarrowWide size={16} />;
  }, [sortOrder]);

  return (
    <motion.section
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      <div className="pt-[58px] min-h-[680px] pb-[120px] z-[10] max-w-[calc(1440px-134px*2)] mx-auto w-full flex flex-col gap-8">
        <div
          ref={topSectionRef}
          className="flex justify-between items-center px-4 lg:px-0"
        >
          <TitleComponent
            title="We provide high-quality astronomy equipment"
            subtitle="Our Available Product"
            className="text-right px-4"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-end p-4 gap-6">
          <div className="flex items-center gap-6">
            <Button
              selected={sortKey === "id"}
              onClick={() =>
                handleSort(
                  "id",
                  sortKey === "id"
                    ? sortOrder === "asc"
                      ? "desc"
                      : "asc"
                    : "asc"
                )
              }
            >
              {sortKey === "id" ? sortIcon : null}
              Order By Number
            </Button>
            <Button
              selected={sortKey === "name"}
              onClick={() =>
                handleSort(
                  "name",
                  sortKey === "name"
                    ? sortOrder === "asc"
                      ? "desc"
                      : "asc"
                    : "asc"
                )
              }
            >
              {sortKey === "name" ? sortIcon : null}
              Order By Name
            </Button>
          </div>
          <Input
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Name or Number Products..."
            className="max-w-full md:max-w-96"
            suffixIcon={<Search size={16} />}
          />
        </div>

        <div
          className={cn(
            " gap-4 md:gap-6 p-4 justify-center lg:gap-6",
            (products && products?.length > 0) || isLoading
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "flex"
          )}
        >
          {isLoading ? (
            <>
              {Array.from({ length: 12 }).map((_, index) => (
                <Shimmer
                  className="!w-full rounded-lg !md:max-w-[285px]"
                  key={index}
                  height={283}
                  width={0}
                />
              ))}
            </>
          ) : (
            <>
              {products && products?.length > 0 ? (
                <>
                  {products.map((product) => (
                    <ProductCardComponent
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      imageUrl={product.image}
                      onClick={handleOpenPreview}
                    />
                  ))}
                </>
              ) : (
                <h2 className="text-center text-4xl w-full text-white">
                  No Product Found
                </h2>
              )}
            </>
          )}
        </div>
        {totalPages > 0 ? (
          <Pagination>
            <PaginationContent>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        ) : null}
      </div>
      {!!previewProduct.id ? (
        <ProductPreviewComponent
          previewProduct={previewProduct}
          handleClosePreview={handleClosePreview}
        />
      ) : null}
    </motion.section>
  );
};

export default ProductSection;
