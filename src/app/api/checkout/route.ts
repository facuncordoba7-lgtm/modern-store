import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Initialize Mercado Pago with your Access Token
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!
});

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
    }

    // Map cart items to Mercado Pago items
    const mpItems = items.map((item: any) => ({
      title: item.name,
      description: item.description,
      unit_price: item.price,
      quantity: item.quantity,
      currency_id: 'ARS', // Set to Argentine Pesos
    }));

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: mpItems,
        back_urls: {
          success: 'https://modern-store-phi-ashen.vercel.app/success',
          failure: 'https://modern-store-phi-ashen.vercel.app/cart',
          failure_detail: 'https://modern-store-phi-ashen.vercel.app/cart',
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({
      id: response.id,
      url: response.init_point // This is the payment link
    });
  } catch (error: any) {
    console.error('Mercado Pago Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
