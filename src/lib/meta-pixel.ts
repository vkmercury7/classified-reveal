export const META_PIXEL_ID = "937390588827517";

type FbqFn = (...args: unknown[]) => void;

function getFbq(): FbqFn | null {
  if (typeof window === "undefined") return null;
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
  return typeof fbq === "function" ? fbq : null;
}

export function trackPixel(event: string, params?: Record<string, unknown>) {
  const fbq = getFbq();
  if (!fbq) return;
  if (params) fbq("track", event, params);
  else fbq("track", event);
}

/** Código base do Meta Pixel + PageView (dispara uma única vez por carregamento). */
export const META_PIXEL_SNIPPET = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`;
