export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Golden Movie Hub"
    >
      <rect width="48" height="48" rx="10" fill="#FFD700" />
      <rect x="9" y="21" width="30" height="17" rx="1.5" fill="#0A0A0B" />
      <path d="M8 14.5 L39.5 10.5 L41 18 L9.5 22 Z" fill="#0A0A0B" />
      <path d="M15.5 13.6 L19 20 L24.5 19.3 L21 12.9 Z" fill="#FFD700" />
      <path d="M27 12.1 L30.5 18.5 L36 17.8 L32.5 11.4 Z" fill="#FFD700" />
    </svg>
  );
}
