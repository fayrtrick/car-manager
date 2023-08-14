
export type AvatarUser = {
  firstName: string;
  lastName: string;
};

export type AvatarProps = {
  user: AvatarUser;
};

export function Avatar({ user }: AvatarProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-bold text-xl bg-base-100 w-14 h-14 rounded-full flex justify-center items-center border border-slate-300">
        {user.firstName.substring(0, 1)}{user.lastName.substring(0, 1)}
      </div>
      <p className="font-medium">{user.firstName} {user.lastName}</p>
    </div>
  );
}