import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="heroSection mt-3 ">
        <div className="imageWrapper">
          <div className="bg-Text"> PinoyCoder</div>
          <Image
            src="/portfolio.png"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="portfolio"
          />
        </div>
      </section>
      <section id="about">
        <div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
            voluptatibus reiciendis eveniet tenetur cupiditate repellat? Ipsam
            labore aut beatae, impedit nihil minima dolor enim pariatur. Facere
            illum ab sunt est, ipsam inventore maxime nulla exercitationem
            laudantium delectus assumenda omnis obcaecati perspiciatis vel
            accusantium quod itaque earum? Sed magnam iure dolorem ipsa neque
            laborum quisquam dolor esse! Quisquam ullam reprehenderit alias
            aliquam nisi dolore fugit a aut harum eum quo nulla eligendi labore
            laboriosam blanditiis dignissimos cum hic maxime ipsam est placeat
            vero, natus laudantium? Ipsum excepturi est velit culpa quidem sed,
            totam, impedit maxime debitis qui perferendis et deserunt commodi
            voluptatem. Iusto molestias repellat aut maiores, maxime, rem,
            aspernatur laborum harum vero architecto tenetur similique eveniet
            atque facilis doloremque sit asperiores tempore ratione consequuntur
            nostrum expedita! Beatae animi commodi repudiandae, iure magnam
            reprehenderit. Rerum ea ratione, voluptatum laborum in debitis
            voluptas fugit dicta, eligendi sit veniam? Saepe, totam laboriosam
            molestiae, repellat cumque soluta, natus eveniet quisquam incidunt
            nam iusto cum commodi. Incidunt laboriosam laudantium neque,
            voluptates quasi repellat in enim consequuntur beatae fugit
            reiciendis nemo voluptas iusto ipsum, et temporibus nisi unde est
            corporis nulla officiis? Voluptas aut aliquid, sapiente accusantium
            saepe hic dolor! Enim, mollitia? Quasi quibusdam quo quas ipsum
            quisquam nisi veniam excepturi, temporibus minima, ut aliquam, natus
            numquam. Quaerat iste quos repellat soluta reiciendis explicabo nam?
          </h1>
        </div>
      </section>
    </>
  );
}
