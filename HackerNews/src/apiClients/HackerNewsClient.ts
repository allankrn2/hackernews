const baseUrl = "https://hacker-news.firebaseio.com/v0/";

async function callHackerNews<T>(path: string) {
  const response = await fetch(`${baseUrl}${path}`);
  return (await response.json()) as T;
}

export const HackerNewsClient = {
  getTopStories: () => callHackerNews<number[]>("topstories.json"),
  getStory: (storyId: number) => callHackerNews<Story>(`item/${storyId}.json`),
  getUser: (username: string) => callHackerNews<User>(`user/${username}.json`),
};

export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  url: string;
};

export type User = {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
};
