import RegisterSection from "@/component/authentication/RegisterSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Eduor Sign-Up Page',
  description: 'Developed by ILIASS RAFIK',
}
export default function SignUp() {
    return (
        <Layout>
            <BreadcrumbSection header='Inscrire' title='Inscrire'/>
            <RegisterSection/>
        </Layout>
    )
}