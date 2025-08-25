"use client";

import { FC } from "react";

import { ModeToggle } from "@/components/global";
import { Footer } from "@/components/online-store";

const HomePage: FC = () => {
  return (
    <>
      <main>
        <section className="container">
          <ModeToggle />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque
            voluptatibus et modi temporibus rerum dolores earum, ipsa
            voluptatem, cupiditate non fuga voluptate aspernatur adipisci! Quas
            suscipit doloribus, nesciunt aliquid itaque dolore quos enim ab
            magni adipisci, nisi voluptas culpa necessitatibus, consectetur
            asperiores dicta? Ab blanditiis illum, dolorem nisi corporis libero
            hic cum eaque, et eos dicta rem velit est.
          </p>

          <Footer />
        </section>
      </main>
    </>
  );
};

export default HomePage;
