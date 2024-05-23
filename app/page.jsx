import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Ai-App is an open-source Ai prompting tool for modren world to discover, create and share creatives prompts
      </p>
      <Feed />
    </section>
  )
}

export default Home