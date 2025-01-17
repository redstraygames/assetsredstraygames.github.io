import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="w-full max-w-md p-6 text-center space-y-6" style={{ marginTop: '-10%' }}>
        {/* Title */}
        <h1 className="text-3xl font-bold">Support</h1>

        {/* General Information */}
        <section>
          <p className="text-base">
            Thank you for supporting our Unity assets! If you have any questions, feedback, or need assistance, feel free to reach out.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="text-base">
            Email: <a href="mailto:redstrayassets@gmail.com" className="text-blue-600 underline">redstrayassets@gmail.com</a>
          </p>
        </section>

        {/* Discord Section */}
        <section>
          <h2 className="text-lg font-bold">Join Our Community</h2>
          <p className="text-base">
            Connect with other developers and get real-time support by joining our Discord server.
          </p>
          <a
            href="https://discord.gg/aprBvZDCJy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="mr-2 fill-white hover:fill-blue-300 transition duration-200"
            >
              <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
            </svg>
            Join Our Discord
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
