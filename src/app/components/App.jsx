import { useEffect, useState } from "react";
import { initialTabs as tabs } from "./Header/allingredients";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "./action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedIn,
  faSnapchat,
  faPinterest,
  faTumblr,
  faReddit,
  faVimeo,
  faFlickr,
  faGooglePlus,
  faSkype,
  faTelegram,
  faSlack,
  faDiscord,
  faTwitch,
  faSoundCloud,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const [iconId, setIcon] = useState("1");
  const { data, error, status } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getIcon({ iconId }));
  }, [iconId]);

  const dispatch = useDispatch();

  const handleSetSelectTab = (item, index) => {
    setSelectedTab(item);
    setIcon(index + 1);
  };



  const iconMapping = {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedIn,
    faSnapchat,
    faPinterest,
    faTumblr,
    faReddit,
    faVimeo,
    faFlickr,
    faGooglePlus,
    faSkype,
    faTelegram,
    faSlack,
    faDiscord,
    faTwitch,
    faSoundCloud,
    faSpotify,
  };

  console.log(tabs.length);

  return (
    <div className="window">
      {/* <button onClick={handleClick}>Don't Click</button> */}
      <nav>
        <ul>
          {tabs.map((item, index) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => handleSetSelectTab(item, index)}
            >
              {/* {`${item.icon} ${item.label}`} */}

              <FontAwesomeIcon
                icon={iconMapping[item.icon]}
                style={{
                  color: "green",
                  fontSize: "23px",
                  fontWeight: "bold",
                }}
              />

              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {data.item ? (
              <FontAwesomeIcon
                icon={iconMapping[data.item]}
                style={{
                  color: "pink",
                  fontSize: "200px",
                  fontWeight: "bold",
                }}
              />
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </main>
  
    </div>
  );
}
