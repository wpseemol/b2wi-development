export default function MainLoading() {
    return (
        <section
            className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center w-full h-full
        bg-white ">
            <svg
                width="200"
                height="200"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none" data-idx="1">
                    <circle
                        cx="50"
                        cy="50"
                        r="28.891"
                        opacity=".4003"
                        stroke="#9100ff"
                        data-idx="2"
                        strokeWidth="2">
                        <animate
                            attributeName="r"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0; 20;"
                        />
                        <animate
                            attributeName="opacity"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1; 0;"
                        />
                    </circle>
                    <circle
                        cx="50"
                        cy="50"
                        r="0"
                        opacity=".96598"
                        stroke="#001efe"
                        data-idx="5"
                        strokeWidth="2">
                        <animate
                            attributeName="r"
                            dur="1s"
                            repeatCount="indefinite"
                            values="0.5; 10;"
                        />
                        <animate
                            attributeName="opacity"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1; 0;"
                        />
                    </circle>
                </g>
            </svg>
        </section>
    );
}
