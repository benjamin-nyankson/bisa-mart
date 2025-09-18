export function AuthHeader({ text }: { text: string }) {
  return (
    <div className="flex items-center flex-col">
      <h2 className="text-primary font-black text-xl">{text}</h2>
      <hr className="w-10 border-t-3 border-primary mt-1" />
    </div>
  );
}
