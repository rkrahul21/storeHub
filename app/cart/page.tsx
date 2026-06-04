'use client';

import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Shopping Cart
          </h1>
          <div className="bg-white border border-[#F5F0E6] rounded-lg p-12 text-center">
            <svg
              className="w-16 h-16 text-[#F5F0E6] mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-[#4B5563] text-lg mb-6">
              Your cart is empty
            </p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-[#1A1A1A] text-[#FAF7F2] rounded-lg hover:bg-[#4B5563] transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
          Shopping Cart
        </h1>

        {/* Items */}
        <div className="bg-white border border-[#F5F0E6] rounded-lg overflow-hidden shadow-lg mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 border-b border-[#F5F0E6] last:border-b-0"
            >
              {/* Image */}
              <div className="relative w-24 h-24 shrink-0 bg-[#F5F0E6] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${item.id}`}
                  className="block text-lg font-semibold text-[#1A1A1A] hover:text-[#4B5563] truncate mb-2"
                >
                  {item.title}
                </Link>
                <p className="text-[#4B5563] text-sm mb-3">
                  {item.category}
                </p>
                <p className="text-2xl font-bold text-[#1A1A1A]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity and Actions */}
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center border border-[#F5F0E6] rounded-lg">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-3 py-1 text-[#4B5563] hover:bg-[#F5F0E6]"
                  >
                    −
                  </button>
                  <span className="px-4 py-1 text-sm font-medium text-[#1A1A1A]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-[#4B5563] hover:bg-[#F5F0E6]"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Link
              href="/products"
              className="inline-block px-6 py-3 border border-[#F5F0E6] text-[#1A1A1A] rounded-lg hover:bg-[#F5F0E6] transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-[#F5F0E6] rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Order Summary
            </h2>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-[#4B5563]">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#4B5563]">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-[#4B5563]">
                <span>Tax:</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-[#F5F0E6] pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold text-[#1A1A1A]">
                <span>Total:</span>
                <span>
                  ${(total * 1.1).toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full px-4 py-3 bg-[#1A1A1A] hover:bg-[#4B5563] text-[#FAF7F2] rounded-lg font-bold transition-colors mb-3">
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 font-medium transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
