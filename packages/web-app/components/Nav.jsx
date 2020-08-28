import React from "react";
import Link from "next/link";

export const Nav = () => {
  const cases = [
    "nestedvariables/fr",
    "nestedvariables/en",
    "nestedvariables/fr/foo",
    "nestedvariables/en/foo",
    "nestedvariables/en/bar/baz",
    "nestedvariables/fr/baz/bar",
  ];
  return (
    <ul style={{ fontSize: "18px", lineHeight: "48px" }}>
      {cases.map((c, idx) => {
        return (
          <li key={`${c}-${idx}`}>
            <a href={`/${c}`}>{c} direct</a> |{" "}
            <Link href={`/${c}`}>
              <a href={`/${c}`}>{c} Link</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
