import Header from "@/app/components/Header";
import LikeButton from "@/app/components/LikeButton";
import Link from "next/link";

const HomePage = async () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title="Develop. Preview. Ship."/>
      <Link href="/cookie">Cookie</Link>
      
      <ul>
        {names.map((name) => (
          <>
            <li key={name}>{name}</li>
            <LikeButton />
          </>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
