'use client';

type Props = {
  tag: string;
  action: (tag: string) => void;
};

export const Button = ({ tag, action }: Props) => (
  <button
    className="border rounded-lg border-gray-300"
    onClick={() => action(tag)}
    key={tag}
  >
    {tag}
  </button>
);
