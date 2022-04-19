import React, { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CAREGORIES } from "../../graphql-requests";

import CustomNavLink from "../../components/nav-link";

const Nav = () => {
  const [category, setCategory] = useState("");
  const { loading, error, data } = useQuery(GET_CAREGORIES);

  useEffect(() => {
    if (!loading && !error && data) {
      const { categories } = data;
      setCategory(categories);
    }
  }, [data]);

  return (
    <nav className="nav">
      {category &&
        category.map(({ name }) => (
          <CustomNavLink
            key={name}
            title={`${name.toUpperCase()}`}
            path={`/category/${name}`}
          />
        ))}
    </nav>
  );
};

export default Nav;
