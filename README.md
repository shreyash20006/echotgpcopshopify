# Echo Merch (Shopify theme)

Complete Online Store 2.0 theme for the Echo.TGPCOP merch drop. The folders `layout`, `sections`, `templates`,
`config`, `locales`, `snippets` and `assets` are at the ROOT of this repo, which is what Shopify needs.

## Connect with GitHub
1. Put ALL files of this folder in the ROOT of your repo (`echotgpcopshopify`, branch `main`). Not inside a sub-folder.
2. Shopify -> Online Store -> Themes -> Add theme -> Connect from GitHub -> pick the repo and `main`.
Or without GitHub: zip this folder's contents and use Add theme -> Upload zip file.

## After it is connected
1. **Collections** (Products -> Collections). Create these handles:
   - By edition: `council-edition`, `nss-edition`, `media-team`, `students`
   - By category: `hoodies`, `t-shirts`, `sweatshirts`, `accessories`
   (Tip: make them "Automated" using Product type or Product tag.)
2. **Products**: set Type to the edition name (e.g. "NSS Edition"), add variants S, M, L, XL, XXL.
   Tags: `personalised` (shows the required "Name to print" box), `bestseller`, `new` (shows a badge).
   Inventory: tick "Continue selling when out of stock" so it behaves as a pre-order.
3. **Menus** (Content -> Menus): `main-menu` (header) and `footer`.
4. **Customize** the theme: Drop status section -> set closing date, target pieces (MOQ) and "Pieces ordered so far"
   (update it from your orders). Theme settings -> upload logos / change colours if needed.
5. **Payments**: Settings -> Payments (India needs a third-party gateway such as Cashfree or Razorpay).
6. **Subdomain**: Settings -> Domains -> connect `shop.echotgpcopmedia.site`, then add DNS CNAME `shop` -> `shops.myshopify.com`.

Name-to-print is saved as a line-item property and appears in the cart, order and emails.
