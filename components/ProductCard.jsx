import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="flex flex-col group transform overflow-hidden align-middle  border rounded-2xl cursor-pointer bg-white duration-200"
    >
      <div className="duration-500 group-hover:rotate-90 flex items-center justify-center">
        <Image
          width={400}
          height={400}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          className="w-full"
        />
      </div>
      <div className="p-4 text-black/[0.9] items-start">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">${p.price}</p>

          {p.original_price && (
            <>
              <p className="text-base font-medium line-through">
                ${p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-[#fd9d3e]">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
