const userData = [
  { id: "1", icon: "🍅", label: "Tomato" },
  { id: "2", icon: "🥬", label: "Lettuce" },
  { id: "3", icon: "🧀", label: "Cheese" },
  { id: "4", icon: "🥕", label: "Carrot" },
  { id: "5", icon: "🍌", label: "Banana" },
  { id: "6", icon: "🫐", label: "Blueberries" },
  { id: "7", icon: "🥂", label: "Champers?" },
];

const root = {
  users: () => userData,
  user: ({ id }) => userData.find((item) => item.id === id),
};

export default root;
