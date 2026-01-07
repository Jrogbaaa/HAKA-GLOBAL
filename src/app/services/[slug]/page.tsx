import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceDetail } from "./ServiceDetail";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        subtitle="Areas of Advisory"
        title={service.title}
        description={service.shortDescription}
      />

      <ServiceDetail service={service} />
    </>
  );
}
