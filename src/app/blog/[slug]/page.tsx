// Pojedinačan blog post. Koristi generisani PageProps helper (Next.js 16)
// umesto ručnog tipovanja params.

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">,
) {
  const { slug } = await props.params;

  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-semibold text-zinc-800">
        Post: {slug} (uskoro)
      </h1>
    </main>
  );
}
