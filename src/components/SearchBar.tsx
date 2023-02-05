import styles from "@styles/modules/Searchbar.module.scss";
import { Icon } from "@iconify-icon/react";
import { FormEvent, useRef } from "react";
import Button from "./Button";
import Input from "@/components/Input";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("")

  function handleSearchOnChange(e: React.ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    setQuery(() => value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const googleUrl = "https://www.google.com/search?q=";
    const searchUrl = `${googleUrl}${query}`;

    setQuery("");

    window.open(searchUrl, "_self");
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={styles["search-bar-wrapper"]}
    >
      <Input
        onChange={handleSearchOnChange}
        id="search"
        name="search"
        icon="material-symbols:search"
        placeholder="Search the web..."
        value={query}
        button={
          <Button
            style={{ order: 2 }}
            type="submit"
            icon="material-symbols:search"
          />
        }
      >
        <div className={styles["google-icon"]}>
          <Icon icon="bxl:google" />
        </div>
      </Input>
    </form>
  );
}

export default SearchBar;
