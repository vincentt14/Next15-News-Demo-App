import React from "react";

type ArchiveLayoutProps = {
  archive: React.ReactNode;
  latest: React.ReactNode;
};

// parallel route = untuk nampilin 2 page dalam 1 halaman
export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  // kalau parallel route, layout ga nerima children kayak biasa, tapi nerima nama @nya
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
