
import {TopBar} from "../components/top-bar";
import { FloatingParticles } from "../components/animations/FloatParticle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <TopBar />
       
            <div className="fixed inset-0 pointer-events-none opacity-30">
              <FloatingParticles 
                particleCount={30}
                colors={['#3b82fb']}
                minSize={1}
                maxSize={3}
                speed={1}
              />
            </div>
            
            <main className="relative z-10">
              {children}
            </main>
          {/* </div> */}
     </>
  );
}
