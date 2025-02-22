import Image from "next/image";
import { CartProduct } from "../contexts/cart";
import { formatCurrency } from "@/helpers/format-currency";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
          <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
          {/* QUANTIDADE */}
          <div className="flex items-center text-center gap-1">
            <Button className="w-7 h-7 rounded-lg" variant="outline">
              <ChevronLeftIcon />
            </Button>
            <p className="w-7">{product.quantity}</p>
            <Button className="w-7 h-7 rounded-lg" variant="destructive">
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* DIREITA */}
      <Button className="h-7 w-7 rounded-lg" variant="outline">
        <Trash2Icon />
      </Button>
    </div>
  );
}

export default CartProductItem;