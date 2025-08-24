import { useLoaderData } from "react-router"

export default function Github () {
    const data = useLoaderData();

    if (!data) {
        return (
            <div className="text-center m-4 bg-red-600 text-white p-4 text-xl">
                Failed to load data.
            </div>
        );
    }

     return (
        <div className="max-w-md mx-auto m-6 bg-gray-800 text-white p-6 rounded-2xl shadow-lg text-center">
        <img
            src={data.avatar_url}
            alt={`${data.login} avatar`}
            width={150}
            height={150}
            className="mx-auto rounded-full border-4 border-white shadow-md"
        />
        <h2 className="text-2xl font-bold mt-3">{data.name || data.login}</h2>
        <p className="text-gray-300">{data.bio || "No bio available"}</p>

        <div className="mt-4 grid grid-cols-2 gap-4 text-lg">
            <div className="bg-gray-700 p-3 rounded-lg shadow">
            <p className="font-bold">{data.followers}</p>
            <p className="text-sm">Followers</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg shadow">
            <p className="font-bold">{data.following}</p>
            <p className="text-sm">Following</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg shadow">
            <p className="font-bold">{data.public_repos}</p>
            <p className="text-sm">Repositories</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg shadow">
            <p className="font-bold">{data.public_gists}</p>
            <p className="text-sm">Gists</p>
            </div>
        </div>

        <p className="mt-4 text-sm text-gray-400">
            📍 {data.location || "Unknown"}
        </p>
        <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
            View Profile
        </a>
        </div>
    );
}

export const githubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/tanvir-hossen49");

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error loading GitHub data:", error);
    return null;
  }
};