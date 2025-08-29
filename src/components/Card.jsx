import Image from "./Image";
import Text from "./Text";
import Header from "./Header";
import Button from "./Button";
import { useState, useEffect} from 'react';

function Card(){
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    const handler = e => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return(
    <section className="max-w-[375px] flex flex-col lg:max-w-[600px] lg:flex-row bg-white rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl mx-auto overflow-hidden">
      <Image
      imgSrc={
        isMobile ? '/image-product-mobile.jpg' : '/image-product-desktop.jpg'
      }
      altText='Photo of Image Product'
      style='rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl w-full lg:w-1/2'
      />

      <article className="p-8 flex flex-col gap-5 bg-white w-full lg:w-1/2">
        <Text 
          content='P E R F U M E'
          style='text-[hsl(228,12%,48%)] text-sm'
        />

        <Header 
          content='Gabrielle Essence Eau De Perfume'
          size='1'
          style='text-3xl font-bold font-serif'
        />

        <Text 
          content='A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfume Creator for the House of CHANEL'
          style='text-[hsl(228,12%,48%)] text-sm'
        />

        <article className="flex items-center gap-5">
        <Text
          content='$149.99'
          style='text-3xl font-bold font-serif text-[hsl(158,36%,37%)]'
        />

        <Text 
          content='$169.99'
          style='text-[hsl(228,12%,48%)] text-sm line-through'
        />
        </article>

        <Button 
          content={
            <div className="flex gap-2 items-center justify-center font-bold">
              <Image 
                imgSrc='/icon-cart.svg'
                altText='Photo of cart icon'
              />
              Add to cart
            </div>
          }
          style='bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,42%,18%)] w-full py-2 px-4 text-white rounded-md'
        />
      </article>
    </section>
  )
}

export default Card;