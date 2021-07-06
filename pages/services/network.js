import React from "react";
import Image from "next/image";

export default function Network() {
  return (
    <div className="page page--normal">
      <section className="page__content">
        <h2>Networking Services</h2>
        <p>
          multinational technology conglomerate developing, manufacturing, and
          selling networking hardware, telecommunications equipment, and other
          high-technology services and products.multinational technology
          conglomerate developing, manufacturing, and selling networking
          hardware, telecommunications equipment, and other high-technology
          services and products.
        </p>
      </section>
      <div className="page__image-wrapper">
        <Image
          className={"page__image"}
          src={"/images/sites/network.png"}
          height={508}
          width={394}
          alt="networking"
        />
      </div>
    </div>
  );
}
