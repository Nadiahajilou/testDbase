import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const postHandler = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <h1>connecting database to nextjs project</h1>
      <div>
        <input
          placeholder="enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="enter email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={postHandler}>post</button>
      </div>
    </>
  );
}
