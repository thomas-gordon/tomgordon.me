/**
 *
 * LinkList
 *
 */
import data from "../../data/global.json";
import ListItem from "../ListItem";
import Ul from "./Ul";

const LinkList = () => {
  return (
    <Ul>
      {data.links.map((link) => (
        <ListItem key={link.id} {...link} />
      ))}
    </Ul>
  );
};

export default LinkList;
