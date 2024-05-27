import React, { ReactNode, ReactElement } from "react";
import clsx from "clsx";

interface BannerPros {
  title: ReactNode | string | ReactElement;
  paragraph: ReactNode | string | ReactElement;
  sectionImages: ReactNode | ReactElement;
  subtitle?: ReactNode | string;
  actions?: ReactElement | ReactNode;
  classNameContainer?: string;
}

const Banner = ({
  title,
  paragraph,
  sectionImages,
  subtitle,
  actions,
  classNameContainer,
}: BannerPros) => {
  return (
    <section className="w-full bg-backgroundPrimary p-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={clsx(["px-10", classNameContainer])}>
            {title}
            {subtitle}
            {paragraph}
            {actions}
          </div>
          <div className={clsx(["px-10", classNameContainer])}>
            {sectionImages}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
