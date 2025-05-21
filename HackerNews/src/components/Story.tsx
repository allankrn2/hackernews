import { A } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import { Story as StoryProps } from "~/apiClients/HackerNewsClient";
import { UserDetails } from "./UserDetails";

export function Story(props: StoryProps) {
  const [showMore, setShowMore] = createSignal(false);

  return (
    <div>
      <div
        onClick={() => setShowMore((prev) => !prev)}
        class="flex justify-between py-2 border-b-2 cursor-pointer"
      >
        <h6>{props.id}</h6>
        <i>{props.score}</i>
      </div>
      <Show when={showMore()}>
        <div class="flex justify-between">
          <h4>{props.title}</h4>
          <A class="text-blue-400 border-b-1" href={props.url}>
            Go to Story
          </A>
        </div>
        <div class="flex">
          <UserDetails username={props.by} />
        </div>
      </Show>
    </div>
  );
}
