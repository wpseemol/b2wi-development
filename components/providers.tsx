import { ThemeProvider } from './ui/theme-provider';

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </>
    );
}
