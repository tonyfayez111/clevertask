import Image from 'next/image';
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'lg', showText = true }: LogoProps) {
  const dimensions = {
    sm: { width: 32, height: 32, text: 'text-lg' },
    md: { width: 40, height: 40, text: 'text-2xl' },
    lg: { width: 50, height: 50, text: 'text-3xl' }
  };

  const { width, height, text } = dimensions[size];

  return (
    <div className="flex items-center space-x-3">
      {/* Logomark */}
      <div 
        className="rounded-lg flex items-center justify-center relative overflow-hidden"

      >
        <Image src="/logo.jpg" alt="CleverTask" width={width} height={height} className='object-contain rounded-2xl' />
        
      </div>
      
      {/* Company name */}
      {showText && (
        <span 
          className={`${text} font-bold text-primary`}
        >
          CleverTask
        </span>
      )}
    </div>
  );
}
