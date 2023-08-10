export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex py-5 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-2xl text-gray-400">{title}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
}
