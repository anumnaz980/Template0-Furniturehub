import React from "react";
import Image from "next/image";
import Close from "../../../public/assets/closeCart.svg";
import Link from "next/link";
import { useCart } from "@/data/useCartStore";
import CartItem from "./cartItem";

const CartPopup = ({ closeFunction }) => {
  const { cart } = useCart();

  function toggleBodyScroll() {
    // Uncomment this to prevent body scroll when the cart is open.
    // const body = document.querySelector("body");
    // body.classList.toggle("overflow-hidden");
  }

  return (
    <>
      <div className="absolute z-40 inset-0 bg-black/20"></div>
      <div className="flex flex-col items-start justify-between p-4 sm:p-6 lg:p-8 w-full sm:w-[20rem] lg:w-[26rem] h-full sm:h-[40rem] lg:h-[46rem] absolute top-0 right-0 z-50 bg-white">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black text-xl sm:text-2xl lg:text-3xl font-semibold">
              Shopping Cart
            </h3>
            <Image
              src={Close}
              width={20}
              height={20}
              onClick={() => closeFunction()}
              className="cursor-pointer"
            />
          </div>
          <div className="bg-[#D9D9D9] w-full h-0.5 items-center justify-center flex my-6 sm:my-8"></div>

          {/* CART ITEMS */}
          <div className="overflow-y-auto max-h-[20rem] sm:max-h-[25rem] lg:max-h-[35rem]">
            {cart.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
        </div>

        <div className="mt-auto">
          {/* Subtotal */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-black text-sm sm:text-base font-normal">Subtotal</p>
            <p className="text-[#B88E2F] text-sm sm:text-base font-semibold">
              {cart.length === 0 ? null : (
                <p>
                  {cart
                    .reduce((acc, item) => acc + item.amount * item.price, 0)
                    .toFixed(2)}
                </p>
              )}
            </p>
          </div>
          <div className="bg-[#D9D9D9] w-full h-0.5 items-center justify-center flex my-4 sm:my-6"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <Link href={"/cart"}>
              <button
                className="bg-white text-black py-2 sm:py-3 px-10 sm:px-12 rounded-3xl border border-black cursor-pointer text-base sm:text-xl font-normal w-full sm:w-auto"
                onClick={toggleBodyScroll}
              >
                View Cart
              </button>
            </Link>
            <Link href={"/checkout"}>
              <button
                className="bg-white text-black py-2 sm:py-3 px-10 sm:px-12 rounded-3xl border border-black cursor-pointer text-base sm:text-xl font-normal w-full sm:w-auto"
                onClick={toggleBodyScroll}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopup;
