import BrandingSection from './_components/main/branding-section';
import CategorySection from './_components/main/category-section';
import HeroSection from './_components/main/hero-section';
import NewSection from './_components/main/news-section';
import OurSkillSection from './_components/main/our-skills-section';
import ProjectDoneNumbering from './_components/main/project-done-numbering';
import ProjectSection from './_components/main/project-section';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <BrandingSection />
            <CategorySection />
            <ProjectSection />
            <ProjectDoneNumbering />
            <OurSkillSection />
            <NewSection />
        </main>
    );
}
