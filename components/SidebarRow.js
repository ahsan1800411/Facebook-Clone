import Image from "next/image";
export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className='flex items-center cursor-pointer space-x-2 p-2 rounded-xl hover:bg-gray-200'>
      {src && (
        <Image
          src={src}
          className='rounded-full'
          width={30}
          height={30}
          layout='fixed'
        />
      )}
      {Icon && <Icon className='w-8 h-8 text-blue-500' />}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  );
}
