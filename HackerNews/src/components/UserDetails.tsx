import { createResource, Suspense } from "solid-js";
import { HackerNewsClient } from "~/apiClients/HackerNewsClient";

export function UserDetails(props: { username: string }) {
  const [user] = createResource(
    () => props.username,
    (username) => HackerNewsClient.getUser(username)
  );

  const created = () => {
    const ticks = user()?.created;
    if (!ticks) return undefined;

    return new Date(ticks).toLocaleString();
  };

  return (
    <div class="text-left">
      <h3>User: {props.username}</h3>
      <div>
        <Suspense fallback="Karma: ...">Karma: {user()?.karma}</Suspense>
      </div>
      <Suspense fallback={<span>created: ...</span>}>
        <span>created: {created()}</span>
      </Suspense>
    </div>
  );
}
