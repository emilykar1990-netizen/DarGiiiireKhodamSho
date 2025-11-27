import { NextResponse } from 'next/server';

const PRICE = 1.000000;           
const UPDATED_AT = Date.now();    


const getPrice = () => {
  const variance = (Math.random() - 0.5) * 0.0004; 
  return Number((PRICE + variance).toFixed(6));
};

export const GET = async () => {
  const json = {
    price: getPrice(),
    currency: "USD",
    decimals: 6,
    timestamp: Date.now(),
    
    name: "Flash USDT",
    symbol: "USDT",
    usd: getPrice(),
  };

  return new NextResponse(JSON.stringify(json), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=15, stale-while-revalidate=60',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      
      'CDN-Cache-Control': 'public, s-maxage=15',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=15',
    },
  });
};


export const POST = GET;
export const OPTIONS = GET;
