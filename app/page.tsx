import BrandingSection from './_components/main/branding-section';
import CategorySection from './_components/main/category-section';
import HeroSection from './_components/main/hero-section';
import ProjectSection from './_components/main/project-section';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <BrandingSection />
            <CategorySection />
            <ProjectSection />
        </main>
    );
}
