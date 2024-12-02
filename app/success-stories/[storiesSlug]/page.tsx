export default async function StoriesSinglePage({
    params,
}: {
    params: Promise<{ storiesSlug: string }>;
}) {
    const { storiesSlug } = await params;
    return <div>{storiesSlug}</div>;
}
