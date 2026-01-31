"use client";

export default function Page() {
  function testFunct() {
    throw new Error("Coś się wysypało na kliku");
  }

  return (
    <div>
      <button onClick={testFunct}>testueje pp swojemu</button>
    </div>
  );
}
