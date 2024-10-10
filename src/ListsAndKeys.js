export default function List() {
  const arr = ["HTML", "CSS", "JS", "REACT", "CPP", "CSHARP"];
  let liWithoutKeys = arr.map((e) => {
    return <li>{e}</li>;
  });
  return (
    <>
      <h4>Here is Your List Without Keys: </h4>
      <ul>{liWithoutKeys}</ul>
    </>
  );
}

export function List2() {
  const emp = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mahmoud" },
  ];
  let liWithKeys = emp.map((e) => {
    return <li key={e.id}>{e.name}</li>;
  });
  return (
    <>
      <h4>Here is Your List With Keys</h4>
      <ul>{liWithKeys}</ul>
    </>
  );
}
