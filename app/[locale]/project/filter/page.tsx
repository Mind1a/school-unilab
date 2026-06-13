import Link from "next/link";

const Filter = () => {
  return (
    <div>
      This is Filter Page
      <Link href="/project" className="ml-12 text-xl text-blue-500">
        ⬅️ Go to Project Page
      </Link>
    </div>
  );
};

export default Filter;
