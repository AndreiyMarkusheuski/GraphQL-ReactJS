import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CAREGORIES } from "../../helpers/graphql-requests";
import CustomNavLink from '../../components/UI/nav-link'

const Nav = () => {
  const [category, setCategory] = useState("");
  const { loading, error, data } = useQuery(GET_CAREGORIES, {
    onCompleted: () => {
      const { categories } = data;
      setCategory(categories);
    },
  });
  return (
    <nav className="nav">
      {category &&
        category.map(({ name }) => (
          <CustomNavLink key={name} title={`${name.toUpperCase()}`} path={`/category/${name}`} />
        ))}
    </nav>
  );
};

export default Nav;
