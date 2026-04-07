interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
}

export function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="text-center group">
      <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-2xl">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-4xl text-gray-500">{name[0]}</span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-[var(--color-primary)] text-sm font-medium">{role}</p>
      {bio && <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">{bio}</p>}
    </div>
  );
}

export default TeamMember;
