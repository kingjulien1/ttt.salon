/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function Landing() {
  return (
    <main class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`mt-24 text(8xl rose-600 center) font(bold)`}>ttt.salon</h1>
    </main>
  );
}
