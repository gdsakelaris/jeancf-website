import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export default function TeamMember({ name, title, bio, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square relative bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-red-600 font-semibold mb-4">{title}</p>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bio}</p>
      </div>
    </div>
  );
}
