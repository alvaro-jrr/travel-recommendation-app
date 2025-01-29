import { cn } from "~/lib/utils";

import { Button } from "~/components/ui/button";

export function Hero({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6 md:items-center", className)}>
      <h1 className="text-4xl font-bold md:text-center">
        Descubre tu destino de{" "}
        <em className="text-blue-500 not-italic">viaje perfecto</em>
      </h1>

      <p className="text-muted-foreground w-full max-w-2xl text-lg md:text-center">
        Explora el mundo con nosotros. Encuentra escapadas únicas a tu medida y
        planea tu viaje perfecto con nuestras recomendaciones personalizadas.
      </p>

      <div className="flex gap-2">
        <Button>Descubrir viajes</Button>

        <Button variant="outline" asChild>
          <a href="#features">Conocer más</a>
        </Button>
      </div>
    </div>
  );
}
