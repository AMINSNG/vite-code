import { Button, Input } from "antd";
import { useEffect, useMemo, useState } from "react";
import sampleCharacterImage from "../../assets/IMG_9074.PNG";
import "./CharacterSearch.css";
import { getCharacter } from "../../api";
import { Dropdown, Space } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const items = [
  {
    label: <span>MALE</span>,
    key: "Male",
  },
  {
    label: <span>FEMALE</span>,
    key: "Female",
  },
];

const CharacterSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [Characters, SetCharecters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("MALE");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fethapi_handler().finally(() => {
      setisLoading(false);
    });
  }, []);

  const headline = useMemo(() => {
    if (!activeQuery) return "Rick Sanchez";
    return activeQuery.replace(/\b\w/g, (match) => match.toUpperCase());
  }, [activeQuery]);

  const handleSearch = () => {
    setActiveQuery(searchTerm.trim());
  };

  const handleClear = () => {
    setSearchTerm("");
    setActiveQuery("");
  };

  const fethapi_handler = async () => {
    const { data } = await getCharacter();
    SetCharecters(data.results);
  };

  if (isLoading) {
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;
  }

  return (
    <div className="character-search">
      <div className="character-search__controls">
        <Input
          aria-label="Character name"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search a character by name"
          value={searchTerm}
        />
        <div className="character-search__actions">
          <Dropdown
            menu={{
              items,
              onClick: (e) => {
                setSelectedFilter(e.key);
              },
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>Hover me</Space>
            </a>
          </Dropdown>
          <Button
            type="primary"
            onClick={handleSearch}
            disabled={!searchTerm.trim()}
          >
            Search
          </Button>
          <Button onClick={handleClear} disabled={!searchTerm && !activeQuery}>
            Clear
          </Button>
        </div>
      </div>

      {Characters.filter(
        (user) =>
          user.gender.toLowerCase() === selectedFilter.toLowerCase() &&
          user.name.includes(activeQuery)
      ).map((user) => (
        <article className="character-search__card" aria-live="polite">
          <img
            alt="Illustration of Rick Sanchez from Rick and Morty"
            className="character-search__image"
            src={user.image}
          />
          <div className="character-search__details">
            <h3 className="character-search__name">{user.name}</h3>
            <ul className="character-search__meta" role="list">
              <li>{user.status}</li>
              <li>{user.species}</li>
              <li>{user.gender}</li>
            </ul>
            <p className="character-search__description">
              This is a static character preview. Replace it with real data by
              wiring the search controls to an API such as the Rick and Morty
              GraphQL endpoint.
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CharacterSearch;
