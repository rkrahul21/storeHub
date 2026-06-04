'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { getProducts, getCategories } from '@/services/productService';
import { ProductCard } from '@/components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load products'
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2] dark:bg-[#14120E] transition-colors">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A1A1A] dark:border-[#FAF7F2] mx-auto mb-4"></div>
          <p className="text-[#4B5563] dark:text-[#A39E93]">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
       <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2] dark:bg-[#14120E] transition-colors">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 font-semibold mb-4">
            Error: {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#1A1A1A] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#14120E] rounded hover:bg-[#4B5563] dark:hover:bg-[#F5F0E6] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] dark:bg-[#14120E] min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
            Our Collection
          </h1>
          <p className="text-[#4B5563] dark:text-[#A39E93]">
            Discover our handpicked selection of premium products
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-[#1A1A1A] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#14120E]'
                  : 'bg-white text-[#1A1A1A] border border-[#F5F0E6] hover:border-[#1A1A1A] dark:bg-[#1E1B15] dark:text-[#FAF7F2] dark:border-[#2E2920] dark:hover:border-[#FAF7F2]'
              }`}
            >
              All Products ({products.length})
            </button>
            {categories.map((category) => {
              const count = products.filter(
                (p) => p.category === category
              ).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#1A1A1A] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#14120E]'
                      : 'bg-white text-[#1A1A1A] border border-[#F5F0E6] hover:border-[#1A1A1A] dark:bg-[#1E1B15] dark:text-[#FAF7F2] dark:border-[#2E2920] dark:hover:border-[#FAF7F2]'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#4B5563] dark:text-[#A39E93] text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
