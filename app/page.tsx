import BrandingSection from './_components/main/branding-section';
import CategorySection from './_components/main/category-section';
import EventWorkshop from './_components/main/event-workshops';
import HeroSection from './_components/main/hero-section';
import NewSection from './_components/main/news-section';
import OurSkillSection from './_components/main/our-skills-section';
import ProjectDoneNumbering from './_components/main/project-done-numbering';
import ProjectSection from './_components/main/project-section';
import TestimonialsSection from './_components/main/testimonials-section';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <BrandingSection />
            <CategorySection />
            <ProjectSection />
            <ProjectDoneNumbering />
            <OurSkillSection />
            <TestimonialsSection />
            <EventWorkshop />
            <NewSection />
        </main>
    );
}
