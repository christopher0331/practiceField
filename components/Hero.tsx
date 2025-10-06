type Props = { title: string; subtitle?: string; imageUrl?: string };
export default function Hero({ title, subtitle, imageUrl }: Props) {
  return (
    <section className="hero" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}>
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p style={{ color: '#334155', fontSize: 18, maxWidth: 900 }}>{subtitle}</p>}
      </div>
    </section>
  );
}
