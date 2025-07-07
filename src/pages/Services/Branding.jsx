import React from "react";
import { motion } from "framer-motion";

const Branding = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-10  mt-10 flex flex-col justify-center items-center gap-5"
    >
      <h2 className="text-5xl cinzel-font w-full text-center underline underline-offset-4 ">
        How We Support Our Franchise Partners in Marketing & Branding
      </h2>
      <p className="text-justify leading-relaxed text-base px-20 py-10">
        As a brand dealing in artificial jewellery, ethnic wear, handbags,
        handicraft items, and blankets, we understand the importance of
        consistent visibility and brand image. For all franchise partners, we
        offer comprehensive marketing and branding support to ensure strong
        local market penetration. This includes digital promotions through
        targeted social media campaigns, influencer collaborations, and local
        geo-targeted advertisements. We provide creatives, posters, banners, and
        regular promotional content suited to festive seasons and regional
        trends. Additionally, we handle professional branding materials such as
        packaging, in-store branding, brochures, and promotional kits to
        maintain brand uniformity. We also help set up and optimize Google My
        Business profiles and map listings to boost visibility. For offline
        visibility, we assist with event participation, mall activations, and
        collaborations with local artisans and fashion events. With our strong
        backend team and continuous guidance, our partners can focus more on
        sales while we build brand recall, generate footfall, and drive customer
        engagement across platforms.
      </p>

      <p className=" text-justify leading-relaxed text-base px-20 pb-10 flex flex-col gap-5">
        <li>
          At our core, we believe that the success of our franchise partners is
          the true success of our brand. As a company specializing in artificial
          jewellery, ethnic wear, handbags, handicraft items, and blankets, we
          understand the importance of consistent, professional, and impactful
          marketing. That's why we provide a 360° marketing and branding
          strategy for every franchise that joins our network.
        </li>

        <li>
          Our advertising strategy begins with digital dominance — including
          social media marketing on platforms like Instagram, Facebook, YouTube,
          and Pinterest. We run geo-targeted ad campaigns tailored to your
          specific region to drive footfall and generate leads. Regular content,
          seasonal promotions, festival-oriented creatives, reels, and ad
          banners are shared with every franchisee to keep customer engagement
          high.
        </li>

        <li>
          Offline, we help you establish a strong local presence by assisting
          with newspaper inserts, flyers, hoardings, and mall activations.
          Participation in exhibitions and local events is coordinated to boost
          reach. We provide branding assets like signage, standees, name boards,
          and décor setup to ensure your store aligns with our brand identity.
        </li>

        <li>
          We also offer influencer marketing strategies in collaboration with
          local influencers and fashion content creators, helping increase brand
          trust and online engagement. For franchises in high-traffic areas, we
          coordinate collaborations with fashion bloggers or regional
          celebrities for soft launch promotions.
        </li>

        <li>
          Your store’s launch event will be curated with our support — we
          provide digital invite campaigns, launch teasers, giveaways, and
          in-store décor branding. Post-launch, we monitor and support monthly
          campaigns, discount drives, festival collections, and loyalty
          programs.
        </li>

        <li>
          Every franchise will receive high-quality printed materials, branded
          packaging (bags, tags, boxes), promotional brochures, and discount
          vouchers — all centrally designed for professional consistency. We
          also assist in managing your local Google listing, reviews, and online
          reputation.
        </li>

        <li>
          In short, our marketing and branding efforts ensure that you don't
          just open a store — you build a brand presence that is felt both
          online and offline. Our in-house design, content, and advertising team
          works round-the-clock to support our partners with everything they
          need to thrive in their local market.
        </li>
      </p>
    </motion.div>
  );
};

export default Branding;
