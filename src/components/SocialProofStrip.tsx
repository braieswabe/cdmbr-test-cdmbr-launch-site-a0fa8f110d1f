type SocialProofStripProps = {
  text: string;
};

export function SocialProofStrip({ text }: SocialProofStripProps) {
  return (
    <section className="bg-slate-950 px-6 py-4 text-center text-sm text-white/85">
      <p>{text}</p>
    </section>
  );
}

export default SocialProofStrip;
