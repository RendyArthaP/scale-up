import Image from "next/image";
import { LayoutContent } from "../Layout/LayoutContent";
import { ServiceDetail, Service } from "~/lib/content/ourServices";

type Props = {
  OurServices: Service;
};

export default function Services({ OurServices }: Props) {
  return (
    <LayoutContent>
      <h1 className="font-poppins text-orange text-2xl font-bold md:text-4xl">
        Why ScaleUp?
      </h1>
      <div className="flex justify-center my-8 flex-wrap md:justify-between md:my-10">
        {OurServices.services.map((service: ServiceDetail) => {
          return (
            <div
              key={service.id}
              className="max-w-xs flex flex-col p-1 my-4 items-center md:items-start"
            >
              <Image
                alt={service.title}
                height={200}
                src={service.image}
                width={200}
              />
              <h1 className="font-bold self-start text-grey font-poppins text-2xl mt-3">
                {service.title}
              </h1>
              <span className="font-poppins font-medium text-base text-grey my-2 lg:w-64">
                {service.description}
              </span>
            </div>
          );
        })}
      </div>
    </LayoutContent>
  );
}
