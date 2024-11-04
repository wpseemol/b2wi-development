import BrandingSection from './_components/main/branding-section';
import CategorySection from './_components/main/category-section';
import HeroSection from './_components/main/hero-section';
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
        </main>
    );
}
