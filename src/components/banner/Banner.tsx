import React, { ReactNode, ReactElement } from "react";

interface BannerPros {
  title: ReactNode | string | ReactElement;
  paragraph: ReactNode | string | ReactElement;
  sectionImages: ReactNode | ReactElement;
  subtitle?: ReactNode | string;
  actions?: ReactElement | ReactNode;
}

const Banner = ({
  title,
  paragraph,
  sectionImages,
  subtitle,
  actions,
}: BannerPros) => {
  return (
    <section className="w-full bg-backgroundPrimary p-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="px-10 py-48 2xl:pb-80">
            {title}
            {subtitle}
            {paragraph}
            {actions}
          </div>
          <div className="px-10 py-48 2xl:pb-80">{sectionImages}</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
