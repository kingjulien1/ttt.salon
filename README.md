# ttt.salon

network for tatoo artists to announce travel dates & residencies.

## Concept 🌟

once registered, users can create public profile pages for their artist-personas & shops by connecting their instagram. All relevant instagram-data like name, profile picture & media, as well as connected shops/artists & travel dates, aka guest spots, will make up profiles.

## Stack 🧱

- runtime [deno](https://deno.land), also utalizing its native [testing library](https://deno.land/manual/testing)
- web framework [fresh](https://fresh.deno.dev) based on [preact](https://preactjs.com) using typescript
- [tailwindcss](https://tailwindcss.com) for styling
- persisting data with
- deploy to the edge with [deno deploy](https://deno.com/deploy)

## Routes 📚

specification of functionality and contents provided by individual routes.

### landing `/`

few sections to promote & introduce the service and call to action link to sign up.

### dashboard

where users manage public pages (representing either artist or shop) by authenticating & connecting their instagram profiles to access data like name, profile picture & media.