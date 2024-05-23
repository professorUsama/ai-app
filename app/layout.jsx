import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Ai App By Usama",
  description: "Discover and share and Ai Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout