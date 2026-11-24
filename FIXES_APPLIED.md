# Kuki's Saloon – Fixes Applied

## Reception Desk blank-screen fix

- Added `salonConfig` to the `useQueue()` values read by `ReceptionDashboard` in `client/src/pages/ReceptionPage.jsx`.
- The reception header already referenced `salonConfig?.salonNameEn`, but the variable was not declared in that component. Once the staff PIN gate allowed the dashboard to render, this caused a JavaScript `ReferenceError` and the reception route could appear blank.

## Runtime error fallback

- Added `AppErrorBoundary` and mounted it around the route tree.
- If a future React render-time exception occurs, the application now shows a branded recovery screen with Reload and Home actions instead of an entirely blank page.
- The boundary logs the original exception to the browser console for diagnosis.

## Preserved

- Existing Kuki's Saloon branding, pastel styling, page layouts, route names, backend API paths, database models, and queue workflow were not intentionally redesigned.
- No database data or credentials were included or modified.

## Validation notes

- Reviewed the reception route, staff PIN gate, queue context, API client, and backend route wiring.
- JavaScript syntax checks were run on backend source files.
- A full Vite production build could not be run in this environment because dependency installation did not complete. Run `npm run build` from the `client` directory after installing dependencies on your Mac to complete that check.

## Local verification

From the project root:

```bash
npm run install:all
npm run dev
```

Then open `http://localhost:5173/reception`, enter the configured staff PIN, and confirm that the reception dashboard loads.
