export default function Home({ dogs }) {
  console.log(dogs);
  return (
    <>
      <ul>
        {dogs.map(dog => (
          <li key={dog.id}>
            <h1>{dog.name}</h1>
            <h3>{dog.age}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/dogs');
  const data = await res.json();


  return { props: { dogs: data } }
}

