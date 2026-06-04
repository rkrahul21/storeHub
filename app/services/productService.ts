import { Product } from '@/types';

const API_BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await fetch( "https://fakestoreapi.com/products", {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export async function getProductById(id: number): Promise<Product> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

export async function getCategories(): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/categories`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products by category');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
}
