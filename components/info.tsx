"use client";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, ShoppingCart } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modals";
import { set } from "date-fns";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  // const [count, setCount] = useState(0);
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4 border" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border
        border-gray-600"
            style={{ backgroundColor: data?.color?.name }}
          />
        </div>
        {/* <div className="flex">
          <Minus
            className="cursor-pointer"
            onClick={() => setCount(count - 1)}
          />
          {count}
          <Plus
            className="cursor-pointer"
            onClick={() => setCount(count + 1)}
          />
        </div> */}
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart></ShoppingCart>
        </Button>
      </div>
    </div>
  );
};

export default Info;
