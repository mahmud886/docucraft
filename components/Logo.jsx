import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div class='hidden lg:flex'>
      <Link href='/'>
        <Image src='/assets/icons/logo.svg' className='h-6 w-auto' alt='logo' width={100} height={24} priority />
      </Link>
    </div>
  );
};

export default Logo;
