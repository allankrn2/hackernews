import { A, createAsync, query } from "@solidjs/router";
import { createMemo, createResource, For, Suspense } from "solid-js";
import { HackerNewsClient } from "~/apiClients/HackerNewsClient";
import { Story } from "~/components/Story";

const getTopStories = query(async () => {
  const topStories = await HackerNewsClient.getTopStories();

  const callList = topStories
    .slice(0, 20)
    .map((storyId) => HackerNewsClient.getStory(storyId));

  const result = [];
  for (let storyCall of callList) {
    const story = await storyCall;
    result.push(story);
  }

  return result.sort((a, b) => a.score - b.score);
}, "top-stories");

export const route = {
  preload: () => getTopStories(),
};

export default function Home() {
  const [topStories] = createResource(async () => await getTopStories());

  return (
    <main class="text-center mx-auto p-6">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hacker News Top Stories
      </h1>
      <Suspense fallback="loading...">
        <For each={topStories()?.slice(0, 20)}>
          {(story) => <Story {...story} />}
        </For>
      </Suspense>
    </main>
  );
}
