import React from "react";
import Navbar from "../Navbar";
import mastercard from "../images/mastercard.png";
import paypal from "../images/paypal.png";
import visa from "../images/visa.png";
import amex from "../images/amex.png";
import imgOne from "../images/img1.png";
import imgTwo from "../images/img2.png";
import imgThree from "../images/img3.png";
import teacher from "../images/teacher.png";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="checkout px-2 lg:p-10 flex  flex-col xl:flex-row gap-10 py-10">
        <div className="shadow-2xl rounded-xl border border-gray p-5">
          <h3 className="text-2xl font-medium">Checkout</h3>
          <p className="font-semibold py-3">Card Type</p>
          <div className="flex flex-wrap  gap-3">
            <img src={paypal} alt="" />
            <img src={amex} alt="" />
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>
          <form>
            <h4 className="font-semibold py-3">Name on Card</h4>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter name on Card"
              className="w-full"
            />
            <h4 className="font-semibold py-3">Card Number</h4>
            <input
              type="text"
              placeholder="Enter Card Number"
              className="w-full"
            />
            <div className="flex max-sm:flex-col max-sm:gap-1 gap-10">
              <div>
                <h4 className="font-semibold py-3">Expiration Date (MM/YY)</h4>
                <input
                  type="text"
                  placeholder="Enter Expiration Date"
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="font-semibold py-3">CVV</h4>
                <input type="text" placeholder="Enter CVV" className="w-full" />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input type="checkbox" />
              <p className="font-semibold py-5">
                Save my information for faster checkout
              </p>
            </div>
            <button className="bg-[#49BBBD] w-full text-white text-2xl py-3 rounded-xl">
              Confirm Payment
            </button>
          </form>
        </div>

        <div className="bg-[#EBF5FF] p-5 shadow-2xl rounded-xl border border-gray">
          <h3 className="text-2xl font-medium py-5">Summary</h3>
          <div className="flex max-sm:flex-col gap-5">
            <div>
              <img src={teacher} alt="" />
            </div>
            <div>
              <p className="text-2xl  max-sm:text-xl">
                adipiscing elit, sed do eiusmod tempor
              </p>
              <p className="my-2 text-lg font-semibold">$24.69</p>
            </div>
          </div>

          <div className="lines"></div>

          <div className="flex max-sm:flex-col gap-5 ">
            <div>
              <img src={teacher} alt="" />
            </div>
            <div>
              <p className="text-2xl max-sm:text-xl">
                sed do eiusmod tempor adipiscing elit
              </p>
              <p className="my-2 text-lg font-semibold">$24.69</p>
            </div>
          </div>
          <div className="lines"></div>

          <div className="lines"></div>

          <div className="text-xl">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-semibold">$51.38</p>
            </div>

            <div className="lineD"></div>

            <div className="flex justify-between">
              <p>Coupon Discount</p>
              <p className="font-semibold">0%</p>
            </div>

            <div className="lineD"></div>

            <div className="flex justify-between">
              <p>TAX</p>
              <p className="font-semibold">$5</p>
            </div>

            <div className="lineD"></div>

            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-semibold">$56.38</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-3xl font-semibold py-10">
          Top Education Offers and deals are listed here
        </h2>

        <div className="flex flex-col xl:flex-row items-center p-5 gap-5">
          <div className="relative text-white">
            <img src={imgOne} alt="" />
            <div className="absolute inset-y-14 pl-2 sm:pl-5 sm:pt-5">
              <span className="bg-[#49BBBD] text-2xl p-10 font-bold rounded-xl">
                50%
              </span>
              <p className="mt-16 mb-5 text-2xl font-semibold">
                Lorem ipsum dolor
              </p>
              <p className="text-sm leading-8 w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>

          <div className="relative text-white">
            <img src={imgTwo} alt="" />
            <div className="absolute inset-y-14 pl-2 sm:pl-5 sm:pt-5">
              <span className="bg-[#49BBBD] text-2xl p-10 font-bold rounded-xl">
                10%
              </span>
              <p className="mt-16 mb-5 text-2xl font-semibold">
                Lorem ipsum dolor
              </p>
              <p className="text-sm leading-8 w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>

          <div className="relative text-white">
            <img src={imgThree} alt="" />
            <div className="absolute inset-y-14 pl-2 sm:pl-5 sm:pt-5">
              <span className="bg-[#49BBBD] text-2xl p-10 font-bold rounded-xl">
                50%
              </span>
              <p className="mt-16 mb-5 text-2xl font-semibold">
                Lorem ipsum dolor
              </p>
              <p className="text-sm leading-8 w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
