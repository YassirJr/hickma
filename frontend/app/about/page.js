import AboutSection3 from "@/component/about/AboutSection3";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BlogSection from "@/component/blog/BlogSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CourseSection from "@/component/course/CourseSection";
import FaqSection from "@/component/faq/FaqSection";
import Layout from "@/component/layout/Layout";
import PopularServiceSection2 from "@/component/service/PopularServiceSection2";
export const metadata = {
  title: 'Eduor About Page',
  description: 'Developed by ILIASS RAFIK',
}
export default function About() {
    return (
        <Layout>
            <BreadcrumbSection header="A Propos" title="A Propos"/>
            <section className="tf__about_us_page mt_195 xs_mt_100">
                <AboutSection3 style=''/>
                <PopularServiceSection2/>
                <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100"/>
            </section>
        </Layout>
    )
}