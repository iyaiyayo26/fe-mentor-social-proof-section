import "./App.css";
import Star from "./Components/Star";

function App() {
  return (
    <div className="container  px-5 py-8 mx-auto font-League-Spartan mb-10">
      {/* isinya konten deskripsi + rating nanti pas layar ukuran sedeng kasih display flex*/}
      <section className="md:flex md:flex-row">
        {/* isi konten deskripsi */}
        <article className="desc-content my-5 md:flex-1">
          <h1 className="font-bold text-Very-Dark-Magenta text-4xl text-center mx-10 md:text-left md:-translate-x-5">10,000+ of our users love our products.</h1>
          <p className="text-Dark-Grayish-Magenta text-center mx-5 my-4 md:text-left">We only provide freat products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </article>

        {/* isi konten rating */}
        <article className="rating-content my-8 md:flex-1">
          {/* rating card-1 */}
          <div className="rating-card border border-Light-Grayish-Magenta rounded-md bg-Light-Grayish-Magenta text-center mb-3 py-2 md:flex md:flex-row md:justify-evenly">
            {/* logo bintang */}
            <Star />
            <div className="rating-desc ">
              <p className="text-Very-Dark-Magenta font-bold">Rated 5 Stars in Reviews</p>
            </div>
          </div>

          {/* rating card-2 */}
          <div className="rating-card border-Light-Grayish-Magenta rounded-md bg-Light-Grayish-Magenta text-center mb-3 py-2 md:flex md:flex-row md:justify-evenly md:ml-8">
            {/* logo bintang */}
            <Star />
            <div className="rating-desc ">
              <p className="text-Very-Dark-Magenta font-bold">Rated 5 Stars in Report Guru</p>
            </div>
          </div>

          {/* rating card-3 */}
          <div className="rating-card border-Light-Grayish-Magenta rounded-md bg-Light-Grayish-Magenta text-center mb-3 py-2 md:flex md:flex-row md:justify-evenly md:ml-14">
            {/* logo bintang */}
            <Star />
            <div className="rating-desc">
              <p className="text-Very-Dark-Magenta font-bold">Rated 5 Stars in BestTech</p>
            </div>
          </div>
        </article>
      </section>

      {/* isinya konten reviw */}
      <section className="md:flex md:space-x-5">
        {/* review card-1 */}
        <article className="review-card rounded-lg bg-Very-Dark-Magenta mt-4 px-4 py-6 ">
          {/* bagian profpict + nama + verif buyer nantinya kasih display flex*/}
          <div className="profile-section flex flex-row my-4">
            {/* img */}
            <img src=".\images\image-colton.jpg" alt="Colton" className="rounded-full w-14 h-14" />
            <div className="my-auto ml-5">
              <p className="font-semibold text-white">Colton Smith</p>
              <p className="text-Soft-Pink">Verified Buyer</p>
            </div>
          </div>
          <p className="text-white">"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
        </article>

        {/* review card-2 */}
        <article className="review-card rounded-lg bg-Very-Dark-Magenta mt-4 px-4 py-6 md:translate-y-5">
          {/* bagian profpict + nama + verif buyer nantinya kasih display flex*/}
          <div className="profile-section flex flex-row my-4">
            {/* img */}
            <img src=".\images\image-irene.jpg" alt="Irene" className="rounded-full w-14 h-14" />
            <div className="my-auto ml-5">
              <p className="font-semibold text-white">Irene Roberts</p>
              <p className="text-Soft-Pink">Verified Buyer</p>
            </div>
          </div>
          <p className="text-white">"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
        </article>

        {/* review card-3 */}
        <article className="review-card rounded-lg bg-Very-Dark-Magenta mt-4 px-4 py-6 md:translate-y-10">
          {/* bagian profpict + nama + verif buyer nantinya kasih display flex*/}
          <div className="profile-section flex flex-row my-4">
            {/* img */}
            <img src=".\images\image-anne.jpg" alt="Anne" className="rounded-full w-14 h-14" />
            <div className="my-auto ml-5">
              <p className="font-semibold text-white">Anne Wallace</p>
              <p className="text-Soft-Pink">Verified Buyer</p>
            </div>
          </div>
          <p className="text-white">"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
        </article>
      </section>
    </div>
  );
}

export default App;
