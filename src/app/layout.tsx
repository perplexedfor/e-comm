import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "MCB DB BOX, MCBs, AC BOX, GI AND PVC MODULAR BOX, 2 and 3 pin, BUS BAR | Eletrax",
  description: "Electrax deals in circuit protection and electronic appliances such as MCB DB BOX, MCBs, AC BOX,  GI AND PVC MODULAR BOX, 2 and 3 pin, BUS BAR, etc. We offer our best service to our clients in terms of quality, timely delivery and product satisfaction.",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="//code.tidio.co/9y8yh11kb4hqdgsrbccktmebkfgf9inl.js" async></script>
      <Providers>
      <body >{children}</body>
      <Toaster richColors/>
      </Providers>

    </html>
  );
}
