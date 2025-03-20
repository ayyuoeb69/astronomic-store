import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/commons/Dialog";
import { cn } from "@/lib/utils";
import { IProductData } from "@/services/actions/products/interfaces";
import Image from "next/image";

interface ProductPreviewComponent {
  previewProduct: IProductData;
  handleClosePreview: VoidFunction;
}

export default function ProductPreviewComponent({
  previewProduct,
  handleClosePreview,
}: ProductPreviewComponent) {
  return (
    <Dialog open={!!previewProduct.id} onOpenChange={handleClosePreview}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <h1
              className={cn(
                "font-medium mb-2",
                previewProduct.name ? "text-white" : "!text-red-400"
              )}
            >
              <b>#{previewProduct.id}</b>{" "}
              {previewProduct.name || "No Product Name"}
            </h1>
          </DialogTitle>
        </DialogHeader>
        <Image
          width={600}
          height={500}
          src={previewProduct.image}
          alt={previewProduct.name || ""}
          className="h-auto !w-full rounded-md"
        />
      </DialogContent>
    </Dialog>
  );
}
