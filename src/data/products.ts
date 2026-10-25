export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Minimalist Chronograph',
    description: 'A timeless piece featuring a surgical-grade stainless steel case and sapphire crystal.',
    price: 249.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Wireless Noise Cancelling Headphones',
    description: 'Immerse yourself in sound with industry-leading noise cancellation and 30-hour battery life.',
    price: 349.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted from full-grain Italian leather, designed for the modern minimalist.',
    price: 89.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Smart Home Hub',
    description: 'Control your entire home with a single, elegant interface. Compatible with all major smart devices.',
    price: 199.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Organic Cotton Tee',
    description: 'Sustainable luxury. 100% organic cotton with a tailored fit for everyday comfort.',
    price: 45.00,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1521572163471-553014919ec3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Matte Black Water Bottle',
    description: 'Vacuum insulated, 24h cold / 12h hot. The perfect companion for your active lifestyle.',
    price: 32.00,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1602143352547-67975d312f1f?auto=format&fit=crop&q=80&w=800',
  },
];
