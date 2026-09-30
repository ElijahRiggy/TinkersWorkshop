import clsx from "clsx";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 32 32"
      {...props}
      className={clsx("h-4 w-4", props.className)}
    >
      <defs>
        <linearGradient id="tb-logo-amber" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f4c97e" />
          <stop offset="55%" stopColor="#e8a745" />
          <stop offset="100%" stopColor="#c9822a" />
        </linearGradient>
      </defs>
      <path
        d="M16 2c2 5 2 5 7 7-5 2-5 2-7 7-2-5-2-5-7-7 5-2 5-2 7-7z"
        fill="url(#tb-logo-amber)"
      />
      <circle cx="16" cy="24" r="5" fill="url(#tb-logo-amber)" opacity="0.9" />
    </svg>
  );
}
