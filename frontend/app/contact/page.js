import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Eduor Contact Page',
  description: 'Developed by ILIASS RAFIK',
}
export default function Contact() {
    return (
        <Layout>
            <BreadcrumbSection header='Contactez-nous' title="Contactez-nous"/>
            <ContactPageSection/>
        </Layout>
    )
}