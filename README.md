# Echo.TGPCOP Shopify pack (Dawn theme)

## 1. Theme + colours
Online Store -> Themes -> Add theme -> Dawn (free). Customize -> Theme settings -> Colors -> Scheme 1:
Background #004BFE, Text #FFFFFF, Button #FFD60A, Button label #004BFE, Outline #FFFFFF.
Dark ink for shadows/cards: #08145A.

## 2. Upload the pack (Online Store -> Themes -> ... -> Edit code)
- assets/echo-custom.css  -> Assets -> Add a new asset
- snippets/echo-name-field.liquid -> Snippets -> Add a new snippet
- sections/echo-ticker.liquid, sections/echo-collab.liquid -> Sections -> Add a new section
In layout/theme.liquid, just before </head> paste:
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  {{ 'echo-custom.css' | asset_url | stylesheet_tag }}

## 3. Name-to-print field (no app)
Open sections/main-product.liquid, find the `{%- when 'buy_buttons' -%}` block and add this line
ABOVE the render of 'buy-buttons':
  {% render 'echo-name-field', product_form_id: product_form_id %}
Test: add to cart -> the name must show under the item in cart and in the order.

## 4. Add sections in the theme editor
Home page -> Add section -> "Echo ticker" (top) and "Echo collaboration" (upload logos from /logos).

## 5. Pre-order setup
Products -> Inventory: tick "Continue selling when out of stock" (so it behaves like a pre-order). Put the
deadline + "bulk order only after the target is reached" text in the description and on a "How it works" page.
Policies: personalised items = no return/exchange.

## 6. Subdomain (shop.echotgpcopmedia.site)
Settings -> Domains -> Connect existing domain -> enter the subdomain. At the place where your domain's DNS is
managed (registrar OR Vercel if Vercel holds the DNS) add:  CNAME  shop  ->  shops.myshopify.com
Your main site on Vercel is not affected. DNS can take up to a few hours.
