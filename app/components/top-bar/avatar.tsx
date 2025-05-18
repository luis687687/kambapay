
// components/Avatar.js

interface IAvatar {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}
export function Avatar({ src, alt, size = 'md' } : IAvatar) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10'
  };

  return (
    <div className={`inline-block rounded-full overflow-hidden ${sizeClasses[size]} bg-gray-100`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-blue-500 flex items-center justify-center text-white font-medium">
          {alt?.charAt(0)?.toUpperCase()}
        </div>
      )}
    </div>
  );
}