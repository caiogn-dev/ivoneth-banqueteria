// src/components/core/Title.tsx

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Title({ title, subtitle, className = '' }: TitleProps) {
  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}