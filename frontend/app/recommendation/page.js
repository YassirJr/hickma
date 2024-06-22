import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import RecommendationPageSection from "@/component/contact/RecommendationPageSection"; // Assuming you've created this
import Layout from "@/component/layout/Layout";

export const metadata = {
  title: 'Hickma Recommendation Page', // Changed to reflect the actual content
  description: 'Developed by ILIASS RAFIK',
}

export default function Recommendation() {
    return (
        <Layout>
            <BreadcrumbSection header='Formulaire de Recommandation' title="Recommandez des talents"/>
            <RecommendationPageSection/>
        </Layout>
    )
}
