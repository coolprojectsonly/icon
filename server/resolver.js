const userData = [
  { id: "1", icon: "faFacebook" },
  { id: "2", icon: "faTwitter" },
  { id: "3", icon: "faInstagram" },
  { id: "4", icon: "faSnapchat" },
  { id: "5", icon: "faPinterest" },
  { id: "6", icon: "faTumblr" },
  { id: "7", icon: "faReddit" },
  { id: "8", icon: "faVimeo" },
  { id: "9", icon: "faFlickr" },
  { id: "10", icon: "faGooglePlus" },
  { id: "11", icon: "faSkype" },
  { id: "12", icon: "faTelegram" },
  { id: "13", icon: "faSlack" },
  { id: "14", icon: "faDiscord" },
  { id: "15", icon: "faTwitch" },
  { id: "16", icon: "faSpotify" },
];

const root = {
  users: () => userData,
  user: ({ id }) => userData.find((item) => item.id === id),
};

export default root;
