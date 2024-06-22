import LoginSection from "@/component/authentication/LoginSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
  title: 'Eduor Sign-In Page',
  description: 'Developed by ILIASS RAFIK',
}
export default function SignIn() {
    return (
        <Layout>
            <BreadcrumbSection title='SE CONNECTER' header='SE CONNECTER'/>
            <LoginSection/>
        </Layout>
    )
}