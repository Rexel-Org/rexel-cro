import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/product/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo, { ProductDetails } from "@/components/product/ProductInfo";
import PurchasePanel from "@/components/product/PurchasePanel";
import AdvisorButton from "@/components/product/AdvisorButton";
import ProjectListBlock from "@/components/product/ProjectListBlock";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-rexel-text">
      <Header />

      <main className="mx-auto w-full max-w-[1440px] px-4 pb-16 lg:px-6">
        <Breadcrumb />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_408px] xl:gap-10">
          {/* Left: product zone */}
          <section className="flex flex-col gap-6">
            <ProductInfo />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ProductGallery />
              <ProductDetails />
            </div>

            <ProjectListBlock
              categoryName="communication VDI résidentiel"
              productCount={12}
              href="/simplified-cart/communication-vdi-residentiel"
            />
          </section>

          {/* Right: purchase */}
          <PurchasePanel />
        </div>
      </main>

      <AdvisorButton />
    </div>
  );
};

export default Index;
