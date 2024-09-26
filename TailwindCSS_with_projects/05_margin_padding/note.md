### what is rem ?
rem stands for "root em," a CSS unit relative to the root element's font size. If the root (<html>) font size is 16px, 1rem equals 16px.
<br>
## what is m-10 means
In Tailwind CSS, m-10 means applying a margin of 2.5rem (or 40px), as Tailwind's spacing scale is based on rem units.
<br>

### if rem is unit then why it is not using m-2.5 rem like that instead of m-10 ?
Tailwind CSS simplifies spacing by using predefined values like m-10, which maps to 2.5rem (40px). This avoids manually specifying units like m-2.5rem. It's a design choice to maintain consistency and speed up development with shorthand classes.

For fractional values, Tailwind uses classes like m-2.5 (e.g., for 0.625rem).