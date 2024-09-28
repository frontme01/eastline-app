import FirstLoader from "@/components/shared/first-loader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 bg-white w-screen h-screen z-[99999999999]">
      <FirstLoader />
    </div>
  );
}
