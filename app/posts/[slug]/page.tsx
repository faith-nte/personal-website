import { redirect } from "next/navigation";

export default function LegacyPostRedirect({ params }: { params: { slug: string } }) {
  redirect(`/blog/${params.slug}`);
}
