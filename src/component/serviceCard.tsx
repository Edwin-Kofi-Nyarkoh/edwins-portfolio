import { Badge } from "@/component/ui/badge";
import { Card, CardContent } from "@/component/ui/card";
import { ServiceItem } from "@/lib/queries";
import Image from "next/image";

const ServiceCard = ({ service }: { service: ServiceItem }) => {
  return (
    <Card className="h-full bg-yellow-50 transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900">
      <CardContent>
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-top transition duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <Badge className="mb-3">{service.category}</Badge>
        <h2 className="mb-2 text-lg font-bold text-neutral-950 dark:text-white">
          {service.title}
        </h2>

        <p className="mb-4 line-clamp-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
          {service.content}
        </p>

      </CardContent>
    </Card>
  );
};

export default ServiceCard;
