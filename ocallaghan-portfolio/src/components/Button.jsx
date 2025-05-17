export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseClasses =
    "py-3 px-6 rounded-md font-medium transition-all duration-300 inline-block";

  const variantClasses = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-500/10",
    ghost: "text-orange-500 hover:underline",
  };
  const SocialIcon = ({ href, children }) => (
    <a
      href={href}
      className="social-icon text-slate-400 hover:text-orange-400 transition-all duration-300 hover:-translate-y-1"
    >
      {children}
    </a>
  );

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </a>
  );
}
