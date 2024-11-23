'use client';
import { useState } from 'react';

export default function PeopleDetails({
    htmlContent,
}: {
    htmlContent: strings;
}) {
    const [isExpanded, setISExpanded] = useState(false);

    const shoWord = 50;

    const words = htmlContent.split(/\s+/); // split by whitespace.
    const wordCount = words.length;

    const truncatedContent: string =
        wordCount > shoWord ? words.slice(0, shoWord).join(' ') : htmlContent;

    let showContent: string | TrustedHTML = isExpanded
        ? htmlContent
        : truncatedContent;

    showContent += '';

    return (
        <div className="space-y-2">
            {/* Display truncated or full content */}
            <div
                dangerouslySetInnerHTML={{
                    __html: showContent,
                }}
                className="space-y-2"
            />

            {/* Show "Read More" or "Read Less" button only if content exceeds 50 words */}
            {wordCount > shoWord && (
                <button
                    onClick={() => setISExpanded(!isExpanded)}
                    className="mt-2 text-primary hover:underline dark:text-white">
                    {isExpanded ? 'Read Less...' : 'Read More...'}
                </button>
            )}
        </div>
    );
}
