import { Calendar, Compass, MapPin, Sparkles } from "lucide-react";

import { cn } from "~/lib/utils";

const features = [
  {
    name: "Destino perfecto",
    description:
      "Nuestro sistema de IA analiza tus preferencias para sugerir destinos que perfectamente se alineen con tu estilo de viaje y tus intereses.",
    icon: MapPin,
  },
  {
    name: "Recomendaciones estacionales",
    description:
      "Obtén sugerencias personalizadas para los mejores momentos para visitar tus destinos preferidos basados en tus preferencias climáticas y eventos locales.",
    icon: Calendar,
  },
  {
    name: "Actividades personalizadas",
    description:
      "Recibe recomendaciones de actividades personalizadas que se alinean con tus intereses, ya seas un aventurero, un entusiasta de la cultura o un amante de la relajación.",
    icon: Sparkles,
  },
  {
    name: "Descubrimiento de lugares desconocidos",
    description:
      "Descubre lugares únicos y menos conocidos que se alinean con tus gustos, personalizados justamente para ti.",
    icon: Compass,
  },
];

export function Features({ className }: { className?: string }) {
  return (
    <div className={cn("container space-y-8", className)}>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold" id="features">
          Características
        </h2>

        <p className="text-muted-foreground">
          Nuestro sistema de IA toma el trabajo de planeación de viajes,
          proporcionando una experiencia fluida y personalizada.
        </p>
      </div>

      <div>
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
