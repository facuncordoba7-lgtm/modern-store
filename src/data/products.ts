export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Premium Landing Page Pack',
    description: '5 high-converting landing page templates built with HTML5 and Tailwind CSS. Fully responsive and SEO optimized for maximum sales.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
    category: 'Templates',
  },
  {
    id: 'prod-2',
    name: 'AI Prompt Mastery Ebook',
    description: 'The ultimate guide to Prompt Engineering. Learn how to manipulate AI to generate high-quality content, code, and images for your business.',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1677442136019-dee8a0a6930d?auto=format&fit=crop&q=80&w=800',
    category: 'Ebooks',
  },
  {
    id: 'prod-3',
    name: 'Pro Admin Dashboard Kit',
    description: 'Complete UI/UX kit for administrative panels. Includes 20+ pre-designed components for data visualization and user management.',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800',
    category: 'UI/UX',
  },
  {
    id: 'prod-4',
    name: 'Next.js Store Course',
    description: 'Step-by-step guide to building and deploying your own digital store. Includes source code and deployment tutorials for Vercel.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1498050108023-c524//auto=format&fit=crop&q=80&w=800',
    category: 'Courses',
  },
  {
    id: 'prod-5',
    name: 'React Hooks Pro Bundle',
    description: '100+ custom React hooks for the most common development tasks. Stop rewriting the same logic and speed up your workflow.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a8b0d?auto=format&fit=crop&q=80&w=800',
    category: 'Development',
  },
  {
    id: 'prod-6',
    name: 'Wealth Manager Template',
    description: 'Advanced financial tracking system for Notion and Excel. Manage your income, expenses, and investments in one place.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    category: 'Tools',
  },
];