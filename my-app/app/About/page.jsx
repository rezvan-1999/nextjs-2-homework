import style from "./about.module.css";

export default function page() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h3>"About us"</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat
          maxime porro labore fugit sequi, soluta illo earum eius doloremque
          voluptatibus reprehenderit tenetur, sint, ipsa corrupti omnis
          voluptatum iure voluptate.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt earum
          qui, eos sed dolor sequi quibusdam a tempore laborum esse, dolorum
          excepturi. Culpa consectetur quas quo totam hic perferendis? Accusamus
          nulla perferendis vero eaque vel quaerat et asperiores iste at.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          dicta hic soluta? Laudantium, eaque quia? Vero ipsam tempora unde
          excepturi!
        </p>
      </div>
    </div>
  );
}
