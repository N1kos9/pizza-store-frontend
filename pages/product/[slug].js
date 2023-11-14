import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Success. Check your cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className=" w-max md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">${p.price}</p>

              {p.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    ${p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-[#fd9d3e]">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold mt-10">
                  Would you like cutlery?
                </div>
              </div>

              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-[#fd9d3e] cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>

              {showError && (
                <div className="text-red-600 mt-1">This field is required</div>
              )}
            </div>

            <button
              className="w-full py-4 rounded-full bg-[#fd9d3e] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to cart
            </button>

            <div>
              <div className="text-lg font-bold mb-5 mt-10">
                Recipe and preparation
              </div>

              <div className="markdown text-md mb-5">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/produces?populate=*");

  const paths = products.data.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/produces?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/produces?populate=*&[filters][slug][$ne]=${slug}`
  );
  return {
    props: {
      product,
      products,
    },
  };
}
