import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-8 flex justify-center items-center h-screen">
      {/* Single skeleton rectangle */}
      <Skeleton className="h-10 w-64  rounded-md " /><br />
      <Skeleton className="h-10 w-64  rounded-md " /><br />
      <Skeleton className="h-10 w-64  rounded-md " /><br />
      <Skeleton className="h-10 w-64  rounded-md " /><br />
    </div>
  )
}

