"use client";

type FilterErrorProps = {
  error: { message: string };
};

export default function FilterError({ error }: FilterErrorProps) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
