import React from "react";
import Image from "next/image";
import classes from "./services.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <section id="Services" className={classes.container}>
      <h2>Our Services</h2>
      <p>We can provide the below services for you</p>
      <div className={classes.services}>
        <Link href="/services/network">
          <div>
            <h3>Network services</h3>
            <Image
              className={classes.image}
              src={"/images/sites/network.png"}
              width={329}
              height={329}
              alt={"network service"}
            />
          </div>
        </Link>
        <Link href="/services/host-domain">
          <div>
            <h3>Host, Domain, VPS</h3>
            <Image
              className={classes.image}
              src={"/images/sites/domain.png"}
              width={329}
              height={329}
              alt={"Host, Domain, VPS"}
            />
          </div>
        </Link>
        <Link href="/services/ui-ux">
          <div>
            <h3>UI/UX</h3>
            <Image
              className={classes.image}
              src={"/images/sites/ui.png"}
              width={329}
              height={329}
              alt={"UI/UX"}
            />
          </div>
        </Link>
        <Link href="/services/development">
          <div>
            <h3>Web/App Development</h3>
            <Image
              className={classes.image}
              src={"/images/sites/webdevelopment.png"}
              width={329}
              height={329}
              alt={"Web/App Development"}
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
