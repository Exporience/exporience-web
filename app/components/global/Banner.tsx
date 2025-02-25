import React from "react";
import Image from "next/image";

export default function Banner () {
    return(
        <section className="relative w-full h-auto xl:px-[36px]">
            <div className="w-full h-auto">
                    <Image
                      src="/images/hero_440px.png"
                      alt="Hero Image for Mobile"
                      width={440}
                      height={200}
                      priority
                      className="block md:hidden w-full rounded-[40px] pt-4 px-2"
                    />
                    <Image
                      src="/images/hero.png"
                      alt="Hero Image for Desktop"
                      width={1280}
                      height={600}
                      priority
                      className="hidden md:block w-full object-cover pt-[38px] rounded-[100px]"
                    />
                  </div>
        </section>
    );
}