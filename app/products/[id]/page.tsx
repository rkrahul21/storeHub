'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { getProductById } from '@/services/productService';
import { useCart } from '@/hooks/useCart';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const productId = params?.id ? Number(params.id) : null;

  useEffect(() => {
    if (!productId) return;

    async function loadProduct() {
      try {
        setLoading(true);
        const productData = await getProductById(productId);
        setProduct(productData);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load product'
        );
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A1A1A] mx-auto mb-4"></div>
          <p className="text-[#4B5563]">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-4">
            {error || 'Product not found'}
          </p>
          <Link
            href="/products"
            className="px-4 py-2 bg-[#1A1A1A] text-[#FAF7F2] rounded hover:bg-[#4B5563] transition-colors inline-block"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/products"
          className="text-[#4B5563] hover:text-[#1A1A1A] mb-8 inline-block font-medium"
        >
          ← Back to Products
        </Link>

        {/* Product Details */}
        <div className="bg-white border border-[#F5F0E6] rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="flex items-center justify-center bg-[#F5F0E6] rounded-lg p-8">
              <div className="relative w-full h-96">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#1A1A1A] rounded-full capitalize">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400 text-xl">
                  {'★'.repeat(Math.round(product.rating.rate))}
                  {'☆'.repeat(5 - Math.round(product.rating.rate))}
                </div>
                <span className="text-[#4B5563]">
                  {product.rating.rate.toFixed(1)} out of 5 ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1A1A1A]">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Description
                </h2>
                <p className="text-[#4B5563] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Add to Cart Section */}
              <div className="flex gap-4 mt-auto">
                <div className="flex items-center border-2 border-[#F5F0E6] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-[#4B5563] hover:bg-[#F5F0E6] text-xl font-semibold"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 text-xl font-medium text-[#1A1A1A]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-[#4B5563] hover:bg-[#F5F0E6] text-xl font-semibold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 px-6 py-3 rounded-lg font-bold text-white text-lg transition-colors ${
                    isAdded
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-[#1A1A1A] hover:bg-[#4B5563]'
                  }`}
                >
                  {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
