// components/BackgroundGlow.jsx
export default function BackgroundGlow() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
    />
  );
}
