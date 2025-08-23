// products/page.tsx
import { headers } from "next/headers";

const Page = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";

  const res = await fetch(`${protocol}://${host}/api/hello`, {
    cache: "no-store",
  });
  const data = await res.json();
  return <div>hello {data.msg}</div>;
};

export default Page;
