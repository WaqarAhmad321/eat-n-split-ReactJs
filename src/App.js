import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <FriendsList />
      <FormSplitBill />
    </div>
  );
}


function Button({ children, onClick }) {
  return <button onClick={onClick} className="button">{children}</button>;
}


function FriendsList() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="sidebar">
      {initialFriends.map((friend) => (
        <Friend
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          key={friend.id}
        />
      ))}
      {showAddFriend && <FormAddFriend />}
      <Button onClick={handleAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>

      {/* <Button>Close</Button> */}
    </div>
  );
}


function Friend({ name, image, balance, key }) {
  return (
    <ul>
      <li key={key}>
        <img src={image} alt="img" />
        <h3>{name}</h3>
        <p className={balance < 0 ? "red" : balance === 0 ? null : "green"}>
          {balance < 0
            ? `You owe ${name} ${Math.abs(balance)}`
            : balance === 0
            ? `You and ${name} are even`
            : `${name} owes you ${balance}$`}
        </p>
        <Button>Select</Button>
      </li>
    </ul>
  );
}


function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑Friend Name</label>
      <input type="text" />
      <label>🔗Image URL</label>
      <input type="url" />
      <Button>Add</Button>
    </form>
  );
}


function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with clark</h2>
      <label>💰Bill value</label>
      <input type="text" />
      <label>💵Your Expense</label>
      <input type="text" />
      <label>🧑Clark's Expense:</label>
      <input type="text" disabled />
      <label>🤑Who is paying the bill?:</label>
      <select>
        <option value="">You</option>
        <option value="">Anthony</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
