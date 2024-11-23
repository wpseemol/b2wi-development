'use client';
import { useEffect, useState } from 'react';

export default function PeopleDetails({
    htmlContent,
    contentId,
}: {
    htmlContent: string;
    contentId: string | number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);

    const shoWord = 95;

    const words = htmlContent.split(/\s+/); // split by whitespace.
    const wordCount = words.length;

    const truncatedContent: string =
        wordCount > shoWord ? words.slice(0, shoWord).join(' ') : htmlContent;

    let showContent: string | TrustedHTML = isExpanded
        ? htmlContent
        : truncatedContent;

    showContent =
        wordCount > shoWord
            ? showContent +
              ` <button id='more-less-button-${contentId}' class='mt-2 text-primaryColor hover:underline dark:text-white'> ${
                  isExpanded ? 'Read Less...' : 'Read More...'
              } </button`
            : showContent;

    useEffect(() => {
        setLoading(false);

        const buttonId = `more-less-button-${contentId}`;
        const button = document.getElementById(buttonId);

        const handleClick = () => {
            setIsExpanded((prev) => !prev);
        };

        if (button) {
            button.addEventListener('click', handleClick);
        }

        // Cleanup listener on component unmount
        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
    }, [contentId, isExpanded, loading]);

    return loading ? (
        <div></div>
    ) : (
        <div
            dangerouslySetInnerHTML={{
                __html: showContent,
            }}
            className="space-y-2"
        />
    );
}
