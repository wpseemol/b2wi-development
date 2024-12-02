import { successStories } from '@/lib/success-stories';

export default function SuccessStoriesContent() {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {successStories.map((stories) => (
                <div key={stories.id}>
                    <h2>{stories.title}</h2>
                </div>
            ))}
        </div>
    );
}
