import OurServices from "~/content/ourServices.json";

export type Service = {
  readonly services: ServiceDetail[];
};

export type ServiceDetail = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
};

export default OurServices as unknown as Service;
